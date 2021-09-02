import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* user name component which has username login */}
      {/* <LoginPage /> */}
      {/* user component  */}
      {/* <Home /> */}
      <header>{/* Import Nav here */}</header>
      <main>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </main>
    </div>
  )
}

export default App
