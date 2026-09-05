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
  hasLivePreview?: boolean
}

export const projectData: ProjectItem[] = [
  {
    id: 'pcard0',
    num: '01',
    title: 'DevLens – API and JSON Developer Workspace',
    subtitle: 'Developer HTTP & Payload Inspection Workspace',
    desc: 'Developer workspace for constructing HTTP requests, managing collections and environments, inspecting JSON responses, comparing payloads, and tracking request history with an Express CORS proxy fallback and line-by-line LCS diff engine.',
    category: 'Full-Stack',
    image: '/images/project-devlens.svg',
    tags: ['React', 'TypeScript', 'Express', 'MongoDB', 'Zustand', 'TanStack Query'],
    year: '2025',
    liveUrl: 'https://devlens.vercel.app',
    githubUrl: 'https://github.com/yogeshthedev/devlens',
    theme: 'violet',
    metricsBadge: 'API & Diff Tooling',
    hasLivePreview: true,
    stats: [
      { label: 'Diff Engine', value: 'LCS Algorithm' },
      { label: 'Proxy Fallback', value: 'Express + Axios' },
      { label: 'Cache & State', value: 'Zustand + TanStack' },
    ],
    highlights: [
      'Built a developer workspace for constructing HTTP requests, managing collections and environments, inspecting JSON responses, comparing payloads, and tracking request history.',
      'Implemented a browser-first request pipeline with an Express and Axios fallback proxy that reroutes requests blocked by browser CORS restrictions while preserving response status and raw data.',
      'Engineered a line-by-line diff engine using the Longest Common Subsequence (LCS) algorithm with split and unified views, change statistics, and similarity scoring.',
    ],
  },
  {
    id: 'pcard1',
    num: '02',
    title: 'Vidra – Full-Stack Video Streaming Platform',
    subtitle: 'Cloud Video Platform & Custom Playback Engine',
    desc: 'Full-stack video platform supporting video uploads, playback, playlists, comments, likes, subscriptions, watch history, and creator management with a custom HTML5 media player and JWT cookie auth.',
    category: 'Full-Stack',
    image: '/images/project-vidra.svg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Tailwind CSS'],
    year: '2025',
    liveUrl: 'https://vidra.vercel.app',
    githubUrl: 'https://github.com/yogeshthedev/vidra',
    theme: 'fire',
    metricsBadge: 'Media & Streaming',
    hasLivePreview: true,
    stats: [
      { label: 'Media Pipeline', value: 'Cloudinary CDN' },
      { label: 'Session Security', value: 'HTTP-only JWT Queue' },
      { label: 'Player Engine', value: 'Custom HTML5 Scrub' },
    ],
    highlights: [
      'Built a full-stack video platform supporting video uploads, playback, playlists, comments, likes, subscriptions, watch history, and creator management using React, Express, MongoDB, and Cloudinary.',
      'Engineered a custom HTML5 video player with timeline scrubbing, buffer visualization, chapters, variable playback speed, keyboard shortcuts, Picture-in-Picture, and fullscreen mode.',
      'Implemented JWT access and refresh token authentication with HTTP-only cookies and an Axios token-refresh queue to safely handle concurrent expired-session requests.',
    ],
  },
  {
    id: 'pcard2',
    num: '03',
    title: 'Windows 11 Clone – Desktop UI Simulation',
    subtitle: 'Desktop Operating System Simulation in the Browser',
    desc: 'Windows 11-inspired desktop UI built entirely on the frontend, replicating the look, feel, and layout of a modern desktop operating system with Redux centralized window and taskbar state management.',
    category: 'Frontend',
    image: '/images/project-win11.svg',
    tags: ['React', 'Redux', 'JavaScript', 'CSS3'],
    year: '2024',
    liveUrl: 'https://window-11-os-react.vercel.app',
    githubUrl: 'https://github.com/yogeshthedev/window-11-os-react',
    theme: 'mint',
    metricsBadge: 'Desktop Shell',
    hasLivePreview: true,
    stats: [
      { label: 'State Manager', value: 'Redux Centralized' },
      { label: 'Window System', value: 'Multi-Tasking UI' },
      { label: 'Live Simulation', value: 'Browser Native 60FPS' },
    ],
    highlights: [
      'Built a Windows 11-inspired desktop UI entirely on the frontend, replicating the look, feel, and layout of a modern desktop operating system using React.',
      'Designed the interface around Redux for centralized, predictable state management across desktop elements such as windows, taskbar, and application views.',
      'Recreated core desktop interactions, including opening and closing application windows and taskbar-based navigation, to closely mirror native OS behavior in the browser.',
    ],
  },
]
