import type { Metadata } from 'next'
import { Outfit, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import '../components/cursor/cursor.css'
import '../components/navbar/navbar.css'
import '../components/hero/hero.css'
import '../components/marquee/marquee.css'
import '../components/projects/projects.css'
import '../components/about/about.css'
import '../components/contact/contact.css'
import '../components/footer/footer.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

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
    <html lang="en" className={`${outfit.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}