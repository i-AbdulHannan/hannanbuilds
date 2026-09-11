import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VisitorCounter from './components/VisitorCounter'
import ActivityToast from './components/ActivityToast'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <VisitorCounter />
      <ActivityToast />
    </>
  )
}

export default App
