# Deployment Guide

Complete guide for deploying the Image Detection AI application.

## Architecture Overview

The application has three components:
- **Frontend**: React + Vite + Tailwind CSS (client/)
- **Backend**: Express.js API (server/)
- **Python API**: Flask service for image detection (api/)

**Recommended Deployment:**
- Frontend + Backend → Vercel (serverless)
- Python API → Railway or Render

## Quick Deployment

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for step-by-step Vercel + Railway deployment guide.

## Deployment Options

### Option 1: Vercel + Railway (Recommended)

**Best for:** Easy deployment, free tier, automatic HTTPS

1. **Deploy Python API to Railway**
   - See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for details

2. **Deploy to Vercel**
   - Connect GitHub repository
   - Configure environment variables
   - Automatic deployments on push

### Option 2: VPS (DigitalOcean, AWS, Linode)

**Best for:** Full control, lower cost at scale

1. **Server Setup**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install Python
   sudo apt-get install python3 python3-pip python3-venv
   ```

2. **Deploy Application**
   ```bash
   git clone <your-repo>
   cd image_detection
   npm run install:all
   cd api && pip3 install -r requirements.txt && cd ..
   npm run build:client
   ```

3. **Use PM2**
   ```bash
   npm install -g pm2
   pm2 start api/detect.py --name python-api --interpreter python3
   pm2 start server/index.js --name express-server
   pm2 save
   pm2 startup
   ```

4. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           root /path/to/image_detection/client/dist;
           try_files $uri $uri/ /index.html;
       }
       
       location /api {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

### Server (.env)
```env
PORT=3001
PYTHON_API_URL=http://localhost:5000/api/detect
```

### Production (Vercel)
```env
PYTHON_API_URL=https://your-api.railway.app/api/detect
NODE_ENV=production
```

## Important Notes

1. **Model File**: Upload `mobilenet_v2-b0353104.pth` to your Python API host

2. **CORS**: Update Flask CORS to allow your Vercel domain

3. **Security**: 
   - Enable HTTPS
   - Set proper CORS origins
   - Add rate limiting

## Troubleshooting

### Python API not connecting
- Check if API is running: `curl https://your-api-url/`
- Verify PYTHON_API_URL environment variable
- Check CORS settings

### Build failures
- Clear cache and reinstall
- Check Node.js version (18+)
- Review build logs

## Support

For detailed Vercel deployment instructions, see [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
