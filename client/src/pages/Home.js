import React from 'react'
import Playlist from '../components/Playlist'
// page imports playListname container and Add song input component
const Home = (props) => {
  console.log(props)
  return (
    <div>
      <Playlist />
    </div>
  )
}
export default Home
