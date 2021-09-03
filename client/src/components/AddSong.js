import React from 'react'
// song component to add song
const AddSong = (props) => {
  return (
    <div id="addSongContainer">
      <input
        type="text"
        name="song"
        placeholder="Enter song"
        onChange={props.handleChange}
        value={props.value}
      />

      <button onClick={props.addSong}>+</button>
    </div>
  )
}
export default AddSong
