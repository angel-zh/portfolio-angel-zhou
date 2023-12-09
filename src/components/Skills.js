import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
    return (
        <Container className='skills' maxWidth='lg'>
            <h1 className='h1-skills'>Skill Set</h1>
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
                    <i className="devicon-python-plain"></i>
                    <p className="developer-icon-name">Python</p>
                </div>
                <div className='developer-icon'>
                    <i class="devicon-ruby-plain"></i>
                    <p className="developer-icon-name">Ruby</p>
                </div>
                <div className='developer-icon'>
                    <i class="devicon-csharp-plain"></i>
                    <p className="developer-icon-name">C#</p>
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
                    <i class="devicon-rails-plain"></i>
                    <p className="developer-icon-name">Rails</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-postgresql-plain"></i>
                    <p className="developer-icon-name">PostgreSQL</p>
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
                    <i class="devicon-graphql-plain"></i>
                    <p className="developer-icon-name">GraphQL</p>
                </div>
                <div className='developer-icon'>
                    <i class="devicon-jquery-plain"></i>
                    <p className="developer-icon-name">jQuery</p>
                </div>
                <div className='developer-icon'>
                    <i className="devicon-bootstrap-plain"></i>
                    <p className="developer-icon-name">Bootstrap</p>
                </div>
                <div className='developer-icon'>
                    <i class="devicon-tailwindcss-plain"></i>
                    <p className="developer-icon-name">Tailwindcss</p>
                </div>
                <div className='developer-icon'>
                    <FontAwesomeIcon icon={faShopify} className='developer-fa' />
                    <p className="developer-icon-name">Shopify Liquid</p>
                </div>
            </div>
        </Container>
    )
}

export default Skills