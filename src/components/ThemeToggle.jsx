import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`rounded-lg p-2 transition-colors ${
        isDark
          ? 'text-text-secondary hover:bg-white/10 hover:text-text-primary'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
