import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faVideo, 
  faCog, 
  faClock,
  faEye,
  faSignal
} from '@fortawesome/free-solid-svg-icons';

/**
 * Header Component
 * Professional command-center header with system health indicators
 */
export const Header = ({ 
  systemStatus, 
  isLoading, 
  onMenuToggle 
}) => {
  const isOnline = systemStatus?.status === 'active';

  return (
    <motion.header 
      className="header" 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-content">
        <motion.button
          className="menu-toggle"
          onClick={onMenuToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.button>

        <div className="logo">
          <FontAwesomeIcon icon={faVideo} />
          <span>CAMVIEW.AI</span>
          <span className="logo-subtitle">Traffic Intelligence</span>
        </div>

        <div className="header-right">
          <div className="health-section">
            {/* System Status */}
            <motion.div 
              className={`health-indicator ${isOnline ? 'online' : 'offline'}`}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="status-dot"></div>
              <span className="status-text">
                {isOnline ? 'ACTIVE' : 'OFFLINE'}
              </span>
            </motion.div>

            {/* Processing Stats */}
            <div className="stat-group">
              <div className="stat">
                <FontAwesomeIcon icon={faEye} className="stat-icon" />
                <span className="stat-label">FPS</span>
                <span className="stat-value">{systemStatus?.fps?.toFixed(1) || '0'}</span>
              </div>
              <div className="stat">
                <FontAwesomeIcon icon={faClock} className="stat-icon" />
                <span className="stat-label">Uptime</span>
                <span className="stat-value">{systemStatus?.uptime?.toFixed(1) || '0'}h</span>
              </div>
            </div>

            {/* Processing Quality */}
            <div className="quality-indicator">
              <FontAwesomeIcon icon={faSignal} className="signal-icon" />
              <span className="quality-text">Signal OK</span>
            </div>
          </div>

          <div className="action-buttons">
            <motion.button 
              className="settings-btn" 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.95 }}
              title="Settings"
              aria-label="Settings"
            >
              <FontAwesomeIcon icon={faCog} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
