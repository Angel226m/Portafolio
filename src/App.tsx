import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import TerminalSplash from './components/TerminalSplash'

export default function App() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mx', `${e.clientX}px`)
        spotlightRef.current.style.setProperty('--my', `${e.clientY}px`)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="min-h-screen bg-bg text-text">
      <TerminalSplash />
      <ScrollProgress />
      <div ref={spotlightRef} className="spotlight" />
      <Particles count={60} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
