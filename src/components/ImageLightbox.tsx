import { useEffect, useCallback, useRef } from 'react'

interface Props {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
  const imgRef = useRef<HTMLImageElement>(null)

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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#05080f]/98 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 z-10 shadow-lg hover:scale-110"
        title="Cerrar"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-xs font-mono"
        onClick={e => e.stopPropagation()}
      >
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">ESC</kbd>
        <span>o clic fuera para cerrar</span>
      </div>

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl animate-fadeUp select-none"
        draggable={false}
        style={{
          boxShadow: '0 0 120px rgba(56,189,248,.08), 0 0 200px rgba(99,102,241,.04)',
        }}
      />
    </div>
  )
}
