import React from 'react'
import { Button } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
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
      <button onClick={props.addSong} variant>
        +
      </button>
    </div>
  )
}
export default AddSong
