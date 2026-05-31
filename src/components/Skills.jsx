import { useRef, useState } from 'react'

import { motion, useInView } from 'framer-motion'
import { FiDatabase, FiCpu, FiGlobe, FiLayers } from 'react-icons/fi'
import { SiPython, SiJavascript, SiHtml5, SiFlask, SiMysql } from 'react-icons/si'

/* Inline icons not available in react-icons v5 */
const CssIcon = ({ sz = 22, color = '#1572b6' }) => (
  <svg width={sz} height={sz} viewBox="0 0 24 24" fill={color}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.413z" />
  </svg>
)

const CIcon = ({ sz = 22, color = '#a8b9cc' }) => (
  <svg width={sz} height={sz} viewBox="0 0 24 24" fill={color}>
    <path d="M16.5 17.5c-.83.48-1.73.73-2.68.73-3.04 0-5.32-2.3-5.32-5.23s2.28-5.23 5.32-5.23c.95 0 1.85.25 2.68.73v2.6a3.15 3.15 0 00-2.68-1.49c-1.73 0-3.05 1.35-3.05 3.09 0 1.74 1.32 3.09 3.05 3.09.99 0 1.89-.48 2.68-1.34v2.05z" />
  </svg>
)

const JavaIcon = ({ sz = 22, color = '#f89820' }) => (
  <svg width={sz} height={sz} viewBox="0 0 24 24" fill={color}>
    <path d="M8.85 17.09c0 .46 1.42.91 3.17.91 1.74 0 3.17-.45 3.17-.91 0-.38-.9-.7-2.22-.83v-.95c1.87.14 3.22.62 3.22 1.18 0 .68-1.85 1.23-4.17 1.23-2.32 0-4.17-.55-4.17-1.23 0-.56 1.35-1.04 3.22-1.18v.95c-1.32.13-2.22.45-2.22.83zm4.78-3.17c0 .3-.89.55-2.01.55-1.12 0-2.01-.25-2.01-.55s.89-.55 2.01-.55c1.12 0 2.01.25 2.01.55zm-7.56-7.06c-.17.17-.17.44 0 .61l2.03 2.03-2.03 2.03c-.17.17-.17.44 0 .61l.35.35c.17.17.44.17.61 0L9.3 10.12l1.27 1.27c.17.17.44.17.61 0l.35-.35c.17-.17.17-.44 0-.61L10.26 9.16l1.27-1.27c.17-.17.17-.44 0-.61l-.35-.35a.43.43 0 00-.61 0L9.3 8.2 7.03 5.93a.43.43 0 00-.61 0l-.35.93z" />
  </svg>
)

const ALL_SKILLS = [
  { name: 'Python', pct: 90, Icon: SiPython, c: '#3776ab', cat: 'backend' },
  { name: 'C', pct: 75, Icon: CIcon, c: '#a8b9cc', cat: 'backend' },
  { name: 'Java', pct: 70, Icon: JavaIcon, c: '#f89820', cat: 'backend' },
  { name: 'HTML5', pct: 92, Icon: SiHtml5, c: '#e34f26', cat: 'frontend' },
  { name: 'CSS3', pct: 88, Icon: CssIcon, c: '#1572b6', cat: 'frontend' },
  { name: 'JavaScript', pct: 80, Icon: SiJavascript, c: '#f7df1e', cat: 'frontend' },
  { name: 'Flask', pct: 85, Icon: SiFlask, c: '#a855f7', cat: 'backend' },
  { name: 'MySQL', pct: 83, Icon: SiMysql, c: '#00758f', cat: 'database' },
  { name: 'DBMS', pct: 78, Icon: FiDatabase, c: '#10b981', cat: 'database' },
  { name: 'DSA', pct: 72, Icon: FiLayers, c: '#06b6d4', cat: 'core' },
  { name: 'OOP', pct: 82, Icon: FiCpu, c: '#a855f7', cat: 'core' },
  { name: 'Web Dev', pct: 88, Icon: FiGlobe, c: '#f59e0b', cat: 'frontend' },
]

const BARS = [
  { label: 'Python Development', pct: 90, c: '#3776ab' },
  { label: 'Full Stack Web Dev', pct: 85, c: '#06b6d4' },
  { label: 'Database & Backend', pct: 83, c: '#10b981' },
  { label: 'AI & ML Concepts', pct: 78, c: '#a855f7' },
]

const CATS = ['All', 'Frontend', 'Backend', 'Database', 'Core']

const R = 36
const C_VAL = 2 * Math.PI * R

function Ring({ s, i, inView }) {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, y: 32, scale: 0.88 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: i * 0.07, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div style={{ position: 'relative', width: 88, height: 88 }}>
        <svg width="88" height="88" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="5" />
          <motion.circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke={s.c}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={C_VAL}
            initial={{ strokeDashoffset: C_VAL }}
            animate={inView ? { strokeDashoffset: C_VAL - (s.pct / 100) * C_VAL } : {}}
            transition={{ delay: i * 0.07 + 0.3, duration: 1.2, ease: 'easeOut' }}
            style={{ filter: `drop-shadow(0 0 5px ${s.c}88)` }}
          />
        </svg>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: `radial-gradient(circle,${s.c}10,transparent 70%)`,
          }}
        >
          {s.Icon === CssIcon ? (
            <CssIcon sz={20} color={s.c} />
          ) : (
            <s.Icon size={20} color={s.c} style={{ filter: `drop-shadow(0 0 7px ${s.c}88)` }} />
          )}
        </div>
      </div>

      <span
        style={{
          fontSize: 12,
          color: 'var(--muted)',
          fontWeight: 500,
          textAlign: 'center',
          lineHeight: 1.3,
        }}
      >
        {s.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [cat, setCat] = useState('All')
  const filtered =
    cat === 'All' ? ALL_SKILLS : ALL_SKILLS.filter((s) => s.cat === cat.toLowerCase())

  return (
    <section id="skills" ref={ref} className="section">
      <div
        className="glow-blob"
        style={{
          width: 700,
          height: 400,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(ellipse,rgba(124,58,237,.05),transparent 70%)',
        }}
      />

      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div className="sec-label">
            <span className="sec-label__num">03</span>
            <div className="sec-label__line" />
            <span className="sec-label__text">SKILLS & TECHNOLOGIES</span>
          </div>
          <motion.h2
            className="sec-title"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            My Technical <span className="grad-purple">Arsenal</span>
          </motion.h2>
          <motion.p
            className="sec-sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28 }}
          >
            Technologies and tools I use to build AI systems, web applications, and backend services.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.38 }}
        >
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                padding: '8px 20px',
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                transition: 'all .25s',
                background:
                  cat === c
                    ? 'linear-gradient(135deg,#7c3aed,#06b6d4)'
                    : 'transparent',
                color: cat === c ? '#fff' : 'var(--muted)',
                border: cat === c ? 'none' : '1px solid rgba(255,255,255,.08)',
                boxShadow: cat === c ? '0 0 22px rgba(124,58,237,.4)' : 'none',
              }}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Rings */}
        <div className="skills-rings">
          {filtered.map((s, i) => (
            <Ring key={s.name} s={s} i={i} inView={inView} />
          ))}
        </div>

        {/* Progress bars */}
        <div className="skill-bars">
          {BARS.map((b, i) => (
            <motion.div
              key={b.label}
              className="skill-bar"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="skill-bar__top">
                <span>{b.label}</span>
                <span className="skill-bar__pct" style={{ color: b.c }}>
                  {b.pct}%
                </span>
              </div>
              <div className="skill-bar__track">
                <motion.div
                  style={{
                    height: '100%',
                    background: `linear-gradient(90deg,${b.c}99,${b.c})`,
                    borderRadius: 2,
                    boxShadow: `0 0 8px ${b.c}70`,
                  }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${b.pct}%` } : {}}
                  transition={{
                    delay: 0.72 + i * 0.1,
                    duration: 1.1,
                    ease: 'easeOut',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

