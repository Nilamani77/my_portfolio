import { useEffect, useRef } from 'react'


export default function Particles() {
  const ref = useRef()
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let id, w, h, pts = []
    const resize = () => { w = canvas.width = innerWidth; h = canvas.height = innerHeight }
    resize(); window.addEventListener('resize', resize)
    class P {
      constructor() { this.init() }
      init() {
        this.x = Math.random() * w; this.y = Math.random() * h
        this.vx = (Math.random() - .5) * .28; this.vy = (Math.random() - .5) * .28
        this.life = 0; this.max = 200 + Math.random() * 250
        this.r = Math.random() > .5 ? '124,58,237' : '6,182,212'
        this.sz = Math.random() * 1.4 + .4
      }
      step() {
        this.x += this.vx; this.y += this.vy; this.life++
        if (this.life > this.max || this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.init()
      }
      draw() {
        const a = Math.sin((this.life / this.max) * Math.PI) * .45
        ctx.beginPath(); ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.r},${a})`; ctx.fill()
      }
    }
    for (let i = 0; i < 100; i++) pts.push(new P())
    const connect = () => {
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 110) * .07})`; ctx.lineWidth = .5; ctx.stroke() }
        }
    }
    const loop = () => { ctx.clearRect(0, 0, w, h); pts.forEach(p => { p.step(); p.draw() }); connect(); id = requestAnimationFrame(loop) }
    loop()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(id) }
  }, [])
  return <canvas ref={ref} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: .55 }} />
}
