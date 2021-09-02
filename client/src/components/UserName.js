import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
const UserName = () => {
  const [user, setUser] = useState('')
  const history = useHistory()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        history.push('/home', { userName: user })
      }}
    >
      <h2>Playlist Maker</h2>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Enter user name here"
        onChange={(e) => {
          setUser(e.target.value)
        }}
        value={user}
      ></input>
    </form>
  )
}
export default UserName
