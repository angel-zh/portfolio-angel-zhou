import React, { useState, useRef, useEffect } from 'react'

const FadeInRight = (props) => {
    const [visible, setVisible] = useState(false)
    const domRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true)
                observer.unobserve(domRef.current)
            }
        })
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current)
    }, [])
    return (
        <div className={`fade-in-right ${visible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    )
}

export default FadeInRight