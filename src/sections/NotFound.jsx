import { useTheme } from '../lib/ThemeContext'

export default function NotFound() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main
      className={`min-h-screen px-4 py-28 sm:px-6 lg:px-8 ${
        isDark ? 'bg-background text-text-primary' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div
        className={`mx-auto flex max-w-3xl flex-col items-start gap-6 rounded-3xl border p-8 sm:p-12 lg:p-16 ${
          isDark ? 'border-white/10 bg-surface/60' : 'border-slate-200 bg-white'
        }`}
      >
        <p className={`text-sm font-medium uppercase tracking-[0.24em] ${isDark ? 'text-accent-from' : 'text-indigo-600'}`}>
          404
        </p>
        <h1 className={`font-heading text-4xl font-bold tracking-tight sm:text-5xl ${isDark ? 'text-text-primary' : 'text-slate-900'}`}>
          Page not found.
        </h1>
        <p className={`max-w-xl text-base leading-relaxed ${isDark ? 'text-text-secondary' : 'text-slate-600'}`}>
          The route you opened does not exist. Use the navigation to return to the portfolio or jump back to the home section.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#home"
            className="inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white"
          >
            Go Home
          </a>
          <a
            href="#projects"
            className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold ${
              isDark ? 'border-white/10 text-text-primary hover:bg-white/5' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            View Projects
          </a>
        </div>
      </div>
    </main>
  )
}
