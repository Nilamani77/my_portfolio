import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// ── DATA: Experiences ──
const EXPERIENCE = [
  {
    type: 'internship',
    title: 'Python with MySQL Internship',
    org: 'GIET University',
    year: '2025',
    duration: '1 Month',
    c: '#10b981', // Emerald
    icon: '💼',
    points: [
      'Developed database-driven applications using Python and MySQL',
      'Implemented CRUD operations and robust backend business logic',
      'Designed structured database schemas for efficient data management',
      'Gained hands-on experience with real-world software development workflows',
    ],
  },
  {
    type: 'Virtual Internship',
    title: 'AI-ML Virtual Intern',
    org: 'EduSkills | AICTE | Google for Developers',
    year: 'Jan 2026 - Mar 2026',
    duration: '10 Weeks',
    c: '#f59e0b', // Orange
    icon: '🤖',
    points: [
      'Successfully completed a 10-week AI & Machine Learning Virtual Internship under AICTE and EduSkills.',
      'Gained practical knowledge of Machine Learning concepts, data preprocessing, model training, and evaluation.',
      'Worked on AI/ML learning modules and hands-on exercises supported by Google for Developers.',
      'Developed problem-solving and analytical skills through real-world AI and data-driven applications.',
      'Enhanced understanding of modern Artificial Intelligence technologies and industry best practices.'
    ],
  },
]

// ── DATA: Workshops & Training ──
const WORKSHOPS = [
  {
    title: '5-Day Cyber Security Workshop',
    org: 'GIET University',
    year: '2024',
    c: '#ef4444', // Red
    icon: '🛡️',
    desc: 'Comprehensive workshop covering network security, ethical hacking fundamentals, penetration testing concepts, cryptography, and cybersecurity best practices for modern applications.',
  },
  {
    title: '2-Day Tech Sprint Hackathon',
    org: 'GIET University',
    year: '2025',
    c: '#f59e0b', // Amber
    icon: '⚡',
    desc: 'Participated in an intensive hackathon focused on rapid prototyping, collaborative problem-solving, and building functional tech solutions within a 48-hour deadline.',
  },
]

// ── DATA: Awards & Certifications ──
const AWARDS = [
  {
    title: 'Python (Basic) Skill Certification',
    issuer: 'HackerRank',
    year: '2026',
    c: '#10b981',
    description:
      'Validated fundamental Python programming skills including problem-solving, data types, loops, functions, and basic algorithms.',
  },
  {
    title: 'Design Fundamentals with AI',
    issuer: 'Adobe × UNICEF × YuWaah',
    year: '2026',
    c: '#ef4444',
    description:
      'Successfully completed AI-powered design fundamentals training with a perfect score of 100%.',
  },
  {
    title: 'HackTheRank Online Quiz Event',
    issuer: 'HackTheRank',
    year: '2026',
    c: '#8b5cf6',
    description:
      'Recognized for active participation and problem-solving skills in the HackTheRank coding quiz event.',
  },
]

export default function AllAchievements() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient glows */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          maxWidth: 800,
          height: 400,
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.08), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Container mein padding: '0 20px' add kiya mobile edges ke liye */}
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

        {/* ── Fixed Back Button ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <motion.button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--dim)',
              fontFamily: 'var(--font-m)',
              fontSize: 14,
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              cursor: 'pointer',
              outline: 'none',
            }}
            whileHover={{
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.08)',
              scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Portfolio
          </motion.button>
        </motion.div>

        {/* ── Page Header ── */}
        <div style={{ textAlign: 'left', marginBottom: 'clamp(40px, 8vw, 60px)' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-h)',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 800,
              color: 'var(--white)',
              lineHeight: 1.1,
              marginBottom: 16
            }}
          >
            My Full <span style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--muted)', fontSize: 'clamp(14px, 3vw, 16px)', maxWidth: 600, lineHeight: 1.6 }}
          >
            A comprehensive overview of my professional experience, technical workshops, hackathons, and certifications that have shaped my career.
          </motion.p>
        </div>

        {/* ── SECTION: Professional Experience ── */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(20px, 4vw, 24px)', color: 'var(--white)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 'clamp(24px, 5vw, 28px)' }}>💼</span> Professional Experience
          </h2>

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="card"
              // Padding clamp kiya gaya hai taaki mobile par thoda kam rahe
              style={{ padding: 'clamp(20px, 5vw, 32px)', marginBottom: 24, border: `1px solid ${exp.c}28`, position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ borderColor: `${exp.c}50`, boxShadow: `0 10px 40px ${exp.c}10` }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, ${exp.c}, transparent)` }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
                <div style={{ flex: '1 1 min-content' }}>
                  <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: 'clamp(18px, 4vw, 20px)', color: 'var(--white)', marginBottom: 6 }}>{exp.title}</h3>
                  <div style={{ fontSize: 14, fontWeight: 600, color: exp.c }}>{exp.org}</div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ display: 'inline-block', fontFamily: 'var(--font-m)', fontSize: 12, color: 'var(--dim)', backgroundColor: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', padding: '6px 14px', borderRadius: 20 }}>
                    {exp.year} • {exp.duration}
                  </span>
                </div>
              </div>

              {/* Grid minmax mobile width ke liye 250px pe set kiya gaya hai */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 12, marginTop: 24 }}>
                {exp.points.map((pt, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: exp.c, marginTop: 7, flexShrink: 0 }} />
                    <span style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── SECTION: Workshops & Hackathons ── */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(20px, 4vw, 24px)', color: 'var(--white)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 'clamp(24px, 5vw, 28px)' }}>🚀</span> Workshops & Hackathons
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 4vw, 24px)' }}>
            {WORKSHOPS.map((w, i) => (
              <motion.div
                key={w.title}
                className="card"
                style={{ padding: 'clamp(20px, 5vw, 28px)', border: `1px solid ${w.c}18`, position: 'relative' }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: `${w.c}38`, boxShadow: `0 12px 30px ${w.c}12` }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ fontSize: 24, backgroundColor: `${w.c}15`, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}>{w.icon}</div>
                  <div style={{ fontFamily: 'var(--font-m)', fontSize: 11, color: 'var(--dim)', backgroundColor: 'rgba(255,255,255,.03)', padding: '4px 10px', borderRadius: 12, height: 'fit-content' }}>{w.year}</div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: 17, color: 'var(--white)', marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
                <div style={{ fontSize: 13, color: w.c, fontWeight: 600, marginBottom: 12 }}>{w.org}</div>
                <p style={{ color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.6 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SECTION: Certifications & Awards ── */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(20px, 4vw, 24px)', color: 'var(--white)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 'clamp(24px, 5vw, 28px)' }}>🏆</span> Certifications & Awards
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 4vw, 24px)' }}>
            {AWARDS.map((award, i) => (
              <motion.div
                key={award.title}
                className="card"
                style={{ padding: 'clamp(16px, 4vw, 20px)', border: `1px solid ${award.c}20`, display: 'flex', alignItems: 'flex-start', gap: 16 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: `${award.c}50` }}
              >
                <div style={{ width: 4, minHeight: 40, backgroundColor: award.c, borderRadius: 4, marginTop: 4, alignSelf: 'stretch' }} />
                
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontFamily: 'var(--font-h)', color: 'var(--white)', fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{award.title}</h4>
                  
                  <div style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--dim)', marginBottom: 10, fontFamily: 'var(--font-m)', flexWrap: 'wrap' }}>
                    <span>{award.issuer}</span>
                    <span>•</span>
                    <span>{award.year}</span>
                  </div>
                  
                  <p style={{ color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.6 }}>
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
