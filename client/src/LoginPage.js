import React, { useState } from 'react'
import axios from 'axios'
const LoginPage = () => {
  const [userName, setUsername] = useState('')
  const getUser
  return (
    <form>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        value={userName}
      ></input>
    </form>
  )
}
export default LoginPage
