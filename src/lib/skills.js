import { Brain, Code2, Database, Layers, Wrench, Shield } from 'lucide-react'

export const SKILL_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'tools', label: 'Tools' },
]

/**
 * Skill categories — add items to `skills` or duplicate a block to extend.
 * `filters`: which filter tabs show this card ('all' is implicit via the All tab).
 *
 * Built from a full scan of all public GitHub repos:
 * ai_financial_scam-detection, PromptIR, ai-ebook-generator, task-manager, CRUD,
 * study-tracker, trippy, NovaMart, reporoast, hospital-management-system,
 * DNS_cachemonitoring, gloria-beans-coffee-store, tic-tac-toe.
 */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    filters: ['all'],
    skills: ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'C#', 'SQL'],
  },
  {
    id: 'ai-ml-data',
    title: 'AI/ML & Data',
    icon: Brain,
    filters: ['all', 'ai-ml'],
    skills: [
      'PyTorch',
      'OpenCV',
      'NumPy',
      'Scikit-image',
      'Matplotlib',
      'Hugging Face',
      'LLM Integration (Gemini API)',
      'RAG',
      'Fine-tuning',
      'Transformers',
      'DistilBERT',
      'spaCy',
      'NLP',
      'Computer Vision',
      'Transfer Learning',
    ],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack & Frameworks',
    icon: Layers,
    filters: ['all', 'full-stack'],
    skills: [
      'ReactJS',
      'Next.js',
      'Vite',
      'Node.js',
      'Express.js',
      'ASP.NET',
      'Tailwind CSS',
      'RESTful APIs',
      'JWT Authentication',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    filters: ['all', 'full-stack'],
    skills: ['MongoDB', 'PostgreSQL', 'SQL Server (T-SQL)', 'PL/pgSQL'],
  },
  {
    id: 'networking-security',
    title: 'Networking & Security',
    icon: Shield,
    filters: ['all', 'tools'],
    skills: [
      'Cisco Networking',
      'Network Troubleshooting',
      'DNS/Network Monitoring',
      'VirusTotal API',
      'Tkinter (GUI Tooling)',
    ],
  },
  {
    id: 'tools-devops',
    title: 'Tools & DevOps',
    icon: Wrench,
    filters: ['all', 'tools'],
    skills: [
      'Git',
      'GitHub',
      'GitHub REST API',
      'Docker',
      'VS Code',
      'Google Colab',
      'Hugging Face Spaces',
      'Streamlit',
      'ESLint',
    ],
  },
]

export function getSkillCategoriesByFilter(filterId) {
  if (filterId === 'all') return skillCategories
  return skillCategories.filter((cat) => cat.filters.includes(filterId))
}