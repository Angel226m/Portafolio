import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  maxTilt?: number
  glare?: boolean
  perspective?: number
}

export default function TiltCard({ children, className = '', maxTilt = 8, glare = true, perspective = 1000 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const enabledRef = useRef(true)

  useEffect(() => {
    enabledRef.current = !window.matchMedia('(pointer: coarse), (max-width: 640px)').matches
  }, [])

  const onMove = (e: React.MouseEvent) => {
    if (!enabledRef.current) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const tiltX = ((y - cy) / cy) * maxTilt
    const tiltY = -((x - cx) / cx) * maxTilt

    card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`

    if (glare && glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(56,189,248,0.15), transparent 70%)`
      glareRef.current.style.opacity = '1'
    }
  }

  const onLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={cardRef}
      data-tilt
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-300 z-20"
        />
      )}
      <div style={{ transformStyle: 'preserve-3d' }} className="relative z-10">
        {children}
      </div>
    </div>
  )
}
