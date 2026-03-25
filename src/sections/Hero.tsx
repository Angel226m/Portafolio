import { useEffect, useRef } from 'react'
import { personal } from '../data'

const ROLES = ['Full-Stack Developer', 'DevOps Engineer', 'ML Engineer', 'Backend Developer']

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null)
  const idx = useRef(0), ch = useRef(0), del = useRef(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    const type = () => {
      const cur = ROLES[idx.current]
      const el = roleRef.current; if (!el) return
      if (!del.current) {
        el.textContent = cur.slice(0, ++ch.current)
        if (ch.current === cur.length) { del.current = true; t = setTimeout(type, 2000); return }
      } else {
        el.textContent = cur.slice(0, --ch.current)
        if (ch.current === 0) { del.current = false; idx.current = (idx.current + 1) % ROLES.length }
      }
      t = setTimeout(type, del.current ? 55 : 80)
    }
    t = setTimeout(type, 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-lines">
      {/* Radial ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#38bdf8]/4 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#818cf8]/4 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* LEFT */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#34d399]/25 bg-[#34d399]/5 mb-6 fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              <span className="font-mono text-[11px] text-[#34d399] tracking-wider">DISPONIBLE PARA PRÁCTICAS</span>
            </div>

            {/* Name */}
            <h1 className="fade-up d-100 mb-3 leading-[1.05]" style={{fontFamily:'Syne,sans-serif'}}>
              <span className="block text-[52px] sm:text-[68px] lg:text-[76px] font-extrabold text-[#e2edf8]">Angel</span>
              <span className="block text-[52px] sm:text-[68px] lg:text-[76px] font-extrabold text-grad">Garay Torres</span>
            </h1>

            {/* Role typing */}
            <div className="flex items-center gap-2 mb-5 fade-up d-200">
              <span className="font-mono text-[13px] text-[#38bdf8]/60">~/angel $</span>
              <span className="font-mono text-[14px] text-[#38bdf8]" ref={roleRef} />
              <span className="cursor-blink font-mono text-[#38bdf8]">▌</span>
            </div>

            {/* Bio */}
            <p className="text-[14.5px] text-[#7a9bbf] leading-relaxed max-w-md mb-8 fade-up d-300">
              Estudiante de Ing. de Sistemas (8.º ciclo) en la UNDC. Construyo plataformas completas
              con arquitecturas limpias, seguridad de nivel producción y pipelines CI/CD automatizados.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10 fade-up d-400">
              <a href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#38bdf8] text-[#05080f] text-[13px] font-bold hover:bg-[#7dd3fc] transition-colors glow-b"
                style={{fontFamily:'Syne,sans-serif'}}>
                Ver proyectos
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#1e3a5f] text-[#7a9bbf] text-[13px] hover:border-[#38bdf8]/35 hover:text-[#c9d8e8] transition-all">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
              <a href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#1e3a5f] text-[#7a9bbf] text-[13px] hover:border-[#818cf8]/35 hover:text-[#c9d8e8] transition-all">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 fade-up d-500">
              {[
                { v: '3', l: 'Proyectos' },
                { v: '>80%', l: 'Test coverage' },
                { v: '8.º', l: 'Ciclo UNDC' },
                { v: '2026', l: 'Egreso est.' },
              ].map((s, i) => (
                <div key={i} className={`${i > 0 ? 'border-l border-[#1e3a5f] pl-6' : ''}`}>
                  <div className="font-mono text-xl font-bold text-grad-b">{s.v}</div>
                  <div className="text-[11px] text-[#4a6a8a] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — code card */}
          <div className="hidden lg:block fade-in d-400">
            <div className="card-bg rounded-xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#38bdf8]/10 bg-[#0a1220]/60">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/>
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/>
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/>
                <span className="ml-3 font-mono text-[11px] text-[#4a6a8a]">angel-profile.ts</span>
              </div>
              {/* Code body */}
              <div className="p-5 font-mono text-[12.5px] leading-7">
                <div><span className="text-[#818cf8]">const</span> <span className="text-[#38bdf8]">angel</span> <span className="text-[#c9d8e8]">= {'{'}</span></div>
                <div className="ml-4"><span className="text-[#6ee7b7]">name</span><span className="text-[#c9d8e8]">:</span> <span className="text-[#fcd34d]">"Angel Garay Torres"</span><span className="text-[#c9d8e8]">,</span></div>
                <div className="ml-4"><span className="text-[#6ee7b7]">role</span><span className="text-[#c9d8e8]">:</span> <span className="text-[#fcd34d]">"Full-Stack + DevOps"</span><span className="text-[#c9d8e8]">,</span></div>
                <div className="ml-4"><span className="text-[#6ee7b7]">stack</span><span className="text-[#c9d8e8]">: [</span></div>
                <div className="ml-8 text-[#fcd34d]">"React", "Go", "Docker",</div>
                <div className="ml-8 text-[#fcd34d]">"PostgreSQL", "GitHub Actions"</div>
                <div className="ml-4"><span className="text-[#c9d8e8]">],</span></div>
                <div className="ml-4"><span className="text-[#6ee7b7]">security</span><span className="text-[#c9d8e8]">:</span> <span className="text-[#fcd34d]">"OWASP + ISO 27001"</span><span className="text-[#c9d8e8]">,</span></div>
                <div className="ml-4"><span className="text-[#6ee7b7]">available</span><span className="text-[#c9d8e8]">:</span> <span className="text-[#34d399]">true</span><span className="text-[#c9d8e8]">,</span></div>
                <div className="ml-4"><span className="text-[#6ee7b7]">location</span><span className="text-[#c9d8e8]">:</span> <span className="text-[#fcd34d]">"Chincha, Perú"</span></div>
                <div><span className="text-[#c9d8e8]">{'}'}</span></div>
                <div className="mt-3 text-[#4a6a8a]">// Abierto a oportunidades 🚀</div>
              </div>
            </div>

            {/* Mini tech pills */}
            <div className="flex flex-wrap gap-2 mt-4 justify-end">
              {['React','Go','Docker','PostgreSQL','GitHub Actions','AES-256','JWT'].map(t => (
                <span key={t} className="tag text-[10px]">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <div className="w-px h-10 bg-gradient-to-b from-[#38bdf8]/30 to-transparent" style={{animation:'float 2s ease-in-out infinite'}}/>
        <span className="font-mono text-[10px] text-[#4a6a8a] tracking-widest">SCROLL</span>
      </div>
    </section>
  )
}