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
    titleLines: ['Portfolio', 'Website'],
    desc: 'A responsive portfolio website built with React and SCSS to showcase projects and skills with a clean, modern design.',
    tags: ['React', 'SCSS', 'Responsive', 'Vite'],
    year: '2024',
    liveUrl: '#',
    githubUrl: '#',
    theme: 'fire',
    preview: 'portfolio',
  },
  {
    id: 'pcard1',
    num: '02',
    titleLines: ['E-commerce', 'Store'],
    desc: 'A modern e-commerce platform with React, Redux, and Stripe integration for a seamless checkout experience.',
    tags: ['React', 'Redux', 'Stripe', 'SCSS', 'Node.js'],
    year: '2024',
    liveUrl: '#',
    githubUrl: '#',
    theme: 'violet',
    preview: 'store',
  },
  {
    id: 'pcard2',
    num: '03',
    titleLines: ['Blog', 'Platform'],
    desc: 'A fully responsive blog platform with React and Node.js, featuring content management and JWT user authentication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    year: '2023',
    liveUrl: '#',
    githubUrl: '#',
    theme: 'mint',
    preview: 'blog',
  },
]