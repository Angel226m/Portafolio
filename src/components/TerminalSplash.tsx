import { useEffect, useState } from 'react'

const LINES = [
  '> system.boot()',
  '> Loading kernel modules...',
  '> Initializing portfolio v3.0',
  '> Angel Garay Torres — Full-Stack Developer',
  '> System ready. Welcome.',
]

export default function TerminalSplash() {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      setTimeout(() => setFade(false), 300)
      setTimeout(() => setDone(true), 800)
      return
    }
    const current = LINES[lineIdx]
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 8 + Math.random() * 10)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setLineIdx(l => l + 1)
        setCharIdx(0)
      }, 200)
      return () => clearTimeout(t)
    }
  }, [lineIdx, charIdx])

  if (done) return null

  return (
    <div
      className={`fixed inset-0 z-[9998] bg-[#05080f] flex items-center justify-center transition-opacity duration-700 ${
        fade ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="font-mono text-[13px] leading-7 max-w-md">
        <div className="text-[#34d399] mb-2 text-[11px] tracking-widest">┌─[PORFOLIO]─[v3.0]─[BOOT]─┐</div>
        {LINES.map((line, i) => (
          <div key={i} className={`${i < lineIdx ? 'text-[#38bdf8]' : i === lineIdx ? 'text-[#38bdf8]' : 'text-[#1e3a5f]'}`}>
            <span className="text-[#4a6a8a]">[</span>
            <span className="text-[#34d399]">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[#4a6a8a]">]</span>
            <span className="ml-2">
              {line.slice(0, i === lineIdx ? charIdx : line.length)}
              {i === lineIdx && charIdx < line.length && (
                <span className="animate-pulse text-[#34d399]">▊</span>
              )}
            </span>
          </div>
        ))}
        <div className="text-[#2a4060] mt-2 text-[11px]">└──────────────────────────────┘</div>
      </div>
    </div>
  )
}
