import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

function MatrixRain() {
  const columns = useMemo(() => {
    const cols = []
    for (let i = 0; i < 30; i++) {
      cols.push({
        x: (i / 30) * 100,
        delay: Math.random() * 2,
        speed: Math.random() * 2 + 1,
        chars: Array.from({ length: 15 }, () =>
          String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
        ),
      })
    }
    return cols
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.15 }}>
      {columns.map((col, i) => (
        <motion.div
          key={i}
          initial={{ y: '-100%' }}
          animate={{ y: '200%' }}
          transition={{
            duration: col.speed,
            delay: col.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${col.x}%`,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {col.chars.map((char, ci) => (
            <span key={ci} style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: ci === 0 ? '#0326fc' : '#ffffff',
              opacity: ci === 0 ? 1 : 1 - ci * 0.07,
            }}>{char}</span>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

function GlitchText({ text }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <motion.span
        animate={{
          x: [0, -2, 3, -1, 0],
          textShadow: [
            '0 0 0 transparent',
            '2px 0 #0326fc, -2px 0 #ff0000',
            '-2px 0 #0326fc, 2px 0 #ff0000',
            '0 0 0 transparent',
          ],
        }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(48px, 10vw, 80px)',
          fontWeight: 800, color: '#fff',
          letterSpacing: '-3px', display: 'block',
        }}
      >
        {text}
      </motion.span>
    </div>
  )
}

function OrbitingDots() {
  return (
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 200, height: 200,
    }}>
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          animate={{ rotate: 360 }}
          transition={{ duration: 3 + ring, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', inset: 0,
          }}
        >
          {[0, 1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: dot * 0.3,
                repeat: Infinity,
              }}
              style={{
                position: 'absolute',
                width: 4 + ring * 2,
                height: 4 + ring * 2,
                borderRadius: '50%',
                background: '#0326fc',
                top: '50%',
                left: '50%',
                transform: `rotate(${dot * 90}deg) translateX(${50 + ring * 25}px) translateY(-50%)`,
                boxShadow: '0 0 8px #0326fc',
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + Math.random() * 12 + 3
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 1200)
    const t3 = setTimeout(() => setPhase(3), 1800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', inset: 0, background: '#000',
        zIndex: 99999, display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Radial glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(3,38,252,0.15) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Orbiting dots */}
      <OrbitingDots />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Glitch text */}
        <GlitchText text="AH." />

        {/* Phased subtexts */}
        <div style={{ height: 24, marginTop: 16 }}>
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div key="p0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}
              >
                Initializing
              </motion.div>
            )}
            {phase === 1 && (
              <motion.div key="p1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}
              >
                Loading modules
              </motion.div>
            )}
            {phase === 2 && (
              <motion.div key="p2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}
              >
                Compiling experience
              </motion.div>
            )}
            {phase === 3 && (
              <motion.div key="p3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}
              >
                Rendering portfolio
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: 32 }}
        >
          <div style={{
            width: 220, height: 2,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 2, overflow: 'hidden', margin: '0 auto',
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #0326fc, #0055ff, #0326fc)',
                borderRadius: 2,
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s linear infinite',
              }}
            />
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            marginTop: 8, fontSize: 10,
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'monospace',
          }}>
            <span>{Math.min(Math.round(progress), 100)}%</span>
            <span>LOADING</span>
          </div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div style={{
        position: 'absolute', top: 24, left: 24,
        width: 30, height: 30,
        borderLeft: '2px solid rgba(3,38,252,0.3)',
        borderTop: '2px solid rgba(3,38,252,0.3)',
      }} />
      <div style={{
        position: 'absolute', top: 24, right: 24,
        width: 30, height: 30,
        borderRight: '2px solid rgba(3,38,252,0.3)',
        borderTop: '2px solid rgba(3,38,252,0.3)',
      }} />
      <div style={{
        position: 'absolute', bottom: 24, left: 24,
        width: 30, height: 30,
        borderLeft: '2px solid rgba(3,38,252,0.3)',
        borderBottom: '2px solid rgba(3,38,252,0.3)',
      }} />
      <div style={{
        position: 'absolute', bottom: 24, right: 24,
        width: 30, height: 30,
        borderRight: '2px solid rgba(3,38,252,0.3)',
        borderBottom: '2px solid rgba(3,38,252,0.3)',
      }} />

      {/* Scan line */}
      <motion.div
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', left: 0, right: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(3,38,252,0.15), transparent)',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </motion.div>
  )
}