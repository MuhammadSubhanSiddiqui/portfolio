import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', href, ...props }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const frameRef = useRef(0)
  const lastPointRef = useRef({ x: 0, y: 0 })

  useEffect(() => () => window.cancelAnimationFrame(frameRef.current), [])

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    lastPointRef.current = { x: e.clientX, y: e.clientY }
    if (frameRef.current) return

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0
      const rect = el.getBoundingClientRect()
      const { x: clientX, y: clientY } = lastPointRef.current
      const x = (clientX - rect.left - rect.width / 2) * 0.24
      const y = (clientY - rect.top - rect.height / 2) * 0.24
      setOffset({ x, y })
    })
  }

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 })

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onPointerMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.6 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
