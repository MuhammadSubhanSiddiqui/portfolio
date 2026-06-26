import { motion } from 'framer-motion'
import { Brain, Code2, Layers, Server } from 'lucide-react'
import { useTheme } from '../lib/ThemeContext'
import AboutPhoto from '../components/about/AboutPhoto'
import AboutStat from '../components/about/AboutStat'
import FocusCard from '../components/about/FocusCard'

const STATS = [
  { value: 70, suffix: '+', label: 'LeetCode Problems' },
  { value: 4, suffix: '+', label: 'MERN Projects Shipped' },
  { value: 98.5, decimals: 1, suffix: '%', label: 'Model Accuracy Achieved' },
]

const FOCUS_AREAS = [
  {
    title: 'Frontend',
    description: 'React-driven interfaces with attention to performance, accessibility, and polish.',
    icon: Layers,
  },
  {
    title: 'Backend',
    description: 'Node.js APIs, data modeling, and services built to scale beyond prototypes.',
    icon: Server,
  },
  {
    title: 'Applied AI',
    description: 'Fine-tuned transformers, NLP pipelines, and Gemini API integrations in production.',
    icon: Brain,
  },
  {
    title: 'Core CS Fundamentals',
    description: 'DSA, system design thinking, and problem-solving under real engineering constraints.',
    icon: Code2,
  },
]

export default function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="about"
      className={`py-24 sm:py-28 ${isDark ? 'bg-surface/30' : 'bg-white'}`}
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
            About
          </p>
          <h2
            className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            Engineering-first. Outcome-driven.
          </h2>
        </motion.div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <AboutPhoto />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`space-y-4 text-base leading-relaxed sm:text-[1.05rem] sm:leading-[1.75] ${
                isDark ? 'text-text-secondary' : 'text-slate-600'
              }`}
            >
              <p>
                I&apos;m pursuing my BSCS at Air University Islamabad (Class of 2027), working at
                the intersection of full-stack engineering and intelligent software agents.
                I&apos;ve built production AI systems — fine-tuned DistilBERT transformers, NLP
                pipelines, and LLM-integrated applications using the Gemini API — and I ship
                end-to-end products on the MERN stack.
              </p>
              <p>
                During a 6-month Software Engineer Fellowship at Dev Weekends (June–November 2025),
                I solved 70+ LeetCode problems and delivered 4+ collaborative MERN projects under
                real team deadlines. I&apos;m active in the Microsoft Learn Student Ambassadors
                Think Tank and the Google Developer Groups on Campus Technical Team.
              </p>
              <p>
                I also bring hands-on Cisco networking and infrastructure experience — TCP/IP,
                routing, DNS, and network security — which informs how I design systems that hold up
                under load, not just in a sandbox.
              </p>
            </div>

            <div
              className={`mt-10 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-3 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              {STATS.map((stat) => (
                <AboutStat key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area, i) => (
            <FocusCard key={area.title} {...area} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
