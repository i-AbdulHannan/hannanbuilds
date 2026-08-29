import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function splitTextToWords(el) {
  const text = el.textContent
  el.innerHTML = ''
  const words = text.split(/\s+/).filter(Boolean)
  words.forEach((word, i) => {
    const wrapper = document.createElement('span')
    wrapper.style.display = 'inline-block'
    wrapper.style.overflow = 'hidden'
    wrapper.style.verticalAlign = 'top'
    const inner = document.createElement('span')
    inner.className = 'word-inner'
    inner.textContent = word + (i < words.length - 1 ? '\u00A0' : '')
    inner.style.display = 'inline-block'
    wrapper.appendChild(inner)
    el.appendChild(wrapper)
    if (i < words.length - 1) el.appendChild(document.createTextNode(' '))
  })
}

export function initScrollReveal() {
  if (prefersReduced) {
    document.querySelectorAll('.reveal-text, .reveal-card, .reveal-item').forEach(el => {
      el.classList.add('is-visible')
    })
    return
  }

  document.querySelectorAll('.reveal-text').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 35 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' }
    })
  })

  document.querySelectorAll('.reveal-card').forEach((card, i) => {
    gsap.fromTo(card, { opacity: 0, y: 45 }, {
      opacity: 1, y: 0, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
    })
  })

  document.querySelectorAll('.reveal-item').forEach((item, i) => {
    gsap.fromTo(item, { opacity: 0, x: -25 }, {
      opacity: 1, x: 0, duration: 0.55, delay: i * 0.07, ease: 'power2.out',
      scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' }
    })
  })
}

export function initHeroAnimations() {
  if (prefersReduced) return

  const eyebrow = document.querySelector('.hero__eyebrow')
  const headline = document.querySelector('.hero__headline')
  const subhead = document.querySelector('.hero__subhead')
  const ctas = document.querySelector('.hero__ctas')

  const tl = gsap.timeline({ delay: 0.15 })

  if (eyebrow) {
    tl.fromTo(eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' })
  }

  if (headline) {
    splitTextToWords(headline)
    const wordInners = headline.querySelectorAll('.word-inner')
    tl.fromTo(wordInners, { y: '110%', opacity: 0 }, {
      y: '0%', opacity: 1, duration: 0.45, stagger: 0.035, ease: 'power3.out'
    }, '-=0.25')
  }

  if (subhead) {
    tl.fromTo(subhead, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.15')
  }

  if (ctas) {
    tl.fromTo(ctas, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, '-=0.15')
  }
}

export function initStatsCounter() {
  document.querySelectorAll('.stat').forEach(stat => {
    const numEl = stat.querySelector('.stat__number')
    const target = parseInt(stat.dataset.count, 10)
    ScrollTrigger.create({
      trigger: stat, start: 'top 85%', once: true,
      onEnter: () => {
        if (prefersReduced) { numEl.textContent = target; return }
        gsap.to({ val: 0 }, {
          val: target, duration: 1.6, ease: 'power2.out',
          onUpdate() { numEl.textContent = Math.floor(this.targets()[0].val) }
        })
      }
    })
  })
}

export function initTimeline() {
  const fill = document.querySelector('.timeline__line-fill')
  if (!fill) return
  if (prefersReduced) { fill.style.height = '100%'; return }

  gsap.to(fill, {
    height: '100%', ease: 'none',
    scrollTrigger: { trigger: '.timeline', start: 'top 60%', end: 'bottom 80%', scrub: 1 }
  })

  document.querySelectorAll('.timeline__item').forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item, start: 'top 70%',
      onEnter: () => item.classList.add('is-active'),
      onLeaveBack: () => { if (i > 0) item.classList.remove('is-active') }
    })
  })
}

export function initNavScroll() {
  const nav = document.getElementById('nav')
  const links = document.querySelectorAll('.nav__link')
  const sections = ['hero', 'about', 'services', 'work', 'experience', 'skills', 'contact']

  ScrollTrigger.create({
    start: 80,
    onUpdate: self => { nav.classList.toggle('scrolled', self.scroll() > 80) }
  })

  sections.forEach(id => {
    const el = document.getElementById(id)
    if (!el) return
    ScrollTrigger.create({
      trigger: el, start: 'top 40%', end: 'bottom 40%',
      onEnter: () => setActive(id),
      onEnterBack: () => setActive(id)
    })
  })

  function setActive(activeId) {
    links.forEach(l => l.classList.toggle('active', l.dataset.section === activeId))
  }
}

export function initSkillBars() {
  document.querySelectorAll('.skill-item__fill').forEach(bar => {
    const width = bar.dataset.width
    ScrollTrigger.create({
      trigger: bar, start: 'top 90%', once: true,
      onEnter: () => {
        if (prefersReduced) { bar.style.width = width + '%'; return }
        gsap.to(bar, { width: width + '%', duration: 1.2, ease: 'power2.out', delay: 0.2 })
      }
    })
  })
}
