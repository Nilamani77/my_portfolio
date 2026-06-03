import { useRef, useState } from 'react'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiCheck } from 'react-icons/fi'

const INFO = [
  { Icon: FiMail, label: 'Email', val: 'nilamanikundu2@gmail.com', href: 'mailto:nilamanikundu2@gmail.com' },
  { Icon: FiPhone, label: 'Phone', val: '+91-7978338602', href: 'tel:+917978338602' },
  { Icon: FiGithub, label: 'GitHub', val: 'github.com/Nilamani77', href: 'https://github.com/Nilamani77' },
  { Icon: FiMapPin, label: 'Location', val: 'Odisha, India', href: null },
]

function Field({ id, label, type = 'text', rows, val, onChange }) {
  const [foc, setFoc] = useState(false)
  const Tag = rows ? 'textarea' : 'input'
  const raised = foc || !!val
  return (
    <div className={`form-field${raised ? ' active' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <Tag id={id} type={type} rows={rows} value={val} onChange={onChange}
        className="form-input" onFocus={() => setFoc(true)} onBlur={() => setFoc(false)} />
    </div>
  )
}

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', msg: '' })
  const [st, setSt] = useState('idle')
  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.subject || !form.msg) {
      alert('Please fill all fields')
      return
    }

    setSt('sending')

    try {
      const formData = new FormData()

      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('subject', form.subject)
      formData.append('message', form.msg)

      formData.append(
        '_subject',
        `New Portfolio Message from ${form.name}`
      )

      formData.append('_captcha', 'false')
      formData.append('_template', 'table')

      const response = await fetch(
        'https://formsubmit.co/ajax/technicalnila354@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      )

      if (response.ok) {
        setSt('sent')

        setForm({
          name: '',
          email: '',
          subject: '',
          msg: '',
        })

        setTimeout(() => {
          setSt('idle')
        }, 3000)
      } else {
        throw new Error('Failed')
      }
    } catch (error) {
      console.error(error)
      setSt('idle')
      alert('Failed to send message')
    }
  }

  return (
    <section id="contact" ref={ref} className="section">
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,.025) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div className="glow-blob" style={{ width: 800, height: 400, bottom: 0, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse,rgba(124,58,237,.08),transparent 70%)' }} />

      <div className="container">
        <div className="header-center">
          <div className="sec-label">
            <div style={{ width: 36, height: 1, background: 'linear-gradient(90deg,transparent,#7c3aed)' }} />
            <span className="sec-label__num">08</span>
            <div className="sec-label__line" />
            <span className="sec-label__text">CONTACT</span>
          </div>
          <motion.h2 className="sec-title" initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .2 }}>
            Let's <span className="grad-purple">Collaborate</span>
          </motion.h2>
          <motion.p className="sec-sub" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .32 }}>
            Have a project idea, collaboration, or opportunity? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* LEFT — info */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: .35, duration: .7 }}>
            <div className="contact-info">
              {INFO.map(({ Icon, label, val, href }, i) => (
                <motion.div key={label} className="card contact-info-card"
                  initial={{ opacity: 0, x: -18 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: .4 + i * .1 }}
                  whileHover={{ x: 6, borderColor: 'rgba(124,58,237,.38)' }}>
                  <div className="contact-icon-box"><Icon size={16} color="#a855f7" /></div>
                  <div>
                    <div className="contact-lbl">{label}</div>
                    {href
                      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-val">{val}</a>
                      : <div className="contact-val">{val}</div>}
                  </div>
                </motion.div>
              ))}

              {/* Availability badge */}
              <motion.div className="card avail-badge" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .85 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span className="avail-dot" />
                  <span style={{ fontWeight: 600, fontSize: 14 }}>Open to Opportunities</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.65 }}>
                  Looking for internships, freelance projects, and collaborative opportunities in AI/ML and Web Development. Response within 24 hours!
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: .42, duration: .7 }}>
            <div className="form-wrap">
              <div className="form-top-line" />
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="form-row">
                  <Field id="cf-name" label="Your Name" val={form.name} onChange={set('name')} />
                  <Field id="cf-email" label="Email Address" type="email" val={form.email} onChange={set('email')} />
                </div>
                <Field id="cf-subject" label="Subject" val={form.subject} onChange={set('subject')} />
                <Field id="cf-msg" label="Your Message" rows={5} val={form.msg} onChange={set('msg')} />

                <motion.button type="submit" disabled={st !== 'idle'} className="form-submit"
                  style={{ background: st === 'sent' ? 'linear-gradient(135deg,#10b981,#059669)' : 'linear-gradient(135deg,#7c3aed,#a855f7,#06b6d4)', boxShadow: st === 'sent' ? '0 0 28px rgba(16,185,129,.4)' : '0 0 28px rgba(124,58,237,.4)' }}
                  whileHover={st === 'idle' ? { boxShadow: '0 0 50px rgba(124,58,237,.65)' } : {}}>
                  <AnimatePresence mode="wait">
                    {st === 'idle' && <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}><FiSend size={15} /> Send Message</motion.span>}
                    {st === 'sending' && <motion.span key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}><motion.span animate={{ rotate: 360 }} transition={{ duration: .9, repeat: Infinity, ease: 'linear' }}>⏳</motion.span> Sending…</motion.span>}
                    {st === 'sent' && <motion.span key="d" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}><FiCheck size={15} /> Sent! I'll respond soon 🎉</motion.span>}
                  </AnimatePresence>
                </motion.button>

                <p style={{ color: 'var(--dim)', fontSize: 12, textAlign: 'center' }}>Or email me directly at <a href="mailto:nilamanikundu2@gmail.com" style={{ color: '#a855f7' }}>nilamanikundu2@gmail.com</a></p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
