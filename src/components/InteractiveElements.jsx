import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function NoiseOverlay() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.04,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}
    />
  )
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, .glass, .event-card, .lineup-card, .set-card, .artist-card, .btn-primary, .btn-outline')) {
        setIsHovering(true)
      }
    }
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, .glass, .event-card, .lineup-card, .set-card, .artist-card, .btn-primary, .btn-outline')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [location.pathname]) // re-bind or just reset on route change if needed

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: 24,
        height: 24,
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'var(--tertiary)',
        border: isHovering ? '1px solid var(--tertiary)' : 'none',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        transition: 'transform 0.2s ease, background-color 0.2s ease, border 0.2s ease',
        zIndex: 10000,
        mixBlendMode: 'difference'
      }}
    />
  )
}
