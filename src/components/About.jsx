
import { motion } from 'framer-motion'
import { FiMapPin, FiCode, FiCpu, FiDatabase, FiMail, FiGithub } from 'react-icons/fi'
import nk from '../assets/nk.jpg'

const traits = [
  { title: 'AI & ML', desc: 'Building intelligent systems & AI models', c: '#a855f7', Icon: FiCpu },
  { title: 'Full Stack Dev', desc: 'End-to-end web apps with Flask & JavaScript', c: '#06b6d4', Icon: FiCode },
  { title: 'Python Expert', desc: 'Scripting, automation & backend development', c: '#10b981', Icon: FiCode },
  { title: 'Database Design', desc: 'MySQL, DBMS schema & data management', c: '#f59e0b', Icon: FiDatabase },
]

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay: d, duration: .65, ease: [.76, 0, .24, 1] },
})

export default function About() {
  return (
    <section id="about" className="section">
      <div className="glow-blob" style={{ width: 500, height: 500, top: 0, right: 0, background: 'radial-gradient(circle,rgba(124,58,237,.06),transparent 70%)' }} />
      <div className="glow-blob" style={{ width: 360, height: 360, bottom: 0, left: 0, background: 'radial-gradient(circle,rgba(16,185,129,.05),transparent 70%)' }} />

      <div className="container">
        <div className="about-grid">

          {/* LEFT — profile visual */}
          <motion.div {...up(.1)}>
            <div style={{ position: 'relative', marginBottom: 20 }}>
              <div style={{ position: 'absolute', inset: -14, border: '1px solid rgba(124,58,237,.16)', borderRadius: 28, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: -26, border: '1px solid rgba(16,185,129,.07)', borderRadius: 34, pointerEvents: 'none' }} />

              <div className="profile-card">
                <div className="profile-avatar-area">
                  {/* Avatar */}
                  <motion.div
                    className="profile-avatar"
                    animate={{
                      boxShadow: [
                        '0 0 50px rgba(124,58,237,.4),0 0 100px rgba(16,185,129,.15)',
                        '0 0 80px rgba(124,58,237,.65),0 0 140px rgba(16,185,129,.3)',
                        '0 0 50px rgba(124,58,237,.4),0 0 100px rgba(16,185,129,.15)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={nk}
                      alt="Nilamani Kundu"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />

                    {/* Rotating green dot */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: '#10b981',
                        top: 3,
                        left: '50%',
                        transformOrigin: '0 87px',
                        boxShadow: '0 0 10px #10b981'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  </motion.div>

                  {/* Floating chips */}
                  <motion.div className="card" style={{ position: 'absolute', top: 18, right: 18, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600 }}
                    animate={{ y: [0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity }}>
                    <FiCpu size={12} color="#a855f7" /> AI / ML
                  </motion.div>
                  <motion.div className="card" style={{ position: 'absolute', bottom: 18, left: 18, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600 }}
                    animate={{ y: [0, 10, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
                    <FiCode size={12} color="#06b6d4" /> Developer
                  </motion.div>
                </div>

                <div className="profile-footer">
                  <div>
                    <div style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: 16, color: 'var(--white)' }}>Nilamani Kundu</div>
                    <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 2 }}>B.Tech AI & ML — GIET University</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--dim)', fontSize: 12 }}>
                    <FiMapPin size={11} /> Odisha, India
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="about-stats">
              {[{ n: '3', l: 'Projects', c: '#a855f7' }, { n: '12+', l: 'Tech Skills', c: '#06b6d4' }, { n: '2', l: 'Internships', c: '#10b981' }].map(s => (
                <motion.div key={s.l} className="card stat-box" whileHover={{ y: -5 }}>
                  <div className="stat-box__num" style={{ color: s.c, textShadow: `0 0 20px ${s.c}55` }}>{s.n}</div>
                  <div className="stat-box__label">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — story */}
          <div>
            <motion.div {...up(.05)}>
              <div className="sec-label">
                <span className="sec-label__num">02</span>
                <div className="sec-label__line" />
                <span className="sec-label__text">ABOUT ME</span>
              </div>
            </motion.div>

            <motion.h2 className="sec-title" {...up(.15)}>
              Building the Future<br />
              <span className="grad-purple">One Line of Code</span><br />
              at a Time
            </motion.h2>

            <motion.p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }} {...up(.25)}>
              I'm <strong style={{ color: 'var(--white)' }}>Nilamani Kundu</strong>, a B.Tech student specialising in <strong style={{ color: '#a855f7' }}>Artificial Intelligence & Machine Learning</strong> at GIET University, Odisha. I have strong skills in Web Development, Python Programming, and Backend Development.
            </motion.p>
            <motion.p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }} {...up(.35)}>
              I enjoy building responsive web applications and AI-powered systems using modern technologies. I'm passionate about problem-solving, continuously learning new technologies, and developing impactful real-world projects that make a difference.
            </motion.p>

            {/* Traits */}
            <div className="trait-grid">
              {traits.map((t, i) => (
                <motion.div key={t.title} className="card trait-item"
                  initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: .4 + i * .08, duration: .55 }}
                  whileHover={{ x: 5, borderColor: `${t.c}45` }}>
                  <div className="trait-item__title" style={{ color: t.c, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <t.Icon size={12} /> {t.title}
                  </div>
                  <div className="trait-item__val">{t.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }} {...up(.9)}>
              <a href="https://github.com/Nilamani77" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <FiGithub size={14} /> GitHub Profile
              </a>
              <a href="mailto:nilamanikundu2@gmail.com" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <FiMail size={14} /> Send Email
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
