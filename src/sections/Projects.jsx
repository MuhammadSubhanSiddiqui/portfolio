import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../lib/ThemeContext'
import { PROJECT_CATEGORIES, getProjectsByCategory } from '../lib/projects'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectModal from '../components/projects/ProjectModal'
import { SECTION_REVEAL } from '../lib/motion'

export default function Projects() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = getProjectsByCategory(activeCategory)

  return (
    <section
      id="projects"
      className={`py-24 sm:py-28 ${isDark ? 'bg-surface/30' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={SECTION_REVEAL}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <p
            className={`mb-2 text-sm font-medium uppercase tracking-[0.2em] ${
              isDark ? 'text-accent-from' : 'text-indigo-600'
            }`}
          >
            Projects
          </p>
          <h2
            className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            Systems I&apos;ve shipped
          </h2>
          <p
            className={`mt-3 max-w-2xl text-base ${
              isDark ? 'text-text-secondary' : 'text-slate-600'
            }`}
          >
            Production AI pipelines, computer vision research, and full-stack products — click any
            card for the full case study.
          </p>
        </motion.div>

        <div className="mt-10">
          <ProjectFilter
            categories={PROJECT_CATEGORIES}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <motion.div layout className="mt-12 flex flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p
            className={`mt-12 text-center text-sm ${
              isDark ? 'text-text-secondary' : 'text-slate-500'
            }`}
          >
            No projects in this category yet.
          </p>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
