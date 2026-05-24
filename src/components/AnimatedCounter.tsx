import { useEffect, useRef, useState } from 'react'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
}

export default function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0, duration = 2000, className = '' }: Props) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(value * eased)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toFixed(decimals)}{suffix}
    </span>
  )
}
