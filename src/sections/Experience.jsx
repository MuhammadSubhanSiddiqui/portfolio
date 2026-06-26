import { motion } from 'framer-motion'
import { useTheme } from '../lib/ThemeContext'
import { experienceItems, communityRoles } from '../lib/experience'
import TimelineTrack from '../components/experience/TimelineTrack'
import TimelineNode from '../components/experience/TimelineNode'
import CommunityTimelineNode from '../components/experience/CommunityTimelineNode'

export default function Experience() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="experience"
      className={`py-24 sm:py-28 ${isDark ? 'bg-background' : 'bg-slate-50'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className={`mb-2 text-sm font-medium uppercase tracking-[0.2em] ${
              isDark ? 'text-accent-from' : 'text-indigo-600'
            }`}
          >
            Experience
          </p>
          <h2
            className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            Where I&apos;ve built momentum
          </h2>
          <p
            className={`mt-3 max-w-2xl text-base ${
              isDark ? 'text-text-secondary' : 'text-slate-600'
            }`}
          >
            Fellowship training under real deadlines, plus community leadership that keeps me
            shipping alongside peers.
          </p>
        </motion.div>

        <div className="mt-14 md:mt-16">
          <TimelineTrack>
            {experienceItems.map((item, index) => (
              <TimelineNode key={item.id} item={item} index={index} variant="primary" />
            ))}
            <CommunityTimelineNode roles={communityRoles} index={experienceItems.length} />
          </TimelineTrack>
        </div>
      </div>
    </section>
  )
}
