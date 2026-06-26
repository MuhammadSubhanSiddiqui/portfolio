import { useTheme } from '../lib/ThemeContext'

export default function Projects() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="projects"
      className={`py-24 ${isDark ? 'bg-surface/30' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Projects section content */}
      </div>
    </section>
  )
}
