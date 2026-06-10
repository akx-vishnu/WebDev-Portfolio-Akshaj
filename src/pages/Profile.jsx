import { useRef } from 'react'

const IMAGE_URL = '/passport-pic.jpg'

export default function Profile() {
  const imgRef = useRef(null)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = IMAGE_URL
    link.download = 'Akshaj_V_Nair_Passport_Photo.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.avatarRing}>
            <div style={styles.initialsBox}>AV</div>
          </div>
          <h1 style={styles.name}>Akshaj V Nair</h1>
          <p style={styles.tagline}>Passport Size Photo — Personal Use</p>
        </div>

        {/* Photo */}
        <div style={styles.photoWrapper}>
          <div style={styles.photoFrame}>
            <img
              ref={imgRef}
              src={IMAGE_URL}
              alt="Akshaj V Nair — Passport Size Photo"
              style={styles.photo}
              draggable={false}
            />
            <div style={styles.photoOverlay} />
          </div>
          <div style={styles.glowRing} />
        </div>

        {/* Info badges */}
        <div style={styles.badges}>
          <span style={styles.badge}>📸 Passport Size</span>
          <span style={styles.badge}>🎓 JPEG Format</span>
          <span style={styles.badge}>⚡ 200 KB</span>
        </div>

        {/* Actions */}
        <div style={styles.actions}>
          <button
            onClick={handleDownload}
            style={styles.downloadBtn}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 92, 246, 0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.35)'
            }}
          >
            <span style={styles.downloadIcon}>⬇</span>
            Download Photo
          </button>

          <a
            href={IMAGE_URL}
            target="_blank"
            rel="noreferrer"
            style={styles.openBtn}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
            }}
          >
            Open in new tab ↗
          </a>
        </div>

        {/* Direct URL hint */}
        <div style={styles.urlHint}>
          <p style={styles.urlLabel}>Direct image URL:</p>
          <code style={styles.urlCode}>akshajvnair.vercel.app/passport-pic.jpg</code>
        </div>
      </div>

      {/* Background blobs */}
      <div style={{ ...styles.blob, top: '10%', left: '15%', background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }} />
      <div style={{ ...styles.blob, bottom: '15%', right: '10%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0a1e 50%, #0a0f1a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  card: {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '28px',
    padding: '48px 40px',
    maxWidth: '420px',
    width: '100%',
    boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '28px',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  avatarRing: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 0 4px rgba(139,92,246,0.2)',
  },
  initialsBox: {
    color: '#fff',
    fontWeight: '700',
    fontSize: '18px',
    letterSpacing: '0.5px',
  },
  name: {
    color: '#f8f8ff',
    fontSize: '26px',
    fontWeight: '700',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  tagline: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '13px',
    margin: 0,
    letterSpacing: '0.3px',
  },
  photoWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoFrame: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)',
    zIndex: 1,
  },
  photo: {
    display: 'block',
    width: '240px',
    height: 'auto',
    objectFit: 'cover',
  },
  photoOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, transparent 70%, rgba(0,0,0,0.2) 100%)',
    pointerEvents: 'none',
  },
  glowRing: {
    position: 'absolute',
    width: '260px',
    height: '100%',
    borderRadius: '20px',
    background: 'transparent',
    boxShadow: '0 0 60px 15px rgba(139,92,246,0.12)',
    zIndex: 0,
  },
  badges: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badge: {
    background: 'rgba(139, 92, 246, 0.12)',
    border: '1px solid rgba(139, 92, 246, 0.25)',
    color: 'rgba(200, 180, 255, 0.85)',
    borderRadius: '100px',
    padding: '5px 14px',
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '0.2px',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '14px',
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(139, 92, 246, 0.35)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    fontFamily: 'inherit',
    letterSpacing: '0.2px',
  },
  downloadIcon: {
    fontSize: '17px',
  },
  openBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.03)',
    color: 'rgba(255,255,255,0.65)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '14px',
    padding: '13px 24px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 0.2s ease, border-color 0.2s ease',
    fontFamily: 'inherit',
    letterSpacing: '0.2px',
  },
  urlHint: {
    width: '100%',
    background: 'rgba(0,0,0,0.25)',
    borderRadius: '12px',
    padding: '14px 16px',
    border: '1px solid rgba(255,255,255,0.06)',
  },
  urlLabel: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: '11px',
    margin: '0 0 6px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  },
  urlCode: {
    color: 'rgba(167, 139, 250, 0.9)',
    fontSize: '13px',
    fontFamily: "'Fira Code', 'Courier New', monospace",
    wordBreak: 'break-all',
  },
}
