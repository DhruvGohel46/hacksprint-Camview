import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faVideo, 
  faChartLine, 
  faBell, 
  faTimes,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

/**
 * Sidebar Component
 * Command-center navigation with event-first design
 */
export const Sidebar = ({ 
  activeView, 
  onViewChange, 
  isOpen, 
  onClose 
}) => {
  const menuItems = [
    { 
      id: 'about', 
      icon: faInfoCircle, 
      label: 'About CAMVIEW',
      description: 'System overview & features'
    },
    { 
      id: 'live', 
      icon: faVideo, 
      label: 'Live Monitoring',
      description: 'Real-time video stream'
    },
    { 
      id: 'events', 
      icon: faBell, 
      label: 'Event Intelligence',
      description: 'Validated event timeline'
    },
    { 
      id: 'analytics', 
      icon: faChartLine, 
      label: 'Analytics & Insights',
      description: 'Traffic intelligence summary'
    },
  ];

  return (
    <motion.div 
      className={`sidebar ${isOpen ? 'open' : ''}`}
      initial={false}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    >
      <div className="sidebar-header">
        <h3>Command Center</h3>
        <motion.button 
          className="sidebar-close-btn"
          onClick={onClose} 
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </motion.button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            className={`nav-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => {
              onViewChange(item.id);
              onClose();
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={item.icon} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 'var(--weight-medium)' }}>{item.label}</div>
              <div style={{ fontSize: 'var(--text-xs)', opacity: 0.7 }}>{item.description}</div>
            </div>
          </motion.button>
        ))}
      </nav>
    </motion.div>
  );
};
