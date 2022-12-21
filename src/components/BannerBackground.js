import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import layer1 from '../images/1.png'
import layer2 from '../images/2.png'
import layer3 from '../images/3.png'
import layer4 from '../images/4.png'
import layer5 from '../images/5.png'
import layer6 from '../images/6.png'
import layer7 from '../images/7.png'
import layer8 from '../images/8.png'
import layer9 from '../images/9.png'

const BannerBackground = () => {
  return (
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
          className='mobile-show'
          image={layer5}
          speed={6}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          className='mobile-hide'
          image={layer6}

          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={layer7}
          translateY={[0, 20]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          className='mobile-show'
          image={layer8}
          speed={6}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={layer9}
          translateY={[0, 5]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          children={<FontAwesomeIcon icon={faAnglesDown} size='2x' className='scroll-icon' bounce />}
        />
      </ParallaxBanner>
    </header>
  )
}

export default BannerBackground