@echo off
echo ========================================
echo  Image Detection AI - Development Mode
echo ========================================
echo.
echo Starting all services...
echo.
echo This will open 3 command windows:
echo   1. Python Flask API (Port 5000)
echo   2. Express Backend (Port 3001)
echo   3. React Frontend (Port 3000)
echo.
echo Press Ctrl+C in each window to stop services
echo ========================================
echo.

:: Start Python API
start "Python API" cmd /k "cd api && python detect.py"
timeout /t 2 /nobreak >nul

:: Start Express Backend
start "Express Backend" cmd /k "cd server && npm run dev"
timeout /t 2 /nobreak >nul

:: Start React Frontend
start "React Frontend" cmd /k "cd client && npm run dev"

echo.
echo ========================================
echo All services are starting...
echo.
echo Access the application at:
echo   http://localhost:3000
echo.
echo Close this window when done
echo ========================================
pause
