import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  'AI Integrated Products',
  'SaaS Development',
  'Full Stack Engineering',
  'Idea to Launch',
  'System Architecture',
  'Prompt Engineering',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function About() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, {
        y: 60, opacity: 0, rotateY: 5,
      }, {
        y: 0, opacity: 1, rotateY: 0,
        duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{
      padding: '120px 0',
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(3,38,252,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(3,38,252,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        }} className="about-grid">

          {/* Left card */}
          <div ref={cardRef} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 24, padding: 48,
            position: 'relative', perspective: 1000,
          }}>
            <div style={{
              width: 64, height: 64, background: '#0326fc',
              borderRadius: 16, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              marginBottom: 28, boxShadow: '0 8px 30px rgba(3,38,252,0.25)',
            }}>
              <Sparkles size={28} color="#fff" />
            </div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 22, fontWeight: 700, marginBottom: 12,
            }}>
              Engineering Intelligence
            </h3>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Building AI powered products and systems that automate workflows, eliminate repetitive tasks, and create measurable business value.
            </p>
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: '#0326fc', color: '#fff',
              padding: '16px 24px', borderRadius: 16,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14, fontWeight: 700,
              boxShadow: '0 8px 30px rgba(3,38,252,0.3)',
            }}>
              100% <span style={{ fontSize: 12, opacity: 0.8 }}>Satisfaction</span>
            </div>
          </div>

          {/* Right content */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}>
            <motion.div variants={item} className="section-label">About Me</motion.div>
            <motion.h2 variants={item} className="section-title" style={{ marginBottom: 24 }}>
              Building software<br />that people <span style={{ color: '#0326fc' }}>actually use</span>
            </motion.h2>
            <motion.p variants={item} style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 16 }}>
              I started coding in 2023, not because I wanted to become a developer, but because I wanted to build things people could actually use.
            </motion.p>
            <motion.p variants={item} style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 16 }}>
              Since then, I have worked on websites, SaaS products, and AI tools for founders and small businesses. I enjoy solving practical problems with software, especially where AI can remove repetitive work and save time.
            </motion.p>
            <motion.p variants={item} style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 32 }}>
              I am also building workroom, a product focused on making business operations simpler. Outside work, you will usually find me learning, building, or experimenting with new product ideas.
            </motion.p>

            <motion.div variants={item} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {highlights.map((h, i) => (
                <motion.div key={i} variants={item} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)',
                }}>
                  <span style={{
                    width: 22, height: 22,
                    background: 'rgba(3,38,252,0.08)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Check size={11} color="#0326fc" strokeWidth={3} />
                  </span>
                  {h}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}