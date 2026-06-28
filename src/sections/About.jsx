import { motion } from 'framer-motion'
import { Brain, Code2, Layers, Server, Network } from 'lucide-react'
import { useTheme } from '../lib/ThemeContext'
import AboutPhoto from '../components/about/AboutPhoto'
import AboutStat from '../components/about/AboutStat'
import FocusCard from '../components/about/FocusCard'
import { SECTION_REVEAL, SECTION_X_REVEAL_LEFT, SECTION_X_REVEAL_RIGHT } from '../lib/motion'

const STATS = [
  { value: 70, suffix: '+', label: 'LeetCode Problems' },
  { value: 98.5, decimals: 1, suffix: '%', label: 'Model Accuracy Achieved' },
  { value: 12, suffix: '+', label: 'Projects Shipped' },
]

const FOCUS_AREAS = [
  {
    title: 'Frontend',
    description: 'React, Next.js, and Vite interfaces with attention to performance, accessibility, and polish.',
    icon: Layers,
  },
  {
    title: 'Backend',
    description: 'Node.js/Express APIs, MongoDB & PostgreSQL data modeling, and services built to scale beyond prototypes.',
    icon: Server,
  },
  {
    title: 'Applied AI',
    description: 'Fine-tuned transformers (DistilBERT, PromptIR), NLP pipelines, and Gemini API integrations in production.',
    icon: Brain,
  },
  {
    title: 'Networking (Basics)',
    description: 'Foundational Cisco/TCP-IP & DNS knowledge from coursework, applied in a small personal scripting project.',
    icon: Network,
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
            variants={SECTION_X_REVEAL_LEFT}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <AboutPhoto />
          </motion.div>

          <motion.div
            variants={SECTION_X_REVEAL_RIGHT}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div
              className={`space-y-4 text-base leading-relaxed sm:text-[1.05rem] sm:leading-[1.75] ${
                isDark ? 'text-text-secondary' : 'text-slate-600'
              }`}
            >
              <p>
                I&apos;m pursuing my BSCS at Air University Islamabad (Class of 2027), working at
                the intersection of full-stack engineering and applied AI. I&apos;ve built
                production-style AI systems — a fine-tuned DistilBERT scam-detection engine at
                98.5% accuracy, a transfer-learning pipeline on the PromptIR transformer
                architecture (+4.02 dB PSNR), and Gemini API–integrated LLM applications — and I
                ship full-stack products across React/Next.js, Node.js/Express, and MongoDB/
                PostgreSQL.
              </p>
              <p>
                During a 6-month Software Engineer Fellowship at Dev Weekends (June–November
                2025), I solved 70+ LeetCode problems and delivered collaborative MERN projects
                under real team deadlines. I&apos;m active in the MLSA Think Tank and the Google
                Developer Groups on Campus Technical Team, and I&apos;m currently working through
                the IBM AI Engineering Professional Certificate and the Deep Learning
                Specialization.
              </p>
              <p>
                On the side, I have basic hands-on exposure to Cisco networking fundamentals —
                IP addressing, routing, and DNS — picked up through coursework and a small
                personal Python scripting project, but my focus stays squarely on AI and
                full-stack engineering.
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

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FOCUS_AREAS.map((area, i) => (
            <FocusCard key={area.title} {...area} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}