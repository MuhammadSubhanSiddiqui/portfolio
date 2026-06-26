import { useCountUp } from '../../lib/useCountUp'
import { useTheme } from '../../lib/ThemeContext'

export default function AboutStat({ value, decimals = 0, prefix = '', suffix = '', label }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { ref, formatted } = useCountUp(value, { decimals })

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark ? 'text-text-primary' : 'text-slate-900'
        }`}
      >
        <span className="bg-accent-gradient bg-clip-text text-transparent">
          {prefix}
          {formatted}
          {suffix}
        </span>
      </p>
      <p
        className={`mt-1 text-xs font-medium uppercase tracking-wide sm:text-sm ${
          isDark ? 'text-text-secondary' : 'text-slate-500'
        }`}
      >
        {label}
      </p>
    </div>
  )
}
