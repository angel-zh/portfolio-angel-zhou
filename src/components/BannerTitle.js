import React, { useState } from 'react'
import { Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const BannerTitle = () => {
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
        <>
            <Container className='banner-heading' maxWidth='lg'>
                <h1 className='banner-h1'>Angel Zhou</h1>
                <h2 className='banner-h2'>Full Stack Developer</h2>
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
        </>
    )
}

export default BannerTitle