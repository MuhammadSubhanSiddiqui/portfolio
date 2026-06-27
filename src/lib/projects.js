import aiScamDetectionImg from '../images/projects/ai-scam-detection.jpg'
import promptIrImg from '../images/projects/prompt-ir.JPG'
import eBookImg from '../images/projects/eBook.png'
import taskManagerImg from '../images/projects/task_manager.JPG'
import crudAppImg from '../images/projects/crud-app.JPG'
import studyTrackerImg from '../images/projects/study-tracker.JPG'
import novamartImg from '../images/projects/novamart.JPG'
import repoRoastImg from '../images/projects/repo-roast.jpg'
import hospitalManagementImg from '../images/projects/hospital-management.JPG'
import dnsCacheImg from '../images/projects/dns-cache.jpg'
import gloriaBeansImg from '../images/projects/gloria-beans.JPG'
import ticTacToeImg from '../images/projects/tic-tac-toe.JPG'
import trippyImg from '../images/projects/trippy-toe.JPG'

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
 * and drop a screenshot in `src/images/projects/`, then import it above and set `image`.
 *
 * Fields:
 * - category: "ai-ml" | "full-stack" | "other"
 * - metric: optional { chip, detail } — shown as a highlighted chip on the card
 * - links: { github?, demo?, ... } — omit keys you don't have yet
 * - caseStudy: expanded modal content (problem, approach, architecture, result)
 */
export const projects = [
  // ───────────────────────── AI / ML ─────────────────────────
  {
    id: 'ai-financial-scam-detection',
    title: 'AI Financial Scam Detection Engine',
    date: 'April 2026 – May 2026',
    category: 'ai-ml',
    categoryLabel: 'AI/ML',
    image: aiScamDetectionImg,
    metric: {
      chip: '98.5% Accuracy & Custom Dataset',
      detail:
        'Published a specialized financial scam meta-dataset on Kaggle. Fine-tuned DistilBERT with adversarial data augmentation, achieving zero false positives on corporate finance news.',
    },
    highlights: [
      'Curated and published the "Financial Scam and Deceptive Text Meta-Dataset" on Kaggle for benchmark training',
      'Engineered a 3-layer architecture: DistilBERT intent detection, spaCy/Regex NLP extraction, and Gemini 2.5 Flash verification',
      'Fine-tuned DistilBERT in PyTorch with custom augmented data to eliminate false alarms on legitimate financial news',
      'Deployed the production-ready pipeline as a containerized Streamlit application on Hugging Face Spaces',
    ],
    tags: ['PyTorch', 'DistilBERT', 'NLP', 'Gemini API', 'Kaggle Datasets', 'Docker', 'Streamlit'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/ai_financial_scam-detection',
      dataset: 'https://www.kaggle.com/datasets/msubhansiddiqui/financial-scam-and-deceptive-text-meta-dataset', 
      demo: 'https://huggingface.co/spaces/msubhansiddiqui/financial-scam-detection',
    },
    caseStudy: {
      problem:
        'Financial scam narratives spread quickly through news channels. The system needed a robust, non-generic dataset to catch fraudulent intent without generating false alarms on legitimate corporate finance reporting.',
      approach:
        'Curated and open-sourced a custom meta-dataset on Kaggle. Built a three-stage verification pipeline: transformer-based intent classification trained on the dataset, rule-assisted entity extraction, and LLM-backed final verification before surfacing a verdict.',
      architecture:
        'Kaggle Meta-Dataset → DistilBERT fine-tuning → spaCy/Regex NLP extraction → Gemini 2.5 Flash verification → containerized Streamlit frontend.',
      result:
        'Achieved 98.5% detection accuracy with zero false positives on legitimate corporate finance news, open-sourcing both the training dataset and a production-ready containerized demo.',
    },
  },
  {
    id: 'promptir-domain-adaptation',
    title: 'PromptIR Domain Adaptation',
    date: 'May 2026',
    category: 'ai-ml',
    categoryLabel: 'AI/ML',
    image: promptIrImg,
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
      github: 'https://github.com/MuhammadSubhanSiddiqui/PromptIR',
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

  // ───────────────────────── Full-Stack ─────────────────────────
  {
    id: 'ai-ebook-generator',
    title: 'AI eBook Generator',
    date: 'Nov 2025 – Dec 2025',
    category: 'full-stack',
    categoryLabel: 'Full-Stack',
    image: eBookImg,
    metric: null,
    highlights: [
      'Full-stack AI-powered eBook platform (React/Vite + Node.js/Express/MongoDB) using the Gemini API',
      'JWT authentication, RESTful APIs, protected routing for secure user management',
      'Responsive Tailwind CSS dashboard for generating, reading, and editing AI-generated eBooks',
    ],
    tags: ['MERN', 'Gemini API', 'JWT', 'Tailwind CSS', 'REST API'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/ai-ebook-generator',
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
  {
    id: 'task-manager',
    title: 'Task Manager Web App',
    date: '2026',
    category: 'full-stack',
    categoryLabel: 'Full-Stack',
    image: taskManagerImg,
    metric: null,
    highlights: [
      'Full-stack task management app built with Next.js 15 (App Router) and TypeScript',
      'RESTful Next.js API routes (GET/POST/PUT/DELETE) for complete task CRUD',
      'Responsive Tailwind CSS grid UI with priority, status, and inline form validation',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/task-manager',
    },
    caseStudy: {
      problem:
        'Needed a clean, modern task-tracking app demonstrating end-to-end CRUD without relying on a separate backend service.',
      approach:
        'Used Next.js API routes as a lightweight backend with an in-memory data store, paired with a fully responsive, validated front-end UI.',
      architecture:
        'Next.js 15 App Router + TypeScript frontend → Next.js API routes (REST) → in-memory CRUD data layer.',
      result:
        'Shipped a responsive, fully functional task manager with add/edit/delete/status-toggle flows and inline validation across mobile, tablet, and desktop breakpoints.',
    },
  },
  {
    id: 'crud-app',
    title: 'CRUD App (Client + Server)',
    date: '2026',
    category: 'full-stack',
    categoryLabel: 'Full-Stack',
    image: crudAppImg,
    metric: null,
    highlights: [
      'JavaScript CRUD application with a separate client app and Node.js server',
      'Demonstrates create/read/update/delete operations across a client-server split',
    ],
    tags: ['JavaScript', 'Node.js', 'REST API'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/CRUD',
    },
    caseStudy: {
      problem: 'Needed a minimal reference implementation of a client-server CRUD flow.',
      approach: 'Split the app into a client folder and a server folder, with the server exposing CRUD endpoints consumed by the client.',
      architecture: 'JavaScript client → Node.js server → CRUD endpoints.',
      result: 'A working, self-contained CRUD reference app for create/read/update/delete operations.',
    },
  },
  {
    id: 'study-tracker',
    title: 'Study Tracker',
    date: '2025',
    category: 'full-stack',
    categoryLabel: 'Full-Stack',
    image: studyTrackerImg,
    metric: null,
    highlights: [
      'Study tracking application built with C# and ASP.NET-style HTML views',
      'Tracks study sessions/progress with a Visual Studio solution structure',
    ],
    tags: ['C#', 'ASP.NET', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/study-tracker',
    },
    caseStudy: {
      problem: 'Wanted a simple way to log and track study sessions.',
      approach: 'Built a C#-based web app using a Visual Studio solution with HTML/CSS views for the tracking interface.',
      architecture: 'C# backend logic → HTML/CSS views → Visual Studio (.sln) project structure.',
      result: 'A functional study-session tracker demonstrating C#/.NET web fundamentals.',
    },
  },
  {
    id: 'trippy',
    title: 'Trippy (Travel App)',
    date: '2025',
    category: 'full-stack',
    categoryLabel: 'Full-Stack',
    image: trippyImg,
    metric: null,
    highlights: [
      'React + Vite single-page application scaffold for a travel/trip-planning concept',
      'Configured with ESLint for code quality',
    ],
    tags: ['React', 'Vite', 'JavaScript'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/trippy',
      demo: 'https://trippy-tou.netlify.app/',
    },
    caseStudy: {
      problem: 'Early-stage React app exploring a trip-planning / travel use case.',
      approach: 'Bootstrapped with Vite + React and ESLint for a fast development loop.',
      architecture: 'React + Vite frontend.',
      result: 'Foundation in place for a travel-planning SPA (work in progress).',
    },
  },

  // ───────────────────────── Other ─────────────────────────
  {
    id: 'novamart',
    title: 'NovaMart — Database Systems Lab Project',
    date: 'Spring 2026',
    category: 'other',
    categoryLabel: 'Database / ADBMS',
    image: novamartImg,
    metric: null,
    highlights: [
      'Advanced Database Management Systems (ADBMS) lab project',
      'PL/pgSQL and T-SQL stored procedures, triggers, and queries across 12 structured parts',
      'Includes a full lab report (ADBMS Lab Project Spring 2026.pdf)',
    ],
    tags: ['PostgreSQL', 'PL/pgSQL', 'T-SQL', 'SQL Server'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/NovaMart',
    },
    caseStudy: {
      problem: 'University ADBMS coursework requiring a multi-part relational database design and query implementation.',
      approach: 'Implemented the schema and logic across 12 incremental parts using both PL/pgSQL (PostgreSQL) and T-SQL (SQL Server).',
      architecture: 'Relational schema → PL/pgSQL procedures/triggers → T-SQL equivalents → documented lab report.',
      result: 'A complete, graded ADBMS lab submission covering core relational database concepts end-to-end.',
    },
  },
  {
    id: 'reporoast',
    title: 'RepoRoast',
    date: '2026',
    category: 'other',
    categoryLabel: 'Dev Tooling',
    image: repoRoastImg,
    metric: null,
    highlights: [
      'Node.js CLI tool that grades a GitHub repository\'s maintainer responsiveness',
      'Consumes the GitHub REST API; supports authenticated requests via GITHUB_TOKEN to avoid rate limits',
    ],
    tags: ['Node.js', 'GitHub API', 'CLI'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/reporoast',
    },
    caseStudy: {
      problem: 'Hard to quickly gauge how responsive a repo\'s maintainers are before relying on it.',
      approach: 'Built a CLI that queries the GitHub API for issue/PR response times and produces a responsiveness grade.',
      architecture: 'Node.js CLI → GitHub REST API calls → grading logic → terminal report.',
      result: 'A working CLI utility for evaluating open-source repo maintainer responsiveness.',
    },
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    date: '2025',
    category: 'other',
    categoryLabel: 'C++ Console App',
    image: hospitalManagementImg,
    metric: null,
    highlights: [
      'C++/C console-based hospital management system',
      'Core OOP/data-structures coursework project',
    ],
    tags: ['C++', 'C', 'OOP'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/hospital-management-system',
    },
    caseStudy: {
      problem: 'Academic project to model hospital operations (patients, records, etc.) using core programming fundamentals.',
      approach: 'Implemented as a C++/C console application focused on OOP structure and data handling.',
      architecture: 'C++ classes/structs → console I/O → in-memory or file-based records.',
      result: 'A finalized console-based hospital management system demonstrating C++ fundamentals.',
    },
  },
  {
    id: 'dns-cache-monitoring',
    title: 'DNS Cache Monitoring Tool',
    date: '2025',
    category: 'other',
    categoryLabel: 'Networking / Security',
    image: dnsCacheImg,
    metric: null,
    highlights: [
      'Python GUI tool (Tkinter) that scans the network for connected devices and DNS cache entries',
      'Cross-checks IPs against the VirusTotal API for malicious activity',
      'Sends automated email alerts with detailed threat reports when malicious IPs are detected',
    ],
    tags: ['Python', 'Tkinter', 'Networking', 'VirusTotal API', 'Security'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/DNS_cachemonitoring',
    },
    caseStudy: {
      problem: 'Needed a lightweight way to detect potentially malicious IPs lurking in a local network\'s DNS cache.',
      approach: 'Built a Python GUI app that pulls ARP/DNS cache data, checks each IP via VirusTotal, and emails alerts on threats found.',
      architecture: 'Tkinter GUI → ARP/DNS cache scan (ipconfig/displaydns) → VirusTotal API lookup → logging → SMTP email alert.',
      result: 'A functioning network security utility combining Cisco-style networking knowledge with Python tooling — ties directly into networking/Cisco background.',
    },
  },
  {
    id: 'gloria-beans-coffee-store',
    title: 'Gloria Beans Coffee Store',
    date: '2025',
    category: 'full-stack',
    categoryLabel: 'Static Website',
    image: gloriaBeansImg,
    metric: null,
    highlights: [
      'Multi-page static coffee shop website (Home, Store, About, Franchises, Contact, Login)',
      'Built with plain HTML and CSS',
    ],
    tags: ['HTML', 'CSS'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/gloria-beans-coffee-store',
      demo: 'https://muhammadsubhansiddiqui.github.io/gloria-beans-coffee-store/'
    },
    caseStudy: {
      problem: 'Early front-end practice project: build a complete multi-page business website from scratch.',
      approach: 'Hand-coded each page (store, about, franchises, contact, login) with shared styling.',
      architecture: 'Static HTML pages → shared CSS stylesheets → image assets.',
      result: 'A complete, multi-page static website demonstrating core HTML/CSS layout skills.',
    },
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    date: '2024',
    category: 'full-stack',
    categoryLabel: 'Mini Project',
    image: ticTacToeImg,
    metric: null,
    highlights: [
      'Classic Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript',
    ],
    tags: ['JavaScript', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/MuhammadSubhanSiddiqui/tic-tac-toe',
      demo: 'https://muhammadsubhansiddiqui.github.io/tic-tac-toe/',
    },
    caseStudy: {
      problem: 'Foundational JavaScript practice project.',
      approach: 'Implemented game state, win-detection logic, and UI rendering in vanilla JS.',
      architecture: 'HTML structure → CSS styling → vanilla JS game logic.',
      result: 'A simple, fully playable two-player Tic Tac Toe game in the browser.',
    },
  },
]

export function getProjectsByCategory(categoryId) {
  if (categoryId === 'all') return projects
  return projects.filter((project) => project.category === categoryId)
}