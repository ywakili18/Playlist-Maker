import React, { useEffect, useState } from 'react'
import RemoveSong from './RemoveSong'
import AddSong from './AddSong'
import { useLocation, useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Playlist = (props) => {
  const location = useLocation()
  // state passes down
  const [songs, manageSongs] = useState([])
  const userName = location.state.userName
  const [input, setInput] = useState('')

  const addSong = (song) => {
    let myNewPlayList = [...songs, song]
    manageSongs(myNewPlayList)
  }

  const removeSong = async (id) => {
    const res = await axios.delete(`${BASE_URL}/songs/${id}`)
    console.log('this is detlete', res)
    let filtered = songs.filter((song) => song._id !== id)
    manageSongs(filtered)
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  // add song post to database
  const onClick = async () => {
    const newSong = { songName: input }
    console.log(newSong)
    const res = await axios.post(`${BASE_URL}/songs`, newSong)
    addSong(res.data)
    setInput('')
  }
  // get song data by username request
  useEffect(() => {
    const getSongs = async () => {
      const res = await axios.get(`${BASE_URL}/songs`)
      manageSongs(res.data.songs)
      console.log('this is managesongs', songs)
    }
    getSongs()
  }, [])

  return (
    <div id="playlist">
      <h3 id="playListName"> {`${userName} playlist`}</h3>
      <div id="songTaskContainer">
        <AddSong
          handleChange={handleChange}
          addSong={addSong}
          value={input}
          onClick={onClick}
        />
      </div>
      <div>
        <RemoveSong
          {...props}
          songs={songs}
          handleChange={handleChange}
          removeSong={removeSong}
          value={input}
        />
      </div>
    </div>
  )
}

export default Playlist
