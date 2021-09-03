import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const NavBar = () => {
  return (
    <IconContext.Provider value={{ size: '2em' }}>
      <div>
        <a href="https://www.linkedin.com/in/yw1818/">
          <FaLinkedin />
        </a>
        <FaGithub />
      </div>
    </IconContext.Provider>
  )
}

export default NavBar
