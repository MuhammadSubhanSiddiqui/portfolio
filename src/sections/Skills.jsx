import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../lib/ThemeContext'
import { SKILL_FILTERS, getSkillCategoriesByFilter } from '../lib/skills'
import SkillsFilter from '../components/skills/SkillsFilter'
import SkillCategoryCard from '../components/skills/SkillCategoryCard'
import { SECTION_REVEAL } from '../lib/motion'

export default function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleCategories = getSkillCategoriesByFilter(activeFilter)

  return (
    <section
      id="skills"
      className={`py-24 sm:py-28 ${isDark ? 'bg-background' : 'bg-slate-50'}`}
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
            Skills
          </p>
          <h2
            className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            Technical toolkit
          </h2>
          <p
            className={`mt-3 max-w-2xl text-base ${
              isDark ? 'text-text-secondary' : 'text-slate-600'
            }`}
          >
            From model training to production APIs — the stack I reach for when shipping real
            systems.
          </p>
        </motion.div>

        <div className="mt-10">
          <SkillsFilter
            filters={SKILL_FILTERS}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category, index) => (
              <SkillCategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
