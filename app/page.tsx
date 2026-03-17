import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  )
}
