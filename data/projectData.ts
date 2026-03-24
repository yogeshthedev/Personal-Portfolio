export type ProjectTheme = 'fire' | 'violet' | 'mint'

export type ProjectPreviewVariant = 'portfolio' | 'store' | 'blog'

export type ProjectItem = {
  id: string
  num: string
  titleLines: string[]
  desc: string
  tags: string[]
  year: string
  liveUrl: string
  githubUrl: string
  theme: ProjectTheme
  preview: ProjectPreviewVariant
}

export const projectData: ProjectItem[] = [
  {
    id: 'pcard0',
    num: '01',
    titleLines: ['AI Recipe', 'Generator'],
    desc: 'AI-powered full-stack recipe app — generates title, ingredients & step-by-step process from user input. Guest users can try freely; login required to save recipes with JWT auth and MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'AI API'],
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/yogeshthedev/Recipe-Website',
    theme: 'fire',
    preview: 'blog',
  },
  {
    id: 'pcard1',
    num: '02',
    titleLines: ['TaskFlow', 'Task Manager'],
    desc: 'Full-stack task management app with dedicated frontend and backend. Create, edit, delete and track tasks via REST API with MongoDB persistence.',
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/yogeshthedev/TaskFlow',
    theme: 'violet',
    preview: 'store',
  },
  {
    id: 'pcard2',
    num: '03',
    titleLines: ['Windows 11', 'OS Clone'],
    desc: 'Pixel-perfect Windows 11 desktop UI with draggable windows, taskbar, start menu and live clock. Redux for global state management, deployed live on Vercel.',
    tags: ['React', 'Redux', 'CSS3', 'Vite'],
    year: '2024',
    liveUrl: 'https://window-11-os-react.vercel.app',
    githubUrl: 'https://github.com/yogeshthedev/window-11-os-react',
    theme: 'mint',
    preview: 'portfolio',
  },
]