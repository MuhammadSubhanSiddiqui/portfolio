/**
 * Project categories — used by the filter bar.
 * Add new categories here and they appear automatically in the UI.
 */
export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'other', label: 'Other' },
]

/**
 * Portfolio projects data source.
 *
 * To add a project: copy an object below, set a unique `id`, fill in the fields,
 * and drop a screenshot at `image` (e.g. "/images/projects/my-project.png").
 *
 * Fields:
 * - category: "ai-ml" | "full-stack" | "other"
 * - metric: optional { chip, detail } — shown as a highlighted chip on the card
 * - links: { github?, demo?, ... } — omit keys you don't have yet
 * - caseStudy: expanded modal content (problem, approach, architecture, result)
 */
export const projects = [
  {
    id: 'ai-financial-scam-detection',
    title: 'AI Financial Scam Detection Engine',
    date: 'April 2026 – May 2026',
    category: 'ai-ml',
    categoryLabel: 'AI/ML',
    image: null,
    metric: {
      chip: '98.5% Accuracy',
      detail:
        'Fine-tuned DistilBERT with adversarial data augmentation — 98.5% detection accuracy, zero false positives on legitimate corporate finance news.',
    },
    highlights: [
      '3-layer architecture: DistilBERT intent detection, spaCy/Regex NLP extraction, Gemini 2.5 Flash verification',
      'Deployed as a containerized Streamlit app on Hugging Face Spaces',
      'Fine-tuned DistilBERT in PyTorch with adversarial data augmentation — 98.5% detection accuracy, zero false positives on legitimate corporate finance news',
    ],
    tags: ['PyTorch', 'DistilBERT', 'NLP', 'Gemini API', 'Docker', 'Streamlit'],
    links: {
      github: '#',
      demo: '#',
    },
    caseStudy: {
      problem:
        'Financial scam narratives spread quickly through news channels. The system needed to catch fraudulent intent without generating false alarms on legitimate corporate finance reporting.',
      approach:
        'Built a three-stage verification pipeline: transformer-based intent classification, rule-assisted entity extraction, and LLM-backed final verification before surfacing a verdict.',
      architecture:
        'DistilBERT intent detection → spaCy/Regex NLP extraction → Gemini 2.5 Flash verification → containerized Streamlit frontend deployed on Hugging Face Spaces.',
      result:
        'Achieved 98.5% detection accuracy with zero false positives on legitimate corporate finance news, packaged as a production-ready containerized demo.',
    },
  },
  {
    id: 'promptir-domain-adaptation',
    title: 'PromptIR Domain Adaptation',
    date: 'May 2026',
    category: 'ai-ml',
    categoryLabel: 'AI/ML',
    image: null,
    metric: {
      chip: '+4.02 dB PSNR',
      detail:
        '+4.02 dB and +3.58 dB PSNR improvement on novel weather artifacts in only 3 training epochs.',
    },
    highlights: [
      'Custom ML data pipeline with Python/OpenCV synthesizing a 600-image multi-degradation dataset (noise, rain, dust) based on the DIV2K benchmark',
      'Transfer learning on the Transformer-based PromptIR architecture',
      '+4.02 dB and +3.58 dB PSNR improvement on novel weather artifacts in only 3 training epochs',
    ],
    tags: ['Computer Vision', 'Transfer Learning', 'PyTorch', 'OpenCV', 'Transformers'],
    links: {
      github: '#',
    },
    caseStudy: {
      problem:
        'General image restoration models underperform on novel weather degradations — rain, dust, and mixed noise — that differ from standard benchmark conditions.',
      approach:
        'Synthesized a targeted 600-image multi-degradation dataset from DIV2K and applied transfer learning on the PromptIR transformer architecture with a minimal training budget.',
      architecture:
        'Python/OpenCV degradation pipeline → DIV2K-derived training set (noise, rain, dust) → PromptIR transformer fine-tuning in PyTorch.',
      result:
        'Delivered +4.02 dB and +3.58 dB PSNR gains on unseen weather artifacts after only 3 training epochs.',
    },
  },
  {
    id: 'ai-ebook-generator',
    title: 'AI eBook Generator',
    date: 'Nov 2025 – Dec 2025',
    category: 'full-stack',
    categoryLabel: 'Full-Stack',
    image: null,
    metric: null,
    highlights: [
      'Full-stack AI-powered eBook platform (React/Vite + Node.js/Express/MongoDB) using the Gemini API',
      'JWT authentication, RESTful APIs, protected routing for secure user management',
      'Responsive Tailwind CSS dashboard for generating, reading, and editing AI-generated eBooks',
    ],
    tags: ['MERN', 'Gemini API', 'JWT', 'Tailwind CSS', 'REST API'],
    links: {
      github: '#',
    },
    caseStudy: {
      problem:
        'Users needed a single platform to generate, store, and edit AI-authored eBooks with secure account management — not a one-off script or disconnected tools.',
      approach:
        'Shipped a full MERN application with JWT-secured routes, Gemini-powered generation endpoints, and a responsive dashboard for the full create-read-edit loop.',
      architecture:
        'React/Vite + Tailwind CSS frontend → Express REST API with JWT middleware → MongoDB persistence → Gemini API for content generation.',
      result:
        'End-to-end eBook workflow — generate, read, and edit — behind authenticated, protected routing with a production-style API surface.',
    },
  },
]

export function getProjectsByCategory(categoryId) {
  if (categoryId === 'all') return projects
  return projects.filter((project) => project.category === categoryId)
}
