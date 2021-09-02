import React from 'react'
const Songs = (props) => {
  return (
    <div>
      <ul>
        {props.songs.map((song, index) => (
          <li key={index} id="li">
            {song} <button onClick={() => props.removeSong(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Songs
