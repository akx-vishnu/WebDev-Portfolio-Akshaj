import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Placeholder components imports (will be replaced as I build them)
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Services from './components/Services'
import Contact from './components/Contact'
import SceneBackground from './components/canvas/SceneBackground'
import CustomCursor from './components/ui/CustomCursor'
import { SpeedInsights } from "@vercel/speed-insights/react"


import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="text-gray-300 relative bg-transparent">
      <CustomCursor />
      <SceneBackground />
      <SpeedInsights />
      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Sections will go here */}
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>

        {/* Placeholders for other sections to allow scrolling testing */}
        {/* <section id="about" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">About Section</h2>
        </section>
        <section id="skills" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Skills Section</h2>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Projects Section</h2>
        </section>
        <section id="services" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Services Section</h2>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center border-t border-gray-800">
          <h2 className="text-4xl">Contact Section</h2>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}

export default App
