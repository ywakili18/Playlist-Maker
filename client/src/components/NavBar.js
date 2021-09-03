import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa'
const NavBar = () => {
  return (
    <IconContext.Provider value={{ color: '#dbf9f0', size: '2em' }}>
      <header id="socialMediaIconsContainer">
        <p>
          Playlist Maker <br />
          <h6>Yousof Wakili</h6>
        </p>
        <nav>
          <ul class="nav_links">
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
            <li>
              <a href="https://google.com">
                <FaGoogle />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </IconContext.Provider>
  )
}

export default NavBar
