import { useState } from 'react'
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'
import { CONTACT_INFO } from '../../lib/contact'

function CopyEmailButton({ email, isDark }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`rounded-lg p-1.5 transition-colors ${
        isDark
          ? 'text-text-secondary hover:bg-white/10 hover:text-text-primary'
          : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
      }`}
      aria-label={copied ? 'Email copied' : 'Copy email address'}
    >
      {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
    </button>
  )
}

function DetailRow({ icon: Icon, label, children, isDark }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`mt-0.5 rounded-lg p-2.5 ${
          isDark ? 'bg-white/5 text-accent-from' : 'bg-indigo-50 text-indigo-600'
        }`}
      >
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`text-xs font-medium uppercase tracking-wider ${
            isDark ? 'text-text-secondary' : 'text-slate-400'
          }`}
        >
          {label}
        </p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  )
}

export default function ContactDetails() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="space-y-6">
      <DetailRow icon={Mail} label="Email" isDark={isDark}>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className={`text-sm font-medium transition-colors hover:underline ${
              isDark ? 'text-text-primary' : 'text-slate-900'
            }`}
          >
            {CONTACT_INFO.email}
          </a>
          <CopyEmailButton email={CONTACT_INFO.email} isDark={isDark} />
        </div>
      </DetailRow>

      <DetailRow icon={Phone} label="Phone" isDark={isDark}>
        <a
          href={`tel:${CONTACT_INFO.phoneTel}`}
          className={`text-sm font-medium transition-colors hover:underline ${
            isDark ? 'text-text-primary' : 'text-slate-900'
          }`}
        >
          {CONTACT_INFO.phone}
        </a>
      </DetailRow>

      <DetailRow icon={MapPin} label="Location" isDark={isDark}>
        <p
          className={`text-sm font-medium ${
            isDark ? 'text-text-primary' : 'text-slate-900'
          }`}
        >
          {CONTACT_INFO.location}
        </p>
      </DetailRow>
    </div>
  )
}
