import React, { useState } from 'react'
import RemoveSong from './RemoveSong'
import AddSong from './AddSong'
import { useLocation } from 'react-router-dom'

const Playlist = (props) => {
  const location = useLocation()
  // state passes down
  const [songs, manageSongs] = useState([])
  const userName = location.state.userName
  const [input, setInput] = useState('')
  const addSong = () => {
    let myNewPlayList = [...songs, input]
    manageSongs(myNewPlayList)
  }

  const removeSong = (index) => {
    let myNewPlayList = [...songs]
    myNewPlayList.splice(index, 1)
    manageSongs(myNewPlayList)
  }
  const handleChange = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }
  return (
    <div id="playlist">
      <h2 id="playListName"> {`${userName} playlist`}</h2>
      <div id="songTaskContainer">
        <AddSong handleChange={handleChange} addSong={addSong} value={input} />
        <RemoveSong songs={songs} removeSong={removeSong} />
      </div>
    </div>
  )
}

export default Playlist
