import React from 'react';
import DashboardPage from './pages/DashboardPage';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

/**
 * Main App Component
 * Entry point for the React application with error handling and theme support
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="app">
          <DashboardPage />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

