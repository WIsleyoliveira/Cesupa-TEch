import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Import do BrowserRouter
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Cesupa-TEch">  {/* <-- Aqui é o detalhe importante */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
