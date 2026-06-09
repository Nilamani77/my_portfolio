import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const EXPERIENCE = [
  {
    type: 'internship',
    title: 'Python with MySQL Internship',
    org: 'GIET University',
    year: '2025',
    duration: '1 Month',
    c: '#10b981',
    icon: '💼',
    points: [
      'Developed database-driven applications using Python and MySQL',
      'Implemented CRUD operations and robust backend business logic',
      'Designed structured database schemas for efficient data management',
      'Gained hands-on experience with real-world software development workflows',
    ],
  },
]

const WORKSHOPS = [
  {
    title: '5-Day Cyber Security Workshop',
    org: 'GIET University',
    year: '2024',
    c: '#ef4444',
    icon: '🛡️',
    desc: 'Comprehensive workshop covering network security, ethical hacking fundamentals, penetration testing concepts, cryptography, and cybersecurity best practices for modern applications.',
  },
  {
    title: '2-Day Tech Sprint Hackathon',
    org: 'GIET University',
    year: '2025',
    c: '#f59e0b',
    icon: '⚡',
    desc: 'Participated in an intensive hackathon focused on rapid prototyping, collaborative problem-solving, and building functional tech solutions within a 48-hour deadline.',
  },
]

export default function Certs() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const navigate = useNavigate()

  return (
    <section id="certs" ref={ref} className="section">
      <div
        className="glow-blob"
        style={{
          width: 700,
          height: 350,
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(ellipse,rgba(16,185,129,.06),transparent 70%)',
        }}
      />

      <div className="container">
        {/* Header */}
        <div className="header-center">
          <div className="sec-label">
            <div
              style={{ width: 36, height: 1, background: 'linear-gradient(90deg,transparent,#7c3aed)' }}
            />
            <span className="sec-label__num">06</span>
            <div className="sec-label__line" />
            <span className="sec-label__text">EXPERIENCE & ACHIEVEMENTS</span>
          </div>
          <motion.h2
            className="sec-title"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Internship & <span className="grad-purple">Training</span>
          </motion.h2>
          <motion.p
            className="sec-sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.32 }}
          >
            Hands-on industry experience and technical workshops that shaped my skills.
          </motion.p>
        </div>

        {/* ── Internship (full width) ── */}
        {EXPERIENCE.map((exp) => (
          <motion.div
            key={exp.title}
            className="card"
            style={{
              padding: '36px 40px',
              marginBottom: 36,
              border: `1px solid ${exp.c}28`,
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            whileHover={{
              borderColor: `${exp.c}50`,
              boxShadow: `0 20px 60px ${exp.c}10`,
            }}
          >
            {/* Top accent */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg,transparent,${exp.c},transparent)`,
              }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
            />

            {/* Ambient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at top left,${exp.c}06,transparent 60%)`,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                gap: 24,
                position: 'relative',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: `${exp.c}15`,
                  border: `1px solid ${exp.c}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 30,
                  flexShrink: 0,
                }}
              >
                {exp.icon}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-m)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '.05em',
                      color: exp.c,
                      background: `${exp.c}15`,
                      border: `1px solid ${exp.c}30`,
                      padding: '4px 12px',
                      borderRadius: 20,
                    }}
                  >
                    INTERNSHIP
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-m)',
                      fontSize: 11,
                      color: 'var(--dim)',
                      background: 'rgba(255,255,255,.04)',
                      border: '1px solid rgba(255,255,255,.06)',
                      padding: '4px 10px',
                      borderRadius: 20,
                    }}
                  >
                    {exp.year}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-m)',
                      fontSize: 11,
                      color: 'var(--dim)',
                      background: 'rgba(255,255,255,.04)',
                      border: '1px solid rgba(255,255,255,.06)',
                      padding: '4px 10px',
                      borderRadius: 20,
                    }}
                  >
                    {exp.duration}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-h)',
                    fontWeight: 700,
                    fontSize: 22,
                    color: 'var(--white)',
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {exp.title}
                </h3>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: exp.c,
                    marginBottom: 20,
                  }}
                >
                  {exp.org}
                </div>

                {/* Bullet points */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 10,
                  }}
                >
                  {exp.points.map((pt, j) => (
                    <motion.div
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                      }}
                      initial={{ opacity: 0, x: 12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + j * 0.1 }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: exp.c,
                          marginTop: 7,
                          flexShrink: 0,
                          boxShadow: `0 0 8px ${exp.c}80`,
                        }}
                      />
                      <span style={{ color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.6 }}>
                        {pt}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ── Workshops (2 columns) ── */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontFamily: 'var(--font-m)',
              fontSize: 11,
              color: 'var(--dim)',
              letterSpacing: '.25em',
              marginBottom: 24,
              textAlign: 'center',
            }}
          >
            WORKSHOPS & TRAINING
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
            {WORKSHOPS.map((w, i) => (
              <motion.div
                key={w.title}
                className="card"
                style={{
                  padding: '28px 28px',
                  border: `1px solid ${w.c}18`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: 0.5 + i * 0.12,
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                }}
                whileHover={{
                  y: -5,
                  borderColor: `${w.c}38`,
                  boxShadow: `0 16px 48px ${w.c}12`,
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg,transparent,${w.c},transparent)`,
                    transformOrigin: 'left',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.8 }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at top right,${w.c}06,transparent 60%)`,
                    pointerEvents: 'none',
                    borderRadius: 16,
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: `${w.c}14`,
                      border: `1px solid ${w.c}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                    }}
                  >
                    {w.icon}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-m)', fontSize: 11, fontWeight: 600, color: w.c }}>{w.org}</div>
                    <div style={{ fontFamily: 'var(--font-m)', fontSize: 11, color: 'var(--dim)', marginTop: 2 }}>{w.year}</div>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: 17, color: 'var(--white)', lineHeight: 1.35, marginBottom: 10 }}>
                  {w.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.7 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="card"
          style={{
            padding: '28px 40px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px 80px',
            marginTop: 36,
            textAlign: 'center',
          }}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75 }}
        >
          {[
            { n: '2', l: 'Internship', c: '#10b981' },
            { n: '2', l: 'Workshops', c: '#f59e0b' },
            { n: '2025', l: 'Latest Activity', c: '#a855f7' },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: 36, color: s.c, textShadow: `0 0 22px ${s.c}55` }}>{s.n}</div>
              <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* ── NEW: "See My Full Potential" Button ── */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 48,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            onClick={() => navigate('/all-achievements')}
            style={{
              background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: '30px',
              fontFamily: 'var(--font-m)',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 15px 40px rgba(124, 58, 237, 0.5)',
              background: 'linear-gradient(90deg, #8b5cf6, #c084fc)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            See My Full Potential 
            <svg 
              width="18" height="18" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
