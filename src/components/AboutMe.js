import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@mui/material'

import aboutMePic from '../images/about-me-pic.jpeg'

const AboutMe = () => {
    return (
        <Container className='about-me' maxWidth='md'>
            <h1 className='h1-about-me'>About Me</h1>
            <div className='about-me-div'>
                <div className='about-me-pic'>
                    <img src={aboutMePic} alt='My Picture'></img>
                </div>
                <div className='about-me-desc'>
                    <h2>Hi, I'm Angel.</h2>
                    <FontAwesomeIcon icon={faStar} />
                    <p>I'm originally from Toronto, Canada, and now living in New York City. <br />
                        Being a software developer with a background in education and a passion for art, I utilize creativity to help me communicate ideas and solve problems. If I'm not coding, you will find me either digitally illustrating away on my iPad or snuggling with my dog, Cleo. </p>
                </div>
            </div>
        </Container>
    )
}

export default AboutMe