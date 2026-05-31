import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import resumePDF from '../assets/Nilamani_Kundu_Resume.pdf'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certs', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mob, setMob] = useState(false)

  // Naya Ref: User click ko track karne ke liye
  const isClicking = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const obs = new IntersectionObserver(
      (entries) => {
        // Agar user ne click kiya hai, toh scroll tracking thodi der rok do
        if (isClicking.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-20% 0px -40% 0px'
      }
    )

    links
      .map(l => document.querySelector(l.href))
      .forEach(el => el && obs.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
    }
  }, [])

  const goto = (e, href) => {
    e.preventDefault()

    // Click karte hi 'isClicking' on karo aur active state set karo
    isClicking.current = true;
    setActive(href.slice(1));

    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: 'smooth' })

    setMob(false)

    // 1 second baad (smooth scroll khatam hone par) tracking wapas on karo
    setTimeout(() => {
      isClicking.current = false;
    }, 1000);
  }

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: .7,
          delay: .2,
          ease: [.76, 0, .24, 1]
        }}
      >
        <div className={`navbar-inner${scrolled ? ' scrolled' : ''}`}>

          {/* LOGO */}
          <a
            href="#"
            className="navbar-logo"
            onClick={e => {
              e.preventDefault()
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
          >
            <span className="grad-purple">
              NK
            </span>
            <span
              style={{
                fontFamily: 'var(--font-m)',
                fontSize: 12,
                fontWeight: 400,
                color: 'var(--dim)'
              }}
            >
              / Portfolio
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="navbar-links">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className={
                  active === l.href.slice(1)
                    ? 'active-link'
                    : ''
                }
                onClick={e => goto(e, l.href)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .3 + i * .06 }}
              >
                {l.label}
              </motion.a>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {/* RESUME BUTTON */}
            <motion.a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-btn btn-primary"
              style={{
                fontSize: 13,
                padding: '9px 22px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .85 }}
            >
              Resume
            </motion.a>

            {/* HIRE ME BUTTON */}
            <motion.a
              href="#contact"
              className="navbar-btn btn-ghost"
              style={{
                fontSize: 13,
                padding: '9px 22px'
              }}
              onClick={e => goto(e, '#contact')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .9 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`mob-menu-btn ${mob ? 'open' : ''}`}
            onClick={() => setMob(v => !v)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mob && (
          <motion.div
            className="mob-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMob(false)}
              style={{
                position: 'absolute',
                top: 28,
                right: 28,
                color: 'var(--muted)',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <FiX size={26} />
            </button>

            {/* MOBILE LINKS */}
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={e => goto(e, l.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * .07 }}
              >
                {l.label}
              </motion.a>
            ))}

            {/* MOBILE RESUME BUTTON */}
            <motion.a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 40px',
                borderRadius: 50,
                background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * .07 }}
            >
              Resume ↗
            </motion.a>

            {/* MOBILE HIRE ME BUTTON */}
            <motion.a
              href="#contact"
              onClick={e => goto(e, '#contact')}
              style={{
                padding: '14px 40px',
                borderRadius: 50,
                border: '1px solid rgba(124,58,237,.35)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (links.length + 1) * .07
              }}
            >
              Hire Me
            </motion.a>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}