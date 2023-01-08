import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes/Router';
import { RouterProvider } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);