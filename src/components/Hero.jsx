import { motion } from 'framer-motion'
import {
  FiGithub,
  FiMail,
  FiArrowDown,
  FiCode,
  FiCpu,
  FiDatabase,
  FiPhone,
  FiExternalLink,
} from 'react-icons/fi'

import nkImg from '../assets/nk.jpg'

const ROLES = [
  {
    label: 'AI & ML Developer',
    Icon: FiCpu,
    color: '#a855f7',
    bg: 'rgba(168,85,247,.12)',
    border: 'rgba(168,85,247,.3)',
  },
  {
    label: 'Full Stack Developer',
    Icon: FiCode,
    color: '#22d3ee',
    bg: 'rgba(6,182,212,.1)',
    border: 'rgba(6,182,212,.3)',
  },
  {
    label: 'Python Programmer',
    Icon: FiDatabase,
    color: '#4ade80',
    bg: 'rgba(74,222,128,.1)',
    border: 'rgba(74,222,128,.3)',
  },
]

const INFO = [
  {
    title: 'AI & ML Developer',
    desc: 'Building intelligent systems and AI-powered applications using Python, Machine Learning & Deep Learning.',
    color: '#a855f7',
  },
  {
    title: 'Full Stack Developer',
    desc: 'Creating responsive modern websites with React, Flask and smooth UI experiences.',
    color: '#06b6d4',
  },
  {
    title: 'Problem Solver',
    desc: 'Passionate about solving real-world challenges through innovative technology and impactful projects.',
    color: '#10b981',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Home"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#050810',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* BACKGROUND */}

      <div className="hero-blur hero-blur-1" />
      <div className="hero-blur hero-blur-2" />

      <div className="hero-grid" />

      {/* MAIN */}

      <div className="hero-container">
        {/* LEFT SIDE */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* STATUS */}

          <div className="hero-status">
            <span className="status-dot" />

            <span className="status-text">
              B.Tech AI & ML Student · Odisha, India
            </span>
          </div>

          {/* HEADING */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-b)',
              fontSize: 16,
              fontWeight: 300,
              color: '#94a3b8',
              marginBottom: 10,
              lineHeight: 1,
            }}
          >
            Hello, I'm
          </motion.p>

          {/* SAME TEXT STYLE */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.32,
            }}
            style={{
              marginBottom: 30,
            }}
          >
            <div className="hero-name-purple">
              Nilamani
            </div>

            <div className="hero-name-white">
              Kundu
            </div>
          </motion.div>

          {/* STRUCTURE CARDS */}

          <div className="hero-info-wrapper">
            {INFO.map((item, index) => (
              <div
                key={index}
                className="hero-info-card"
              >
                <div
                  className="hero-info-line"
                  style={{
                    background: item.color,
                  }}
                />

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROLE TAGS */}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="role-wrapper"
          >
            {ROLES.map(({ label, Icon, color, bg, border }) => (
              <span
                key={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 18px',
                  borderRadius: 50,
                  background: bg,
                  border: `1px solid ${border}`,
                  color,
                  fontSize: 13,
                  fontFamily: 'var(--font-m)',
                  fontWeight: 500,
                }}
              >
                <Icon size={13} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.84 }}
            className="hero-buttons"
          >
            <button
              className="btn-primary"
              onClick={() => {
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects
              <FiExternalLink size={15} />
            </button>

            <button
              className="btn-ghost"
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <FiMail size={15} />
              Contact Me
            </button>
          </motion.div>

          {/* SOCIAL */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.96 }}
            className="hero-socials"
          >
            <span>CONNECT</span>

            <div className="social-line" />

            {[
              {
                href: 'https://github.com/Nilamani77',
                Icon: FiGithub,
              },
              {
                href: 'mailto:nilamanikundu2@gmail.com',
                Icon: FiMail,
              },
              {
                href: 'tel:+917978338602',
                Icon: FiPhone,
              },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-image-wrapper">
            {/* ROTATING RING */}

            <div className="rotating-ring" />

            {/* IMAGE */}

            <img
              src={nkImg}
              alt="Nilamani Kundu"
              className="hero-image"
            />

            {/* FLOATING CARDS */}

            <div className="floating-card top-card">
              <h2>3+</h2>
              <p>Projects</p>
            </div>

            <div className="floating-card middle-card">
              <h2>12+</h2>
              <p>Technologies</p>
            </div>

            <div className="floating-card bottom-card">
              <h2>2+</h2>
              <p>Achievements</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL */}

      <div className="scroll-indicator">
        <span>SCROLL</span>

        <div className="scroll-line" />

        <FiArrowDown size={12} color="#a855f7" />
      </div>

      {/* CSS */}

      <style>{`

      *{
        box-sizing:border-box;
      }

      /* BACKGROUND */

      .hero-grid{
        position:absolute;
        inset:0;
        background-image:
        linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
        background-size:50px 50px;
        z-index:0;
      }

      .hero-blur{
        position:absolute;
        border-radius:50%;
        filter:blur(90px);
      }

      .hero-blur-1{
        width:380px;
        height:380px;
        background:rgba(168,85,247,.18);
        top:0;
        left:-100px;
      }

      .hero-blur-2{
        width:280px;
        height:280px;
        background:rgba(6,182,212,.15);
        bottom:0;
        right:-80px;
      }

      /* MAIN */

      .hero-container{
        width:100%;
        max-width:1280px;
        margin:auto;
        padding:120px 48px 90px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:80px;
        position:relative;
        z-index:5;
      }

      /* LEFT */

      .hero-left{
        flex:1;
        max-width:620px;
      }

      .hero-status{
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:28px;
      }

      .status-dot{
        width:8px;
        height:8px;
        border-radius:50%;
        background:#10b981;
        box-shadow:0 0 10px #10b981;
      }

      .status-text{
        font-family:var(--font-m);
        font-size:11px;
        letter-spacing:.22em;
        color:#64748b;
        text-transform:uppercase;
      }

      /* SAME ORIGINAL TEXT STYLE */

      .hero-name-purple{
        font-family:var(--font-h);
        font-weight:800;
        font-size:clamp(3rem,7.2vw,6.2rem);
        letter-spacing:-0.025em;
        line-height:1.08;
        color:#c084fc;
        text-shadow:
        0 0 40px rgba(168,85,247,.6),
        0 0 80px rgba(168,85,247,.25);
      }

      .hero-name-white{
        font-family:var(--font-h);
        font-weight:800;
        font-size:clamp(3rem,7.2vw,6.2rem);
        letter-spacing:-0.025em;
        line-height:1.08;
        color:#f1f5f9;
        text-shadow:0 0 30px rgba(241,245,249,.15);
      }

      /* INFO SECTION */

      .hero-info-wrapper{
        display:flex;
        flex-direction:column;
        gap:18px;
        margin-bottom:35px;
      }

      .hero-info-card{
        display:flex;
        gap:18px;
        padding:22px;
        border-radius:24px;
        background:rgba(15,23,42,.72);
        border:1px solid rgba(255,255,255,.06);
        backdrop-filter:blur(14px);
        transition:.35s;
      }

      .hero-info-card:hover{
        transform:translateX(8px);
      }

      .hero-info-line{
        width:5px;
        border-radius:20px;
      }

      .hero-info-card h3{
        margin:0;
        color:white;
        font-size:19px;
        font-weight:700;
      }

      .hero-info-card p{
        margin-top:8px;
        color:#94a3b8;
        line-height:1.7;
        font-size:15px;
      }

      /* ROLE */

      .role-wrapper{
        display:flex;
        flex-wrap:wrap;
        gap:12px;
        margin-bottom:35px;
      }

      /* BUTTONS */

      .hero-buttons{
        display:flex;
        flex-wrap:wrap;
        gap:16px;
        margin-bottom:40px;
      }

      .btn-primary{
        background:linear-gradient(90deg,#9333ea,#a855f7);
        border:none;
        color:white;
        padding:15px 30px;
        border-radius:50px;
        display:flex;
        align-items:center;
        gap:10px;
        cursor:pointer;
        font-size:15px;
        font-weight:600;
      }

      .btn-ghost{
        background:transparent;
        border:1px solid rgba(168,85,247,.35);
        color:#c084fc;
        padding:15px 30px;
        border-radius:50px;
        display:flex;
        align-items:center;
        gap:10px;
        cursor:pointer;
        font-size:15px;
        font-weight:600;
      }

      /* SOCIAL */

      .hero-socials{
        display:flex;
        align-items:center;
        gap:14px;
      }

      .hero-socials span{
        font-family:var(--font-m);
        font-size:10px;
        letter-spacing:.3em;
        color:#475569;
      }

      .social-line{
        width:24px;
        height:1px;
        background:rgba(71,85,105,.45);
      }

      .hero-social-link{
        width:42px;
        height:42px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        border:1px solid rgba(255,255,255,.08);
        color:#cbd5e1;
        transition:.3s;
      }

      .hero-social-link:hover{
        transform:translateY(-4px);
        border-color:#a855f7;
        color:#a855f7;
      }

      /* RIGHT */

      .hero-right{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .hero-image-wrapper{
        position:relative;
        width:440px;
        height:440px;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .rotating-ring{
        position:absolute;
        inset:0;
        border-radius:50%;
        border:2px dashed rgba(168,85,247,.4);
        animation:rotate 20s linear infinite;
      }

      @keyframes rotate{
        from{
          transform:rotate(0deg);
        }
        to{
          transform:rotate(360deg);
        }
      }

      .hero-image{
        width:82%;
        height:82%;
        object-fit:cover;
        border-radius:50%;
        border:4px solid rgba(168,85,247,.2);
        box-shadow:
        0 0 50px rgba(168,85,247,.35),
        0 0 120px rgba(168,85,247,.2);
      }

      /* FLOATING */

      .floating-card{
        position:absolute;
        width:150px;
        padding:18px;
        border-radius:24px;
        background:rgba(15,23,42,.88);
        border:1px solid rgba(255,255,255,.08);
        backdrop-filter:blur(14px);
        text-align:center;
      }

      .floating-card h2{
        margin:0;
        font-size:34px;
        font-weight:800;
      }

      .floating-card p{
        margin-top:6px;
        color:#94a3b8;
      }

      .top-card{
        top:15px;
        left:-25px;
      }

      .top-card h2{
        color:#a855f7;
      }

      .middle-card{
        right:-35px;
        top:50%;
        transform:translateY(-50%);
      }

      .middle-card h2{
        color:#06b6d4;
      }

      .bottom-card{
        bottom:15px;
        left:-10px;
      }

      .bottom-card h2{
        color:#10b981;
      }

      /* SCROLL */

      .scroll-indicator{
        position:absolute;
        bottom:28px;
        left:50%;
        transform:translateX(-50%);
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:8px;
        z-index:10;
      }

      .scroll-indicator span{
        font-size:10px;
        letter-spacing:.3em;
        color:#475569;
      }

      .scroll-line{
        width:1px;
        height:42px;
        background:
        linear-gradient(180deg,rgba(124,58,237,.75),transparent);
      }

      /* RESPONSIVE */

      @media(max-width:992px){

        .hero-container{
          flex-direction:column;
          text-align:center;
          padding:120px 24px 80px;
          gap:90px;
        }

        .hero-left{
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .hero-socials{
          justify-content:center;
        }

        .hero-info-card{
          text-align:left;
        }

      }

      @media(max-width:768px){

        .hero-image-wrapper{
          width:300px;
          height:300px;
        }

        .floating-card{
          width:120px;
          padding:12px;
        }

        .floating-card h2{
          font-size:26px;
        }

        .floating-card p{
          font-size:12px;
        }

        .top-card{
          top:-20px;
          left:50%;
          transform:translateX(-50%);
        }

        .middle-card{
          right:-20px;
        }

        .bottom-card{
          bottom:-20px;
          left:50%;
          transform:translateX(-50%);
        }

      }

      `}</style>
    </section>
  )
}

