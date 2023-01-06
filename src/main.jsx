import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

// Import CSS files here
import './styles/index.css'
import './styles/palette.css'
import './styles/overrides.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
