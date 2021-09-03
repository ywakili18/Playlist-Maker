import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const NavBar = () => {
  return (
    <IconContext.Provider value={{ color: '#dbf9f0', size: '2em' }}>
      <div>
        <ul className="socialMediaIconsContainer">
          <li>
            <a href="https://www.linkedin.com/in/yw1818/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/ywakili18/Playlist-Maker">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  )
}

export default NavBar
