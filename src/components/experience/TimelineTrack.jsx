import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../../lib/ThemeContext'

export default function TimelineTrack({ children }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  })

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative">
      {/* Track background */}
      <div
        className={`absolute bottom-0 top-0 w-px md:left-1/2 md:-translate-x-px ${
          isDark
            ? 'left-4 bg-gradient-to-b from-white/5 via-white/10 to-transparent'
            : 'left-4 bg-gradient-to-b from-slate-200 via-slate-300 to-transparent'
        }`}
        aria-hidden="true"
      />

      {/* Animated fill */}
      <motion.div
        className="absolute top-0 w-px origin-top md:left-1/2 md:-translate-x-px left-4 bg-gradient-to-b from-accent-from via-accent-to to-transparent"
        style={{ scaleY: lineScale, height: '100%' }}
        aria-hidden="true"
      />

      <ol className="relative space-y-12 md:space-y-16">{children}</ol>
    </div>
  )
}
