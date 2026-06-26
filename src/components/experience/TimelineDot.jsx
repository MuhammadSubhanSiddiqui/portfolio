import { motion } from 'framer-motion'
import { useTheme } from '../../lib/ThemeContext'

export default function TimelineDot({ index }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      className="absolute left-4 top-6 z-10 md:left-1/2 md:-translate-x-1/2"
      initial={{ scale: 0.6, opacity: 0.4 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`relative h-3.5 w-3.5 rounded-full border-2 ${
          isDark
            ? 'border-accent-from bg-background'
            : 'border-indigo-500 bg-white'
        }`}
        whileInView={{
          boxShadow: isDark
            ? '0 0 0 4px rgba(99, 102, 241, 0.2), 0 0 20px rgba(99, 102, 241, 0.45)'
            : '0 0 0 4px rgba(99, 102, 241, 0.15), 0 0 20px rgba(99, 102, 241, 0.3)',
        }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
      >
        <span
          className="absolute inset-0.5 rounded-full bg-accent-gradient"
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  )
}
