import React from 'react'
import UserName from '../components/UserName'
import NavBar from '../components/NavBar'
const LoginPage = () => {
  return (
    <div>
      <div className="socialMediaIconsContainer">
        <NavBar />
      </div>

      <div>
        <UserName />
      </div>
    </div>
  )
}
export default LoginPage
