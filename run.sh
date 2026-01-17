#!/bin/bash

# ==========================================
# CAMVIEW.AI - Project Startup Script
# Starts both Backend (Flask) and Frontend (React)
# For macOS and Linux
# ==========================================

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║       CAMVIEW.AI - Project Startup                             ║"
echo "║       Starting Backend (Flask) and Frontend (React)            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Get the project root directory
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BACKEND_DIR="$PROJECT_ROOT/backend"
FRONTEND_DIR="$PROJECT_ROOT/frontend"

# Check if directories exist
if [ ! -d "$BACKEND_DIR" ]; then
    echo "❌ ERROR: Backend directory not found at $BACKEND_DIR"
    exit 1
fi

if [ ! -d "$FRONTEND_DIR" ]; then
    echo "❌ ERROR: Frontend directory not found at $FRONTEND_DIR"
    exit 1
fi

echo "✓ Project directories found"
echo ""

# Check if Python is installed
echo "Checking dependencies..."
if ! command -v python3 &> /dev/null; then
    echo "❌ ERROR: Python 3 is not installed"
    echo "Please install Python 3.8+ (brew install python3)"
    exit 1
fi
echo "✓ Python found:"
python3 --version

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ ERROR: Node.js is not installed"
    echo "Please install Node.js 16+ (brew install node)"
    exit 1
fi
echo "✓ Node.js found:"
node --version

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "Starting services..."
echo "════════════════════════════════════════════════════════════════"
echo ""

# Function to handle cleanup on exit
cleanup() {
    echo ""
    echo "Stopping services..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set trap to catch Ctrl+C
trap cleanup SIGINT

# Start Backend in background
echo "Starting Backend API Server (Port 5000)..."
cd "$BACKEND_DIR"
python3 api.py &
BACKEND_PID=$!
echo "Backend PID: $BACKEND_PID"

# Wait a moment for backend to start
sleep 3

# Start Frontend in background
echo "Starting Frontend React App (Port 3000)..."
cd "$FRONTEND_DIR"
npm start &
FRONTEND_PID=$!
echo "Frontend PID: $FRONTEND_PID"

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "✓ Services started successfully!"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "📍 Backend API:   http://localhost:5000"
echo "📍 Frontend URL:  http://localhost:3000"
echo ""
echo "💡 Backend will take ~3-5 seconds to initialize."
echo "💡 Frontend will take ~15-30 seconds to build and start."
echo ""

# Try to open the frontend in default browser (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "⏳ Waiting 15 seconds then opening frontend in browser..."
    sleep 15
    open http://localhost:3000
elif command -v xdg-open &> /dev/null; then
    echo "⏳ Waiting 15 seconds then opening frontend in browser..."
    sleep 15
    xdg-open http://localhost:3000
fi

echo ""
echo "🎉 All services are running!"
echo ""
echo "To stop services:"
echo "   Press Ctrl+C to stop all services"
echo ""
echo "For documentation, see:"
echo "   - START_HERE.md"
echo "   - QUICKSTART.md"
echo ""

# Wait for services to finish
wait $BACKEND_PID $FRONTEND_PID
