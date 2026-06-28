import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../lib/ThemeContext'
import { NAV_LINKS } from '../lib/navigation'
import ScrollProgress from './ScrollProgress'
import { EASE_OUT } from '../lib/motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    let frame = 0
    const handleScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        onScroll()
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  const isDark = theme === 'dark'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'glass shadow-lg shadow-black/20'
            : 'glass-light shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a
          href="#home"
          className={`font-heading text-lg font-semibold tracking-tight transition-colors ${
            isDark ? 'text-text-primary hover:text-white' : 'text-slate-900 hover:text-indigo-600'
          }`}
        >
          MSS
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className={`rounded-lg p-2 md:hidden ${
              isDark
                ? 'text-text-secondary hover:bg-white/10 hover:text-text-primary'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <ScrollProgress />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`fixed left-0 right-0 top-[4.5rem] border-t md:hidden ${
              isDark ? 'border-white/10 bg-background/95' : 'border-slate-200 bg-white/95'
            } backdrop-blur-md`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
          >
            <ul className="flex max-h-[calc(100vh-4.5rem)] flex-col overflow-y-auto px-4 py-3 shadow-xl">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isDark
                        ? 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
