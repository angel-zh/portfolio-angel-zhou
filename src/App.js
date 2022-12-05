import React from 'react'
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import './index.css'

function App() {
  return (
    <ParallaxProvider>
      <ParallaxBanner 
        image='' 
        speed={-20}
        translateY={[]} />


      
    </ParallaxProvider>
  )
}

export default App
