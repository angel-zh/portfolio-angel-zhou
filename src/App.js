import React from 'react'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Container, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faArrowUpRightFromSquare, faCode, faL, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'
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
import pawsitters1 from './images/pawsitters-1.png'
import pawsitters2 from './images/pawsitters-2.png'
import avocado1 from './images/avocado-1.png'
import avocado2 from './images/avocado-2.png'
import lilbean1 from './images/lilbean-1.png'
import lilbean2 from './images/lilbean-2.png'
import typingFruits1 from './images/typing-fruits-1.png'
import typingFruits2 from './images/typing-fruits-2.png'

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
              children={<FontAwesomeIcon icon={faAnglesDown} size='2x' className='scroll-icon' bounce />}
            />
          </ParallaxBanner>
        </header>
      </ParallaxProvider>

      <div className='nav-icon-div'>
        <a href='https://github.com/angel-zh' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faSquareGithub} className='nav-icon' size='3x' /></a>
        <a href='https://www.linkedin.com/in/angel-q-zhou/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} className='nav-icon' size='3x' /></a>
      </div>

      <Container className='quote' maxWidth='md'>
        <p>
          <FontAwesomeIcon icon={faQuoteLeft} className='quote-icon' />
          Shoot for the Moon. Even if you miss, you'll land among the stars.
          <FontAwesomeIcon icon={faQuoteRight} className='quote-icon' />
        </p>
        <p className='author'><i>--Norman Vincent Peale</i></p>
      </Container>

      <Container className='skills' maxWidth='lg'>
        {/* <FontAwesomeIcon icon={faStar} />  */}
        <h1 className='h1-skills'>Programming Skills</h1>
        <div className='developer-icons-div'>
          <div className='developer-icon'>
            <i className="devicon-javascript-plain"> </i>
            <p className="developer-icon-name">JavaScript</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-html5-plain"> </i>
            <p className="developer-icon-name">HTML</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-css3-plain"> </i>
            <p className="developer-icon-name">CSS</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-react-original"> </i>
            <p className="developer-icon-name">React</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-django-plain"> </i>
            <p className="developer-icon-name">Django</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-python-plain"> </i>
            <p className="developer-icon-name">Python</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-postgresql-plain"> </i>
            <p className="developer-icon-name">Postgres</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-mongodb-plain"> </i>
            <p className="developer-icon-name">MongoDB</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-nodejs-plain"> </i>
            <p className="developer-icon-name">Node.js</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-express-original"> </i>
            <p className="developer-icon-name">Express</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-bootstrap-plain"> </i>
            <p className="developer-icon-name">Bootstrap</p>
          </div>
          
          <div className='developer-icon'>
            <FontAwesomeIcon icon={faL} className='developer-fa'/>
            <p className="developer-icon-name">Liquid.js</p>
          </div>
          <div className='developer-icon'>
            <i className="devicon-photoshop-line"> </i>
            <p className="developer-icon-name">Photoshop</p>
          </div>
        </div>
      </Container>

      <Container className='projects' maxWidth='lg'>
        <h1 className='h1-projects'>Projects</h1>
        <div className='project-div'>
          <div className='description-div description-right'>
            <h2>PawSitters</h2>
            <h3>Pet-Sitting App</h3>
            <p>
              <i className="devicon-react-original project-icon"></i>
              <i className="devicon-django-plain project-icon"></i>
              <i className="devicon-postgresql-plain project-icon"></i>
              <i className="devicon-python-plain project-icon"></i>
              <i className="devicon-html5-plain project-icon"></i>
              <i className="devicon-css3-plain project-icon"></i>
              <i className="devicon-javascript-plain project-icon"></i>
            </p>
            <a href='https://github.com/angel-zh/react-pawsitters' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
            </a>
            <a href='https://github.com/angel-zh/react-pawsitters' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faCode} /> Code</button>
            </a>
          </div>
          <div className='image-div'>
            <a href='https://github.com/angel-zh/react-pawsitters' target='_blank' rel='noopener noreferrer'>
              <img className='project-img-bottom' src={pawsitters2}></img>
              <img className='project-img-top' src={pawsitters1}></img>
            </a>
          </div>
        </div>

        <div className='project-div'>
          <div className='image-div'>
            <a href='https://thegoodavocado.netlify.app/' target='_blank' rel='noopener noreferrer'>
              <img className='project-img-bottom' src={avocado2}></img>
              <img className='project-img-top' src={avocado1}></img>
            </a>
          </div>
          <div className='description-left'>
            <h2>The Good Avocado</h2>
            <h3>Restaurant Review App</h3>
            <p>
              <i className="devicon-react-original project-icon"></i>
              <i className="devicon-mongodb-plain project-icon"></i>
              <i className="devicon-nodejs-plain project-icon"></i>
              <i className="devicon-express-original project-icon"></i>
              <i className="devicon-html5-plain project-icon"></i>
              <i className="devicon-css3-plain project-icon"></i>
              <i className="devicon-javascript-plain project-icon"></i>
            </p>
            <a href='https://thegoodavocado.netlify.app/' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
            </a>
            <a href='https://github.com/angel-zh/Client-theGoodAvocado' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faCode} /> Code</button>
            </a>
          </div>
        </div>

        <div className='project-div'>
          <div className='description-div description-right'>
            <h2>LilBean</h2>
            <h3>Baby Tracker App</h3>
            <p>
              <FontAwesomeIcon icon={faL} className='project-icon' />
              <i className="devicon-mongodb-plain project-icon"></i>
              <i className="devicon-nodejs-plain project-icon"></i>
              <i className="devicon-express-original project-icon"></i>
              <i className="devicon-html5-plain project-icon"></i>
              <i className="devicon-css3-plain project-icon"></i>
              <i className="devicon-javascript-plain project-icon"></i>
            </p>
            <a href='https://lilbeanapp.fly.dev/' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
            </a>
            <a href='https://github.com/angel-zh/lilbean-baby-tracker-app' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faCode} /> Code</button>
            </a>
          </div>
          <div className='image-div'>
            <a href='https://lilbeanapp.fly.dev/' target='_blank' rel='noopener noreferrer'>
              <img className='project-img-bottom' src={lilbean2}></img>
              <img className='project-img-top' src={lilbean1}></img>
            </a>
          </div>
        </div>
      
        <div className='project-div'>
          <div className='image-div'>
            <a href='https://angel-zh.github.io/typing-fruits-game/' target='_blank' rel='noopener noreferrer'>
              <img className='project-img-bottom' src={typingFruits2}></img>
              <img className='project-img-top' src={typingFruits1}></img>
            </a>
          </div>
          <div className='description-left'>
            <h2>Typing Fruits</h2>
            <h3>Typing Game</h3>
            <p>
              <i className="devicon-html5-plain project-icon"></i>
              <i className="devicon-css3-plain project-icon"></i>
              <i className="devicon-javascript-plain project-icon"></i>
            </p>
            <a href='https://angel-zh.github.io/typing-fruits-game/' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo</button>
            </a>
            <a href='https://github.com/angel-zh/typing-fruits-game' target='_blank' rel='noopener noreferrer'>
              <button><FontAwesomeIcon icon={faCode} /> Code</button>
            </a>
          </div>
        </div>
    </Container>




    </main >
  )
}

export default App
