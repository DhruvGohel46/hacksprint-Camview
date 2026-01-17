@echo off
REM ==========================================
REM CAMVIEW.AI - Project Startup Script
REM Starts both Backend (Flask) and Frontend (React)
REM ==========================================

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║       CAMVIEW.AI - Project Startup                             ║
echo ║       Starting Backend (Flask) and Frontend (React)            ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Get the project root directory
set "PROJECT_ROOT=%~dp0"
set "BACKEND_DIR=%PROJECT_ROOT%backend"
set "FRONTEND_DIR=%PROJECT_ROOT%frontend"

REM Check if directories exist
if not exist "%BACKEND_DIR%" (
    echo ❌ ERROR: Backend directory not found at %BACKEND_DIR%
    pause
    exit /b 1
)

if not exist "%FRONTEND_DIR%" (
    echo ❌ ERROR: Frontend directory not found at %FRONTEND_DIR%
    pause
    exit /b 1
)

echo ✓ Project directories found
echo.

REM Check if Python is installed
echo Checking dependencies...
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Python is not installed or not in PATH
    echo Please install Python 3.8+ and add it to PATH
    pause
    exit /b 1
)
echo ✓ Python found: 
python --version

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js 16+ and add it to PATH
    pause
    exit /b 1
)
echo ✓ Node.js found: 
node --version

echo.
echo ════════════════════════════════════════════════════════════════
echo Starting services...
echo ════════════════════════════════════════════════════════════════
echo.

REM Start Backend in a new window
echo Starting Backend API Server (Port 5000)...
echo Command: cd "%BACKEND_DIR%" ^&^& python api.py
start "CAMVIEW.AI Backend" cmd /k "cd /d "%BACKEND_DIR%" && python api.py"

REM Wait a moment for backend to start
timeout /t 3 /nobreak

REM Start Frontend in a new window
echo Starting Frontend React App (Port 3000)...
echo Command: cd "%FRONTEND_DIR%" ^&^& npm start
start "CAMVIEW.AI Frontend" cmd /k "cd /d "%FRONTEND_DIR%" && npm start"

echo.
echo ════════════════════════════════════════════════════════════════
echo ✓ Services started successfully!
echo ════════════════════════════════════════════════════════════════
echo.
echo 📍 Backend API:   http://localhost:5000
echo 📍 Frontend URL:  http://localhost:3000
echo.
echo 💡 Both services are starting in separate windows.
echo 💡 Backend will take ~3-5 seconds to initialize.
echo 💡 Frontend will take ~15-30 seconds to build and start.
echo.
echo ⏳ Waiting for frontend to open in your default browser...
echo.
timeout /t 15 /nobreak

REM Try to open the frontend in default browser
start http://localhost:3000

echo.
echo 🎉 All services are running!
echo.
echo To stop services:
echo   - Close the Backend window (Ctrl+C or X button)
echo   - Close the Frontend window (Ctrl+C or X button)
echo.
echo For documentation, see:
echo   - START_HERE.md
echo   - QUICKSTART.md
echo.
pause
