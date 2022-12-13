import React from 'react'
import { Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode, faL } from '@fortawesome/free-solid-svg-icons'
import FadeInRight from './FadeInRight'
import FadeInLeft from './FadeInLeft'

import pawsitters1 from '../images/pawsitters-1.png'
import pawsitters2 from '../images/pawsitters-2.png'
import avocado1 from '../images/avocado-1.png'
import avocado2 from '../images/avocado-2.png'
import lilbean1 from '../images/lilbean-1.png'
import lilbean2 from '../images/lilbean-2.png'
import typingFruits1 from '../images/typing-fruits-1.png'
import typingFruits2 from '../images/typing-fruits-2.png'

const Projects = () => {
    return (
        <Container className='projects' maxWidth='lg'>
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
    )
}

export default Projects