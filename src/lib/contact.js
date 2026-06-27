import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'

export const CONTACT_INFO = {
  email: 'subhansiddiquiau@gmail.com',
  phone: '+92 306 6289689',
  phoneTel: '+923066289689',
  location: 'Islamabad, Pakistan',
}

export const SOCIAL_LINKS = [
  { href: 'https://github.com/MuhammadSubhanSiddiqui', label: 'GitHub', icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/muhammadsubhansiddiqui/',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
  { href: 'https://www.kaggle.com/msubhansiddiqui', label: 'Kaggle', icon: SiKaggle },
]

/**
 * EmailJS configuration — set these in a `.env` file at the project root:
 *
 *   VITE_EMAILJS_SERVICE_ID=your_service_id
 *   VITE_EMAILJS_TEMPLATE_ID=auto_reply_template_id
 *   VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID=notification_template_id
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * Templates:
 * - VITE_EMAILJS_TEMPLATE_ID — auto-reply sent to the visitor after they submit the form.
 *   Set template "To email" to {{to_email}} (or {{user_email}}).
 * - VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID — notification sent to you with the visitor's message.
 *   Set template "To email" to your inbox or {{to_email}}.
 *
 * Shared template variables:
 *   {{from_name}} / {{user_name}} / {{to_name}}
 *   {{from_email}} / {{user_email}} / {{reply_to}} / {{to_email}}
 *   {{message}} / {{user_message}}
 *
 * EmailJS dashboard checklist:
 * 1. Email Service connected (Gmail/etc.)
 * 2. Both templates configured with the correct "To email" fields
 * 3. Account → Security → allow browser requests from localhost + your domain
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  notificationTemplateId: import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
}

export function isEmailJsConfigured() {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.autoReplyTemplateId &&
      EMAILJS_CONFIG.notificationTemplateId &&
      EMAILJS_CONFIG.publicKey,
  )
}
