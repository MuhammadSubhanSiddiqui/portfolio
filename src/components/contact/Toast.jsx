import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'
import { useTheme } from '../../lib/ThemeContext'

export default function Toast({ toast, onDismiss }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(onDismiss, 4500)
    return () => clearTimeout(timer)
  }, [toast, onDismiss])

  const isSuccess = toast?.type === 'success'

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed bottom-6 left-1/2 z-[200] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-start gap-3 rounded-xl border p-4 shadow-xl ${
            isDark
              ? 'border-white/10 bg-surface'
              : 'border-slate-200 bg-white'
          }`}
          role="status"
          aria-live="polite"
        >
          {isSuccess ? (
            <CheckCircle
              size={20}
              className="shrink-0 text-emerald-500"
              aria-hidden="true"
            />
          ) : (
            <XCircle size={20} className="shrink-0 text-red-500" aria-hidden="true" />
          )}
          <p
            className={`flex-1 text-sm ${
              isDark ? 'text-text-primary' : 'text-slate-800'
            }`}
          >
            {toast.message}
          </p>
          <button
            type="button"
            onClick={onDismiss}
            className={`shrink-0 rounded p-1 transition-colors ${
              isDark
                ? 'text-text-secondary hover:text-text-primary'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
