import React from 'react'
import layer3 from '../images/3.png'
import layer4 from '../images/4.png'

const Footer = () => {
    return (
        <div className='bottom-div'>
            <img src={layer4} className='bottom-layer' alt=''></img>
            <img src={layer3} className='bottom-layer' alt=''></img>
            <footer>
                &copy; 2022 Angel Zhou <br />
                All visual elements, aside from icons, were self-produced.
            </footer>
        </div>
    )
}

export default Footer