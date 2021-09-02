import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'

function App() {
  return (
    <div>
      {/* user name component which has username login */}
      <LoginPage />
      {/* user component  */}
      <Home />
    </div>
  )
}

export default App
