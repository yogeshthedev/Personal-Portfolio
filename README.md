# Yogesh Meena — Portfolio (React + Vite)

A modern, high-performance portfolio built with React, Vite, and TypeScript.

## Tech Stack
- **Vite 5** (Fast development & optimized production build)
- **React 18**
- **TypeScript**
- **Vanilla CSS / Custom Design System** (Variables, animations, responsive design)
- **React Icons**

## Project Structure

```
Personal-Portfolio/
├── index.html            # HTML entry point with Google Fonts
├── vite.config.ts        # Vite configuration & path aliases (@)
├── tsconfig.json         # TypeScript compiler configuration
├── package.json
└── src/
    ├── main.tsx          # Application root
    ├── App.tsx           # Main page assembling all sections
    ├── globals.css       # Core design tokens, global resets & typography
    ├── data/
    │   └── projectData.ts # Projects configuration and metadata
    └── components/
        ├── cursor/       # Custom animated cursor
        ├── navbar/       # Fixed navbar with smooth scroll & mobile drawer
        ├── hero/         # Hero section with interactive badge & badges
        ├── marquee/      # Infinite scrolling tech stack marquee
        ├── projects/     # Modern responsive projects showcase with tabs & hover glow
        ├── about/        # Bio & tech stack categorization
        ├── contact/      # Contact info cards
        └── footer/       # Footer with quick navigation
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```
