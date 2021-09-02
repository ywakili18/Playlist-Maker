import React from 'react'
const Songs = (props) => {
  return (
    <ul>
      {props.songs.map((song, index) => (
        <li key={index}>
          {song} <button onClick={() => props.removeSong(index)}>-</button>
        </li>
      ))}
    </ul>
  )
}
export default Songs
