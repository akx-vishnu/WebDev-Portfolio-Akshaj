import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Always-visible, lightweight components — loaded eagerly
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/ui/CustomCursor'

// Heavy components — code-split and lazy loaded
const Hero         = lazy(() => import('./components/Hero'))
const About        = lazy(() => import('./components/About'))
const Skills       = lazy(() => import('./components/Skills'))
const Experience   = lazy(() => import('./components/Experience'))
const Projects     = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Services     = lazy(() => import('./components/Services'))
const Contact      = lazy(() => import('./components/Contact'))
const SceneBackground = lazy(() => import('./components/canvas/SceneBackground'))
const SpeedInsightsLazy = lazy(() =>
    import('@vercel/speed-insights/react').then(m => ({ default: m.SpeedInsights }))
)

// Profile page — no link from portfolio, personal use only
const Profile = lazy(() => import('./pages/Profile'))

// Simple fallback — avoids layout shift during lazy load
const SectionLoader = () => (
    <div className="w-full h-32 flex items-center justify-center" aria-hidden="true" />
)

gsap.registerPlugin(ScrollTrigger)

function PortfolioApp() {
    useEffect(() => {
        const lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => { lenis.raf(time * 1000) })
        gsap.ticker.lagSmoothing(0)

        // Refresh ScrollTrigger as elements load and resize the page
        const handleLoad = () => ScrollTrigger.refresh();
        window.addEventListener('load', handleLoad);

        // Sequence of refreshes to align offsets as lazy chunks resolve
        const timers = [100, 300, 700, 1500, 3000].map(delay => 
            setTimeout(() => ScrollTrigger.refresh(), delay)
        );

        return () => {
            lenis.destroy()
            gsap.ticker.remove(lenis.raf)
            window.removeEventListener('load', handleLoad);
            timers.forEach(clearTimeout);
        }
    }, [])

    return (
        <div className="text-gray-300 relative bg-transparent">
            <Suspense fallback={null}>
                <SceneBackground />
            </Suspense>
            <Suspense fallback={null}>
                <SpeedInsightsLazy />
            </Suspense>
            <Navbar />

            <main className="relative z-10 w-full overflow-hidden">
                <section id="hero">
                    <Suspense fallback={<SectionLoader />}>
                        <Hero />
                    </Suspense>
                </section>

                <section id="about">
                    <Suspense fallback={<SectionLoader />}>
                        <About />
                    </Suspense>
                </section>

                <section id="skills">
                    <Suspense fallback={<SectionLoader />}>
                        <Skills />
                    </Suspense>
                </section>

                <section id="experience">
                    <Suspense fallback={<SectionLoader />}>
                        <Experience />
                    </Suspense>
                </section>

                <section id="projects">
                    <Suspense fallback={<SectionLoader />}>
                        <Projects />
                    </Suspense>
                </section>

                <section id="certifications">
                    <Suspense fallback={<SectionLoader />}>
                        <Certifications />
                    </Suspense>
                </section>

                <section id="services">
                    <Suspense fallback={<SectionLoader />}>
                        <Services />
                    </Suspense>
                </section>

                <section id="contact">
                    <Suspense fallback={<SectionLoader />}>
                        <Contact />
                    </Suspense>
                </section>
            </main>

            <Footer />
        </div>
    )
}

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col items-center justify-center pointer-events-none"
        >
            <div className="flex flex-col items-center gap-6">
                {/* Glowing Name / Logo */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold tracking-[0.3em] font-signature text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple filter drop-shadow-[0_0_15px_rgba(0,183,255,0.4)]"
                >
                    AKSHAJ
                </motion.h1>

                {/* Animated loading bar */}
                <div className="w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div 
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 1.5, 
                            ease: "easeInOut" 
                        }}
                        className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_8px_rgba(0,183,255,0.8)]"
                    />
                </div>
                
                {/* Status text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-mono"
                >
                    Loading Portfolio
                </motion.p>
            </div>
        </motion.div>
    );
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <CustomCursor />
            <AnimatePresence mode="wait">
                {isLoading && <Preloader key="preloader" />}
            </AnimatePresence>
            <Routes>
                {/* Personal profile page — not linked from portfolio */}
                <Route path="/profile" element={
                    <Suspense fallback={null}>
                        <Profile />
                    </Suspense>
                } />

                {/* Main portfolio */}
                <Route path="/*" element={<PortfolioApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
