import { useEffect, useCallback, useRef, useState } from 'react'

interface Props {
  src: string
  alt: string
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  hasPrev?: boolean
  hasNext?: boolean
}

const MIN_SCALE = 1
const MAX_SCALE = 6

export default function ImageLightbox({ src, alt, onClose, onPrev, onNext, hasPrev, hasNext }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const lastOffset = useRef({ x: 0, y: 0 })

  const resetZoom = useCallback(() => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
    lastOffset.current = { x: 0, y: 0 }
  }, [])

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev()
    if (e.key === 'ArrowRight' && onNext && hasNext) onNext()
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation()
    const delta = -e.deltaY * 0.002
    setScale(prev => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta * prev))
      return next
    })
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return
    e.stopPropagation()
    dragging.current = true
    dragStart.current = { x: e.clientX - lastOffset.current.x, y: e.clientY - lastOffset.current.y }
  }, [scale])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current) return
    e.stopPropagation()
    const x = e.clientX - dragStart.current.x
    const y = e.clientY - dragStart.current.y
    lastOffset.current = { x, y }
    setOffset({ x, y })
  }, [])

  const handleMouseUp = useCallback(() => {
    dragging.current = false
  }, [])

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (scale > 1) {
      resetZoom()
    } else {
      setScale(2.5)
    }
  }, [scale, resetZoom])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#05080f]/98 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      onWheel={handleWheel}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 z-20 shadow-lg hover:scale-110"
        title="Cerrar"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      {onPrev && hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); resetZoom(); onPrev() }}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 z-20 shadow-lg hover:scale-110"
          title="Anterior"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}

      {onNext && hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); resetZoom(); onNext() }}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 z-20 shadow-lg hover:scale-110"
          title="Siguiente"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}

      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-xs font-mono"
        onClick={e => e.stopPropagation()}
      >
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">ESC</kbd>
        <span>cerrar</span>
        <span className="w-px h-3 bg-white/20" />
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">scroll</kbd>
        <span>zoom</span>
        <span className="w-px h-3 bg-white/20" />
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">doble clic</kbd>
        <span>restaurar</span>
        {scale > 1 && (
          <>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-white/90">{Math.round(scale * 100)}%</span>
          </>
        )}
      </div>

      <div
        onClick={e => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        className="select-none"
        style={{
          cursor: scale > 1 ? 'grab' : 'default',
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transition: dragging.current ? 'none' : 'transform 0.15s ease-out',
          maxWidth: '92vw',
          maxHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-w-[92vw] max-h-[88vh] w-full h-full object-contain rounded-xl shadow-2xl animate-fadeUp pointer-events-none"
          style={{
            boxShadow: '0 0 120px rgba(56,189,248,.08), 0 0 200px rgba(99,102,241,.04)',
          }}
        />
      </div>
    </div>
  )
}
