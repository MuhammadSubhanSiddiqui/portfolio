import { useEffect, useState } from 'react'
import { useTheme } from '../../lib/ThemeContext'

const ROLES = [
  'AI Engineer',
  'Full-Stack Developer',
  'LLM Application Developer',
  'Agentic Systems Builder',
]

export default function TypewriterRoles() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const typingSpeed = isDeleting ? 32 : 58

    if (!isDeleting && displayText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 1800)
      return () => clearTimeout(pause)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
      return
    }

    const tick = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1),
      )
    }, typingSpeed)

    return () => clearTimeout(tick)
  }, [displayText, isDeleting, roleIndex])

  return (
    <h2
      className={`font-heading text-xl font-medium tracking-tight sm:text-2xl md:text-3xl ${
        isDark ? 'text-text-secondary' : 'text-slate-500'
      }`}
    >
      <span aria-live="polite" aria-atomic="true">
        {displayText}
      </span>
      <span
        className={`ml-0.5 inline-block w-[3px] animate-pulse ${
          isDark ? 'text-accent-from' : 'text-indigo-500'
        }`}
        aria-hidden="true"
      >
        |
      </span>
    </h2>
  )
}
