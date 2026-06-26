import { useTheme } from '../../lib/ThemeContext'

export default function SkillsFilter({ filters, activeFilter, onChange }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      className={`inline-flex flex-wrap gap-1 rounded-full p-1 ${
        isDark ? 'bg-white/5' : 'bg-slate-100'
      }`}
      role="tablist"
      aria-label="Filter skills by category"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isActive
                ? 'bg-accent-gradient text-white shadow-md shadow-indigo-500/20'
                : isDark
                  ? 'text-text-secondary hover:text-text-primary'
                  : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
