import { motion } from 'framer-motion'
import { useTheme } from '../../lib/ThemeContext'
import SkillPill from './SkillPill'

export default function SkillCategoryCard({ category, index }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const Icon = category.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`rounded-xl p-5 sm:p-6 ${
        isDark
          ? 'glass hover:border-indigo-500/25 hover:shadow-[0_0_28px_rgba(99,102,241,0.1)]'
          : 'glass-light hover:border-indigo-300/40 hover:shadow-[0_0_28px_rgba(99,102,241,0.06)]'
      } transition-shadow duration-300`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`inline-flex rounded-lg p-2.5 ${
            isDark
              ? 'bg-white/5 text-accent-from'
              : 'bg-indigo-50 text-indigo-600'
          }`}
        >
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h3
          className={`font-heading text-base font-semibold sm:text-lg ${
            isDark ? 'text-text-primary' : 'text-slate-900'
          }`}
        >
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillPill key={skill} label={skill} />
        ))}
      </div>
    </motion.div>
  )
}
