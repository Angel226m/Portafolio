import { useEffect, useRef } from 'react'
import { certifications } from '../data'
import TiltCard from '../components/TiltCard'

const catStyle: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  'Seguridad': { bg:'bg-[#38bdf8]/10', text:'text-[#7dd3fc]',  border:'border-[#38bdf8]/30', dot:'bg-[#38bdf8]' },
  'DevOps':    { bg:'bg-[#34d399]/9',  text:'text-[#6ee7b7]',  border:'border-[#34d399]/30', dot:'bg-[#34d399]' },
  'Frontend':  { bg:'bg-[#a78bfa]/9',  text:'text-[#c4b5fd]',  border:'border-[#a78bfa]/30', dot:'bg-[#a78bfa]' },
  'Backend':   { bg:'bg-[#818cf8]/9',  text:'text-[#a5b4fc]',  border:'border-[#818cf8]/30', dot:'bg-[#818cf8]' },
  'AI / ML':   { bg:'bg-[#2dd4bf]/9',  text:'text-[#5eead4]',  border:'border-[#2dd4bf]/30', dot:'bg-[#2dd4bf]' },
  'Cloud':     { bg:'bg-[#fb923c]/10', text:'text-[#fdba74]',  border:'border-[#fb923c]/30', dot:'bg-[#fb923c]' },
}

const issuerStyle: Record<string, { bg: string; text: string }> = {
  'NET':   { bg:'bg-[#38bdf8]/12', text:'text-[#7dd3fc]' },
  'FCC':   { bg:'bg-[#fbbf24]/10', text:'text-[#fcd34d]' },
  'UDM':   { bg:'bg-[#a78bfa]/12', text:'text-[#c4b5fd]' },
  'PY':    { bg:'bg-[#34d399]/10', text:'text-[#6ee7b7]' },
  'GH':    { bg:'bg-[#94a3b8]/10', text:'text-[#cbd5e1]' },
  'GGL':   { bg:'bg-[#60a5fa]/12', text:'text-[#93c5fd]' },
  'UNMSM': { bg:'bg-[#f87171]/10', text:'text-[#fca5a5]' },
  'CSCO':  { bg:'bg-[#38bdf8]/10', text:'text-[#38bdf8]' },
  'IBM':   { bg:'bg-[#0ea5e9]/10', text:'text-[#7dd3fc]' },
  'AWS':   { bg:'bg-[#ff9900]/12', text:'text-[#ffb84d]' },
}

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08 })
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="certifications" className="py-16 sm:py-20 section-border" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 reveal">
          <div className="section-label">Certificaciones</div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#e2edf8] leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            Logros <span className="text-grad-g">&amp; Credenciales</span>
          </h2>
          <div className="section-divider w-20 mt-3 mb-3" />
          <p className="text-[13px] sm:text-[14px] text-[#6b8daa] max-w-lg">
            Aprendizaje continuo en seguridad, DevOps, desarrollo y machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {certifications.map((cert, i) => {
            const cat = catStyle[cert.category] ?? catStyle['Frontend']
            const iss = issuerStyle[cert.abbr] ?? { bg:'bg-[#38bdf8]/10', text:'text-[#38bdf8]' }
            const delay = `rd${Math.min(i + 1, 6)}`
            const hasChildren = 'children' in cert && cert.children && cert.children.length > 0

            return (
              <TiltCard key={cert.id} maxTilt={5} perspective={1000} glare={false}
                className={hasChildren ? 'sm:col-span-2' : ''}>
                <div className={`cert-card reveal ${delay} p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 h-full ${hasChildren ? 'border-[#0ea5e9]/40' : ''}`}>
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className={`min-w-[44px] h-11 px-2 rounded-xl flex items-center justify-center font-mono text-[10px] font-bold shrink-0 ${iss.bg} ${iss.text}`}>
                      {cert.abbr}
                    </div>
                    <div className="flex items-center gap-2">
                      {hasChildren && (
                        <span className="font-mono text-[9px] uppercase tracking-[.1em] px-2 py-1 rounded-full bg-[#0ea5e9]/10 text-[#7dd3fc] border border-[#0ea5e9]/30">
                          Especialización
                        </span>
                      )}
                      <span className={`font-mono text-[9.5px] uppercase tracking-[.1em] px-2.5 py-1 rounded-full border text-right ${cat.bg} ${cat.text} ${cat.border}`}>
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#e2edf8] leading-snug mb-1 break-words" style={{fontFamily:'Syne,sans-serif'}}>
                      {cert.title}
                    </h4>
                    <div className="text-[11.5px] sm:text-[12px] text-[#4a6a8a] font-mono break-words">{cert.issuer}</div>
                  </div>

                  {hasChildren && (
                    <div className="space-y-2 py-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#4a6a8a] mb-2">Cursos incluidos</div>
                      {cert.children!.map((child, ci) => (
                        <a key={ci} href={child.link} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#0ea5e9]/5 border border-[#0ea5e9]/10 hover:bg-[#0ea5e9]/10 hover:border-[#0ea5e9]/25 transition-all group">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]/50 shrink-0" />
                          <span className="text-[12px] text-[#c8dce8] font-medium leading-snug flex-1">{child.title}</span>
                          <svg width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[#4a6a8a] group-hover:text-[#7dd3fc] shrink-0 transition-colors">
                            <path strokeLinecap="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-[#1e3a5f]/50">
                    <div className="flex items-center gap-1.5">
                      <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[#3a5a7a]">
                        <path strokeLinecap="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span className="font-mono text-[11px] text-[#3a5a7a]">{cert.year}</span>
                    </div>
                    {cert.link !== '#' && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-1 font-mono text-[10px] transition-all hover:opacity-100 hover:translate-x-0.5 hover:brightness-125 ${cat.text}`}>
                        Ver credencial
                        <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>

        <p className="reveal mt-8 text-center font-mono text-[11px] text-[#2a4060] px-4">
          En constante aprendizaje · Más certificaciones en progreso
        </p>
      </div>
    </section>
  )
}
