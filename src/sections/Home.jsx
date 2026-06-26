import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'
import { Mail } from 'lucide-react'
import { useTheme } from '../lib/ThemeContext'
import HeroBackground from '../components/hero/HeroBackground'
import { useHeroMouseGlow } from '../components/hero/useHeroMouseGlow'
import TypewriterRoles from '../components/hero/TypewriterRoles'
import MagneticButton from '../components/hero/MagneticButton'
import ScrollIndicator from '../components/hero/ScrollIndicator'

const SOCIAL_LINKS = [
  { href: 'https://github.com/MuhammadSubhanSiddiqui', label: 'GitHub', icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/muhammadsubhansiddiqui/',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
  { href: 'https://www.kaggle.com/msubhansiddiqui', label: 'Kaggle', icon: SiKaggle },
  { href: 'mailto:subhansiddiquiau@gmail.com', label: 'Email', icon: Mail },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { onMouseMove, onMouseLeave, glowElement } = useHeroMouseGlow(isDark)

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden pt-20 ${
        isDark ? 'bg-background' : 'bg-slate-50'
      }`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <HeroBackground isDark={isDark} />
      {glowElement}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className={`mb-6 max-w-xl text-sm font-medium leading-relaxed sm:text-base ${
              isDark ? 'text-text-secondary' : 'text-slate-500'
            }`}
          >
            I don&apos;t just study AI — I build AI systems that solve real problems.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h1
              className={`font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl ${
                isDark ? 'text-text-primary' : 'text-slate-900'
              }`}
            >
              Muhammad Subhan{' '}
              <span className="bg-accent-gradient bg-clip-text text-transparent">Siddiqui</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-5 sm:mt-6">
            <TypewriterRoles />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
              isDark ? 'text-text-secondary' : 'text-slate-600'
            }`}
          >
            I build end-to-end AI systems — from fine-tuned NLP models to production-deployed
            full-stack apps.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                isDark
                  ? 'border border-white/10 bg-white/5 text-text-primary hover:border-white/20 hover:bg-white/10'
                  : 'border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:shadow'
              }`}
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                isDark
                  ? 'border border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
                  : 'border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              Download Resume
            </a>

            <MagneticButton
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-shadow hover:shadow-indigo-500/40"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-5">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className={`transition-colors ${
                  isDark
                    ? 'text-text-secondary hover:text-text-primary'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
