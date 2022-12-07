import React from 'react'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
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
              translateY={[0, 50]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            // speed={-25} 
            />
            <ParallaxBannerLayer
              image={layer3}
              speed={10}
              // translateY={[0, 50]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}

            />
            <ParallaxBannerLayer
              image={layer4}
              translateY={[0, 40]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            // speed={-15} 
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
            // translateY={[]} 
            />
            <ParallaxBannerLayer
              image={layer7}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
             
            />
            <ParallaxBannerLayer
              image={layer8}
              translateY={[0, 5]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            // translateY={[]} 
            />



          </ParallaxBanner>




        </header>
      </ParallaxProvider>
    </main>
  )
}

export default App
