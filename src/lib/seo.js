/**
 * Site-wide SEO constants — update SITE_URL when you deploy.
 */
export const SITE_URL = 'https://muhammadsubhansiddiqui.com'

export const SEO = {
  title: 'Muhammad Subhan Siddiqui | AI Engineer & Full-Stack Developer',
  description:
    'Portfolio of Muhammad Subhan Siddiqui — AI/ML and full-stack engineer specializing in LLM applications, agentic systems, and production-deployed NLP/computer vision models. BSCS student at Air University Islamabad.',
  keywords:
    'AI Engineer, Full Stack Developer, Machine Learning Engineer, LLM Developer, NLP Engineer, MERN Stack Developer, Pakistan AI Engineer, Muhammad Subhan Siddiqui',
  ogImage: '/og-image.png',
  twitterHandle: '@MuhammadSubhanS', // update if you have one
}

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Subhan Siddiqui',
  jobTitle: 'AI Engineer & Full-Stack Developer',
  url: SITE_URL,
  sameAs: [
    'https://github.com/MuhammadSubhanSiddiqui',
    'https://www.linkedin.com/in/muhammadsubhansiddiqui/',
    'https://www.kaggle.com/msubhansiddiqui',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Air University Islamabad',
  },
  knowsAbout: [
    'Machine Learning',
    'Natural Language Processing',
    'Full-Stack Development',
    'Computer Vision',
  ],
}
