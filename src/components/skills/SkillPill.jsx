import { useTheme } from '../../lib/ThemeContext'

export default function SkillPill({ label }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <span
      className={`inline-block cursor-default rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-[1.03] hover:border-transparent hover:bg-accent-gradient hover:text-white hover:shadow-md hover:shadow-indigo-500/20 ${
        isDark
          ? 'border-white/15 text-text-secondary'
          : 'border-slate-200 text-slate-600'
      }`}
    >
      {label}
    </span>
  )
}
