import { useTheme } from '../lib/ThemeContext'

export default function Education() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="education"
      className={`py-24 ${isDark ? 'bg-surface/30' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Education section content */}
      </div>
    </section>
  )
}
