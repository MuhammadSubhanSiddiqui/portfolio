import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'
import TimelineDot from './TimelineDot'

export default function CommunityTimelineNode({ roles, index }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 md:pl-0"
    >
      <TimelineDot index={index} />

      <div className="md:mx-auto md:w-[calc(50%+1rem)] md:max-w-xl">
        <div
          className={`rounded-xl p-5 sm:p-6 ${
            isDark
              ? 'border border-white/10 bg-surface/40'
              : 'border border-slate-200 bg-white/80'
          }`}
        >
          <div className="mb-4 flex items-center gap-2">
            <div
              className={`rounded-lg p-2 ${
                isDark
                  ? 'bg-white/5 text-accent-from'
                  : 'bg-indigo-50 text-indigo-600'
              }`}
            >
              <Users size={16} strokeWidth={1.75} />
            </div>
            <h3
              className={`font-heading text-sm font-semibold uppercase tracking-wide ${
                isDark ? 'text-text-secondary' : 'text-slate-500'
              }`}
            >
              Community Roles
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`rounded-lg p-4 ${
                  isDark
                    ? 'glass hover:border-indigo-500/20'
                    : 'glass-light hover:border-indigo-300/30'
                } transition-colors duration-300`}
              >
                <p
                  className={`text-sm font-medium leading-snug ${
                    isDark ? 'text-text-primary' : 'text-slate-900'
                  }`}
                >
                  {role.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  )
}
