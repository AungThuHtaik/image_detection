# Image Detection AI - Web Application

A full-stack web application for AI-powered image recognition using MobileNetV2 neural network. Upload any image and get instant predictions with confidence scores.

![Tech Stack](https://img.shields.io/badge/React-18.2-blue)
![Tech Stack](https://img.shields.io/badge/Express-4.18-green)
![Tech Stack](https://img.shields.io/badge/Flask-3.0-black)
![Tech Stack](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## ✨ Features

- 🖼️ **Drag & Drop Upload** - Easy image upload interface
- 🤖 **AI-Powered Detection** - MobileNetV2 neural network classification
- 📊 **Visual Results** - Clean display of top 5 predictions with confidence scores
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🚀 **Fast Performance** - Optimized for quick predictions
- 🎨 **Modern UI** - Professional design with Tailwind CSS

## 🏗️ Architecture

```
├── client/          # React frontend (Vite + Tailwind CSS)
├── server/          # Express.js backend API
├── api/             # Flask Python API for image detection
├── brain.py         # Original CLI script (legacy)
└── *.pth           # Pre-trained model files
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.8+
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd image_detection
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Install Python dependencies**
   ```bash
   cd api
   pip install -r requirements.txt
   cd ..
   ```

4. **Download the Pre-trained Model** (if not included)
   - Download `mobilenet_v2-b0353104.pth` 
   - Place it in the root directory

5. **Configure environment**
   ```bash
   cd server
   cp .env.example .env
   cd ..
   ```

### Running Locally

You need to run three services simultaneously. Open three terminal windows:

**Terminal 1 - Python API:**
```bash
cd api
python detect.py
```
Runs on: http://localhost:5000

**Terminal 2 - Express Backend:**
```bash
cd server
npm run dev
```
Runs on: http://localhost:3001

**Terminal 3 - React Frontend:**
```bash
cd client
npm run dev
```
Runs on: http://localhost:3000

### Access the Application

Open your browser and navigate to: **http://localhost:3000**

## 📖 Usage

1. **Upload Image**: Click the upload area or drag and drop an image
2. **Detect**: Click the "Detect Objects" button
3. **View Results**: See the top 5 predictions with confidence percentages

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client

### Backend
- **Express.js** - Node.js web framework
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### AI/ML
- **Flask** - Python web framework
- **ImageAI** - High-level image recognition library
- **PyTorch** - Deep learning framework
- **MobileNetV2** - Pre-trained model for classification

## 📦 Project Structure

```
image_detection/
│
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.jsx
│   │   │   ├── ImageUpload.jsx
│   │   │   └── ResultsDisplay.jsx
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                  # Express Backend
│   ├── index.js            # Server entry point
│   ├── package.json
│   └── .env.example
│
├── api/                     # Python Flask API
│   ├── detect.py           # Detection service
│   └── requirements.txt
│
├── brain.py                # Original CLI script
├── requirements.txt        # Python dependencies (legacy)
├── package.json            # Root package.json
├── vercel.json            # Vercel deployment config
├── DEPLOYMENT.md          # Deployment guide
└── README.md              # This file
```

**Architecture:**
- Frontend + Express Backend → Vercel
- Python Flask API → Railway or Render

**Steps:**

1. **Deploy Python API to Railway** (or Render):
   - Create account at railway.app
   - New Project → Deploy from GitHub
   - Root Directory: `api`
   - Upload model file
   - Get your API URL

2. **Deploy to Vercel**:
   - Push code to GitHub
   - Import project in Vercel
   - Set environment variables:
     - `PYTHON_API_URL`: Your Railway/Render API URL
   - Deploy

3. **Update CORS**:
   - Add Vercel URL to Python API CORS settings

## 🧪 Testing the Original CLI Script

The original command-line interface is still available:

```bash
python brain.py
```

Modify the script to test with different images:
```python
predictions, probabilities = prediction.classifyImage(
    os.path.join(exec_path, 'your_image.jpg'), result_count=5)
```

## 📝 API Endpoints

### Express Backend

- `GET /api/health` - Health check
- `POST /api/detect` - Upload and detect image

### Python Flask API

- `GET /` - API status
- `POST /api/detect` - Process image and return predictions

## 🔧 Configuration

### Server Environment Variables

Create `.env` in the `server/` directory:

```env
PORT=3001
PYTHON_API_URL=http://localhost:5000/api/detect
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [ImageAI](https://github.com/OlafenwaMoses/ImageAI) - Image recognition library
- [MobileNetV2](https://pytorch.org/vision/stable/models.html) - Pre-trained model
- [React](https://react.dev/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📧 Support

For issues and questions:
- Open an issue on GitHub
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help

---

**Built with using React, Express, Flask, and ImageAI**