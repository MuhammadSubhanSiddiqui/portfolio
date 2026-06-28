import { motion } from 'framer-motion'
import { useTheme } from '../lib/ThemeContext'
import { education, certifications } from '../lib/education'
import EducationCard from '../components/education/EducationCard'
import CertificationCard from '../components/education/CertificationCard'
import { SECTION_REVEAL } from '../lib/motion'

export default function Education() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="education"
      className={`py-20 sm:py-24 ${isDark ? 'bg-surface/20' : 'bg-white'}`}
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
              isDark ? 'text-text-secondary' : 'text-slate-400'
            }`}
          >
            Education & Certifications
          </p>
          <h2
            className={`font-heading text-2xl font-bold tracking-tight sm:text-3xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            Academic foundation & credentials
          </h2>
        </motion.div>

        <div className="mt-10">
          <EducationCard education={education} />
        </div>

        <div className="mt-14">
          <h3
            className={`mb-5 text-sm font-medium uppercase tracking-wider ${
              isDark ? 'text-text-secondary' : 'text-slate-400'
            }`}
          >
            Certifications
          </h3>

          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 cert-scroll">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
