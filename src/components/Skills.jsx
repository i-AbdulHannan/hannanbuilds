import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'AI Integrated Product Engineering', pct: 95 },
  { name: 'SaaS Development', pct: 92 },
  { name: 'PHP Applications', pct: 90 },
  { name: 'WordPress', pct: 90 },
  { name: 'Prompt Engineering', pct: 88 },
  { name: 'System Architecture', pct: 87 },
]

const tools = [
  'HTML', 'CSS', 'JavaScript', 'jQuery', 'MySQL', 'PHP',
  'Tailwind CSS', 'Git', 'GitHub', 'Vercel', 'Linux', 'Netlify',
  'API Integration', 'WordPress', 'Elementor', 'WooCommerce',
  'Payment Gateways', 'Payment Integration', 'Python',
]

export default function Skills() {
  const barsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      barsRef.current.forEach((bar, i) => {
        if (!bar) return
        gsap.fromTo(bar, { width: 0 }, {
          width: skills[i].pct + '%',
          duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 85%' }
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" style={{
      padding: '120px 0', background: '#000',
      color: '#fff', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(3,38,252,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="section-label" style={{ color: '#0326fc' }}>Skills & Expertise</div>
          <h2 className="section-title" style={{ color: '#fff' }}>My technical<br />toolkit</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 16 }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 60 }} className="skills-grid">
          {skills.map((s, i) => (
            <motion.div key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16, padding: 24,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{s.name}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#0326fc' }}>{s.pct}%</span>
              </div>
              <div style={{
                width: '100%', height: 4,
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 4, overflow: 'hidden',
              }}>
                <div ref={el => barsRef.current[i] = el} style={{
                  height: '100%', background: '#0326fc',
                  borderRadius: 4, width: 0,
                }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool tags */}
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: 48 }}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>
            Technologies I work with
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {tools.map((t, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ background: '#0326fc', color: '#fff', borderColor: '#0326fc' }}
                style={{
                  fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '8px 18px', borderRadius: 100,
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}