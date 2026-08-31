export default function Footer() {
  const INSTAGRAM = 'https://instagram.com/hannanbuilds'
  return (
    <footer style={{
      background: 'var(--bg-secondary)', padding: '40px 0',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} <a href="#" style={{ color: '#0326fc', textDecoration: 'none' }}>Abdul Hannan</a>. Crafted with precision.
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
            onMouseEnter={e => e.target.style.color = '#0326fc'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >Instagram</a>
          <a href="https://www.linkedin.com/in/abdulhannan-projects" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
            onMouseEnter={e => e.target.style.color = '#0326fc'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >LinkedIn</a>
          <a href="mailto:projects.abdulhannan@gmail.com"
            style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
            onMouseEnter={e => e.target.style.color = '#0326fc'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >Email</a>
        </div>
      </div>
    </footer>
  )
}