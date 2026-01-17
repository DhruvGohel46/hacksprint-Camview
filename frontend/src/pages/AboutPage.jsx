import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faRobot,
  faChartLine,
  faShield,
  faUsers,
  faBullseye,
  faBriefcase,
  faAward
} from '@fortawesome/free-solid-svg-icons';

/**
 * About Page - Introduction to CAMVIEW.AI
 */
export const AboutPage = () => {
  const features = [
    {
      icon: faCamera,
      title: 'Real-time Monitoring',
      description: 'Continuous video feed processing with intelligent event detection'
    },
    {
      icon: faRobot,
      title: 'AI-Powered Detection',
      description: 'Advanced YOLO model for accurate vehicle and violation recognition'
    },
    {
      icon: faChartLine,
      title: 'Analytics & Insights',
      description: 'Comprehensive traffic intelligence and operational trends'
    },
    {
      icon: faShield,
      title: 'System Reliability',
      description: 'Stable, validated event processing with cooldown policies'
    }
  ];

  const capabilities = [
    'Emergency Vehicle Detection',
    'Wrong-Way Driving Detection',
    'Pothole & Road Damage Detection',
    'Speed Monitoring',
    'Vehicle Registry & Tracking',
    'Event De-duplication',
    'Real-time Processing',
    'Multi-lane Support'
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <h1>CAMVIEW.AI</h1>
          <p className="hero-subtitle">Intelligent Traffic Intelligence Command Center</p>
          <p className="hero-description">
            Transform raw video streams into actionable traffic intelligence. 
            CAMVIEW.AI combines advanced computer vision with intelligent event processing 
            to provide comprehensive traffic monitoring and analytics.
          </p>
        </div>
      </motion.section>

      {/* Core Features */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Core Features</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* System Capabilities */}
      <motion.section
        className="about-section capabilities-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>System Capabilities</h2>
        <div className="capabilities-grid">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={idx}
              className="capability-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="capability-check">✓</div>
              <span>{capability}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Architecture Overview */}
      <motion.section
        className="about-section architecture-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Architecture Overview</h2>
        <div className="architecture-grid">
          <motion.div
            className="arch-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faCamera} size="2x" />
            <h3>Video Input</h3>
            <p>Real-time video stream processing from traffic cameras</p>
          </motion.div>

          <motion.div
            className="arch-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faRobot} size="2x" />
            <h3>Processing Engine</h3>
            <p>YOLO-based detection with specialized violation models</p>
          </motion.div>

          <motion.div
            className="arch-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faBriefcase} size="2x" />
            <h3>Business Logic</h3>
            <p>Event-driven system with stateful vehicle registry</p>
          </motion.div>

          <motion.div
            className="arch-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faChartLine} size="2x" />
            <h3>Intelligence Interface</h3>
            <p>Professional command-center dashboard and analytics</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Design Philosophy */}
      <motion.section
        className="about-section philosophy-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Design Philosophy</h2>
        <div className="philosophy-content">
          <div className="philosophy-card">
            <FontAwesomeIcon icon={faBullseye} size="lg" />
            <h3>Event-First Design</h3>
            <p>
              Prioritize validated events over raw detections. 
              Every alert has operational significance.
            </p>
          </div>

          <div className="philosophy-card">
            <FontAwesomeIcon icon={faShield} size="lg" />
            <h3>Trust & Reliability</h3>
            <p>
              De-duplicate events, apply cooldowns, and respect system policies. 
              Operators can trust every notification.
            </p>
          </div>

          <div className="philosophy-card">
            <FontAwesomeIcon icon={faAward} size="lg" />
            <h3>Professional Interface</h3>
            <p>
              Clean, minimal design. No gradients or distracting animations. 
              Focus on actionable intelligence.
            </p>
          </div>

          <div className="philosophy-card">
            <FontAwesomeIcon icon={faUsers} size="lg" />
            <h3>Operator-Centric</h3>
            <p>
              Built for traffic operations teams. Easy to understand, 
              intuitive to navigate, powerful in scope.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="about-section cta-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Get Started</h2>
        <p>
          Navigate to <strong>Live Monitoring</strong> to begin watching the real-time video feed,
          check <strong>Event Intelligence</strong> for validated traffic events, 
          or view <strong>Analytics & Insights</strong> for operational trends.
        </p>
      </motion.section>
    </div>
  );
};