import { motion } from 'framer-motion'
import {
  FiGithub,
  FiMail,
  FiPhone,
  FiArrowUpRight,
  FiHeart,
  FiLinkedin,
  FiInstagram,
  FiTwitter
} from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#certs' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      {/* Animated Gradient */}
      <div className="footer-gradient" />
      <div className="footer-grid-bg" />

      <div className="container">
        {/* MAIN CARD */}
        <motion.div
          className="footer-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LEFT */}
          <div className="footer-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <span className="footer-badge">
                ✦ AVAILABLE FOR WORK
              </span>

              <h2 className="footer-title">
                Let’s Build Something
                <span> Extraordinary.</span>
              </h2>

              <p className="footer-desc">
                Full Stack Developer & AI/ML Enthusiast crafting
                futuristic digital experiences with clean UI,
                smooth animations, and modern technologies.
              </p>
            </motion.div>

            {/* SOCIAL */}
            <div className="footer-socials">
              <a href="https://github.com/Nilamani77" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="#">
                <FiLinkedin />
              </a>
              <a href="#">
                <FiInstagram />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="footer-center">
            <h4>Navigation</h4>

            <div className="footer-links">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            <h4>Contact Info</h4>

            <div className="footer-contact-links">
              <a href="mailto:nilamanikundu2@gmail.com">
                <FiMail />
                <span>nilamanikundu2@gmail.com</span>
              </a>

              <a href="tel:+917978338602">
                <FiPhone />
                <span>+91 7978338602</span>
              </a>

              <a href="https://github.com/Nilamani77" target="_blank" rel="noopener noreferrer">
                <FiGithub />
                <span>github.com/Nilamani77</span>
              </a>
            </div>

            {/* BUTTON */}
            <motion.button
              className="footer-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollTop}
            >
              Back To Top
              <FiArrowUpRight />
            </motion.button>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2025 Nilamani Kundu
          </div>

          <div className="footer-made">
            Crafted with <FiHeart /> in Odisha, India
          </div>

          <div className="footer-version">
            Portfolio v2.0
          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>
        {`
        .footer {
          position: relative;
          padding: 80px 0 30px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* --- Grid Structure for Alignment --- */
        .footer-card {
          background: #0d1117; /* Background aapke theme ka */
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 50px;
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 30px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-center, 
        .footer-right {
          display: flex;
          flex-direction: column;
        }

        /* Spacing for links */
        .footer-links, 
        .footer-contact-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }

        .footer-links a, 
        .footer-contact-links a {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .footer-socials {
          display: flex;
          gap: 16px;
          margin-top: auto;
          padding-top: 20px;
        }

        .footer-btn {
          margin-top: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
          width:200px;
          cursor: pointer;
        }

        /* --- Bottom Row Layout --- */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-made {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* --- Responsive View --- */
        @media (max-width: 992px) {
          .footer-card {
            grid-template-columns: 1fr 1fr;
            padding: 40px;
          }
          .footer-left {
            grid-column: 1 / -1; 
          }
        }

        @media (max-width: 768px) {
          .footer-card {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 30px 20px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
        `}
      </style>
    </footer>
  )
}