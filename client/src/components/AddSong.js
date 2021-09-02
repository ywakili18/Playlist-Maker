import React, { useState } from 'react'
const AddSong = () => {
  const [song, setSong] = useState(['Off the Grid', 'Come to life'])
  return (
    <form>
      <input
        type="text"
        placeholder="Add Song"
        onChange={(e) => {
          setSong(e.target.value)
        }}
        value={song}
      ></input>
      <button>+</button>
    </form>
  )
}
export default AddSong
