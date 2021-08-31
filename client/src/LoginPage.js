import React, { useState } from 'react'

const LoginPage = () => {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
      <br />
      <br />
      <label>Password: </label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        value={password}
      ></input>
    </form>
  )
}
export default LoginPage
