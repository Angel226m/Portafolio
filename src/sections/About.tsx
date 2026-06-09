import { useEffect, useRef } from 'react'
import { personal, education, softSkills } from '../data'
import WordReveal from '../components/WordReveal'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08 })
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 sm:py-20 section-border" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 reveal">
          <div className="section-label">Sobre mí</div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#e2edf8] leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            <WordReveal text="El desarrollador" />
          </h2>
          <div className="section-divider w-20 mt-3" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 reveal rd1">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 shrink-0 rounded-xl border border-[#38bdf8]/25 bg-[#38bdf8]/8 flex items-center justify-center glow-b">
                <span className="font-extrabold text-2xl text-grad-b" style={{fontFamily:'Syne,sans-serif'}}>AG</span>
              </div>
              <div>
                <div className="font-bold text-[16px] text-[#e2edf8]" style={{fontFamily:'Syne,sans-serif'}}>{personal.name}</div>
                <div className="font-mono text-[12px] text-[#38bdf8]">{personal.role}</div>
                <div className="text-[12px] text-[#4a6a8a] mt-0.5">{personal.location} · {personal.university}</div>
              </div>
            </div>

            <div className="line-l space-y-3 text-[14px] text-[#6b8daa] leading-relaxed">
              <p>
                Soy estudiante de Ingeniería de Sistemas en el <strong className="text-[#c9d8e8]">9.º ciclo</strong>, apasionado por construir software
                con impacto real. Me especializo en <span className="text-[#c9d8e8]">arquitecturas limpias</span> (Clean Architecture, Hexagonal),
                <span className="text-[#c9d8e8]"> seguridad de producción</span> (OWASP, ISO 27001, AES-256-GCM) y
                <span className="text-[#c9d8e8]"> DevOps completo</span> (Docker, GitHub Actions, VPS).
              </p>
              <p>
                Lo que me diferencia es la combinación de desarrollo web tradicional con
                <span className="text-[#c9d8e8]"> inteligencia artificial e IoT</span> — desde modelos UNet++ para detección de grietas
                hasta sistemas en producción con Raspberry Pi y streaming WebRTC.
              </p>
              <p>
                Actualmente en búsqueda de <span className="text-[#34d399]">prácticas preprofesionales</span> o posición
                <span className="text-[#34d399]"> junior</span> donde pueda aplicar mis conocimientos y seguir creciendo.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-[11px] text-[#38bdf8] uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path strokeLinecap="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
                Formación
              </h4>
              <div className="relative">
                <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-[#38bdf8]/40 via-[#818cf8]/20 to-transparent" />
                <div className="space-y-4">
                  {education.map(e => (
                    <div key={e.institution} className="flex items-start gap-4 group">
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          e.current
                            ? 'border-[#34d399] bg-[#34d399]/20'
                            : 'border-[#38bdf8]/40 bg-[#38bdf8]/10'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            e.current ? 'bg-[#34d399] animate-pulse' : 'bg-[#38bdf8]'
                          }`} />
                        </div>
                      </div>
                      <div className={`flex-1 p-3.5 rounded-lg border transition-all duration-300 group-hover:border-[#38bdf8]/30 ${
                        e.current ? 'border-[#38bdf8]/20 bg-[#08111e]' : 'border-[#1e3a5f]/60 bg-[#08111e]/60'
                      }`}>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[13px] font-semibold text-[#c9d8e8]">{e.degree}</span>
                          {e.current && (
                            <span className="font-mono text-[10px] text-[#34d399] border border-[#34d399]/30 px-1.5 py-0.5 rounded-sm badge-glow">
                              Cursando 9.° ciclo
                            </span>
                          )}
                        </div>
                        <div className="text-[12px] text-[#6b8daa]">{e.institution}</div>
                        <div className="font-mono text-[11px] text-[#4a6a8a] mt-0.5">{e.period}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 reveal rd2">
            <div className="rounded-lg border border-[#1e3a5f]/60 bg-[#08111e] p-5 transition-all duration-300 hover:border-[#818cf8]/30">
              <h4 className="font-mono text-[11px] text-[#818cf8] uppercase tracking-widest mb-3 flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Habilidades blandas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map(s => <span key={s} className="tag tag-p">{s}</span>)}
              </div>
            </div>

            <div className="rounded-lg border border-[#38bdf8]/20 bg-gradient-to-br from-[#38bdf8]/5 to-[#818cf8]/5 p-5 space-y-2.5 transition-all duration-300 hover:border-[#38bdf8]/40">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                <span className="font-mono text-[11px] text-[#34d399] uppercase tracking-widest">Disponible</span>
                <span className="ml-auto font-mono text-[10px] text-[#34d399]/60 border border-[#34d399]/20 px-1.5 py-0.5 rounded-sm">
                  {personal.availableFor}
                </span>
              </div>
              {[
                { icon:'M', label: personal.email, href:`mailto:${personal.email}` },
                { icon:'T', label: personal.phone, href:`tel:${personal.phone}` },
                { icon:'G', label: personal.githubHandle, href: personal.github },
                { icon:'L', label: 'LinkedIn', href: personal.linkedin },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.icon==='G'||item.icon==='L'?'_blank':undefined}
                  rel={item.icon==='G'||item.icon==='L'?'noopener noreferrer':undefined}
                  className="flex items-center gap-2 text-[12.5px] font-mono text-[#6b8daa] hover:text-[#38bdf8] transition-colors group">
                  <span className="w-5 h-5 rounded border border-[#1e3a5f] flex items-center justify-center text-[10px] text-[#4a6a8a] group-hover:border-[#38bdf8]/40 group-hover:bg-[#38bdf8]/10 transition-all">
                    {item.icon==='M'?<svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    :item.icon==='T'?<svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    :item.icon==='L'?<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    :<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>}
                  </span>
                  <span className="truncate">{item.label}</span>
                </a>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
