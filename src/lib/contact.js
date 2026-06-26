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
 *   VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * Template variables sent to EmailJS (match these in your EmailJS template):
 *   {{from_name}}  — sender's name
 *   {{from_email}} — sender's email (use as reply-to)
 *   {{message}}    — message body
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
}

export function isEmailJsConfigured() {
  return Boolean(
    EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey,
  )
}
