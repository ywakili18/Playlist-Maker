import React, { useState } from 'react'
import Songs from './Songs'
import AddSong from './AddSong'

const Playlist = () => {
  // state passes down
  const [songs, manageSongs] = useState(['Off the Grid'])

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
      <AddSong handleChange={handleChange} addSong={addSong} value={input} />
      <Songs songs={songs} removeSong={removeSong} />
    </div>
  )
}

export default Playlist
