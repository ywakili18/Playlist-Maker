import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa'
const NavBar = () => {
  return (
    <IconContext.Provider value={{ color: '#dbf9f0', size: '2em' }}>
      <div id="socialMediaIconsContainer">
        <a href="https://www.linkedin.com/in/yw1818/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/ywakili18/Playlist-Maker">
          <FaGithub />
        </a>

        <a href="https://google.com">
          <FaGoogle />
        </a>
      </div>
    </IconContext.Provider>
  )
}

export default NavBar
