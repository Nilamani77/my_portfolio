import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'

import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'

import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certs from './components/Certs'
import GithubSnake from './components/GithubSnake'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  /* ─────────────────────────────────────
     SMOOTH SCROLL
  ───────────────────────────────────── */
  useEffect(() => {
    if (!loaded) return

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [loaded])

  return (
    <>
      {/* ─────────────────────────────────────
         CUSTOM CURSOR
      ───────────────────────────────────── */}
      <Cursor />

      {/* ─────────────────────────────────────
         LOADER
      ───────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {!loaded && (
          <Loader
            key="loader"
            onDone={() => setLoaded(true)}
          />
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────
         MAIN WEBSITE
      ───────────────────────────────────── */}
      {loaded && (
        <div
          style={{
            position: 'relative',
            background: 'var(--black)',
            overflow: 'hidden',
            minHeight: '100vh',
          }}
        >
          {/* ─────────────────────────────────────
             FUTURISTIC BACKGROUND EFFECTS
          ───────────────────────────────────── */}

          <Particles />

          {/* Grid Overlay */}
          <div className="name-grid-overlay"></div>


          {/* Purple Glow */}
          <div className="bg-purple-glow"></div>

          {/* Blue Glow */}
          <div className="bg-blue-glow"></div>

          {/* Center Light */}
          <div className="bg-center-light"></div>

          {/* ─────────────────────────────────────
             NAVBAR
          ───────────────────────────────────── */}
          <Navbar />

          {/* ─────────────────────────────────────
             MAIN CONTENT
          ───────────────────────────────────── */}
          <main
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Landing Section */}
            <Landing />

            {/* Other Sections */}
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certs />
            <GithubSnake />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  )
}