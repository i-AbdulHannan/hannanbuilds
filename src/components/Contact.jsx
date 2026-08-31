import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ExternalLink, ArrowRight, MessageCircle } from 'lucide-react'

const INSTAGRAM = 'https://instagram.com/hannanbuilds'
const LINKEDIN = 'https://www.linkedin.com/in/abdulhannan-projects'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+92 317 1243725', href: 'tel:+923171243725' },
  { icon: Mail, label: 'Email', value: 'projects.abdulhannan@gmail.com', href: 'mailto:projects.abdulhannan@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Karachi, Sindh, Pakistan', href: null },
]

export default function Contact() {
  return (
    <>
      {/* CTA */}
      <section style={{
        padding: '120px 0', background: '#000', color: '#fff',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(3,38,252,0.08) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#0326fc' }}>Let's Collaborate</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Have an idea?<br />Let's build it.</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '24px auto 48px', lineHeight: 1.8 }}>
              If you are building something and need someone who can take it from idea to launch, let us talk.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(3,38,252,0.35)' }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#0326fc', color: '#fff', fontSize: 15, fontWeight: 600,
                  padding: '16px 36px', borderRadius: 100,
                  boxShadow: '0 4px 20px rgba(3,38,252,0.3)',
                }}
              >
                Get in Touch <ArrowRight size={16} />
              </motion.a>
              <motion.a href="tel:+923171243725"
                whileHover={{ y: -3, borderColor: '#fff' }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'transparent', color: '#fff', fontSize: 15, fontWeight: 600,
                  padding: '16px 36px', borderRadius: 100,
                  border: '1.5px solid rgba(255,255,255,0.12)',
                }}
              >
                Call Me <MessageCircle size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact" style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="contact-grid">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div className="section-label">Contact</div>
              <h2 className="section-title">Get in touch</h2>
              <p className="section-desc" style={{ marginTop: 16 }}>Ready to start your project? Reach out through any of these channels.</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
                {[
                  { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, href: INSTAGRAM },
                  { icon: <Mail size={18} />, href: 'mailto:projects.abdulhannan@gmail.com' },
                  { icon: <Phone size={18} />, href: 'tel:+923171243725' },
                ].map((s, i) => (
                  <motion.a key={i} href={s.href} target={i === 0 ? '_blank' : undefined}
                    whileHover={{ y: -3, background: '#0326fc', borderColor: '#0326fc', color: '#fff' }}
                    style={{
                      width: 48, height: 48,
                      border: '1.5px solid var(--border)',
                      borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)', transition: 'all 0.3s ease',
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <div>
              {contactInfo.map((c, i) => {
                const Icon = c.icon
                return (
                  <motion.div key={i}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 20,
                      padding: '24px 0',
                      borderBottom: i < contactInfo.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <div style={{
                      width: 48, height: 48,
                      background: 'rgba(3,38,252,0.08)',
                      borderRadius: 12, display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={20} color="#0326fc" />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>{c.label}</div>
                      <div style={{ fontSize: 16, fontWeight: 600 }}>
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease' }}
                            onMouseEnter={e => e.target.style.color = '#0326fc'}
                            onMouseLeave={e => e.target.style.color = 'inherit'}
                          >{c.value}</a>
                        ) : c.value}
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Instagram & LinkedIn */}
              <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 20,
                  padding: '24px 0',
                }}
              >
                <div style={{
                  width: 48, height: 48,
                  background: 'rgba(3,38,252,0.08)',
                  borderRadius: 12, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <ExternalLink size={20} color="#0326fc" />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>Social</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 15, fontWeight: 600, textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease' }}
                      onMouseEnter={e => e.target.style.color = '#0326fc'}
                      onMouseLeave={e => e.target.style.color = 'inherit'}
                    >@hannanbuilds</a>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 15, fontWeight: 600, textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease' }}
                      onMouseEnter={e => e.target.style.color = '#0326fc'}
                      onMouseLeave={e => e.target.style.color = 'inherit'}
                    >linkedin.com/in/abdulhannan-projects</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
      </section>
    </>
  )
}