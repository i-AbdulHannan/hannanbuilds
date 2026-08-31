import { useState, useEffect, createContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Services from './components/Services'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark'
    }
    return 'dark'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeContext.Provider>
  )
}

export default App