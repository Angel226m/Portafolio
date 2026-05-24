import { useEffect, useRef, useState } from 'react'

interface Props {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
  delay?: number
}

export default function WordReveal({ text, as: Tag = 'span', className = '', delay = 0 }: Props) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 0.4s ease ${i * 0.08 + 0.1}s, transform 0.4s ease ${i * 0.08 + 0.1}s`,
          }}
        >
          {word}{' '}
        </span>
      ))}
    </Tag>
  )
}
