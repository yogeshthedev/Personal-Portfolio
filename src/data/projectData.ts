export type ProjectTheme = 'fire' | 'violet' | 'mint'

export type ProjectItem = {
  id: string
  num: string
  title: string
  subtitle: string
  desc: string
  category: 'Full-Stack' | 'Frontend'
  image: string
  tags: string[]
  year: string
  liveUrl: string
  githubUrl: string
  theme: ProjectTheme
  stats: { label: string; value: string }[]
  highlights: string[]
  metricsBadge: string
}

export const projectData: ProjectItem[] = [
  {
    id: 'pcard0',
    num: '01',
    title: 'AI Recipe Generator',
    subtitle: 'AI-Powered Culinary Platform',
    desc: 'Full-stack smart recipe generation web app with AI-driven culinary suggestions, ingredient substitution, step-by-step guidance, and saved user collections with JWT authentication and MongoDB.',
    category: 'Full-Stack',
    image: '/images/project-ai-recipe.svg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'OpenAI API'],
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/yogeshthedev/Recipe-Website',
    theme: 'fire',
    metricsBadge: 'AI & Full-Stack',
    stats: [
      { label: 'Latency', value: '<450ms' },
      { label: 'Security', value: 'JWT + bcrypt' },
      { label: 'Database', value: 'MongoDB Atlas' },
    ],
    highlights: [
      'Generates step-by-step gourmet recipes from user pantry ingredients',
      'Secure token auth with private recipe bookmarking and favorites',
      'Scalable Express REST API with error handling and rate limiting',
    ],
  },
  {
    id: 'pcard1',
    num: '02',
    title: 'TaskFlow Manager',
    subtitle: 'Productivity & Kanban Workspace',
    desc: 'High-performance workflow platform designed to organize, prioritize, and track development sprints with real-time status updates and a dedicated Node/Express REST backend.',
    category: 'Full-Stack',
    image: '/images/project-taskflow.svg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'CSS3'],
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/yogeshthedev/TaskFlow',
    theme: 'violet',
    metricsBadge: 'REST Architecture',
    stats: [
      { label: 'Architecture', value: 'Client-Server' },
      { label: 'State', value: 'Optimistic UI' },
      { label: 'Endpoints', value: 'Full CRUD API' },
    ],
    highlights: [
      'Interactive sprint boards with quick status updates and filtering',
      'Clean modular controller/service pattern with MongoDB schemas',
      'Optimistic state updates for instant zero-lag user feedback',
    ],
  },
  {
    id: 'pcard2',
    num: '03',
    title: 'Windows 11 OS Web Clone',
    subtitle: 'Interactive OS Experience in the Browser',
    desc: 'Pixel-perfect recreation of the Windows 11 desktop experience, complete with draggable active windows, interactive taskbar, start menu, system tray, and live clock with Redux global state.',
    category: 'Frontend',
    image: '/images/project-win11.svg',
    tags: ['React', 'Redux Toolkit', 'CSS3 Grid', 'Vite', 'TypeScript'],
    year: '2024',
    liveUrl: 'https://window-11-os-react.vercel.app',
    githubUrl: 'https://github.com/yogeshthedev/window-11-os-react',
    theme: 'mint',
    metricsBadge: 'Desktop Shell',
    stats: [
      { label: 'Deployment', value: 'Vercel CDN' },
      { label: 'State Tree', value: 'Redux Window Mgr' },
      { label: 'Performance', value: '60 FPS Physics' },
    ],
    highlights: [
      'Full multi-window window manager with draggable window frames',
      'Functional Start menu, live calendar/clock, and quick-action tray',
      'Fluid CSS animations and responsive desktop compositor',
    ],
  },
]
