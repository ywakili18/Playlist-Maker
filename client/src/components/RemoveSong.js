import React from 'react'
const RemoveSong = (props) => {
  return (
    <div>
      <ul>
        {props.songs.map((song, index) => (
          // data gets grabbed from db, using dot notation to grab specific key
          <li key={song._id} id="li">
            {song.songName}{' '}
            <button onClick={() => props.removeSong(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RemoveSong
