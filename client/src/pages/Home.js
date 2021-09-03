import React from 'react'
import Playlist from '../components/Playlist'
import NavBar from '../components/NavBar'
// page imports playListname container and Add song input component
const Home = (props) => {
  return (
    <div>
      <div className="socialMediaIconsContainer">
        <NavBar />
      </div>
      <div>
        <Playlist />
      </div>
    </div>
  )
}
export default Home
