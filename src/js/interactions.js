import gsap from 'gsap'

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initCustomCursor() {
  if (isTouch || prefersReduced) return
  const cursor = document.getElementById('cursor')
  if (!cursor) return

  const dot = cursor.querySelector('.cursor__dot')
  const ring = cursor.querySelector('.cursor__ring')
  let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })

  const interactive = 'a, button, [data-tilt], .magnetic-btn, .tag, .nav__link'
  document.addEventListener('mouseover', e => { if (e.target.closest(interactive)) cursor.classList.add('cursor--hover') })
  document.addEventListener('mouseout', e => { if (e.target.closest(interactive)) cursor.classList.remove('cursor--hover') })

  ;(function loop() {
    dx += (mx - dx) * 0.18
    dy += (my - dy) * 0.18
    rx += (mx - rx) * 0.07
    ry += (my - ry) * 0.07
    dot.style.transform = `translate(${dx}px,${dy}px)`
    ring.style.transform = `translate(${rx}px,${ry}px)`
    requestAnimationFrame(loop)
  })()
}

export function initMagneticButtons() {
  if (isTouch || prefersReduced) return
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect()
      gsap.to(btn, {
        x: (e.clientX - r.left - r.width / 2) * 0.3,
        y: (e.clientY - r.top - r.height / 2) * 0.3,
        duration: 0.4, ease: 'power2.out'
      })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' })
    })
  })
}

export function initCardTilt() {
  if (isTouch || prefersReduced) return
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      card.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`
      card.style.setProperty('--mouse-x', `${x * 100}%`)
      card.style.setProperty('--mouse-y', `${y * 100}%`)
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.5, ease: 'power2.out', clearProps: 'transform' })
    })
  })
}

export function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault()
      const el = document.querySelector(a.getAttribute('href'))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const links = document.getElementById('nav-links')
      const toggle = document.getElementById('nav-toggle')
      if (links && toggle) {
        links.classList.remove('open')
        toggle.classList.remove('active')
        toggle.setAttribute('aria-expanded', 'false')
      }
    })
  })
}

export function initNavToggle() {
  const toggle = document.getElementById('nav-toggle')
  const links = document.getElementById('nav-links')
  if (!toggle || !links) return

  const overlay = document.createElement('div')
  overlay.className = 'nav__overlay'
  document.body.appendChild(overlay)

  const closeNav = () => {
    links.classList.remove('open')
    toggle.classList.remove('active')
    toggle.setAttribute('aria-expanded', 'false')
    overlay.classList.remove('active')
  }

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open')
    toggle.classList.toggle('active')
    toggle.setAttribute('aria-expanded', isOpen)
    overlay.classList.toggle('active')
  })

  overlay.addEventListener('click', closeNav)

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav__inner') && !e.target.closest('.nav__overlay')) {
      closeNav()
    }
  })
}
