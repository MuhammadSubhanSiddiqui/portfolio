import { useTheme } from '../lib/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="about"
      className={`py-24 ${isDark ? 'bg-surface/30' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* About section content */}
      </div>
    </section>
  )
}
