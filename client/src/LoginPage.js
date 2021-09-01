import React, { useState } from 'react'

const LoginPage = () => {
  const [userName, setUsername] = useState('')

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
