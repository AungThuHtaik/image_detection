# API Documentation

Complete API reference for the Image Detection AI application.

## Table of Contents
- [Express Backend API](#express-backend-api)
- [Python Flask API](#python-flask-api)
- [Error Codes](#error-codes)
- [Request Examples](#request-examples)

---

## Express Backend API

**Base URL:** `http://localhost:3001`

### Endpoints

#### 1. Health Check

Check if the server is running.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

**Status Codes:**
- `200 OK` - Server is healthy

---

#### 2. Detect Objects in Image

Upload an image and receive AI predictions.

**Endpoint:** `POST /api/detect`

**Request:**
- **Content-Type:** `multipart/form-data`
- **Body:**
  - `image` (file) - Image file to analyze

**Accepted Formats:**
- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)

**Size Limit:** 10MB

**Success Response:**
```json
{
  "success": true,
  "predictions": [
    {
      "label": "golden_retriever",
      "probability": 98.75
    },
    {
      "label": "labrador_retriever",
      "probability": 0.89
    },
    {
      "label": "dog",
      "probability": 0.25
    },
    {
      "label": "puppy",
      "probability": 0.08
    },
    {
      "label": "pet",
      "probability": 0.03
    }
  ]
}
```

**Error Response:**
```json
{
  "error": "No image file provided"
}
```

**Status Codes:**
- `200 OK` - Successfully processed image
- `400 Bad Request` - No image provided or invalid format
- `500 Internal Server Error` - Processing failed
- `503 Service Unavailable` - Python API not available

---

## Python Flask API

**Base URL:** `http://localhost:5000`

### Endpoints

#### 1. API Status

Check if the Python API is running.

**Endpoint:** `GET /`

**Response:**
```json
{
  "message": "Image Detection API is running"
}
```

**Status Codes:**
- `200 OK` - API is running

---

#### 2. Classify Image

Process an image and return classification results.

**Endpoint:** `POST /api/detect`

**Request:**
- **Content-Type:** `multipart/form-data`
- **Body:**
  - `image` (file) - Image file to classify

**Success Response:**
```json
{
  "success": true,
  "predictions": [
    {
      "label": "peacock",
      "probability": 99.89
    },
    {
      "label": "macaw",
      "probability": 0.05
    },
    {
      "label": "bird",
      "probability": 0.04
    },
    {
      "label": "feather",
      "probability": 0.01
    },
    {
      "label": "animal",
      "probability": 0.01
    }
  ]
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message details"
}
```

**Status Codes:**
- `200 OK` - Successfully classified image
- `400 Bad Request` - No image or empty filename
- `500 Internal Server Error` - Classification failed

---

## Error Codes

### Express Backend Errors

| Code | Message | Cause |
|------|---------|-------|
| 400 | No image file provided | Request missing image file |
| 400 | Empty filename | File has no name |
| 400 | Only image files are allowed! | Wrong file type |
| 500 | Failed to process image | General processing error |
| 503 | Python API is not available | Cannot connect to Flask API |

### Python Flask API Errors

| Code | Message | Cause |
|------|---------|-------|
| 400 | No image file provided | Request missing image file |
| 400 | Empty filename | File has no name |
| 500 | Error message details | Classification failed |

---

## Request Examples

### Using cURL

#### Health Check
```bash
curl http://localhost:3001/api/health
```

#### Detect Objects
```bash
curl -X POST \
  http://localhost:3001/api/detect \
  -F "image=@/path/to/your/image.jpg"
```

### Using JavaScript (Fetch API)

```javascript
const formData = new FormData();
formData.append('image', fileInput.files[0]);

fetch('http://localhost:3001/api/detect', {
  method: 'POST',
  body: formData
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Using JavaScript (Axios)

```javascript
import axios from 'axios';

const formData = new FormData();
formData.append('image', fileInput.files[0]);

axios.post('/api/detect', formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
  .then(response => {
    console.log('Predictions:', response.data.predictions);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });
```

### Using Python (Requests)

```python
import requests

url = 'http://localhost:3001/api/detect'
files = {'image': open('image.jpg', 'rb')}

response = requests.post(url, files=files)
data = response.json()

if data['success']:
    for pred in data['predictions']:
        print(f"{pred['label']}: {pred['probability']}%")
else:
    print(f"Error: {data['error']}")
```

### Using Postman

1. **Set Method:** POST
2. **URL:** `http://localhost:3001/api/detect`
3. **Headers:** (auto-generated)
4. **Body:**
   - Select "form-data"
   - Key: `image` (type: File)
   - Value: Select your image file
5. **Send**

---

## Response Data Types

### Prediction Object

```typescript
interface Prediction {
  label: string;        // Object classification label
  probability: number;  // Confidence score (0-100)
}
```

### Success Response

```typescript
interface SuccessResponse {
  success: true;
  predictions: Prediction[];  // Array of 5 predictions
}
```

### Error Response

```typescript
interface ErrorResponse {
  success?: false;
  error: string;     // Error message
  details?: string;  // Additional details (optional)
}
```

---

## Rate Limiting

Currently, no rate limiting is implemented. For production deployment, consider:

- Adding rate limiting middleware (e.g., express-rate-limit)
- Setting per-IP limits
- Implementing authentication
- Adding request quotas

---

## CORS Configuration

### Current Settings

The Express backend allows all origins in development:

```javascript
app.use(cors());
```

### Production Recommendation

```javascript
app.use(cors({
  origin: 'https://your-domain.com',
  credentials: true,
  optionsSuccessStatus: 200
}));
```

---

## Best Practices

### Client-Side

1. **Validate file before upload:**
   ```javascript
   if (file.size > 10 * 1024 * 1024) {
     alert('File too large (max 10MB)');
     return;
   }
   
   if (!file.type.startsWith('image/')) {
     alert('Please select an image file');
     return;
   }
   ```

2. **Handle errors gracefully:**
   ```javascript
   try {
     const response = await axios.post('/api/detect', formData);
     // Handle success
   } catch (error) {
     if (error.response) {
       // Server responded with error
       alert(error.response.data.error);
     } else {
       // Network error
       alert('Network error. Please try again.');
     }
   }
   ```

3. **Show loading states:**
   ```javascript
   setLoading(true);
   try {
     const response = await axios.post('/api/detect', formData);
     setPredictions(response.data.predictions);
   } finally {
     setLoading(false);
   }
   ```

### Server-Side

1. **Always validate uploads**
2. **Set appropriate timeouts**
3. **Clean up temporary files**
4. **Log errors for debugging**
5. **Return consistent error formats**

---

## Testing the API

### Manual Testing

```bash
# Test health endpoint
curl http://localhost:3001/api/health

# Test detection with sample image
curl -X POST \
  http://localhost:3001/api/detect \
  -F "image=@peacock.jpg"
```

### Automated Testing (Example)

```javascript
// test/api.test.js
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

describe('API Tests', () => {
  test('Health check returns OK', async () => {
    const response = await axios.get('http://localhost:3001/api/health');
    expect(response.status).toBe(200);
    expect(response.data.status).toBe('ok');
  });

  test('Image detection works', async () => {
    const form = new FormData();
    form.append('image', fs.createReadStream('test-image.jpg'));
    
    const response = await axios.post(
      'http://localhost:3001/api/detect',
      form,
      { headers: form.getHeaders() }
    );
    
    expect(response.status).toBe(200);
    expect(response.data.success).toBe(true);
    expect(response.data.predictions).toHaveLength(5);
  });
});
```

---

## Versioning

Current API Version: **1.0.0**

Future versions will maintain backward compatibility or use versioned endpoints:
- `/api/v1/detect`
- `/api/v2/detect`

---

## Support

For API issues or questions:
- Check [SETUP_GUIDE.md](SETUP_GUIDE.md) for setup help
- Open an issue on GitHub

---

**Last Updated:** 2026-07-05
**API Version:** 1.0.0
