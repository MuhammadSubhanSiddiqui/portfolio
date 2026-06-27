import { useRef, useState } from 'react'
import { Loader2, Send } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'
import { isEmailJsConfigured } from '../../lib/contact'
import { sendContactEmail } from '../../lib/emailjs'

const INITIAL_FORM = { name: '', email: '', message: '' }

function validateForm({ name, email, message }) {
  const errors = {}
  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (!trimmedName) {
    errors.name = 'Name is required.'
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!trimmedEmail) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!trimmedMessage) {
    errors.message = 'Message is required.'
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

function getEmailJsErrorMessage(err) {
  if (err?.status === 403) {
    return 'EmailJS blocked the request. In your EmailJS dashboard → Account → Security, allow requests from this domain (e.g. localhost).'
  }
  if (err?.text) return err.text
  if (err?.message) return err.message
  return 'Something went wrong. Please try again or email me directly.'
}

export default function ContactForm({ onSuccess, onError }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [inlineError, setInlineError] = useState('')
  const botCheckRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (inlineError) setInlineError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setInlineError('')

    if (botCheckRef.current?.checked) return

    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!isEmailJsConfigured()) {
      setInlineError(
        'Email service is not configured. Add your EmailJS keys to .env and restart the dev server.',
      )
      return
    }

    setSubmitting(true)

    try {
      await sendContactEmail({
        name: form.name,
        email: form.email,
        message: form.message,
      })

      setForm(INITIAL_FORM)
      setErrors({})
      if (botCheckRef.current) botCheckRef.current.checked = false
      onSuccess?.("Message sent — I'll get back to you soon.")
    } catch (err) {
      const message = getEmailJsErrorMessage(err)
      setInlineError(message)
      onError?.(message)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
      errors[field]
        ? isDark
          ? 'border-red-500/50 bg-background'
          : 'border-red-300 bg-white'
        : isDark
          ? 'border-white/10 bg-background text-text-primary placeholder:text-text-secondary/50'
          : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-4">
      {/* Checkbox honeypot — avoids browser autofill that breaks text-based traps */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact_bot_check">Subscribe to newsletter</label>
        <input
          ref={botCheckRef}
          type="checkbox"
          id="contact_bot_check"
          name="contact_bot_check"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className={`mb-1.5 block text-sm font-medium ${
            isDark ? 'text-text-primary' : 'text-slate-700'
          }`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={inputClass('name')}
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className={`mb-1.5 block text-sm font-medium ${
            isDark ? 'text-text-primary' : 'text-slate-700'
          }`}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass('email')}
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className={`mb-1.5 block text-sm font-medium ${
            isDark ? 'text-text-primary' : 'text-slate-700'
          }`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClass('message')} resize-none`}
          placeholder="Tell me about the role or project..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {inlineError && (
        <p className="text-sm text-red-500" role="alert">
          {inlineError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:shadow-indigo-500/35 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
