import React from 'react';
import DashboardPage from './pages/DashboardPage';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

/**
 * Main App Component
 * Entry point for the React application with error handling
 */
function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <DashboardPage />
      </div>
    </ErrorBoundary>
  );
}

export default App;

