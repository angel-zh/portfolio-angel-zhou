import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StarsDivider = () => {
    return (
        <div className='divider-stars'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} size='xl' />
            <FontAwesomeIcon icon={faStar} />
        </div>
    )
}

export default StarsDivider