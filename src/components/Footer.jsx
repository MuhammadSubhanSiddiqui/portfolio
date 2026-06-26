import { useTheme } from '../lib/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const year = new Date().getFullYear()

  return (
    <footer
      className={`border-t py-8 ${
        isDark ? 'border-white/10 bg-surface/50' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-sm ${
            isDark ? 'text-text-secondary' : 'text-slate-500'
          }`}
        >
          &copy; {year} Muhammad Subhan Siddiqui. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
