import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Founder & Product Engineer',
    company: 'workroom',
    date: 'May 2026 to Present',
    desc: 'Building an AI powered workspace that helps businesses manage work, clients, and everyday operations from one place. Currently under active development.',
    tags: ['AI', 'Product Engineering', 'SaaS'],
    active: true,
  },
  {
    role: 'Modern Web Application Developer',
    company: 'S.M.I.T (Saylani Mass I.T Training)',
    date: 'Feb 2025 to Jul 2025',
    desc: 'Developed modern web applications with a focus on performance, scalability, and clean architecture. Worked on real world projects in a collaborative environment.',
    tags: ['Web Development', 'JavaScript', 'React'],
  },
  {
    role: 'WordPress Developer',
    company: 'BrightCraft Digital LTD',
    date: 'Sep 2024 to Apr 2025',
    desc: 'Built and customized WordPress solutions including themes, plugins, and performance optimized websites for diverse client needs.',
    tags: ['WordPress', 'PHP', 'Web Design'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Debugging Bugz',
    date: 'Oct 2022 to Jun 2024',
    desc: 'Designed and developed end to end web applications using PHP, MySQL, and modern JavaScript frameworks. Led multiple client projects from concept to deployment.',
    tags: ['PHP', 'MySQL', 'Full Stack'],
  },
  {
    role: 'PHP Web Application Developer',
    company: 'Debugging Bugz',
    date: 'Feb 2022 to Aug 2022',
    desc: 'Started my professional journey building PHP based web applications, databases, and server side logic for client projects.',
    tags: ['PHP', 'MySQL', 'Backend'],
  },
]

export default function Experience() {
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, {
        scaleY: 0, transformOrigin: 'top',
      }, {
        scaleY: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: { trigger: lineRef.current, start: 'top 75%' }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" style={{
      padding: '120px 0', background: 'var(--bg)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">Where I have worked</h2>
          <p className="section-desc" style={{ marginTop: 16 }}>
            A timeline of my professional journey, from full stack engineering to building AI powered products.
          </p>
        </motion.div>

        <div style={{ marginTop: 60, position: 'relative' }}>
          <div ref={lineRef} style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, #0326fc, var(--border))',
            transformOrigin: 'top',
          }} />

          {experiences.map((exp, i) => (
            <motion.div key={i}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                paddingLeft: 48, position: 'relative',
                paddingBottom: i < experiences.length - 1 ? 48 : 0,
              }}
            >
              <div style={{
                position: 'absolute',
                left: exp.active ? -8 : -6, top: 6,
                width: exp.active ? 16 : 12,
                height: exp.active ? 16 : 12,
                background: exp.active ? '#0326fc' : 'var(--bg)',
                border: exp.active ? 'none' : '2px solid var(--border)',
                borderRadius: '50%', zIndex: 1,
                boxShadow: exp.active ? '0 0 0 4px rgba(3,38,252,0.15)' : 'none',
              }} />

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap', gap: 8,
              }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700 }}>
                    {exp.role}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: '#0326fc', marginTop: 4 }}>
                    {exp.company}
                  </div>
                </div>
                <span style={{
                  fontSize: 13, fontWeight: 500, color: 'var(--text-muted)',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  padding: '6px 14px', borderRadius: 100, whiteSpace: 'nowrap',
                }}>
                  {exp.date}
                </span>
              </div>

              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 12, maxWidth: 600 }}>
                {exp.desc}
              </p>

              <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                {exp.tags.map((tag, ti) => (
                  <span key={ti} style={{
                    fontSize: 12, fontWeight: 500, color: '#0326fc',
                    background: 'rgba(3,38,252,0.08)',
                    padding: '5px 14px', borderRadius: 100,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}