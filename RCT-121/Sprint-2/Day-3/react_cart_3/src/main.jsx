

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { CartContextProvider } from './context/CartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <AuthContextProvider>
        <App />

        </AuthContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);