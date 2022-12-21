import React, { useRef } from 'react'
import { ParallaxProvider } from "react-scroll-parallax";
import BannerBackground from './components/BannerBackground'
import BannerTitle from './components/BannerTitle'
import Quote from './components/Quote'
import FadeInBottom from './components/FadeInBottom'
import FadeInRight from './components/FadeInRight'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import ContactMeForm from './components/ContactMeForm'
import StarsDivider from './components/StarsDivider'
import Footer from './components/Footer'
import './index.css'


function App() {
  const contactMe = useRef(null)
  const handleScrollOnClick = () => {
    contactMe.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ParallaxProvider>
        <BannerBackground />
      </ParallaxProvider>
      <BannerTitle />
      <NavBar handleScrollOnClick={handleScrollOnClick} />

      <main>
        <Quote />
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
        <ContactMeForm />
        <Footer />
      </main >
    </>
  )
}

export default App
