import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'
import { IconContext } from 'react-icons'

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Switch>
          <Route exact path="/" component={() => <LoginPage />} />
          <Route path="/home" component={() => <Home />} />
        </Switch>
      </main>
    </div>
  )
}

export default App
