import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import App from './App.jsx'
import CartProvider from './context/CartProvider.jsx';


createRoot(document.getElementById('root')).render( //trae al div de id root del html
  
  <StrictMode>
    <CartProvider>
    <App/>
    </CartProvider>
  </StrictMode>,
)
