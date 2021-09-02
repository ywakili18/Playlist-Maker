import React from 'react'
import PlaylistName from '../components/PlaylistName'
import AddSong from '../components/AddSong'

const Home = () => {
  return (
    <div>
      <div className="playListNameContainer">
        <PlaylistName />
      </div>
      <div className="addSongListContainer">
        <AddSong songs={[]} />
      </div>
    </div>
  )
}
export default Home
