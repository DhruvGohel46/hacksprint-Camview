# CAMVIEW.AI - Traffic Safety Monitoring System

**A seamless frontend-backend integration for real-time traffic violation detection and analytics.**

---

## 📱 Features

- 🎥 **Real-time Video Stream** - Live feed from traffic cameras
- 🚨 **Violation Detection** - Automatic detection of traffic violations
- 📊 **Analytics Dashboard** - Real-time statistics and trends
- ⚡ **Fast Integration** - One-click startup with run.bat/run.sh
- 🛡️ **Error Handling** - Graceful error recovery with fallbacks
- 📱 **Responsive Design** - Works on desktop and tablet
- 🔄 **Live Updates** - Real-time data refresh (2-5 second intervals)

---

## 🚀 Quick Start (5 Minutes)

### Prerequisites

- Python 3.8+
- Node.js 16+

### Windows

```bash
# Just double-click this file in the project folder:
run.bat
```

### macOS / Linux

```bash
chmod +x run.sh
./run.sh
```

Then open: **http://localhost:3000**

---

## 📁 Project Structure

```
hacksprint-frontend/
├── backend/                    # Python Flask API
│   ├── api.py                 # REST endpoints (main bridge)
│   ├── requirements.txt        # Python dependencies
│   ├── requirements_api.txt    # API-specific dependencies
│   ├── .env.example           # Config template
│   └── [other modules]        # Detection models, processors
│
├── frontend/                   # React Web App
│   ├── package.json           # Node dependencies
│   ├── .env.example           # Config template
│   ├── public/                # Static files
│   └── src/
│       ├── App.jsx            # Main app component
│       ├── components/        # UI components
│       │   ├── LiveFeed.jsx   # Video stream
│       │   ├── Events.jsx     # Event list
│       │   └── Analytics.jsx  # Statistics
│       ├── hooks/
│       │   └── useApi.js      # API communication
│       └── utils/
│           └── api.js         # Endpoint definitions
│
└── Documentation/             # Guides and docs
    ├── GETTING_STARTED.md     # ← START HERE
    ├── RUN_SCRIPTS_GUIDE.md   # Startup scripts guide
    ├── QUICKSTART.md          # 5-minute setup
    ├── INTEGRATION_GUIDE.md   # Technical details
    └── [other guides]         # Additional documentation
```

---

## 📚 Documentation

**Choose your starting point:**

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **[GETTING_STARTED.md](./GETTING_STARTED.md)** | ⭐ Start here! | 5 min |
| **[RUN_SCRIPTS_GUIDE.md](./RUN_SCRIPTS_GUIDE.md)** | How to use startup scripts | 10 min |
| **[QUICKSTART.md](./QUICKSTART.md)** | Quick setup guide | 5 min |
| **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** | Technical deep dive | 20 min |
| **[STARTUP_CHECKLIST.md](./STARTUP_CHECKLIST.md)** | Verification steps | 5 min |
| **[START_HERE.md](./START_HERE.md)** | Documentation hub | 2 min |

---

## 🎯 System Architecture

### Three-Layer Architecture

```
┌──────────────────────────────────────────────────┐
│  Layer 1: Frontend (React)                       │
│  - Dashboard UI                                  │
│  - Real-time components                          │
│  - Error boundaries                              │
│  (Port 3000)                                     │
└─────────────────┬──────────────────────────────┘
                  │ HTTP API (11 endpoints)
                  │
┌─────────────────┴──────────────────────────────┐
│  Layer 2: REST API (Flask)                      │
│  - /api/health, /api/status                     │
│  - /api/frame/latest, /api/video/*              │
│  - /api/events, /api/events/stats               │
│  - /api/analytics, /api/stats/*                 │
│  (Port 5000)                                    │
└─────────────────┬──────────────────────────────┘
                  │ Python Imports (no modifications)
                  │
┌─────────────────┴──────────────────────────────┐
│  Layer 3: Python Backend                        │
│  - Video processor                              │
│  - Detection models                             │
│  - Event logger                                 │
│  - Vehicle registry                             │
└──────────────────────────────────────────────────┘
```

---

## 🔌 API Endpoints

### Health & Status
- `GET /api/health` - System health check
- `GET /api/status` - Current system status
- `GET /api/processing/status` - Video processing status

### Video Operations
- `GET /api/frame/latest` - Get latest frame (base64)
- `POST /api/video/upload` - Upload video file
- `POST /api/video/stop` - Stop processing

### Events
- `GET /api/events` - Get detected events
- `GET /api/events/stats` - Event statistics

### Analytics
- `GET /api/analytics` - Analytics dashboard data
- `GET /api/stats/vehicles` - Vehicle statistics
- `GET /api/stats/violations` - Violation statistics

---

## 🛠️ Configuration

### Backend (.env)

Create `backend/.env`:
```env
FLASK_PORT=5000
FLASK_HOST=0.0.0.0
FLASK_DEBUG=False
```

### Frontend (.env)

Create `frontend/.env`:
```env
REACT_APP_API_BASE=http://localhost:5000
```

See `.env.example` files for more options.

---

## 📊 What You'll See

### Dashboard with 3 Views

**Live Feed**
- Real-time video stream
- Updates every 500ms (2 FPS)
- Play/pause controls

**Events**
- Detected traffic violations
- Color-coded by severity
- Filter by type and severity
- 3-second updates

**Analytics**
- Total vehicles monitored
- Violations detected
- Potholes found
- Emergency vehicles spotted
- Trend charts

---

## ⚙️ Technology Stack

### Backend
- **Flask 2.3.3** - REST API framework
- **Flask-CORS 4.0.0** - Cross-origin support
- **Python 3.8+** - Runtime

### Frontend
- **React 18+** - UI framework
- **React Router** - Navigation
- **Framer Motion** - Animations
- **FontAwesome** - Icons

### Data Flow
- Video: OpenCV frames → Base64 → JSON → Frontend
- Events: Python dict → JSONL → Flask → JSON → Frontend
- Analytics: Python calculations → JSON → Frontend

---

## 🚀 Usage

### Start Services

**Windows**:
```bash
run.bat
```

**macOS/Linux**:
```bash
./run.sh
```

### Open Dashboard
```
http://localhost:3000
```

### Manual Start (if scripts fail)

Terminal 1:
```bash
cd backend
pip install -r requirements.txt
pip install Flask flask-cors python-dotenv
python api.py
```

Terminal 2:
```bash
cd frontend
npm install
npm start
```

---

## ✅ Verification Checklist

- [ ] Python 3.8+ installed: `python --version`
- [ ] Node.js 16+ installed: `node --version`
- [ ] Project folder open in editor
- [ ] Run scripts execute without errors
- [ ] Backend shows: "Running on http://0.0.0.0:5000"
- [ ] Frontend shows: "Compiled successfully!"
- [ ] Browser opens to http://localhost:3000
- [ ] Dashboard displays (check DevTools for errors)
- [ ] Live feed shows video
- [ ] Events and Analytics load

See [STARTUP_CHECKLIST.md](./STARTUP_CHECKLIST.md) for detailed verification.

---

## 🔧 Troubleshooting

### Common Issues

**"Python not found"**
- Install Python: https://python.org
- Verify: `python --version`

**"Node not found"**
- Install Node: https://nodejs.org
- Verify: `node --version`

**"Port 5000/3000 in use"**
```bash
# Windows
netstat -ano | findstr :5000

# macOS/Linux
lsof -i :5000
```

**Services won't start**
- Try manual start (see Usage section)
- Check all dependencies installed
- Verify no errors in console

See [RUN_SCRIPTS_GUIDE.md](./RUN_SCRIPTS_GUIDE.md#troubleshooting) for more.

---

## 📈 Performance

### Expected Startup Times

- Backend: 3-5 seconds
- Frontend (first run): 30-60 seconds
- Frontend (subsequent runs): 5-10 seconds
- Dashboard ready: 90-120 seconds total

### Update Intervals

- Video Feed: 2 FPS (500ms)
- Events: 3 seconds
- Analytics: 5 seconds

---

## 🔐 Security Notes

- Frontend runs locally at http://localhost:3000 (no HTTPS)
- Backend runs locally at http://localhost:5000 (no HTTPS)
- CORS configured for localhost only
- No authentication currently (local development)

For production, see [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) for hardening steps.

---

## 🎯 Integration Features

### What Makes This Different

✅ **Non-Invasive** - No modifications to existing backend code  
✅ **Complete** - 11 REST endpoints covering all operations  
✅ **Robust** - 3-layer error handling with graceful fallbacks  
✅ **Fast** - One-click startup with run.bat/run.sh  
✅ **Professional** - Production-ready code and documentation  
✅ **Maintainable** - Clean architecture and clear separation  

---

## 📞 Support

**For setup issues:**
1. Read [GETTING_STARTED.md](./GETTING_STARTED.md)
2. Check [RUN_SCRIPTS_GUIDE.md](./RUN_SCRIPTS_GUIDE.md#troubleshooting)
3. Review [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)

**For technical questions:**
- See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) - Technical deep dive
- Check [START_HERE.md](./START_HERE.md) - Documentation hub

---

## 🎯 Next Steps

1. ⭐ **Start here:** Read [GETTING_STARTED.md](./GETTING_STARTED.md)
2. 🚀 **Quick start:** Run startup script (run.bat or run.sh)
3. 🌐 **Open dashboard:** Visit http://localhost:3000
4. 📚 **Learn more:** Read [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)
5. ⚙️ **Customize:** Update .env files as needed

---

## 📝 Version Info

- **Status:** Production Ready ✅
- **Version:** 1.0
- **Last Updated:** 2024
- **Integration Type:** Non-Invasive REST API Bridge
- **Documentation:** Complete with 8+ guides

---

## 🎉 Ready to Go!

Everything you need to run CAMVIEW.AI is ready:

✅ Startup scripts (Windows, macOS, Linux)  
✅ Complete REST API (11 endpoints)  
✅ Frontend integration (5 components)  
✅ Error handling (3 layers)  
✅ Configuration templates  
✅ Comprehensive documentation  

**Let's get started!** 🚀

👉 **[Read GETTING_STARTED.md](./GETTING_STARTED.md)**

---

*CAMVIEW.AI - Making Traffic Safer, One Detection at a Time*
