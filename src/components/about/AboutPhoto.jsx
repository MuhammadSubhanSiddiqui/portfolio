import { User } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'

export default function AboutPhoto() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="group relative mx-auto w-full max-w-sm lg:max-w-none">
      <div
        className={`absolute -inset-3 rounded-2xl transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 ${
          isDark
            ? 'border border-white/10 bg-transparent'
            : 'border border-slate-200 bg-transparent'
        }`}
        aria-hidden="true"
      />
      <div
        className={`relative rounded-2xl p-1 transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 ${
          isDark
            ? 'bg-gradient-to-br from-accent-from/40 to-accent-to/40'
            : 'bg-gradient-to-br from-indigo-400/30 to-violet-400/30'
        }`}
      >
        <div
          className={`rounded-xl border p-1 ${
            isDark ? 'border-white/10 bg-surface' : 'border-slate-200 bg-white'
          }`}
        >
          <div
            className={`flex aspect-[4/5] items-center justify-center rounded-lg ${
              isDark ? 'bg-background/60' : 'bg-slate-100'
            }`}
          >
            <div className="text-center">
              <User
                size={48}
                strokeWidth={1.25}
                className={`mx-auto mb-3 ${isDark ? 'text-text-secondary/50' : 'text-slate-300'}`}
              />
              <p
                className={`text-xs font-medium uppercase tracking-widest ${
                  isDark ? 'text-text-secondary/60' : 'text-slate-400'
                }`}
              >
                Photo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
