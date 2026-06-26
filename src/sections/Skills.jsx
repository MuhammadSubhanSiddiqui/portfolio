import { useTheme } from '../lib/ThemeContext'

export default function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="skills"
      className={`py-24 ${isDark ? 'bg-background' : 'bg-slate-50'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Skills section content */}
      </div>
    </section>
  )
}
