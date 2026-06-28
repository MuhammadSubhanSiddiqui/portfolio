import introToMlImg from '../images/certifications/intro-to-machine-learning.png'
import pythonImg from '../images/certifications/python.png'
import computerNetworkingImg from '../images/certifications/computer-networking.jpeg'
import aiForEveryoneImg from '../images/certifications/ai-for-everyone.jpeg'
import dataEverywhereImg from '../images/certifications/data-data-everywhere.jpeg'
import technicalSupportImg from '../images/certifications/technical-support.jpeg'
import googleSoftSkillsImg from '../images/certifications/google-soft-skills-program.jpg'
import programmingFundamentalsImg from '../images/certifications/programming-fundamentals.jpeg'

export const education = {
  degree: 'BS Computer Science',
  institution: 'Air University Islamabad',
  period: '2023 – 2027',
  status: 'Expected',
  coursework: [
    'OOP',
    'Data Structures & Algorithms',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'Artificial Intelligence',
    'Software Engineering',
    'Data Science',
    'Digital Image Processing',
    'Full Stack Web Development',
  ],
}

/**
 * Certifications — add badge screenshots in `src/images/certifications/`,
 * import them above, and set `image` on each entry.
 *
 * Sorted most-recent first. `verifyUrl` is optional — wire it up to a "Verify" button/link
 * on the certification card if you want clickable verification.
 */
export const certifications = [
  {
    id: 'intro-ml-kaggle',
    name: 'Intro to Machine Learning',
    provider: 'Kaggle',
    date: 'May 2026',
    image: introToMlImg,
    topics: 'Supervised Learning, Decision Trees, Regression, Scikit-Learn',
    verifyUrl: null,
  },
  {
    id: 'python-kaggle',
    name: 'Python',
    provider: 'Kaggle',
    date: 'April 2026',
    image: pythonImg,
    topics: 'Data Structures, Control Flow, Lambdas, Scripting Core',
    verifyUrl: null,
  },
  {
    id: 'computer-networking',
    name: 'The Bits and Bytes of Computer Networking',
    provider: 'Google / Coursera',
    date: 'May 2025',
    image: computerNetworkingImg,
    topics: 'TCP/IP, DNS, Routing, Network Security',
    verifyUrl: 'https://coursera.org/verify/HFUO8GZTKE4O',
  },
  {
    id: 'ai-for-everyone',
    name: 'AI for Everyone',
    provider: 'DeepLearning.AI / Coursera',
    date: 'April 2025',
    image: aiForEveryoneImg,
    topics: 'AI Strategy, Neural Networks, Machine Learning Project Workflows',
    verifyUrl: 'https://coursera.org/verify/AVB9929XIQJI',
  },
  {
    id: 'foundations-data-everywhere',
    name: 'Foundations: Data, Data, Everywhere',
    provider: 'Google / Coursera',
    date: 'March 2025',
    image: dataEverywhereImg,
    topics: 'Data Analysis Foundations, Data Ecosystem, Ecosystem Lifecycle',
    verifyUrl: 'https://coursera.org/verify/EMPT47F13V2A',
  },
  {
    id: 'technical-support-fundamentals',
    name: 'Technical Support Fundamentals',
    provider: 'Google / Coursera',
    date: 'March 2025',
    image: technicalSupportImg,
    topics: 'IT Support Basics, Troubleshooting, Customer Service, Systems Infrastructure',
    verifyUrl: 'https://coursera.org/verify/4A2MOQUW8E7O',
  },
  {
    id: 'google-soft-skills',
    name: 'Google Soft Skills Program',
    provider: 'Google / PAFLA',
    date: 'December 2024',
    image: googleSoftSkillsImg,
    topics: 'Communication, Professionalism, Workplace Soft Skills',
    verifyUrl: null,
  },
  {
    id: 'programming-fundamentals',
    name: 'Programming Fundamentals',
    provider: 'Duke University / Coursera',
    date: 'November 2023',
    image: programmingFundamentalsImg,
    topics: 'Core Programming Concepts, Problem Solving, Algorithm Design',
    verifyUrl: 'https://coursera.org/verify/GYGFL52BZMMF',
  },
]