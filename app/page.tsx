import Cursor from '@/components/cursor/cursor'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/hero/hero'
import Marquee from '@/components/marquee/marquee'
import Projects from '@/components/projects/projects'
import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'

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
