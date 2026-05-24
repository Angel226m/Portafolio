import { useEffect, useCallback } from 'react'

interface Props {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05080f]/95 backdrop-blur-xl cursor-zoom-out animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1e3a5f]/50 flex items-center justify-center text-[#c9d8e8] hover:bg-[#38bdf8]/20 hover:text-[#38bdf8] transition-all z-10"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl animate-fadeUp"
        style={{
          boxShadow: '0 0 80px rgba(56,189,248,.1), 0 0 160px rgba(99,102,241,.05)',
        }}
      />
    </div>
  )
}
