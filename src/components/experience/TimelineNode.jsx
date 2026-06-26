import { motion } from 'framer-motion'
import { useTheme } from '../../lib/ThemeContext'
import TimelineDot from './TimelineDot'

export default function TimelineNode({ item, index, variant = 'primary' }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const isPrimary = variant === 'primary'

  return (
    <motion.li
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 md:pl-0"
    >
      <TimelineDot index={index} />

      <div
        className={`md:w-[calc(50%-2.5rem)] ${
          index % 2 === 0
            ? 'md:mr-auto md:pr-8'
            : 'md:ml-auto md:pl-8'
        }`}
      >
        <div
          className={`rounded-xl p-5 sm:p-6 ${
            isPrimary
              ? isDark
                ? 'glass hover:border-indigo-500/25'
                : 'glass-light hover:border-indigo-300/40'
              : isDark
                ? 'border border-white/10 bg-surface/40'
                : 'border border-slate-200 bg-white/80'
          } transition-colors duration-300`}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isDark
                  ? 'bg-indigo-500/15 text-indigo-300'
                  : 'bg-indigo-50 text-indigo-700'
              }`}
            >
              {item.date}
            </span>
            {item.location && (
              <span
                className={`text-xs font-medium ${
                  isDark ? 'text-text-secondary' : 'text-slate-500'
                }`}
              >
                {item.location}
              </span>
            )}
          </div>

          <h3
            className={`font-heading text-lg font-bold sm:text-xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            {item.role}
          </h3>
          <p
            className={`mt-0.5 text-sm font-medium ${
              isDark ? 'text-accent-from' : 'text-indigo-600'
            }`}
          >
            {item.organization}
          </p>

          {item.highlights && (
            <ul
              className={`mt-4 space-y-2 text-sm leading-relaxed ${
                isDark ? 'text-text-secondary' : 'text-slate-600'
              }`}
            >
              {item.highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <span
                    className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                      isDark ? 'bg-accent-from' : 'bg-indigo-500'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.li>
  )
}
