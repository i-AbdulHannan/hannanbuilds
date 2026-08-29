import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Preloader } from './preloader'
import { initScrollReveal, initHeroAnimations, initStatsCounter, initTimeline, initNavScroll, initSkillBars } from './animations'
import { initCustomCursor, initMagneticButtons, initCardTilt, initSmoothAnchor, initNavToggle } from './interactions'
import { initHero3D } from './hero3d'

gsap.registerPlugin(ScrollTrigger)

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function initLenis() {
  const lenis = new Lenis({
    duration: prefersReduced ? 0 : 1.15,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReduced
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add(time => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

function initApp() {
  initLenis()
  initSmoothAnchor()
  initNavToggle()
  initCustomCursor()
  initMagneticButtons()
  initCardTilt()
  initHeroAnimations()
  initScrollReveal()
  initStatsCounter()
  initTimeline()
  initNavScroll()
  initSkillBars()
  initHero3D()
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('preloader-active')
  new Preloader(() => initApp())
})
