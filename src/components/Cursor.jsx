import { useEffect, useState } from 'react'

import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const dotX = useMotionValue(-100), dotY = useMotionValue(-100)
  const ringX = useSpring(useMotionValue(-100), { damping: 22, stiffness: 200 })
  const ringY = useSpring(useMotionValue(-100), { damping: 22, stiffness: 200 })
  const [hov, setHov] = useState(false)

  useEffect(() => {
    const mv = e => { dotX.set(e.clientX); dotY.set(e.clientY); ringX.set(e.clientX); ringY.set(e.clientY) }
    const mo = e => setHov(!!e.target.closest('a,button,[role="button"],input,textarea'))
    window.addEventListener('mousemove', mv)
    document.addEventListener('mouseover', mo)
    return () => { window.removeEventListener('mousemove', mv); document.removeEventListener('mouseover', mo) }
  }, [dotX, dotY, ringX, ringY])

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
      <motion.div className={`cursor-ring${hov ? ' hov' : ''}`} style={{ x: ringX, y: ringY }} />
    </>
  )
}
