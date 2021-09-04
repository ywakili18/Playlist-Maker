import React from 'react'
const RemoveSong = (props) => {
  return (
    <div>
      <ul>
        {props.songs.map((song) => (
          // data gets grabbed from db, using dot notation to grab specific key
          <li key={song._id} id="li">
            {song.songName}{' '}
            <button onClick={() => props.removeSong(song._id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RemoveSong
