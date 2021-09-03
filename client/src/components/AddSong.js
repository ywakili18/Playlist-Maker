import React from 'react'
// song component to add song
const AddSong = (props) => {
  return (
    <div className="App">
      <label>Add Song</label>
      <input
        type="text"
        name="song"
        onChange={props.handleChange}
        value={props.value}
      />
      <button onClick={props.addSong}>+</button>
    </div>
  )
}
export default AddSong
