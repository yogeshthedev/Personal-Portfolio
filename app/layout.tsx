import type { Metadata } from 'next'
import './globals.css'
import '../components/Cursor.css'
import '../components/Navbar.css'
import '../components/Hero.css'
import '../components/Marquee.css'
import '../components/Projects.css'
import '../components/About.css'
import '../components/Contact.css'
import '../components/Footer.css'

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
