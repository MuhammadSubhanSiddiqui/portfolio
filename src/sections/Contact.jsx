import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../lib/ThemeContext'
import { SOCIAL_LINKS } from '../lib/contact'
import ContactDetails from '../components/contact/ContactDetails'
import ContactForm from '../components/contact/ContactForm'
import Toast from '../components/contact/Toast'
import { SECTION_REVEAL, SECTION_X_REVEAL_LEFT, SECTION_X_REVEAL_RIGHT } from '../lib/motion'

export default function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [toast, setToast] = useState(null)

  const dismissToast = useCallback(() => setToast(null), [])

  const handleSuccess = (message) => setToast({ type: 'success', message })
  const handleError = (message) => setToast({ type: 'error', message })

  return (
    <section
      id="contact"
      className={`py-24 sm:py-28 ${isDark ? 'bg-background' : 'bg-slate-50'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={SECTION_REVEAL}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-2xl"
        >
          <p
            className={`mb-2 text-sm font-medium uppercase tracking-[0.2em] ${
              isDark ? 'text-accent-from' : 'text-indigo-600'
            }`}
          >
            Contact
          </p>
          <h2
            className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            Let&apos;s Build Something
          </h2>
          <p
            className={`mt-3 text-base ${
              isDark ? 'text-text-secondary' : 'text-slate-600'
            }`}
          >
            Open to AI/ML and full-stack engineering internships and collaborations.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={SECTION_X_REVEAL_LEFT}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <ContactDetails />

            <div className="mt-10">
              <p
                className={`mb-4 text-xs font-medium uppercase tracking-wider ${
                  isDark ? 'text-text-secondary' : 'text-slate-400'
                }`}
              >
                Connect
              </p>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`rounded-lg p-2.5 transition-colors ${
                      isDark
                        ? 'text-text-secondary hover:bg-white/10 hover:text-text-primary'
                        : 'text-slate-400 hover:bg-white hover:text-slate-700 hover:shadow-sm'
                    }`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={SECTION_X_REVEAL_RIGHT}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`relative rounded-xl p-6 sm:p-7 ${
              isDark ? 'glass' : 'glass-light'
            }`}
          >
            <h3
              className={`mb-5 font-heading text-lg font-semibold ${
                isDark ? 'text-text-primary' : 'text-slate-900'
              }`}
            >
              Send a message
            </h3>
            <ContactForm onSuccess={handleSuccess} onError={handleError} />
          </motion.div>
        </div>
      </div>

      <Toast toast={toast} onDismiss={dismissToast} />
    </section>
  )
}
