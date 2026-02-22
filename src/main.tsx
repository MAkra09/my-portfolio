/**
 * Portfolio App Entry Point
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Global styles
import './styles/global.css';

// Page styles (POM)
import './pages/CoverPage/CoverPage.styles.css';
import './pages/ContentsPage/ContentsPage.styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
