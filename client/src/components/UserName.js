import React, { useState } from 'react'
const UserName = () => {
  const [user, setUser] = useState('')
  return (
    <form>
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
