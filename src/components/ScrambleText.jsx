import React, { useState, useEffect } from 'react'

const chars = '!<>-_\\\\/[]{}—=+*^?#________'

export default function ScrambleText({ text, as: Component = 'span', className = '', style = {} }) {
  const [output, setOutput] = useState('')
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    let frame = 0
    let timeoutId
    let animationFrameId
    
    const scramble = () => {
      let currentText = ''
      const length = text.length
      const progress = frame / 20 // 20 frames total animation
      
      for (let i = 0; i < length; i++) {
        if (progress * length > i) {
          // Reveal actual character
          currentText += text[i]
        } else {
          // Show random character
          currentText += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      
      setOutput(currentText)
      
      if (frame < 20) {
        frame++
        animationFrameId = requestAnimationFrame(scramble)
      }
    }
    
    // Start animation on mount or hover
    frame = 0
    scramble()

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(timeoutId)
    }
  }, [text, isHovering])

  return (
    <Component 
      className={className} 
      style={style}
      onMouseEnter={() => setIsHovering(!isHovering)}
    >
      {output}
    </Component>
  )
}
