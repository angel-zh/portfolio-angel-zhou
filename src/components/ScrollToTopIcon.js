import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

const ScrollToTopIcon = () => {
  const [showIcon, setShowIcon] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 250) {
      setShowIcon(true)
    } else {
      setShowIcon(false)
    }
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showIcon ?
        <span onClick={handleClick}>
          <FontAwesomeIcon icon={faCircleUp} className='nav-icon to-top-icon' />
        </span>
        :
        null
      }
    </>
  )
}

export default ScrollToTopIcon