import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { HashRouter } from 'react-router-dom';

// Fonts : 1) Kalam

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// min-width should 320px;
// X-Small devices (portrait phones, less than 576px)
// @media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
// @media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
// @media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
// @media (max-width: 1199.98px) { ... }

// X-Large devices (large desktops, less than 1400px)
// @media (max-width: 1399.98px) { ... }

// For Mobile Devices – 320px — 480px
// iPads and Tablets – 481px — 768px
// Laptops and small screen – 769px — 1024px
// Large screens and Desktops – 1025px — 1200px
// TV and Extra Large Screens – 1201px and more
