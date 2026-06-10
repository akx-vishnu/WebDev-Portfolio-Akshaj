import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

// Profile page — no link from portfolio, personal use only
import Profile from './pages/Profile'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function PortfolioApp() {
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
      {/* CustomCursor is now at App level to cover all routes */}
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
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        {/* Personal profile page — not linked from portfolio */}
        <Route path="/profile" element={<Profile />} />

        {/* Main portfolio */}
        <Route path="/*" element={<PortfolioApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
