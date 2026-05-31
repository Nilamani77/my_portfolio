import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EDU = [
  {
    year: 'Pursuing',
    degree: 'B.Tech — Artificial Intelligence & Machine Learning',
    inst: 'GIET University, Gunupur, Odisha',
    status: 'Pursuing',
    icon: '🎓',
    c: '#a855f7',
    desc: 'Pursuing B.Tech in AI & ML, gaining expertise in machine learning, neural networks, data science, and software engineering. Building AI-powered projects and full-stack web applications alongside academics.',
  },
  {
    year: '2023',
    degree: '12th Standard — Higher Secondary',
    inst: 'Kuchinda Higher Secondary School, Odisha Board',
    status: 'Completed',
    icon: '📚',
    c: '#06b6d4',
    desc: 'Completed Higher Secondary education under Odisha Board in 2023. Built a strong foundation in science and mathematics that fuelled interest in computer science and technology.',
  },
  {
    year: '2021',
    degree: '10th Standard — Secondary (Madhyamik)',
    inst: 'Hemsagar High School PakelKhol, Odisha Board',
    status: 'Completed',
    icon: '🏫',
    c: '#10b981',
    desc: 'Completed secondary education under Odisha Board in 2021 with good academic performance. This phase built the curiosity and discipline that drives passion for technology and problem-solving.',
  },
]

/* ─── Card component ─── */
function EduCard({ item, delay }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="card"
      style={{
        padding: '24px 26px',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${item.c}22`,
        height: '100%',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.76, 0, 0.24, 1] }}
      whileHover={{ y: -4, borderColor: `${item.c}44`, boxShadow: `0 12px 40px ${item.c}12` }}
    >
      {/* Top accent line */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg,transparent,${item.c},transparent)`,
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: delay + 0.3, duration: 0.8 }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at top left,${item.c}07,transparent 60%)`,
          pointerEvents: 'none',
          borderRadius: 16,
        }}
      />

      {/* Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span
          style={{
            fontFamily: 'var(--font-m)',
            fontSize: 11,
            color: item.c,
            background: `${item.c}15`,
            border: `1px solid ${item.c}30`,
            padding: '3px 10px',
            borderRadius: 20,
          }}
        >
          {item.year}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-m)',
            fontSize: 11,
            color: 'var(--dim)',
            background: 'rgba(255,255,255,.04)',
            border: '1px solid rgba(255,255,255,.06)',
            padding: '3px 10px',
            borderRadius: 20,
          }}
        >
          {item.status}
        </span>
      </div>

      {/* Degree */}
      <h3
        style={{
          fontFamily: 'var(--font-h)',
          fontWeight: 700,
          fontSize: 15,
          color: 'var(--white)',
          lineHeight: 1.4,
          marginBottom: 6,
        }}
      >
        {item.degree}
      </h3>

      {/* Institution */}
      <div style={{ fontSize: 13, fontWeight: 600, color: item.c, marginBottom: 10 }}>{item.inst}</div>

      {/* Description */}
      <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
    </motion.div>
  )
}

/* ─── Dot in centre column ─── */
function Dot({ item, i }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center', paddingTop: 24 }}>
      <motion.div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: `${item.c}18`,
          border: `2px solid ${item.c}`,
          boxShadow: `0 0 18px ${item.c}50`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          position: 'relative',
          zIndex: 2,
          flexShrink: 0,
        }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.15, type: 'spring', stiffness: 220 }}
      >
        {item.icon}
        {/* Pulse ring */}
        <motion.div
          style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: `1px solid ${item.c}30` }}
          animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.5 }}
        />
      </motion.div>
    </div>
  )
}

/* ─── Mobile: left-line timeline ─── */
function MobileTimeline() {
  return (
    <div style={{ position: 'relative', paddingLeft: 32 }}>
      <div
        style={{
          position: 'absolute',
          left: 15,
          top: 0,
          bottom: 0,
          width: 2,
          background:
            'linear-gradient(180deg,transparent,#7c3aed,#a855f7,#06b6d4,#10b981,transparent)',
          boxShadow: '0 0 10px rgba(124,58,237,.5)',
        }}
      />

      {EDU.map((item, i) => (
        <div key={item.degree} style={{ position: 'relative', marginBottom: i < EDU.length - 1 ? 28 : 0 }}>
          <MobileDot item={item} i={i} />
          <EduCard item={item} delay={i * 0.1} />
        </div>
      ))}
    </div>
  )
}

function MobileDot({ item, i }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'absolute',
        left: -32,
        top: 20,
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: `${item.c}18`,
        border: `2px solid ${item.c}`,
        boxShadow: `0 0 14px ${item.c}50`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        zIndex: 2,
      }}
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ delay: i * 0.1 + 0.1, type: 'spring', stiffness: 220 }}
    >
      {item.icon}
    </motion.div>
  )
}

/* ─── Desktop: alternating timeline ─── */
function DesktopTimeline() {
  return (
    <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          transform: 'translateX(-50%)',
          background:
            'linear-gradient(180deg,transparent,#7c3aed,#a855f7,#06b6d4,#10b981,transparent)',
          boxShadow: '0 0 12px rgba(124,58,237,.5)',
        }}
      />

      {EDU.map((item, i) => {
        const isLeft = i % 2 === 0
        return (
          <div
            key={item.degree}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 64px 1fr',
              alignItems: 'start',
              marginBottom: i < EDU.length - 1 ? 48 : 0,
            }}
          >
            <div style={{ paddingRight: 28 }}>{isLeft && <EduCard item={item} delay={i * 0.12} />}</div>
            <Dot item={item} i={i} />
            <div style={{ paddingLeft: 28 }}>{!isLeft && <EduCard item={item} delay={i * 0.12} />}</div>
          </div>
        )
      })}
    </div>
  )
}

export default function Education() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const particles = useMemo(() => {
    // Stable pseudo-random layout (no Math.random during render)
    const count = 8
    let seed = 1337
    const rnd = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296
      return seed / 4294967296
    }

    return Array.from({ length: count }).map((_, i) => {
      const w = rnd() * 3 + 2
      const h = rnd() * 3 + 2
      const left = 10 + rnd() * 80
      const top = 10 + rnd() * 80
      const color = i % 2 ? '#7c3aed' : '#10b981'
      return {
        key: i,
        width: w,
        height: h,
        left: `${left}%`,
        top: `${top}%`,
        color,
        duration: 4 + i,
        delay: i * 0.4,
      }
    })
  }, [])

  return (
    <section id="education" className="section" ref={ref}>
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.key}
          style={{
            position: 'absolute',
            width: p.width,
            height: p.height,
            borderRadius: '50%',
            left: p.left,
            top: p.top,
            background: p.color,
            opacity: 0.2,
            pointerEvents: 'none',
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      <div className="container">
        <div className="header-center">
          <div className="sec-label" style={{ justifyContent: 'center' }}>
            <div style={{ width: 36, height: 1, background: 'linear-gradient(90deg,transparent,#7c3aed)' }} />
            <span className="sec-label__num">05</span>
            <div className="sec-label__line" />
            <span className="sec-label__text">EDUCATION</span>
          </div>

          <motion.h2
            className="sec-title"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Academic <span className="grad-purple">Journey</span>
          </motion.h2>

          <motion.p
            className="sec-sub"
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.32 }}
          >
            My educational path — from school to specialising in AI & Machine Learning.
          </motion.p>
        </div>

        <div className="edu-desktop">
          <DesktopTimeline />
        </div>
        <div className="edu-mobile">
          <MobileTimeline />
        </div>
      </div>

      <style>{`
        .edu-desktop { display: block; }
        .edu-mobile  { display: none; }

        @media (max-width: 768px) {
          .edu-desktop { display: none !important; }
          .edu-mobile  { display: block !important; }
        }
      `}</style>
    </section>
  )
}

