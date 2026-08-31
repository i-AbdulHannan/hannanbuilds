import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowUpRight, Code2, Zap, Trophy } from 'lucide-react'
import Scene3D from './Scene3D'

const INSTAGRAM = 'https://instagram.com/hannanbuilds'

const roles = ['AI Product Engineer', 'Full Stack Developer', 'SaaS Architect', 'WordPress Expert']

function TypeWriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text === current) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        setText(current.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 35 : 70)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <span style={{ color: '#0326fc' }}>
      {text}
      <span style={{
        display: 'inline-block', width: 3, height: '1.1em',
        background: '#0326fc', marginLeft: 2,
        verticalAlign: 'text-bottom',
        animation: 'blink 1s step-end infinite',
      }} />
    </span>
  )
}

const stats = [
  { value: '3+', label: 'Years Experience', icon: Zap },
  { value: '50+', label: 'Projects Delivered', icon: Code2 },
  { value: '7/11', label: 'Hackathon Wins', icon: Trophy },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 2.4 } }
}

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-stat', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.7,
        ease: 'power3.out', delay: 3.2,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} style={{
      minHeight: '100vh', position: 'relative',
      overflow: 'hidden', background: '#000',
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Scene3D />
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)',
        zIndex: 1,
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '140px 24px 80px',
        position: 'relative', zIndex: 2, width: '100%',
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div variants={item} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(3,38,252,0.08)',
            border: '1px solid rgba(3,38,252,0.15)',
            padding: '7px 18px', borderRadius: 100,
            fontSize: 12, fontWeight: 500, color: '#0326fc',
            marginBottom: 32, backdropFilter: 'blur(10px)',
            letterSpacing: 0.5,
          }}>
            <span style={{
              width: 6, height: 6, background: '#0326fc',
              borderRadius: '50%', boxShadow: '0 0 8px #0326fc',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            Available for new projects
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
            {/* Left side: text content */}
            <div style={{ flex: '1 1 480px' }}>
              <div style={{ marginBottom: 12 }}>
                <motion.div variants={item} style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  fontWeight: 500, color: 'rgba(255,255,255,0.3)',
                  letterSpacing: 6, textTransform: 'uppercase',
                  marginBottom: 8,
                }}>
                  Hello, I'm
                </motion.div>
                <motion.h1 variants={item} style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(48px, 8vw, 100px)',
                  fontWeight: 800, lineHeight: 0.95,
                  letterSpacing: '-4px', color: '#fff',
                }}>
                  Abdul
                </motion.h1>
                <motion.h1 variants={item} style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(48px, 8vw, 100px)',
                  fontWeight: 800, lineHeight: 0.95,
                  letterSpacing: '-4px', color: '#fff',
                  display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap',
                }}>
                  Hannan
                  <span style={{
                    fontSize: 'clamp(18px, 2.5vw, 28px)',
                    fontWeight: 600, letterSpacing: '-1px',
                    color: 'rgba(255,255,255,0.25)',
                  }}>(hannanbuilds)</span>
                </motion.h1>
              </div>

              <motion.div variants={item} style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(20px, 3vw, 32px)',
                fontWeight: 600, marginBottom: 28, height: 44,
                marginTop: 16,
              }}>
                <TypeWriter />
              </motion.div>

              <motion.p variants={item} style={{
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 480, lineHeight: 1.8, marginBottom: 40,
              }}>
                I build intelligent software, SaaS products and web applications that solve real problems. From idea to launch.
              </motion.p>

              <motion.div variants={item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <motion.a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(3,38,252,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#0326fc', color: '#fff',
                    fontSize: 15, fontWeight: 600,
                    padding: '15px 32px', borderRadius: 100,
                    boxShadow: '0 4px 20px rgba(3,38,252,0.3)',
                  }}
                >
                  Let's Talk <ArrowUpRight size={16} />
                </motion.a>
                <motion.a href="#experience"
                  whileHover={{ y: -3, borderColor: '#fff' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'transparent', color: '#fff',
                    fontSize: 15, fontWeight: 600,
                    padding: '15px 32px', borderRadius: 100,
                    border: '1.5px solid rgba(255,255,255,0.12)',
                  }}
                >
                  View Work
                </motion.a>
              </motion.div>
            </div>

            {/* Right side: photo */}
            <motion.div variants={item} className="hero-photo-wrap" style={{
              width: 340, height: 400, position: 'relative', flexShrink: 0,
            }}>
              {/* Background accent */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(3,38,252,0.08) 0%, rgba(3,38,252,0.02) 100%)',
                border: '1px solid rgba(3,38,252,0.1)',
              }} />
              {/* Photo */}
              <div style={{
                position: 'absolute', top: 16, left: 16, right: 16, bottom: 50,
                borderRadius: 14,
                background: '#111',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(3,38,252,0.05)',
              }}>
                <img
                  src="/photo.png"
                  alt="Abdul Hannan"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
                  display: 'none', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 64, fontWeight: 800,
                  color: '#0326fc', letterSpacing: '-3px',
                }}>AH</div>
              </div>
              {/* Bottom label */}
              <div style={{
                position: 'absolute', bottom: 16, left: 16, right: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14, fontWeight: 700, color: '#fff',
                  }}>Abdul Hannan</div>
                  <div style={{
                    fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2,
                  }}>AI Product Engineer</div>
                </div>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#0326fc', boxShadow: '0 0 8px #0326fc',
                }} />
              </div>
              {/* Floating icon */}
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} style={{
                position: 'absolute', top: 20, right: -12,
                width: 36, height: 36, background: '#0326fc',
                borderRadius: 10, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(3,38,252,0.3)',
              }}>
                <Code2 size={16} color="#fff" />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={item} style={{
            display: 'flex', gap: 0, marginTop: 80,
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="hero-stat" style={{
                  opacity: 0, flex: 1, padding: '28px 0', textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 36, height: 36,
                    background: 'rgba(3,38,252,0.08)',
                    borderRadius: 10, marginBottom: 12,
                  }}>
                    <Icon size={16} color="#0326fc" />
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(26px, 3vw, 38px)',
                    fontWeight: 800, color: '#fff',
                    lineHeight: 1, letterSpacing: '-1px',
                  }}>{s.value}</div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 6, fontWeight: 500 }}>{s.label}</p>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5, duration: 1 }} style={{
        position: 'absolute', bottom: 28, left: '50%',
        transform: 'translateX(-50%)', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{
          width: 18, height: 28,
          border: '1.5px solid rgba(255,255,255,0.12)',
          borderRadius: 10, display: 'flex',
          justifyContent: 'center', paddingTop: 5,
        }}>
          <div style={{ width: 2, height: 6, background: '#0326fc', borderRadius: 3 }} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #0326fc; }
          50% { opacity: 0.5; box-shadow: 0 0 16px #0326fc; }
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 768px) { .hero-photo-wrap { width: 260px !important; height: 300px !important; } }
      `}</style>
    </section>
  )
}