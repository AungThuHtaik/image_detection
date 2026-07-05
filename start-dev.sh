#!/bin/bash

echo "========================================"
echo " Image Detection AI - Development Mode"
echo "========================================"
echo ""
echo "Starting all services..."
echo ""
echo "This will start 3 processes:"
echo "  1. Python Flask API (Port 5000)"
echo "  2. Express Backend (Port 3001)"
echo "  3. React Frontend (Port 3000)"
echo ""
echo "Press Ctrl+C to stop all services"
echo "========================================"
echo ""

# Function to cleanup background processes on exit
cleanup() {
    echo ""
    echo "Stopping all services..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Set trap to cleanup on exit
trap cleanup EXIT INT TERM

# Start Python API
echo "Starting Python API..."
cd api && python detect.py &
PYTHON_PID=$!
cd ..

# Wait a bit for Python to start
sleep 2

# Start Express Backend
echo "Starting Express Backend..."
cd server && npm run dev &
SERVER_PID=$!
cd ..

# Wait a bit for server to start
sleep 2

# Start React Frontend
echo "Starting React Frontend..."
cd client && npm run dev &
CLIENT_PID=$!
cd ..

echo ""
echo "========================================"
echo "All services are running!"
echo ""
echo "Access the application at:"
echo "  http://localhost:3000"
echo ""
echo "Python API: http://localhost:5000"
echo "Express API: http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop all services"
echo "========================================"

# Wait for all background processes
wait
