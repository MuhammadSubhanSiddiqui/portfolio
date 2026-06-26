import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'

export default function ScrollIndicator() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.a
      href="#about"
      className={`absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 ${
        isDark ? 'text-text-secondary hover:text-text-primary' : 'text-slate-400 hover:text-slate-600'
      } transition-colors`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      aria-label="Scroll to about section"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} strokeWidth={1.5} />
      </motion.div>
    </motion.a>
  )
}
