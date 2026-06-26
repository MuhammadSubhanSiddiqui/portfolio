import { motion } from 'framer-motion'
import { useTheme } from '../../lib/ThemeContext'

export default function FocusCard({ title, description, icon: Icon, index }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-xl p-5 transition-all duration-300 ${
        isDark
          ? 'glass hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]'
          : 'glass-light hover:border-indigo-300/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]'
      }`}
    >
      <div
        className={`mb-3 inline-flex rounded-lg p-2 transition-colors ${
          isDark
            ? 'bg-white/5 text-accent-from group-hover:bg-indigo-500/10'
            : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
        }`}
      >
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <h3
        className={`font-heading text-sm font-semibold ${
          isDark ? 'text-text-primary' : 'text-slate-900'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          isDark ? 'text-text-secondary' : 'text-slate-500'
        }`}
      >
        {description}
      </p>
    </motion.div>
  )
}
