import emailjs from '@emailjs/browser'
import { CONTACT_INFO, EMAILJS_CONFIG, isEmailJsConfigured } from './contact'

let initialized = false

function ensureEmailJsInit() {
  if (initialized || !EMAILJS_CONFIG.publicKey) return
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey })
  initialized = true
}

function buildTemplateParams({ name, email, message }) {
  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  return {
    from_name: trimmedName,
    from_email: trimmedEmail,
    message: trimmedMessage,
    user_name: trimmedName,
    user_email: trimmedEmail,
    user_message: trimmedMessage,
    reply_to: trimmedEmail,
    to_name: trimmedName,
    to_email: trimmedEmail,
  }
}

/**
 * Sends contact form emails via EmailJS:
 * 1. Notification to you (VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID)
 * 2. Auto-reply to the visitor (VITE_EMAILJS_TEMPLATE_ID)
 */
export async function sendContactEmail({ name, email, message }) {
  if (!isEmailJsConfigured()) {
    throw new Error('EmailJS is not configured. Check your .env file and restart the dev server.')
  }

  ensureEmailJsInit()

  const visitorParams = buildTemplateParams({ name, email, message })
  const notificationParams = {
    ...visitorParams,
    to_email: CONTACT_INFO.email,
    to_name: 'Portfolio',
  }

  await Promise.all([
    emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.notificationTemplateId,
      notificationParams,
    ),
    emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.autoReplyTemplateId,
      visitorParams,
    ),
  ])
}
