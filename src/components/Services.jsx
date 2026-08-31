import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const INSTAGRAM = 'https://instagram.com/hannanbuilds'

const services = [
  { num: '01', title: 'SaaS Products', desc: 'Full cycle SaaS product development, from architecture to deployment and scaling of subscription based platforms.' },
  { num: '02', title: 'PaaS Products', desc: 'Platform as a Service solutions, building scalable platforms that enable others to build and deploy their own products.' },
  { num: '03', title: 'Web Applications', desc: 'Custom web apps built with modern stacks, dashboards, admin panels, CRMs, and full scale platforms.' },
  { num: '04', title: 'E-Commerce Websites', desc: 'Complete online stores with payment integration, inventory management, and optimized checkout experiences.' },
  { num: '05', title: 'WordPress Websites', desc: 'Professional WordPress development, custom themes, plugins, WooCommerce setups, and performance optimization.' },
  { num: '06', title: 'Portfolio Websites', desc: 'Stunning personal portfolios that showcase your work and make lasting impressions on visitors and clients.' },
  { num: '07', title: 'Landing Pages', desc: 'High converting landing pages, clean design, compelling copy, and optimized for lead generation and sales.' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="section-label">What I Do</div>
          <h2 className="section-title">Services I offer</h2>
          <p className="section-desc" style={{ marginTop: 16 }}>
            From idea to launch, I build products that work.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20, marginTop: 60 }}>
          {services.map((s, i) => (
            <motion.div key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: 'rgba(3,38,252,0.3)', boxShadow: '0 16px 48px rgba(3,38,252,0.05)' }}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 32, cursor: 'default',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: '#0326fc',
                transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }} className="service-line" />

              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 40, fontWeight: 800,
                color: 'var(--border)', lineHeight: 1, marginBottom: 16,
              }}>{s.num}</div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginTop: 20, fontSize: 12, fontWeight: 600, color: '#0326fc',
                opacity: 0, transform: 'translateY(6px)',
                transition: 'all 0.4s ease',
              }} className="service-arrow">
                Learn more <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <motion.a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(3,38,252,0.3)' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#0326fc', color: '#fff',
              fontSize: 14, fontWeight: 600,
              padding: '14px 32px', borderRadius: 100,
              boxShadow: '0 4px 16px rgba(3,38,252,0.25)',
            }}
          >
            Discuss a Project <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}