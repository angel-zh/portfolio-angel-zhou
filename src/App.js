import React, { useState } from 'react'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faArrowUpRightFromSquare, faCode, faFileLines, faL, faQuoteLeft, faQuoteRight, faSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import FadeInBottom from './components/FadeInBottom'
import FadeInRight from './components/FadeInRight'
import FadeInLeft from './components/FadeInLeft'
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
import profilePic from './images/profile-pic.jpg'

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
            {/* <ParallaxBannerLayer
              image={layer7}
              translate={[0, 10]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            /> */}
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


      <div className='nav-icon-div'>
        <a href='https://github.com/angel-zh' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faSquareGithub} className='nav-icon' /></a><br />
        <a href='https://www.linkedin.com/in/angel-q-zhou/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} className='nav-icon' /></a><br />
        <a href='https://docs.google.com/document/d/1z5I7XAXyyFZh09DxDBj6HcFSKTCtfEoqTI3iEUT6ID8/edit?usp=sharing' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFileLines} className='nav-icon file-icon' /></a>
      </div>

      <Container className='quote' maxWidth='md'>
        <p>
          <FontAwesomeIcon icon={faQuoteLeft} className='quote-icon' />
          Shoot for the <span className='quote-highlight'>moon</span>. Even if you miss, you'll land among the <span className='quote-highlight'>stars</span>.
          <FontAwesomeIcon icon={faQuoteRight} className='quote-icon' />
        </p>
        <p className='author'><i>--Norman Vincent Peale</i></p>
      </Container>
      <FadeInBottom>
        <Container className='skills' maxWidth='lg'>
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
              <FontAwesomeIcon icon={faL} className='developer-fa' />
              <p className="developer-icon-name">Liquid.js</p>
            </div>
            <div className='developer-icon'>
              <i className="devicon-photoshop-line"> </i>
              <p className="developer-icon-name">Photoshop</p>
            </div>
          </div>
        </Container>
      </FadeInBottom>
      <Container className='projects' maxWidth='lg'>
        <h1 className='h1-projects'>Projects</h1>

        <FadeInLeft>
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
                <img className='project-img-bottom' src={pawsitters2} alt='PawSitters screenshot 2'></img>
                <img className='project-img-top' src={pawsitters1} alt='PawSitters screenshot 1'></img>
              </a>
            </div>
          </div>
        </FadeInLeft>

        <FadeInRight>
          <div className='project-div'>
            <div className='image-div'>
              <a href='https://thegoodavocado.netlify.app/' target='_blank' rel='noopener noreferrer'>
                <img className='project-img-bottom' src={avocado2} alt='Good Avocado screenshot 2'></img>
                <img className='project-img-top' src={avocado1} alt='Good Avocado screenshot 1'></img>
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
        </FadeInRight>

        <FadeInLeft>
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
                <img className='project-img-bottom' src={lilbean2} alt='LilBean screenshot 2'></img>
                <img className='project-img-top' src={lilbean1} alt='LilBean screenshot 1'></img>
              </a>
            </div>
          </div>
        </FadeInLeft>

        <FadeInRight>
          <div className='project-div'>
            <div className='image-div'>
              <a href='https://angel-zh.github.io/typing-fruits-game/' target='_blank' rel='noopener noreferrer'>
                <img className='project-img-bottom' src={typingFruits2} alt='Typing Fruits screenshot 2'></img>
                <img className='project-img-top' src={typingFruits1} alt='Typing Fruits screenshot 1'></img>
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
        </FadeInRight>
      </Container>

      <FadeInBottom>
        <Container className='about-me' maxWidth='md'>
          <h1 className='h1-about-me'>About Me</h1>
          <div className='about-me-div'>
            <div className='about-me-pic'>
              <img src={profilePic} alt='My Picture'></img>
            </div>
            <div className='about-me-desc'>
              <h2>Hi, I'm Angel.</h2>
              <FontAwesomeIcon icon={faStar} />
              <p>I'm originally from Toronto, Canada, and now living in New York City. <br />
                Being a software developer with a background in education and a passion for art, I utilize creativity to help me communicate ideas and solve problems. If I'm not coding, you will find me either digitally illustrating away on my iPad or snuggling with my dog, Cleo. </p>
            </div>
          </div>
        </Container>
      </FadeInBottom>


    </main >
  )
}

export default App
