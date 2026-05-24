import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; alpha: number
}

export default function Particles({ count = 80 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -1000, y: -1000 })
  const particles = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('mouseleave', () => {
      mouse.current.x = -1000
      mouse.current.y = -1000
    })

    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.3 + 0.1,
    }))

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((p, i) => {
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          p.vx -= dx * 0.0004
          p.vy -= dy * 0.0004
        }

        p.vx += (Math.random() - 0.5) * 0.02
        p.vy += (Math.random() - 0.5) * 0.02
        p.vx *= 0.98
        p.vy *= 0.98

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`
        ctx.fill()

        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j]
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.06 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [count])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />
}
