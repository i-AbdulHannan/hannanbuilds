import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function NeuralSphere({ position, scale = 1 }) {
  const groupRef = useRef()
  const nodesRef = useRef([])
  const linesRef = useRef()

  const { nodes, linePositions } = useMemo(() => {
    const pts = []
    const phi = (1 + Math.sqrt(5)) / 2
    const count = 24
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = 2 * Math.PI * i / phi
      pts.push(new THREE.Vector3(
        Math.cos(theta) * radius * 1.8,
        y * 1.8,
        Math.sin(theta) * radius * 1.8
      ))
    }
    const lines = []
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 2.0) {
          lines.push(pts[i].x, pts[i].y, pts[i].z)
          lines.push(pts[j].x, pts[j].y, pts[j].z)
        }
      }
    }
    return { nodes: pts, linePositions: new Float32Array(lines) }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#0326fc" emissiveIntensity={0.5} />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#0326fc" transparent opacity={0.15} />
      </lineSegments>
    </group>
  )
}

function CodeBrackets({ position, scale = 1, rotationSpeed = 0.3 }) {
  const meshRef = useRef()
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0.6)
    shape.lineTo(-0.5, 0)
    shape.lineTo(0, -0.6)
    shape.moveTo(0, 0.6)
    const extrudeSettings = { depth: 0.05, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 }
    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <meshStandardMaterial color="#0326fc" metalness={0.8} roughness={0.2} transparent opacity={0.6} />
    </mesh>
  )
}

function FloatingRing({ position, scale = 1, speed = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed
    }
  })
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshStandardMaterial color="#0326fc" transparent opacity={0.3} metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  )
}

function CircuitLines() {
  const groupRef = useRef()
  const lines = useMemo(() => {
    const l = []
    for (let i = 0; i < 15; i++) {
      const startX = (Math.random() - 0.5) * 16
      const startY = (Math.random() - 0.5) * 10
      const length = Math.random() * 2 + 0.5
      const direction = Math.random() > 0.5 ? 1 : -1
      const horizontal = Math.random() > 0.5
      const points = horizontal
        ? [startX, startY, -5, startX + length * direction, startY, -5]
        : [startX, startY, -5, startX, startY + length * direction, -5]
      l.push({ points: new Float32Array(points), delay: Math.random() * 3 })
    }
    return l
  }, [])

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={2} array={line.points} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#0326fc" transparent opacity={0.08} />
        </line>
      ))}
    </group>
  )
}

function DataParticles({ count = 400 }) {
  const pointsRef = useRef()
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15 - 5,
        ],
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap(p => p.position))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#0326fc" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function WireframeBox({ position, scale = 1, speed = 0.5 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed
    }
  })
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0326fc" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ position: 'absolute', inset: 0 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, 0, 3]} intensity={0.6} color="#0326fc" distance={15} />
      <pointLight position={[5, -3, 2]} intensity={0.3} color="#ffffff" distance={10} />

      <NeuralSphere position={[4.5, 1, -3]} scale={0.55} />
      <NeuralSphere position={[-4, -1.5, -4]} scale={0.35} />

      <CodeBrackets position={[-3.5, 1.8, -2]} scale={0.7} rotationSpeed={0.2} />
      <CodeBrackets position={[3, -1.5, -3]} scale={0.5} rotationSpeed={-0.15} />

      <FloatingRing position={[0, 2.5, -4]} scale={1.2} speed={0.7} />
      <FloatingRing position={[-2, -2, -3]} scale={0.8} speed={1.1} />
      <FloatingRing position={[3, 0.5, -5]} scale={0.6} speed={0.9} />

      <WireframeBox position={[-5, 2, -6]} scale={0.5} speed={0.3} />
      <WireframeBox position={[5, -2.5, -5]} scale={0.4} speed={0.4} />

      <CircuitLines />
      <DataParticles count={350} />
    </Canvas>
  )
}