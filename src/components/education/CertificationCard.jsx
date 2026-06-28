import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'

const PROVIDER_COLORS = {
  Kaggle: 'from-sky-500/20 to-blue-600/10',
  'DeepLearning.AI / Coursera': 'from-emerald-500/20 to-teal-600/10',
  'Google / Coursera': 'from-blue-500/20 to-indigo-600/10',
}

function getProviderGradient(provider) {
  return PROVIDER_COLORS[provider] ?? 'from-indigo-500/15 to-violet-500/10'
}

function CertificationImage({ cert, isDark }) {
  if (cert.image) {
    return (
      <img
        src={cert.image}
        alt={`${cert.name} certification badge from ${cert.provider} — Muhammad Subhan Siddiqui`}
        className="block h-auto w-full"
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${getProviderGradient(cert.provider)} ${
            isDark ? 'text-text-secondary' : 'text-slate-400'
      }`}
    >
      <Award size={28} strokeWidth={1.25} />
      <span className="mt-2 px-3 text-center text-[10px] font-medium uppercase tracking-wider opacity-70">
        {cert.provider.split('/')[0].trim()}
      </span>
    </div>
  )
}

export default function CertificationCard({ cert, index }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group w-[260px] shrink-0 snap-start overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 sm:w-[280px] ${
        isDark
          ? 'border-white/8 bg-surface/30 shadow-none hover:border-white/12 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]'
          : 'border-slate-200/80 bg-white shadow-sm hover:border-slate-300 hover:shadow-md'
      }`}
    >
      <div>
        <CertificationImage cert={cert} isDark={isDark} />
      </div>

      <div className="p-4">
        <p
          className={`text-[11px] font-medium uppercase tracking-wide ${
            isDark ? 'text-text-secondary' : 'text-slate-400'
          }`}
        >
          {cert.date}
        </p>
        <h4
          className={`mt-1 font-heading text-sm font-semibold leading-snug ${
            isDark ? 'text-text-primary' : 'text-slate-900'
          }`}
        >
          {cert.name}
        </h4>
        <p
          className={`mt-1 text-xs ${
            isDark ? 'text-text-secondary' : 'text-slate-500'
          }`}
        >
          {cert.provider}
        </p>
        {cert.topics && (
          <p
            className={`mt-2 text-[11px] leading-relaxed ${
              isDark ? 'text-text-secondary' : 'text-slate-400'
            }`}
          >
            {cert.topics}
          </p>
        )}
      </div>
    </motion.article>
  )
}
