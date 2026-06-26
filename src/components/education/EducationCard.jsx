import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'

export default function EducationCard({ education }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-0.5 sm:p-7 ${
        isDark
          ? 'border-white/8 bg-surface/40 hover:border-white/15 hover:bg-surface/60'
          : 'border-slate-200/80 bg-slate-50/80 hover:border-slate-300 hover:bg-white hover:shadow-sm'
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className={`rounded-lg p-2.5 transition-colors ${
              isDark
                ? 'bg-white/5 text-text-secondary group-hover:text-text-primary'
                : 'bg-white text-slate-500 group-hover:text-slate-700'
            }`}
          >
            <GraduationCap size={22} strokeWidth={1.5} />
          </div>
          <div>
            <h3
              className={`font-heading text-lg font-semibold sm:text-xl ${
                isDark ? 'text-text-primary' : 'text-slate-900'
              }`}
            >
              {education.degree}
            </h3>
            <p
              className={`mt-0.5 text-sm ${
                isDark ? 'text-text-secondary' : 'text-slate-600'
              }`}
            >
              {education.institution}
            </p>
          </div>
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
            isDark
              ? 'bg-white/5 text-text-secondary'
              : 'bg-white text-slate-500 shadow-sm'
          }`}
        >
          {education.period} · {education.status}
        </span>
      </div>

      <div className="mt-6">
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-wider ${
            isDark ? 'text-text-secondary/70' : 'text-slate-400'
          }`}
        >
          Relevant coursework
        </p>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <span
              key={course}
              className={`rounded-full border px-2.5 py-1 text-xs ${
                isDark
                  ? 'border-white/10 text-text-secondary'
                  : 'border-slate-200 text-slate-600'
              }`}
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
