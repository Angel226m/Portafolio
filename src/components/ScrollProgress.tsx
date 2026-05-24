import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(Math.min((window.scrollY / h) * 100, 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100]">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #38bdf8, #a78bfa, #34d399)',
          boxShadow: '0 0 12px rgba(56,189,248,0.5), 0 0 30px rgba(56,189,248,0.2)',
        }}
      />
    </div>
  )
}
