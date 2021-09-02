import React, { useState } from 'react'
import Playlist from './Playlist'
const AddSong = () => {
  const [song, setSong] = useState([''])
  return (
    <div>
      <div id="formId">
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
          <br />
        </form>
      </div>

      <div className="songListContainer">
        <Playlist />
      </div>
    </div>
  )
}
export default AddSong
