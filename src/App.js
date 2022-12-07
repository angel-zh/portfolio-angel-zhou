import React from 'react'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import './index.css'

import layer1 from './images/1.png'
import layer2 from './images/2.png'
import layer3 from './images/3.png'
import layer4 from './images/4.png'
import layer5 from './images/5.png'
import layer6 from './images/6.png'
import layer7 from './images/7.png'
import layer8 from './images/8.png'

function App() {
  return (
    <main>

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
              <h1 className='banner-h1'>Angel Zhou</h1>
              <h2 className='banner-h2'>Full-Stack Developer</h2>
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
              image={layer7}
              translate={[0, 10]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            <ParallaxBannerLayer
              image={layer8}
              translateY={[0, 5]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
          </ParallaxBanner>
        </header>
      </ParallaxProvider>

      <div className='nav-icon'>
        <FontAwesomeIcon icon={faSquareGithub} className='icon' size='2x' />
        <FontAwesomeIcon icon={faLinkedin} className='icon' size='2x' />
      </div>

      <Container className='quote' maxWidth='sm'>
        <p>
          <FontAwesomeIcon icon={faQuoteLeft} />
          Shoot for the Moon. Even if you miss, you'll land among the stars.
          <FontAwesomeIcon icon={faQuoteRight} />
        </p>
        <i>--Norman Vincent Peale</i>
      </Container>


    </main>
  )
}

export default App
