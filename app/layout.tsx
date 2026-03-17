import type { Metadata } from 'next'
import './globals.css'
import '../components/cursor/cursor.css'
import '../components/navbar/navbar.css'
import '../components/hero/hero.css'
import '../components/marquee/marquee.css'
import '../components/projects/projects.css'
import '../components/about/about.css'
import '../components/contact/contact.css'
import '../components/footer/footer.css'

export const metadata: Metadata = {
  title: 'Yogesh Meena — Full-Stack Developer',
  description: 'Full-Stack Web Developer crafting complete digital products. Frontend, backend, MongoDB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
