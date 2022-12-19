import React, { useState, useRef } from 'react'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faQuoteLeft, faQuoteRight, faStar, faTurnUp } from '@fortawesome/free-solid-svg-icons'
import FadeInBottom from './components/FadeInBottom'
import FadeInRight from './components/FadeInRight'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import ContactMeForm from './components/ContactMeForm'
import StarsDivider from './components/StarsDivider'
import './index.css'

import layer1 from './images/1.png'
import layer2 from './images/2.png'
import layer3 from './images/3.png'
import layer4 from './images/4.png'
import layer5 from './images/5.png'
import layer6 from './images/6.png'
import layer8 from './images/8.png'


function App() {
  const [isClickedStar1, setIsClickedStar1] = useState('false')
  const [isClickedStar2, setIsClickedStar2] = useState('false')
  const [isClickedStar3, setIsClickedStar3] = useState('false')
  const [isClickedStar4, setIsClickedStar4] = useState('false')

  const handleToggleStar1 = () => {
    setIsClickedStar1(!isClickedStar1);
  }
  const handleToggleStar2 = () => {
    setIsClickedStar2(!isClickedStar2);
  }
  const handleToggleStar3 = () => {
    setIsClickedStar3(!isClickedStar3);
  }
  const handleToggleStar4 = () => {
    setIsClickedStar4(!isClickedStar4);
  }

  const contactMe = useRef(null)
  const handleScrollOnClick = () => {
    contactMe.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ParallaxProvider>
        <header>
          <ParallaxBanner className='banner'>
            <ParallaxBannerLayer
              image={layer1}
              expanded={false}
            />
            <ParallaxBannerLayer
              image={layer2}
              translateY={[0, 45]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            <ParallaxBannerLayer
              translateY={[0, 40]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            >
            </ParallaxBannerLayer>
            <ParallaxBannerLayer
              image={layer3}
              speed={8}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            <ParallaxBannerLayer
              image={layer4}
              translateY={[0, 35]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            <ParallaxBannerLayer
              image={layer5}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            <ParallaxBannerLayer
              image={layer6}
              translateY={[0, 25]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            <ParallaxBannerLayer
              image={layer8}
              translateY={[0, 5]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
              children={<FontAwesomeIcon icon={faAnglesDown} size='2x' className='scroll-icon' bounce />}
            />
          </ParallaxBanner>
        </header>
      </ParallaxProvider>

      <Container className='banner-heading' maxWidth='lg'>
        <h1 className='banner-h1'>Angel Zhou</h1>
        <h2 className='banner-h2'>Full-Stack Developer</h2>
      </Container>

      <div className='stars-div'>
        <span className={`star-1 ${isClickedStar1 ? '' : 'star-clicked'}`} onClick={handleToggleStar1} >
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={`star-2 ${isClickedStar2 ? '' : 'star-clicked'}`} onClick={handleToggleStar2}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={`star-3 ${isClickedStar3 ? '' : 'star-clicked'}`} onClick={handleToggleStar3}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={`star-4 ${isClickedStar4 ? '' : 'star-clicked'}`} onClick={handleToggleStar4}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>

      <NavBar
        handleScrollOnClick={handleScrollOnClick}
      />

      <main>
        <Container className='quote' maxWidth='md'>
          <p>
            <FontAwesomeIcon icon={faQuoteLeft} className='quote-icon' />
            Shoot for the <span className='quote-highlight'>moon</span>. Even if you miss, you'll land among the <span className='quote-highlight'>stars</span>.
            <FontAwesomeIcon icon={faQuoteRight} className='quote-icon' />
          </p>
          <p className='author'><i>--Norman Vincent Peale</i></p>
        </Container>

        <FadeInBottom>
          <StarsDivider />
          <Skills />
        </FadeInBottom>

        <FadeInRight>
          <StarsDivider />
          <h1 className='h1-projects'>Projects</h1>
        </FadeInRight>
        <Projects />

        <FadeInBottom>
          <StarsDivider />
          <AboutMe />
        </FadeInBottom>

        <div ref={contactMe}>
          <StarsDivider />
        </div>
        <ContactMeForm  />

        <div className='bottom-div'>
          <img src={layer4} className='bottom-layer' alt=''></img>
          <img src={layer3} className='bottom-layer' alt=''></img>
          <span onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
            <FontAwesomeIcon icon={faTurnUp} className='nav-icon to-top-icon' />
          </span>
          <footer>
          &copy; 2022 Angel Zhou <br />
          All visual elements, aside from icons, were self-produced.
        </footer>
        </div>
        
      </main >
    </>
  )
}

export default App
