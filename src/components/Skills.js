import React from 'react'
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL } from '@fortawesome/free-solid-svg-icons'


const Skills = () => {
    return (
        <Container className='skills' maxWidth='lg'>
            <h1 className='h1-skills'>Programming Skills</h1>
            <div className='developer-icons-div'>
                <div className='developer-icon'>
                    <i className="devicon-javascript-plain"></i>
                    <p className="developer-icon-name">JavaScript</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-html5-plain"></i>
                    <p className="developer-icon-name">HTML</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-css3-plain"></i>
                    <p className="developer-icon-name">CSS</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-react-original"></i>
                    <p className="developer-icon-name">React</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-django-plain"></i>
                    <p className="developer-icon-name">Django</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-python-plain"></i>
                    <p className="developer-icon-name">Python</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-postgresql-plain"></i>
                    <p className="developer-icon-name">Postgres</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-mongodb-plain"> </i>
                    <p className="developer-icon-name">MongoDB</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-nodejs-plain"></i>
                    <p className="developer-icon-name">Node.js</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-express-original"></i>
                    <p className="developer-icon-name">Express</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-bootstrap-plain"></i>
                    <p className="developer-icon-name">Bootstrap</p>
                </div>
                <div className='developer-icon'>
                    <i class="devicon-materialui-plain"></i>
                    <p className="developer-icon-name">Material</p>
                </div>
                <div className='developer-icon'>
                    <FontAwesomeIcon icon={faL} className='developer-fa' />
                    <p className="developer-icon-name">Liquid.js</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-photoshop-line"></i>
                    <p className="developer-icon-name">Photoshop</p>
                </div>
            </div>
        </Container>
    )
}

export default Skills