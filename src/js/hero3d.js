import * as THREE from 'three'

export function initHero3D() {
  const canvas = document.getElementById('about3d-canvas')
  if (!canvas) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none'
    return
  }

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  const camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.set(0, 1.8, 5.5)
  camera.lookAt(0, 0.4, 0)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.4

  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const key = new THREE.DirectionalLight(0xffffff, 1.4)
  key.position.set(4, 7, 5)
  scene.add(key)
  const fill = new THREE.DirectionalLight(0x0326FC, 0.3)
  fill.position.set(-3, 2, 3)
  scene.add(fill)
  const rim = new THREE.PointLight(0x0326FC, 0.4, 10)
  rim.position.set(0, 1, -3)
  scene.add(rim)

  const silver = new THREE.MeshStandardMaterial({ color: 0xC8CDD8, roughness: 0.18, metalness: 0.92 })
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x0326FC, roughness: 0.25, metalness: 0.75 })
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1C2030, roughness: 0.5, metalness: 0.5 })
  const keyMat = new THREE.MeshStandardMaterial({ color: 0x2A2E3A, roughness: 0.6, metalness: 0.25 })

  const laptop = new THREE.Group()

  const base = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.07, 1.5), silver)
  base.position.y = 0.035
  laptop.add(base)

  const edge = new THREE.Mesh(new THREE.BoxGeometry(2.42, 0.018, 1.52), blueMat)
  edge.position.y = 0.074
  laptop.add(edge)

  const trackpad = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.003, 0.45), darkMat)
  trackpad.position.set(0, 0.078, 0.3)
  laptop.add(trackpad)

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 11; c++) {
      const key = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.01, 0.1), keyMat)
      key.position.set(-0.78 + c * 0.14, 0.078, -0.2 + r * 0.13)
      laptop.add(key)
    }
  }

  const lidG = new THREE.Group()
  lidG.position.set(0, 0.07, -0.75)

  const lid = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.5, 0.05), silver)
  lid.position.y = 0.75
  lidG.add(lid)

  const logo = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.26, 0.001), blueMat)
  logo.position.set(0, 0.75, -0.055)
  lidG.add(logo)

  const screenBg = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.25, 0.005), darkMat)
  screenBg.position.set(0, 0.75, 0.01)
  lidG.add(screenBg)

  const scr = new THREE.Mesh(
    new THREE.PlaneGeometry(1.9, 1.1),
    new THREE.MeshStandardMaterial({ color: 0x0326FC, emissive: 0x0326FC, emissiveIntensity: 0.3, roughness: 0.05 })
  )
  scr.position.set(0, 0.75, 0.015)
  lidG.add(scr)

  const screenLines = []
  for (let i = 0; i < 7; i++) {
    const w = 0.3 + Math.random() * 1.2
    const l = new THREE.Mesh(
      new THREE.BoxGeometry(w, 0.016, 0.001),
      new THREE.MeshBasicMaterial({ color: 0x0326FC, transparent: true, opacity: 0 })
    )
    l.position.set(-0.5 + Math.random() * 0.2, 1.15 - i * 0.12, 0.02)
    lidG.add(l)
    screenLines.push(l)
  }

  laptop.add(lidG)
  laptop.rotation.x = -0.22
  laptop.position.y = -0.15
  scene.add(laptop)

  const shapes = []
  const geos = [
    new THREE.TorusGeometry(0.18, 0.035, 10, 20),
    new THREE.OctahedronGeometry(0.16),
    new THREE.TetrahedronGeometry(0.18),
    new THREE.IcosahedronGeometry(0.14),
    new THREE.BoxGeometry(0.2, 0.2, 0.03),
    new THREE.ConeGeometry(0.12, 0.28, 4),
  ]
  const mats = [blueMat, silver]

  for (let i = 0; i < 10; i++) {
    const mat = mats[i % mats.length].clone()
    mat.transparent = true
    mat.opacity = 0.4 + Math.random() * 0.4
    const mesh = new THREE.Mesh(geos[i % geos.length], mat)
    mesh.position.set(
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 2.5 + 0.5,
      (Math.random() - 0.5) * 2 - 1.5
    )
    mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2)
    mesh.userData = {
      rx: (Math.random() - 0.5) * 0.008,
      ry: (Math.random() - 0.5) * 0.01,
      sy: Math.random() * 0.003 + 0.001,
    }
    scene.add(mesh)
    shapes.push(mesh)
  }

  const gridMat = new THREE.LineBasicMaterial({ color: 0x0326FC, transparent: true, opacity: 0.04 })
  for (let i = 0; i < 8; i++) {
    const pts = [new THREE.Vector3(-4, -1.5 + i * 0.6, -3), new THREE.Vector3(4, -1.5 + i * 0.6, -3)]
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat))
  }
  for (let i = 0; i < 10; i++) {
    const pts = [new THREE.Vector3(-4 + i * 0.9, -1.5, -3), new THREE.Vector3(-4 + i * 0.9, 3, -3)]
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat))
  }

  let progress = 0
  const loadInterval = setInterval(() => {
    if (progress < 100) {
      progress += Math.random() * 4 + 1
      if (progress > 100) progress = 100
      scr.material.emissiveIntensity = 0.3 + (progress / 100) * 0.7
      screenLines.forEach((line, i) => {
        const g = progress / 100
        line.material.opacity = g > i / 7 ? Math.min((g - i / 7) * 3, 0.55) : 0
      })
    } else {
      clearInterval(loadInterval)
    }
  }, 120)

  const onResize = () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  }
  window.addEventListener('resize', onResize)

  let raf
  const animate = () => {
    raf = requestAnimationFrame(animate)
    const t = Date.now() * 0.001
    laptop.rotation.y = Math.sin(t * 0.4) * 0.08
    laptop.position.y = -0.15 + Math.sin(t * 0.7) * 0.02
    shapes.forEach(s => {
      s.rotation.x += s.userData.rx
      s.rotation.y += s.userData.ry
      s.position.y += Math.sin(t * s.userData.sy * 10 + s.id) * 0.001
    })
    renderer.render(scene, camera)
  }
  animate()
}
