import express from 'express';
import cors from 'cors';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Use memory storage for uploads so serverless environments (Vercel) work properly
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Image detection endpoint
app.post('/api/detect', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    // Use the uploaded file buffer (memory storage)
    const imageBuffer = req.file.buffer;

    // Create form data to send to Python API
    const formData = new FormData();
    formData.append('image', imageBuffer, req.file.originalname);

    // Call Python Flask API
    const pythonApiUrl = process.env.PYTHON_API_URL || 'https://cruziable.pythonanywhere.com/api/detect';

    const response = await axios.post(pythonApiUrl, formData, {
      headers: {
        ...formData.getHeaders()
      },
      timeout: 30000 // 30 seconds timeout
    });

    res.json(response.data);

  } catch (error) {
    console.error('Detection error:', error.message);

    if (error.code === 'ECONNREFUSED') {
      return res.status(503).json({
        error: 'Python API is not available. Please ensure it is running.'
      });
    }

    res.status(500).json({
      error: 'Failed to process image',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
