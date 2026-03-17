# Yogesh Meena — Portfolio (Next.js)

A pixel-perfect Next.js conversion of the portfolio HTML file.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (global CSS with design tokens)

## Project Structure

```
yogesh-portfolio/
├── app/
│   ├── globals.css       # All styles, design tokens, animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Cursor.tsx        # Custom animated cursor
│   ├── Navbar.tsx        # Fixed nav with scroll effects & mobile drawer
│   ├── Hero.tsx          # Hero section with avatar card & stats
│   ├── Marquee.tsx       # Scrolling tech stack marquee
│   ├── Projects.tsx      # Scroll-stack project cards
│   ├── About.tsx         # About section with GitHub grid
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── next.config.js
├── tsconfig.json
└── package.json
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

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## Customization

### Add your photo
Replace the emoji placeholder in `components/Hero.tsx` and `components/About.tsx`:
```tsx
// In Hero.tsx — av-card section
<img src="/your-photo.jpg" alt="Yogesh Meena" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

// In About.tsx — about-photo-frame section
<img src="/your-photo.jpg" alt="Yogesh Meena" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```
Place your photo in the `public/` folder.

### Update contact info
Edit `components/Contact.tsx` — update email, LinkedIn, and GitHub links.

### Update project links
Edit `components/Projects.tsx` — update the `href="#"` links in pc-links to real URLs.

### Update email
In `components/Contact.tsx`, replace `yogesh@example.com` with your actual email.

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com).
