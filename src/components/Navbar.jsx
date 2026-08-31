import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../App'
import { Sun, Moon, Menu, X } from 'lucide-react'

const INSTAGRAM = 'https://instagram.com/hannanbuilds'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  const isDark = theme === 'dark'

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '20px 0',
          background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px',
            color: isDark ? '#fff' : '#000',
          }}>
            AH<span style={{ color: '#0326fc' }}>.</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none' }} className="nav-links-desktop">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{
                    fontSize: 14, fontWeight: 500,
                    color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = isDark ? '#fff' : '#000'}
                  onMouseLeave={e => e.target.style.color = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 14, fontWeight: 600, color: '#fff',
                  background: '#0326fc', padding: '10px 24px', borderRadius: 100,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(3,38,252,0.35)' }}
                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
                >
                  Let's Talk
                </a>
              </li>
            </ul>

            <button onClick={toggleTheme} aria-label="Toggle theme" style={{
              width: 40, height: 40, borderRadius: '50%',
              border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
              background: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: isDark ? '#fff' : '#000',
            }}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button onClick={() => setMobileOpen(true)} className="hamburger-btn" aria-label="Open menu" style={{
              display: 'none', width: 40, height: 40, borderRadius: 12,
              border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
              background: 'transparent',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: isDark ? '#fff' : '#000',
            }}>
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0,
              background: isDark ? '#000' : '#fff',
              zIndex: 9999, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 28,
            }}
          >
            <button onClick={() => setMobileOpen(false)} style={{
              position: 'absolute', top: 20, right: 24,
              width: 44, height: 44, borderRadius: '50%',
              border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
              background: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: isDark ? '#fff' : '#000',
            }}>
              <X size={20} />
            </button>
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 28, fontWeight: 700,
                  color: isDark ? '#fff' : '#000',
                }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: 12, fontSize: 16, fontWeight: 600, color: '#fff',
                background: '#0326fc', padding: '14px 36px', borderRadius: 100,
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}