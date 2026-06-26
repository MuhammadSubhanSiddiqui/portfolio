import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ImageIcon, X } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'

const CASE_STUDY_FIELDS = [
  { key: 'problem', label: 'Problem' },
  { key: 'approach', label: 'Approach' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'result', label: 'Result' },
]

export default function ProjectModal({ project, onClose }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const closeRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const { links } = project

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close project details"
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8 ${
            isDark ? 'glass gradient-border' : 'glass-light gradient-border-light'
          }`}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className={`absolute right-4 top-4 rounded-lg p-2 transition-colors ${
              isDark
                ? 'text-text-secondary hover:bg-white/10 hover:text-text-primary'
                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
            }`}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <p
            className={`mb-1 text-xs font-medium uppercase tracking-widest ${
              isDark ? 'text-accent-from' : 'text-indigo-600'
            }`}
          >
            {project.categoryLabel}
          </p>
          <h3
            id="project-modal-title"
            className={`pr-10 font-heading text-2xl font-bold ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            {project.title}
          </h3>
          <p className={`mt-1 text-sm ${isDark ? 'text-text-secondary' : 'text-slate-500'}`}>
            {project.date}
          </p>

          {project.metric && (
            <span
              className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                isDark
                  ? 'bg-indigo-500/15 text-indigo-300'
                  : 'bg-indigo-50 text-indigo-700'
              }`}
            >
              {project.metric.chip}
            </span>
          )}

          <div className="mt-6 space-y-5">
            {CASE_STUDY_FIELDS.map(({ key, label }) => (
              <div key={key}>
                <h4
                  className={`mb-1.5 text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-text-secondary' : 'text-slate-500'
                  }`}
                >
                  {label}
                </h4>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-text-secondary' : 'text-slate-600'
                  }`}
                >
                  {project.caseStudy[key]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  isDark
                    ? 'bg-white/5 text-text-secondary'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border border-white/10 text-text-primary hover:bg-white/10'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-medium text-white"
                aria-label={`Open live demo of ${project.title}`}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function ProjectImage({ project, isDark }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title} — ${project.categoryLabel} project by Muhammad Subhan Siddiqui`}
        width={640}
        height={400}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <div
      className={`flex h-full min-h-[220px] w-full items-center justify-center ${
        isDark
          ? 'bg-gradient-to-br from-surface to-background'
          : 'bg-gradient-to-br from-slate-100 to-slate-200'
      }`}
    >
      <div className="text-center">
        <ImageIcon
          size={40}
          strokeWidth={1.25}
          className={`mx-auto mb-2 ${isDark ? 'text-text-secondary/40' : 'text-slate-300'}`}
        />
        <p
          className={`text-xs font-medium uppercase tracking-widest ${
            isDark ? 'text-text-secondary/50' : 'text-slate-400'
          }`}
        >
          Screenshot
        </p>
      </div>
    </div>
  )
}
