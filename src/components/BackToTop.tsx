import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-[#38bdf8]/30 bg-[#05080f]/80 backdrop-blur-md flex items-center justify-center text-[#38bdf8] transition-all duration-400 hover:bg-[#38bdf8] hover:text-[#05080f] hover:border-[#38bdf8] ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M12 19V5m0 0l-7 7m7-7l7 7"/>
      </svg>
    </button>
  )
}
