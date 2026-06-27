import { motion } from 'framer-motion'
import { ExternalLink, Github, Database } from 'lucide-react' // Database icon imported for Kaggle datasets
import { useTheme } from '../../lib/ThemeContext'
import { ProjectImage } from './ProjectModal'

export default function ProjectCard({ project, index, onOpen }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const imageRight = index % 2 === 1
  const { links } = project

  const handleCardClick = (e) => {
    if (e.target.closest('a')) return
    onOpen(project)
  }

  const handleKeyDown = (e) => {
    if (e.target.closest('a')) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen(project)
    }
  }

  // Helper function to check if a valid link exists (is not undefined, null, or '#')
  const isValidLink = (url) => url && url !== '#'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)] ${
        isDark ? 'gradient-border' : 'gradient-border-light'
      }`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View case study for ${project.title}`}
    >
      <div
        className={`grid overflow-hidden rounded-2xl md:grid-cols-2 ${
          isDark ? 'bg-surface' : 'bg-white'
        }`}
      >
        <div
          className={`relative ${imageRight ? 'md:order-2' : 'md:order-1'}`}
        >
          <ProjectImage project={project} isDark={isDark} />
          {project.metric && (
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-lg ${
                isDark
                  ? 'bg-accent-gradient text-white'
                  : 'bg-white text-indigo-700 shadow-indigo-200/50'
              }`}
            >
              {project.metric.chip}
            </span>
          )}
        </div>

        <div
          className={`flex flex-col justify-center p-6 sm:p-8 ${
            imageRight ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <p
            className={`mb-2 text-xs font-medium uppercase tracking-widest ${
              isDark ? 'text-accent-from' : 'text-indigo-600'
            }`}
          >
            {project.categoryLabel}
          </p>

          <h3
            className={`font-heading text-xl font-bold tracking-tight sm:text-2xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            {project.title}
          </h3>

          <p className={`mt-1 text-sm ${isDark ? 'text-text-secondary' : 'text-slate-500'}`}>
            {project.date}
          </p>

          <ul
            className={`mt-4 space-y-2 text-sm leading-relaxed ${
              isDark ? 'text-text-secondary' : 'text-slate-600'
            }`}
          >
            {project.highlights.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                    isDark ? 'bg-accent-from' : 'bg-indigo-500'
                  }`}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
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
            {/* GitHub Link Validation */}
            {isValidLink(links.github) && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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

            {/* Kaggle Dataset Link Validation */}
            {isValidLink(links.dataset) && (
              <a
                href={links.dataset}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border border-white/10 text-text-primary hover:bg-white/10'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={`View ${project.title} dataset on Kaggle`}
              >
                <Database size={16} />
                Dataset
              </a>
            )}

            {/* Live Demo Link Validation */}
            {isValidLink(links.demo) && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'bg-white/10 text-text-primary hover:bg-white/15'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
                aria-label={`Open live demo of ${project.title}`}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}