import { useRef, useState } from 'react'

import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import agreeImg from '../assets/agree.png'
import neuralImg from '../assets/nural.jpeg'
import societyImg from '../assets/society.jpeg'


const PROJECTS = [
  {
    id: 'p1',
    title: 'Agrreconnect — Smart Agriculture E-Commerce Platform',
    cat: 'CASE 01',
    year: '2024',

    desc: 'A modern agriculture e-commerce platform connecting farmers and buyers with seamless product management, secure authentication, responsive shopping experience, and real-time database integration.',

    problem:
      'Farmers and local agricultural sellers often struggle to reach customers digitally due to outdated systems, poor online visibility, and lack of secure product management platforms.',

    solution:
      'Developed a full-stack agriculture e-commerce platform with secure authentication, responsive product catalog, database integration, and smooth shopping experience for farmers and buyers.',

    impact:
      'Improved accessibility for agricultural product trading through a modern digital platform, enabling better customer engagement and streamlined online business operations.',

    tech: ['React', 'Flask', 'MySQL', 'JavaScript', 'CSS'],

    c: '#10b981',
    featured: true,

    github: 'https://github.com/Nilamani77/Agrreconnect_web.git',

    image: agreeImg
  },
  {
    id: 'p2',
    title: 'NeuralNotes — Syllabus-Aware AI Doubt Solver',
    cat: 'CASE 02',
    year: '2025',

    desc: 'A production-ready AI learning assistant built with custom RAG architecture and syllabus-aware contextual search.',

    problem:
      'Students often receive inaccurate or hallucinated AI-generated answers that are not aligned with their academic syllabus, leading to confusion and unreliable learning experiences.',

    solution:
      'Developed an AI-powered doubt-solving platform using Retrieval-Augmented Generation (RAG), contextual document processing, and syllabus-aware semantic search to provide accurate and relevant academic answers.',

    impact:
      'Enhanced learning efficiency by delivering reliable, syllabus-focused responses while reducing misinformation and improving student confidence in AI-assisted education.',

    tech: ['React', 'Python', 'RAG', 'NLP'],

    c: '#a855f7',

    featured: true,

    github: 'https://github.com/',

    image: neuralImg
  },
  {
    id: 'p3',
    title: 'Society Management System (SocietyPro)',
    cat: 'CASE 03',
    year: '2025',

    desc: 'A comprehensive residential society platform with billing, ticketing, automation, and resident communication features.',

    problem:
      'Residential societies often face difficulties in managing maintenance requests, visitor tracking, billing systems, and communication due to manual processes and fragmented management systems.',

    solution:
      'Built a centralized society management platform with automated maintenance tracking, complaint management, secure resident authentication, billing management, and real-time communication features.',

    impact:
      'Simplified residential operations by reducing manual workload, improving communication between residents and administrators, and enabling efficient digital management of society services.',

    tech: ['React', 'Flask', 'MySQL'],

    c: '#9333ea',

    featured: true,

    github: 'https://github.com/',

    image: societyImg
  },
]

function ProjCard({ p, i, inView }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div className={p.featured ? 'proj-featured' : ''}
      initial={{ opacity: 0, y: 44 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * .1, duration: .65, ease: [.76, 0, .24, 1] }}>
      <motion.div className="card proj-card" style={{ height: '100%', borderColor: hov ? `${p.c}38` : 'var(--border)' }}
        animate={{ y: hov ? -8 : 0 }} transition={{ duration: .28 }}
        onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}>

        {/* Visual */}
        <div className="proj-visual modern-preview">

          <img
            src={p.image}
            alt={p.title}
            className="proj-preview-img"
          />

          <div className="proj-overlay" />

          <div className="proj-case">
            {p.cat}
          </div>

          <motion.div
            className="proj-arrow"
            animate={{
              opacity: hov ? 1 : 0,
              y: hov ? 0 : 10
            }}
          >
            <FiArrowUpRight />
          </motion.div>

        </div>

        {/* Body */}
        {/* Body */}
        <div className="proj-body">

          <h3 className="proj-title">
            {p.title}
          </h3>

          <p className="proj-desc">
            {p.desc}
          </p>

          <div className="proj-content">

            {/* Problem */}
            <div className="proj-block">
              <span className="problem">
                • PROBLEM STATEMENT
              </span>

              <p>
                {p.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="proj-block">
              <span className="solution">
                • SOLUTION
              </span>

              <p>
                {p.solution}
              </p>
            </div>

            {/* Impact */}
            <div className="proj-impact">
              <span>
                • RESULTS & IMPACT
              </span>

              <p>
                {p.impact}
              </p>
            </div>

          </div>

          {/* Tags */}
          <div className="proj-tags">
            {p.tech.map(t => (
              <span
                key={t}
                className="proj-tag"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="proj-actions">

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-btn primary"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="#"
              className="proj-btn secondary"
            >
              <FiExternalLink />
              Live Demo
            </a>

          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" ref={ref} className="section">
      <div className="glow-blob" style={{ width: 380, height: 380, top: '20%', left: 0, background: 'radial-gradient(circle,rgba(16,185,129,.06),transparent 70%)' }} />
      <div className="glow-blob" style={{ width: 340, height: 340, bottom: '20%', right: 0, background: 'radial-gradient(circle,rgba(168,85,247,.06),transparent 70%)' }} />

      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 18,
            marginBottom: 60
          }}
        >
          <div>
            <div className="sec-label" >
              <span className="sec-label__num" >04</span>
              <div className="sec-label__line" />
              <span className="sec-label__text">PROJECTS</span>
            </div>
            <motion.h2 className="sec-title" style={{ margin: 0 }} initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .15 }}>
              Featured <span className="grad-purple">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            className="sec-sub"
            style={{
              maxWidth: 650,
              margin: '0 auto',
              textAlign: 'center'
            }} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .3 }}>
            Real-world applications built with Python, Flask, JavaScript & AI.
          </motion.p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => <ProjCard key={p.id} p={p} i={i} inView={inView} />)}
        </div>

        <motion.div style={{ textAlign: 'center', marginTop: 52 }} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .85 }}>
          <a href="https://github.com/Nilamani77" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            <FiGithub size={15} /> View All Repositories <FiArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
