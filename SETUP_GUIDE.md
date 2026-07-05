# Complete Setup Guide

This guide will walk you through setting up the Image Detection AI application from scratch.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Application](#running-the-application)
5. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Software

#### Node.js and npm
- **Version**: Node.js 18+ and npm 9+
- **Download**: https://nodejs.org/
- **Verify installation**:
  ```bash
  node --version
  npm --version
  ```

#### Python
- **Version**: Python 3.8 or newer
- **Download**: https://www.python.org/downloads/
- **Verify installation**:
  ```bash
  python --version
  # or
  python3 --version
  ```

#### Git
- **Download**: https://git-scm.com/downloads
- **Verify installation**:
  ```bash
  git --version
  ```

### System Requirements
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 2GB free
- **OS**: Windows 10+, macOS 10.15+, or Linux

## Installation

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd image_detection
```

### Step 2: Install Node.js Dependencies

Install all npm packages for both client and server:

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
cd ..
```

**Or use the convenient command:**
```bash
npm run install:all
```

### Step 3: Install Python Dependencies

#### Option A: Using Virtual Environment (Recommended)

**Windows:**
```bash
cd api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

**macOS/Linux:**
```bash
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..
```

#### Option B: Global Installation
```bash
cd api
pip install -r requirements.txt
cd ..
```

### Step 4: Download Pre-trained Model

The MobileNetV2 model file (`mobilenet_v2-b0353104.pth`) should already be in the root directory. If not:

1. Download from PyTorch hub or ImageAI releases
2. Place the `.pth` file in the root directory of the project
3. Verify the file is approximately 14MB

## Configuration

### Server Configuration

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

3. Edit `.env` with your preferred settings:
   ```env
   PORT=3001
   PYTHON_API_URL=http://localhost:5000/api/detect
   ```

### Client Configuration (Optional)

The client is pre-configured to proxy API requests to the server. If you need to change the backend URL, edit `client/vite.config.js`.

## Running the Application

### Option 1: Using Start Scripts (Easiest)

**Windows:**
```bash
# Double-click start-dev.bat
# Or run from command line:
start-dev.bat
```

**macOS/Linux:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

### Option 2: Manual Start (Three Terminals)

Open three separate terminal windows:

**Terminal 1 - Python Flask API:**
```bash
cd api
python detect.py
```
Should see: `* Running on http://127.0.0.1:5000`

**Terminal 2 - Express Backend:**
```bash
cd server
npm run dev
```
Should see: `Server is running on port 3001`

**Terminal 3 - React Frontend:**
```bash
cd client
npm run dev
```
Should see: `Local: http://localhost:3000`

### Option 3: Using Docker

If you have Docker installed:

```bash
docker-compose up
```

Access the application at http://localhost

## Accessing the Application

Once all services are running:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Python API**: http://localhost:5000

Open your browser and go to **http://localhost:3000**

## Troubleshooting

### Common Issues

#### Issue: "Module not found" errors

**Solution:**
```bash
# Reinstall all dependencies
rm -rf node_modules client/node_modules server/node_modules
npm run install:all
```

#### Issue: Python API not starting

**Symptoms:** Error about missing modules or model file

**Solutions:**
1. Verify Python dependencies:
   ```bash
   cd api
   pip install -r requirements.txt
   ```

2. Check model file exists:
   ```bash
   ls ../mobilenet_v2-b0353104.pth
   ```

3. Verify Python version:
   ```bash
   python --version  # Should be 3.8+
   ```

#### Issue: Port already in use

**Symptoms:** "EADDRINUSE" or "Port already in use"

**Solution:**

**Windows:**
```bash
# Find process using port 3000, 3001, or 5000
netstat -ano | findstr :3000
# Kill the process (replace PID)
taskkill /PID <PID> /F
```

**macOS/Linux:**
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

#### Issue: CORS errors

**Symptoms:** Browser console shows CORS policy errors

**Solution:**
1. Ensure all three services are running
2. Check that PYTHON_API_URL in server/.env is correct
3. Restart the Express server

#### Issue: Image upload fails

**Symptoms:** Error when trying to detect image

**Solutions:**
1. Check file size (must be under 10MB)
2. Verify file format (JPG, PNG, GIF, WebP)
3. Check server logs for detailed error
4. Ensure Python API is running

#### Issue: Build errors in client

**Symptoms:** Vite build fails

**Solution:**
```bash
cd client
rm -rf node_modules dist
npm install
npm run build
```

#### Issue: Permission denied (macOS/Linux)

**Solution:**
```bash
chmod +x start-dev.sh
# Or for Python:
chmod +x api/detect.py
```

### Getting Help

If you encounter issues not covered here:

1. **Check logs**: Look at terminal output for error messages
2. **Verify versions**: Ensure Node.js and Python meet minimum requirements
3. **Clean install**: Delete all node_modules and reinstall
4. **GitHub Issues**: Open an issue with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version, Python version)

## Next Steps

Once everything is running:

1. **Test the application**: Upload a sample image
2. **Read the documentation**: Check README.md for features
3. **Deploy**: See DEPLOYMENT.md for deployment options
4. **Contribute**: See CONTRIBUTING.md for contribution guidelines

## Quick Reference

### Essential Commands

```bash
# Install all dependencies
npm run install:all

# Development mode
npm run dev:client    # Start React frontend
npm run dev:server    # Start Express backend
npm run dev:python    # Start Python API

# Build for production
npm run build:client

# Production mode
npm start
```

### File Structure Reference

```
image_detection/
├── client/          # React frontend
├── server/          # Express backend
├── api/             # Flask Python API
├── *.pth           # Model files
├── start-dev.bat   # Windows start script
├── start-dev.sh    # Unix start script
```

## Support

For additional help:
- Read the [README.md](README.md)

Happy coding! 
