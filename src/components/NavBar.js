import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({ handleScrollOnClick }) => {
    return (
        <div className='nav-icon-div'>
        <a href='https://github.com/angel-zh' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faSquareGithub} className='nav-icon' />
        </a><br />
        <a href='https://www.linkedin.com/in/angel-q-zhou/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} className='nav-icon' />
        </a><br />
        <a href='https://docs.google.com/document/d/1z5I7XAXyyFZh09DxDBj6HcFSKTCtfEoqTI3iEUT6ID8/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFileLines} className='nav-icon file-icon' />
        </a><br />
        <span onClick={handleScrollOnClick}>
          <FontAwesomeIcon icon={faEnvelope} className='nav-icon file-icon' />
        </span>
      </div>
    )
}

export default NavBar