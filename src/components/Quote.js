import React from 'react'
import { Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Quote = () => {
    return (
<Container className='quote' maxWidth='md'>
          <p>
            <FontAwesomeIcon icon={faQuoteLeft} className='quote-icon' />
            Shoot for the <span className='quote-highlight'>moon</span>. Even if you miss, you'll land among the <span className='quote-highlight'>stars</span>.
            <FontAwesomeIcon icon={faQuoteRight} className='quote-icon' />
          </p>
          <p className='author'><i>--Norman Vincent Peale</i></p>
        </Container>
    )
}

export default Quote