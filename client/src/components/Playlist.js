import React, { useState } from 'react'
import Songs from './Songs'
import AddSong from './AddSong'
import { useLocation } from 'react-router-dom'

const Playlist = (props) => {
  const location = useLocation()
  // state passes down
  const [songs, manageSongs] = useState(['Off the Grid'])
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
    setInput(event.target.value)
  }
  return (
    <div className="list">
      <h2> {`${userName} playlist`}</h2>
      <AddSong handleChange={handleChange} addSong={addSong} value={input} />
      <Songs songs={songs} removeSong={removeSong} />
    </div>
  )
}

export default Playlist
