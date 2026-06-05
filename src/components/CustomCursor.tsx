import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const smooth = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onHover = () => cursorRef.current?.classList.add('scale-150')
    const offHover = () => cursorRef.current?.classList.remove('scale-150')

    const hoverables = document.querySelectorAll('a, button, [data-tilt]')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', offHover)
    })

    window.addEventListener('mousemove', onMove)

    const animate = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.15
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${smooth.current.x - 12}px, ${smooth.current.y - 12}px, 0) scale(1)`
      }
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onHover)
        el.removeEventListener('mouseleave', offHover)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 max-md:hidden"
        style={{
          background: '#38bdf8',
          boxShadow: '0 0 20px #38bdf8, 0 0 60px rgba(56,189,248,0.3)',
        }}
      />
      <style>{'@media (pointer: fine) { *{cursor:none!important} }'}</style>
    </>
  )
}
