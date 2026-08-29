import * as THREE from 'three'
import gsap from 'gsap'

export class Preloader {
  constructor(onComplete) {
    this.onComplete = onComplete
    this.canvas = document.getElementById('preloader-canvas')
    this.counterEl = document.getElementById('preloader-counter')
    this.skipBtn = document.getElementById('preloader-skip')
    this.preloaderEl = document.getElementById('preloader')

    this.isLowEnd = window.innerWidth < 768 || navigator.hardwareConcurrency <= 4
    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.hasPlayed = sessionStorage.getItem('preloader-played')

    this.progress = 0
    this.isComplete = false
    this.exploded = false

    if (this.hasPlayed || this.prefersReduced || !this.supportsWebGL()) {
      this.showFallback()
      return
    }
    this.init()
  }

  supportsWebGL() {
    try {
      const c = document.createElement('canvas')
      return !!(c.getContext('webgl') || c.getContext('experimental-webgl'))
    } catch {
      return false
    }
  }

  showFallback() {
    this.preloaderEl.innerHTML = '<div class="preloader__logo">AH</div>'
    this.preloaderEl.classList.add('preloader--simple')
    setTimeout(() => this.finish(), 600)
  }

  init() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x000000)

    this.camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 100)
    this.camera.position.set(0, 2.2, 6.5)
    this.camera.lookAt(0, 0.3, 0)

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.5

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.7))

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6)
    keyLight.position.set(5, 8, 6)
    this.scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x0326FC, 0.3)
    fillLight.position.set(-4, 3, 2)
    this.scene.add(fillLight)

    const rimLight = new THREE.PointLight(0x0326FC, 0.5, 12)
    rimLight.position.set(0, 1, -4)
    this.scene.add(rimLight)

    this.buildLaptop()
    this.buildFloatingShapes()
    this.buildGrid()
    this.buildParticles()

    window.addEventListener('resize', () => this.onResize())
    this.skipBtn.addEventListener('click', () => this.skip())

    this.simulateLoading()
    this.animate()
  }

  buildLaptop() {
    this.laptopGroup = new THREE.Group()

    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xC8CDD8, roughness: 0.18, metalness: 0.92
    })
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1C2030, roughness: 0.5, metalness: 0.5
    })
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x2A2E3A, roughness: 0.6, metalness: 0.25
    })
    const blueAccent = new THREE.MeshStandardMaterial({
      color: 0x0326FC, emissive: 0x0326FC, emissiveIntensity: 0.5,
      roughness: 0.1, metalness: 0.85
    })

    const base = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.07, 1.8), silverMat)
    base.position.y = 0.035
    this.laptopGroup.add(base)

    const edge = new THREE.Mesh(new THREE.BoxGeometry(2.82, 0.018, 1.82), blueAccent)
    edge.position.y = 0.074
    this.laptopGroup.add(edge)

    const trackpad = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.003, 0.55), darkMat)
    trackpad.position.set(0, 0.078, 0.4)
    this.laptopGroup.add(trackpad)

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 13; c++) {
        const key = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.01, 0.11), keyMat)
        key.position.set(-0.92 + c * 0.145, 0.078, -0.25 + r * 0.135)
        this.laptopGroup.add(key)
      }
    }

    this.lidGroup = new THREE.Group()
    this.lidGroup.position.set(0, 0.07, -0.9)

    const lid = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.7, 0.05), silverMat)
    lid.position.set(0, 0.85, -0.025)
    this.lidGroup.add(lid)

    const logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.3, 0.001),
      blueAccent
    )
    logo.position.set(0, 0.85, -0.055)
    this.lidGroup.add(logo)

    const screenBg = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 1.45, 0.005),
      darkMat
    )
    screenBg.position.set(0, 0.85, 0.01)
    this.lidGroup.add(screenBg)

    this.screen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.3, 1.3),
      new THREE.MeshStandardMaterial({
        color: 0x0326FC, emissive: 0x0326FC, emissiveIntensity: 0.12,
        roughness: 0.05, metalness: 0.1
      })
    )
    this.screen.position.set(0, 0.85, 0.015)
    this.lidGroup.add(this.screen)

    this.screenLines = []
    for (let i = 0; i < 9; i++) {
      const w = 0.3 + Math.random() * 1.4
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(w, 0.018, 0.001),
        new THREE.MeshBasicMaterial({ color: 0x0326FC, transparent: true, opacity: 0 })
      )
      line.position.set(-0.6 + Math.random() * 0.2, 1.3 - i * 0.12, 0.02)
      this.lidGroup.add(line)
      this.screenLines.push(line)
    }

    this.laptopGroup.add(this.lidGroup)
    this.laptopGroup.position.y = -0.25
    this.scene.add(this.laptopGroup)
  }

  buildFloatingShapes() {
    this.shapes = []
    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x0326FC, emissive: 0x0326FC, emissiveIntensity: 0.25,
      roughness: 0.2, metalness: 0.6, transparent: true, opacity: 0
    })
    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xC8CDD8, roughness: 0.2, metalness: 0.8,
      transparent: true, opacity: 0
    })

    const defs = [
      { g: new THREE.TorusGeometry(0.22, 0.04, 10, 20), m: blueMat, p: [-3.2, 0.6, -0.8] },
      { g: new THREE.TorusGeometry(0.22, 0.04, 10, 20), m: blueMat, p: [3.5, 1.4, -1] },
      { g: new THREE.BoxGeometry(0.28, 0.28, 0.03), m: blueMat, p: [-2.6, 1.7, -1.3] },
      { g: new THREE.BoxGeometry(0.28, 0.28, 0.03), m: blueMat, p: [2.9, 0.2, -1] },
      { g: new THREE.OctahedronGeometry(0.2), m: blueMat, p: [-3.5, -0.3, -0.5] },
      { g: new THREE.OctahedronGeometry(0.2), m: blueMat, p: [3.7, 0.8, -1.3] },
      { g: new THREE.TetrahedronGeometry(0.22), m: blueMat, p: [-1.8, 2.1, -1.8] },
      { g: new THREE.TetrahedronGeometry(0.22), m: blueMat, p: [2.1, -0.15, -1.6] },
      { g: new THREE.IcosahedronGeometry(0.17), m: silverMat, p: [-2.9, 1.2, -2] },
      { g: new THREE.IcosahedronGeometry(0.17), m: blueMat, p: [2.6, 1.7, -1.5] },
      { g: new THREE.RingGeometry(0.14, 0.2, 6), m: blueMat, p: [-2.1, 0.1, -1.5] },
      { g: new THREE.RingGeometry(0.14, 0.2, 6), m: blueMat, p: [3.1, 0.5, -0.4] },
      { g: new THREE.ConeGeometry(0.14, 0.35, 4), m: blueMat, p: [-1.5, -0.6, -0.8] },
      { g: new THREE.ConeGeometry(0.14, 0.35, 4), m: blueMat, p: [1.9, 2.0, -1.3] },
      { g: new THREE.DodecahedronGeometry(0.16), m: silverMat, p: [-3.0, 1.5, -2.2] },
      { g: new THREE.DodecahedronGeometry(0.16), m: blueMat, p: [1.5, -0.4, -2] },
    ]

    defs.forEach(d => {
      const mesh = new THREE.Mesh(d.g, d.m.clone())
      mesh.position.set(...d.p)
      mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2)
      mesh.userData.rotSpeed = { x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.012 }
      this.scene.add(mesh)
      this.shapes.push(mesh)
    })
  }

  buildGrid() {
    this.gridLines = []
    const mat = new THREE.LineBasicMaterial({ color: 0x0326FC, transparent: true, opacity: 0 })
    for (let i = 0; i < 10; i++) {
      const y = -1.2 + i * 0.5
      const pts = [new THREE.Vector3(-5, y, -3.5), new THREE.Vector3(5, y, -3.5)]
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat.clone())
      this.scene.add(line)
      this.gridLines.push(line)
    }
    for (let i = 0; i < 12; i++) {
      const x = -5 + i * 0.9
      const pts = [new THREE.Vector3(x, -1.2, -3.5), new THREE.Vector3(x, 3.5, -3.5)]
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat.clone())
      this.scene.add(line)
      this.gridLines.push(line)
    }
  }

  buildParticles() {
    const count = this.isLowEnd ? 35 : 100
    const positions = new Float32Array(count * 3)
    this.particleVelocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = 0
      positions[i * 3 + 1] = 0.8
      positions[i * 3 + 2] = 0
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const speed = 1.5 + Math.random() * 3
      this.particleVelocities[i * 3] = Math.sin(phi) * Math.cos(theta) * speed
      this.particleVelocities[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * speed * 0.5 + 1.5
      this.particleVelocities[i * 3 + 2] = Math.cos(phi) * speed
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    this.particles = new THREE.Points(geo, new THREE.PointsMaterial({
      color: 0x0326FC, size: this.isLowEnd ? 0.07 : 0.045,
      transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false
    }))
    this.scene.add(this.particles)
  }

  simulateLoading() {
    this._iv = setInterval(() => {
      if (this.progress < 88 && !this.isComplete) {
        this.progress += Math.random() * 4.5 + 0.8
        if (this.progress > 88) this.progress = 88
      }
    }, 130)
    setTimeout(() => { if (!this.isComplete) this.progress = 100 }, 2600)
  }

  animate() {
    if (this.isComplete) return
    this._raf = requestAnimationFrame(() => this.animate())
    const t = Date.now() * 0.001

    if (!this.exploded) {
      this.laptopGroup.rotation.y = Math.sin(t * 0.55) * 0.1
      this.laptopGroup.position.y = -0.25 + Math.sin(t * 0.85) * 0.035
    }

    const p = Math.min(this.progress, 100)
    this.counterEl.textContent = Math.floor(p) + '%'
    this.screen.material.emissiveIntensity = 0.12 + (p / 100) * 0.88

    const glow = p / 100
    this.screenLines.forEach((line, i) => {
      line.material.opacity = glow > i / 10 ? Math.min((glow - i / 10) * 3, 0.65) : 0
    })

    if (!this.exploded) {
      this.shapes.forEach(s => {
        s.rotation.x += s.userData.rotSpeed.x
        s.rotation.y += s.userData.rotSpeed.y
        s.position.y += Math.sin(t * 0.4 + s.id) * 0.0006
      })
    }

    if (p >= 100 && !this.exploded) this.explode()

    this.renderer.render(this.scene, this.camera)
  }

  explode() {
    this.exploded = true
    clearInterval(this._iv)

    const tl = gsap.timeline({ onComplete: () => this.finish() })

    tl.to(this.lidGroup.rotation, { x: -Math.PI * 0.5, duration: 0.35, ease: 'power2.out' })
    tl.to(this.screen.material, { emissiveIntensity: 2, duration: 0.2 }, '<')
    tl.to({}, { duration: 0.15 })

    tl.to(this.laptopGroup.children[0].position, { y: -4.5, duration: 0.9, ease: 'power3.out' }, '-=0.05')
    tl.to(this.laptopGroup.children[0].rotation, { x: -1.5, z: 0.6, duration: 0.9, ease: 'power3.out' }, '<')
    tl.to(this.lidGroup.position, { y: 5.5, z: -3, duration: 1, ease: 'power3.out' }, '-=0.75')
    tl.to(this.lidGroup.rotation, { x: 2.8, y: 1.2, duration: 1, ease: 'power3.out' }, '<')

    this.shapes.forEach(s => {
      const dx = (Math.random() - 0.5) * 7
      const dy = (Math.random() - 0.3) * 6
      const dz = (Math.random() - 0.5) * 5
      tl.to(s.material, { opacity: 0.7, duration: 0.08 }, '-=0.85')
      tl.to(s.position, {
        x: s.position.x + dx, y: s.position.y + dy, z: s.position.z + dz,
        duration: 1.3, ease: 'power3.out'
      }, '<')
      tl.to(s.material, { opacity: 0, duration: 0.55 }, '-=0.35')
    })

    this.gridLines.forEach(line => {
      tl.to(line.material, { opacity: 0.25, duration: 0.12 }, '-=1.1')
      tl.to(line.material, { opacity: 0, duration: 0.45 }, '-=0.05')
    })

    const pos = this.particles.geometry.attributes.position.array
    const vels = this.particleVelocities
    const start = Date.now()
    const dur = 1300
    const animP = () => {
      const elapsed = Date.now() - start
      const t = Math.min(elapsed / dur, 1)
      for (let i = 0; i < pos.length / 3; i++) {
        pos[i * 3] += vels[i * 3] * 0.016
        pos[i * 3 + 1] += (vels[i * 3 + 1] - 3.5 * t) * 0.016
        pos[i * 3 + 2] += vels[i * 3 + 2] * 0.016
      }
      this.particles.geometry.attributes.position.needsUpdate = true
      if (t < 1) requestAnimationFrame(animP)
    }

    tl.to(this.particles.material, { opacity: 1, duration: 0.1 }, '-=1.1')
    tl.add(() => requestAnimationFrame(animP), '-=1')
    tl.to(this.particles.material, { opacity: 0, duration: 0.8 }, '-=0.25')
    tl.to(this.camera.position, { z: 1.5, y: 0.8, duration: 1.5, ease: 'power2.inOut' }, '-=1.2')
  }

  skip() { if (!this.isComplete) this.finish() }

  finish() {
    if (this.isComplete) return
    this.isComplete = true
    cancelAnimationFrame(this._raf)
    clearInterval(this._iv)
    sessionStorage.setItem('preloader-played', '1')
    this.preloaderEl.classList.add('hidden')
    document.body.classList.remove('preloader-active')
    setTimeout(() => { this.dispose(); this.onComplete() }, 550)
  }

  dispose() {
    if (!this.renderer) return
    this.renderer.dispose()
    this.scene.traverse(c => {
      if (c.geometry) c.geometry.dispose()
      if (c.material) (Array.isArray(c.material) ? c.material : [c.material]).forEach(m => m.dispose())
    })
  }

  onResize() {
    if (!this.renderer) return
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
