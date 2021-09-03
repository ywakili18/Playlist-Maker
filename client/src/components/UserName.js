import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'

const UserName = (props) => {
  const [user, setUser] = useState('')
  const history = useHistory()

  // useEffect(() => {
  //   async function postUser() {
  //     const res = await axios.post(`${BASE_URL}/`)
  //     console.log(res)
  //   }
  //   postUser()
  // }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const newUser = { userName: user }
    axios.post(`${BASE_URL}`, user)
    history.push('/home', { userName: user })
  }

  return (
    <form onSubmit={onSubmit}>
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
