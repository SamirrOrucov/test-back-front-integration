import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BasketProvider from './assets/context/BasketContext.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
    <HelmetProvider>


    <App />
    </HelmetProvider>
    </BasketProvider>
  </React.StrictMode>,
)
