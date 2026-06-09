import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import internship from '../assets/internship.jpg'
import EduSkill from '../assets/internship2.jpg'
import Python from '../assets/python_certificate.png'
import AdobeImg from '../assets/adobe.jpg'
import HackerRank from '../assets/Hackerrank.jpg'
import Virtual from '../assets/EduSkillsCertificate.png'

// ── DATA ──
const EXPERIENCE = [
  {
    type: 'internship',
    title: 'Python with MySQL Internship',
    org: 'GIET University',
    image: internship,
    year: '2025',
    duration: '1 Month',
    c: '#10b981',
    icon: '💼',
    points: [
      'Developed database-driven applications using Python and MySQL.',
      'Implemented CRUD operations and robust backend business logic.',
      'Designed structured database schemas for efficient data management.',
      'Gained hands-on experience with real-world software workflows.',
    ],
  },
  {
    type: 'Virtual Internship',
    title: 'AI-ML Virtual Intern',
    org: 'EduSkills | AICTE | Google for Developers',
    image: EduSkill,
    year: 'Jan 2026 - Mar 2026',
    duration: '10 Weeks',
    c: '#f59e0b',
    icon: '🤖',
    points: [
      'Successfully completed a 10-week AI & Machine Learning Virtual Internship.',
      'Gained practical knowledge of ML concepts, data preprocessing, and model training.',
      'Worked on AI/ML learning modules supported by Google for Developers.',
      'Developed problem-solving skills through real-world AI applications.',
    ],
  },
  {
    type: 'Virtual Internship',
    title: 'Python Full Stack Development Intern',
    org: 'EduSkills Academy',
    image: Virtual,
    year: 'Apr 2026 - Jun 2026',
    duration: '8 Weeks',
    c: '#84cc16',
    icon: '💻',
    points: [
      'Successfully completed an 8-week Python Full Stack Development Internship with Project.',
      'Learned Python programming, FastAPI framework, API development, and database integration.',
      'Worked on authentication, authorization, React frontend development, and React Hooks.',
      'Integrated React frontend with FastAPI backend and explored deployment best practices.',
      'Developed a capstone project involving an E-commerce Platform with User Authentication and Product Catalog.',
      'Completed and presented the project: Mini Leaderboard System.',
    ],
  },
]

const WORKSHOPS = [
  { title: '5-Day Cyber Security Workshop', org: 'GIET University', year: '2024', c: '#ef4444', desc: 'Comprehensive workshop covering network security, ethical hacking, cryptography, and cybersecurity best practices.' },
  { title: '2-Day Tech Sprint Hackathon', org: 'GIET University',  year: '2025', c: '#f59e0b', desc: 'Participated in an intensive hackathon focused on rapid prototyping and building functional tech solutions within 48 hours.' },
]

const AWARDS = [
  { title: 'Python (Basic) Skill Certification', issuer: 'HackerRank', image: Python, year: '2026', c: '#10b981', description: 'Validated fundamental Python programming skills including problem-solving, loops, and basic algorithms.' },
  { title: 'Design Fundamentals with AI', issuer: 'Adobe × UNICEF × YuWaah', image: AdobeImg, year: '2026', c: '#ef4444', description: 'Successfully completed AI-powered design fundamentals training with a perfect score of 100%.' },
  { title: 'HackTheRank Online Quiz', issuer: 'HackTheRank', image: HackerRank, year: '2026', c: '#8b5cf6', description: 'Recognized for active participation and problem-solving skills in the HackTheRank coding quiz event.' },
]

export default function AllAchievements() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  }

  // Highly Attractive & Perfectly Sized Image Box
  const ImageBox = ({ src, themeColor, marginBottom = '0px', mobileFull = false }) => {
    if (!src) return null;
    return (
      <div className={mobileFull ? "img-box-mobile" : "img-box-grid"} style={{ 
        flexShrink: 0,
        borderRadius: '16px', 
        overflow: 'hidden',
        backgroundColor: '#111', // Dark background ensures image stands out
        border: `1px solid ${themeColor}40`, // Theme colored subtle border
        boxShadow: `0 10px 30px -10px ${themeColor}50`, // Glow effect based on theme color
        marginBottom: marginBottom,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Added a subtle blurred background using the same image for a premium cinematic effect */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(20px)', opacity: 0.4, zIndex: 0 }} />
        
        <motion.img 
          src={src} 
          alt="Achievement"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', cursor: 'pointer', zIndex: 1, padding: '8px' }} 
        />
      </div>
    )
  }

  return (
    <>
      <style>{`
        .responsive-card {
          flex-direction: column;
        }
        
        /* Mobile Image Box: Full width, cinematic ratio */
        .img-box-mobile {
          width: 100% !important;
          aspect-ratio: 16 / 10;
          margin: 0 0 24px 0;
        }
        
        /* Grid Image Box: Full width, cinematic ratio */
        .img-box-grid {
          width: 100%;
          aspect-ratio: 16 / 10;
        }

        @media (min-width: 768px) {
          .responsive-card {
            flex-direction: row;
            align-items: flex-start;
          }
          /* Desktop Image Box: Much larger and clearer */
          .img-box-mobile {
            width: 340px !important;
            margin: 0;
            aspect-ratio: 16 / 11;
          }
        }
        
        .social-icon {
          color: #888;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #fff;
          transform: translateY(-4px) scale(1.1);
        }
      `}</style>

      <div style={{ minHeight: '100vh', backgroundColor: '#050505', paddingTop: '80px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        
        {/* Enhanced Background Glows */}
        <div style={{ position: 'absolute', top: '-10%', left: '10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(0,0,0,0) 60%)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 60%)', zIndex: 0, pointerEvents: 'none' }} />

        <div className="container" ref={ref} style={{ flex: 1, position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 20px', paddingBottom: '100px' }}>
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ marginBottom: 50 }}>
             <button 
               onClick={() => navigate('/')} 
               style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 24px', borderRadius: '30px', color: '#a3a3a3', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
               onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateX(-5px)' }}
               onMouseOut={(e) => { e.currentTarget.style.color = '#a3a3a3'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateX(0px)' }}
              >
               ← Back
             </button>
          </motion.div>

          <h1 style={{ fontFamily: 'var(--font-h), sans-serif', fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 800, color: '#fff', marginBottom: 70, letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              My Full <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</span>
          </h1>

          {/* ── SECTION: Professional Experience ── */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "show" : "hidden"} style={{ marginBottom: 100 }}>
            <h2 style={{ fontSize: '28px', color: '#fff', marginBottom: 40, display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, letterSpacing: '-0.5px' }}>💼 Professional Experience</h2>
            
            {EXPERIENCE.map((exp) => (
              <motion.div variants={itemVariants} whileHover={{ y: -5, borderColor: `${exp.c}50` }} key={exp.title} className="responsive-card" style={{ padding: 'clamp(24px, 4vw, 40px)', marginBottom: 32, background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(16px)', border: `1px solid rgba(255,255,255,0.05)`, borderRadius: '32px', display: 'flex', gap: 'clamp(24px, 4vw, 48px)', transition: 'all 0.4s ease' }}>
                
                {/* Dynamically Sized Image */}
                <ImageBox src={exp.image} mobileFull={true} themeColor={exp.c} />
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: 24 }}>
                    <div>
                      <h3 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: '#fff', marginBottom: 8, fontWeight: 700, lineHeight: 1.3 }}>{exp.title}</h3>
                      <div style={{ fontSize: 16, color: exp.c, fontWeight: 600 }}>{exp.org}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{ padding: '8px 16px', background: `${exp.c}15`, border: `1px solid ${exp.c}30`, borderRadius: '24px', fontSize: '13px', color: exp.c, fontWeight: 600 }}>📅 {exp.year}</span>
                      <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', fontSize: '13px', color: '#e5e5e5', fontWeight: 500 }}>⏱️ {exp.duration}</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: 14, marginTop: 24 }}>
                    {exp.points.map((pt, j) => (
                      <div key={j} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <span style={{ color: exp.c, fontSize: '20px', lineHeight: 1.1 }}>▹</span>
                        <span style={{ color: '#a3a3a3', fontSize: 'clamp(15px, 2vw, 16px)', lineHeight: 1.7 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── SECTION: Workshops & Hackathons ── */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "show" : "hidden"} style={{ marginBottom: 100 }}>
            <h2 style={{ fontSize: '28px', color: '#fff', marginBottom: 40, fontWeight: 800, letterSpacing: '-0.5px' }}>🚀 Workshops & Hackathons</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
              {WORKSHOPS.map((w) => (
                <motion.div variants={itemVariants} whileHover={{ y: -8, borderColor: `${w.c}50`, boxShadow: `0 20px 40px -20px ${w.c}30` }} key={w.title} style={{ padding: '32px', background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(16px)', border: `1px solid rgba(255,255,255,0.05)`, borderRadius: '32px', display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease' }}>
                  <ImageBox src={w.image} themeColor={w.c} marginBottom="28px" />
                  <h3 style={{ fontSize: 22, color: '#fff', fontWeight: 700, marginBottom: 14, lineHeight: 1.4 }}>{w.title}</h3>
                  <div style={{ display: 'inline-block', alignSelf: 'flex-start', fontSize: 13, color: w.c, background: `${w.c}15`, padding: '6px 14px', borderRadius: '20px', fontWeight: 600, marginBottom: 20 }}>{w.year} • {w.org}</div>
                  <p style={{ color: '#a3a3a3', fontSize: 16, lineHeight: 1.7, flexGrow: 1 }}>{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── SECTION: Certifications & Awards ── */}
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "show" : "hidden"} style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '28px', color: '#fff', marginBottom: 40, fontWeight: 800, letterSpacing: '-0.5px' }}>🏆 Certifications & Awards</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
              {AWARDS.map((a) => (
                <motion.div variants={itemVariants} whileHover={{ y: -8, borderColor: `${a.c}50`, boxShadow: `0 20px 40px -20px ${a.c}30` }} key={a.title} style={{ padding: '32px', background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(16px)', border: `1px solid rgba(255,255,255,0.05)`, borderRadius: '32px', display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease' }}>
                  <ImageBox src={a.image} themeColor={a.c} marginBottom="28px" />
                  <h3 style={{ fontSize: 22, color: '#fff', fontWeight: 700, marginBottom: 14, lineHeight: 1.4 }}>{a.title}</h3>
                  <div style={{ fontSize: 15, color: '#e5e5e5', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, marginBottom: 20 }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: a.c, boxShadow: `0 0 12px ${a.c}` }}></span>
                    {a.issuer}
                  </div>
                  <p style={{ color: '#a3a3a3', fontSize: 16, lineHeight: 1.7 }}>{a.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── FOOTER SECTION ── */}
        <footer style={{ 
          marginTop: 'auto',
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          background: 'rgba(5,5,5,0.9)', 
          backdropFilter: 'blur(24px)',
          padding: '50px 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.5px' }}>
              Let's build something <span style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>amazing.</span>
            </h2>

            <div style={{ display: 'flex', gap: '28px', marginTop: '10px' }}>
              <a href="https://github.com/Nilamani77" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/nilamani-kundu-8924bb259/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            <p style={{ color: '#888', fontSize: '15px', margin: 0, marginTop: '10px', fontWeight: 500 }}>
              © {new Date().getFullYear()} NILAMANI KUNDU ❤️. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </>
  )
}
