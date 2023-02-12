import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({ handleScrollOnClick }) => {
  return (
    <div className='nav-icon-div'>
      <a href='https://github.com/angel-zh' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faSquareGithub} className='nav-icon' />
      </a>
      <a href='https://www.linkedin.com/in/angel-q-zhou/' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} className='nav-icon' />
      </a>
      <a href='https://docs.google.com/document/d/1BgJrRqY7EziTPKyjEBWZFsmFEyREiFeB/edit?usp=sharing&ouid=113510718493931215820&rtpof=true&sd=true' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faFileLines} className='nav-icon file-icon' />
      </a>
      <span onClick={handleScrollOnClick}>
        <FontAwesomeIcon icon={faEnvelope} className='nav-icon envelope-icon' />
      </span>
    </div>
  )
}

export default NavBar