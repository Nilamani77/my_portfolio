import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FuturisticLoader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let value = 0

    const interval = setInterval(() => {
      value += Math.random() * 8

      if (value >= 100) {
        value = 100
        clearInterval(interval)

        setTimeout(() => {
          if (onDone) onDone()
        }, 700)
      }

      setProgress(Math.floor(value))
    }, 120)

    return () => clearInterval(interval)
  }, [onDone])

  const loadingTexts = [
    'SYSTEM INITIALIZED',
    'LOADING EXPERIENCE',
    'RENDERING PORTFOLIO',
    'READY TO VISIT',
  ]

  const currentText =
    loadingTexts[Math.min(Math.floor(progress / 26), loadingTexts.length - 1)]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
        zIndex: 999999,
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: '#8b5cf6',
          filter: 'blur(180px)',
          opacity: 0.15,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Background Big Text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        <h1
          style={{
            color: '#ffffff',
            fontSize: '12vw',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            textAlign: 'center',
          }}
        >
          NILAMANI KUNDU
        </h1>
      </div>

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            width: '320px',
            height: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Glow Ring */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              border: '2px solid rgba(139,92,246,0.4)',
              boxShadow:
                '0 0 60px rgba(139,92,246,0.5)',
            }}
          />

          {/* Rotating Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              width: '430px',
              height: '430px',
              borderRadius: '50%',
              borderTop: '2px solid #c084fc',
              borderBottom: '2px solid #ffffff',
              borderLeft: '2px solid transparent',
              borderRight: '2px solid transparent',
            }}
          />

          {/* Profile Image */}
          <div
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.08)',
              boxShadow:
                '0 0 50px rgba(139,92,246,0.4)',
              position: 'relative',
              zIndex: 5,
            }}
          >
            <img
              src={new URL('../assets/nk.jpg', import.meta.url).toString()}
              alt="Nilamani"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </motion.div>

        {/* Footer Text */}
        <div
          style={{
            marginTop: '60px',
            width: 'min(650px,90%)',
            textAlign: 'center',
          }}
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              color: '#ffffff',
              fontSize: 'clamp(34px,5vw,82px)',
              fontWeight: 900,
              letterSpacing: '0.08em',
              margin: 0,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              textShadow:
                '0 0 25px rgba(255,255,255,0.15)',
            }}
          >
            NILAMANI KUNDU
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{
              marginTop: '16px',
              color: '#cbd5e1',
              fontSize: '12px',
              letterSpacing: '0.45em',
            }}
          >
            CREATIVE DEVELOPER • AI ENGINEER
          </motion.p>

          {/* Dynamic Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                color: '#94a3b8',
                marginTop: '35px',
                marginBottom: '25px',
                letterSpacing: '0.3em',
                fontSize: '13px',
              }}
            >
              {currentText}
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '999px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.08)',
            }}
          >
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
              style={{
                height: '100%',
                borderRadius: '999px',
                background:
                  'linear-gradient(90deg,#06b6d4,#8b5cf6)',
                boxShadow:
                  '0 0 25px rgba(139,92,246,0.6)',
              }}
            />
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              color: '#94a3b8',
              fontSize: '12px',
              letterSpacing: '0.2em',
            }}
          >
            <span>SYSTEM READY</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}