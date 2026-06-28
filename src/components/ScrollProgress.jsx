import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  })

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-accent-gradient"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
