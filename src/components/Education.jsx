import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  { school: 'Aligarh College of Technology', degree: "Associate's degree, Computer Software Engineering", date: '2023 to 2026' },
  { school: 'Aptech Pakistan', degree: "Associate's degree, Software Technology", date: 'Aug 2022 to Sep 2023' },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic background</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 60 }} className="edu-grid">
          {education.map((e, i) => (
            <motion.div key={i}
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: '#0326fc' }}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 40, transition: 'all 0.4s ease', cursor: 'default',
              }}
            >
              <div style={{
                width: 52, height: 52, background: '#0326fc',
                borderRadius: 14, display: 'flex',
                alignItems: 'center', justifyContent: 'center', marginBottom: 24,
                boxShadow: '0 8px 24px rgba(3,38,252,0.2)',
              }}>
                <GraduationCap size={24} color="#fff" />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{e.school}</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 4 }}>{e.degree}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{e.date}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}