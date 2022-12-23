import React, { useEffect, useState } from "react"


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
    window.scrollTo({ top:0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return(
    <></>
  )
}

export default ScrollToTopIcon