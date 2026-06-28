import { ArrowUp } from 'lucide-react'
import { useTheme } from '../lib/ThemeContext'
import { SOCIAL_LINKS } from '../lib/contact'
import { NAV_LINKS } from '../lib/navigation'

const SEO_SUMMARY =
  'AI/ML and full-stack engineer portfolio of Muhammad Subhan Siddiqui — BSCS student at Air University Islamabad building LLM applications, agentic systems, and production MERN stack products.'

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className={`border-t ${
        isDark ? 'border-white/10 bg-surface/50' : 'border-slate-200 bg-white'
      }`}
    >
      <div
        className={`border-b py-10 text-center ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}
      >
        <p
          className={`font-heading text-xl font-semibold tracking-tight sm:text-2xl ${
            isDark ? 'text-text-primary' : 'text-slate-900'
          }`}
        >
          Let&apos;s Engineer Something{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">Meaningful.</span>
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-text-secondary hover:text-text-primary'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex justify-center gap-3">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`rounded-lg p-2.5 transition-colors ${
                isDark
                  ? 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                  : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
              }`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p
          className={`mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed ${
            isDark ? 'text-text-secondary' : 'text-slate-400'
          }`}
        >
          {SEO_SUMMARY}
        </p>

        <div
          className={`mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <p
            className={`text-center text-sm sm:text-left ${
              isDark ? 'text-text-secondary' : 'text-slate-500'
            }`}
          >
            &copy; {year} Muhammad Subhan Siddiqui. Built with React &amp; Tailwind CSS.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 ${
              isDark
                ? 'border-white/10 text-text-secondary hover:border-white/20 hover:bg-white/5 hover:text-text-primary'
                : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
