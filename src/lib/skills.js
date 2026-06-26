import { Brain, Code2, Database, Layers, Wrench } from 'lucide-react'

export const SKILL_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'tools', label: 'Tools' },
]

/**
 * Skill categories — add items to `skills` or duplicate a block to extend.
 * `filters`: which filter tabs show this card ('all' is implicit via the All tab).
 */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    filters: ['all'],
    skills: ['Python', 'C/C++', 'JavaScript', 'SQL'],
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
      'NLP',
      'Computer Vision',
    ],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack & Frameworks',
    icon: Layers,
    filters: ['all', 'full-stack'],
    skills: [
      'ReactJS',
      'Node.js',
      'Express.js',
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
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    id: 'tools-devops',
    title: 'Tools & DevOps',
    icon: Wrench,
    filters: ['all', 'tools'],
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Google Colab', 'Hugging Face Spaces'],
  },
]

export function getSkillCategoriesByFilter(filterId) {
  if (filterId === 'all') return skillCategories
  return skillCategories.filter((cat) => cat.filters.includes(filterId))
}
