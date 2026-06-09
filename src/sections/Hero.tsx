import { useEffect, useRef, useState } from 'react'
import { personal } from '../data'
import AnimatedCounter from '../components/AnimatedCounter'

const ROLES = [
  'Full-Stack Developer',
  'DevOps Engineer',
  'Backend Architect',
  'AI/ML Enthusiast',
]

const STATS = [
  { v: 5, l: 'Proyectos', sf: '+' },
  { v: 90, l: 'Test coverage', sf: '%' },
  { v: 9, l: 'Ciclo UNDC', sf: '.°' },

]

const SUGGESTIONS = [
  { cmd: 'cat projects', section: '#projects' },
  { cmd: 'ls skills/', section: '#skills' },
  { cmd: 'cat about.md', section: '#about' },
  { cmd: 'contact --email', section: '#contact' },
]

const CLOUD_TECHS = [
  { name: 'React', top: '12%', left: '5%', delay: '0s', size: '11px' },
  { name: 'Go', top: '25%', left: '92%', delay: '0.5s', size: '10px' },
  { name: 'Docker', top: '50%', left: '3%', delay: '1s', size: '10px' },
  { name: 'PyTorch', top: '60%', left: '90%', delay: '1.5s', size: '10px' },
  { name: 'PostgreSQL', top: '75%', left: '6%', delay: '2s', size: '10px' },
  { name: 'GitHub Actions', top: '85%', left: '88%', delay: '2.5s', size: '9px' },
  { name: 'Raspberry Pi', top: '35%', left: '95%', delay: '3s', size: '10px' },
  { name: 'Redis', top: '45%', left: '1%', delay: '3.5s', size: '10px' },
]

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null)
  const [roleIdx, setRoleIdx] = useState(0)
  const [cmdIdx, setCmdIdx] = useState(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let charIdx = 0
    let deleting = false
    const current = () => ROLES[roleIdx]

    const type = () => {
      if (!roleRef.current) return
      if (!deleting) {
        roleRef.current.textContent = current().slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current().length) {
          deleting = true
          timeout = setTimeout(type, 1800)
        } else {
          timeout = setTimeout(type, 65)
        }
      } else {
        roleRef.current.textContent = current().slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          setRoleIdx(i => (i + 1) % ROLES.length)
          timeout = setTimeout(type, 400)
        } else {
          timeout = setTimeout(type, 35)
        }
      }
    }
    timeout = setTimeout(type, 300)
    return () => clearTimeout(timeout)
  }, [roleIdx])

  useEffect(() => {
    const iv = setInterval(() => {
      setCmdIdx(i => (i + 1) % SUGGESTIONS.length)
    }, 3000)
    return () => clearInterval(iv)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#05080f]">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="orb-pulse absolute top-[-120px] left-[-80px] w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-[#38bdf8]/5 blur-[100px] pointer-events-none" />
      <div className="orb-pulse-2 absolute bottom-[-80px] right-[-60px] w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-[#818cf8]/5 blur-[90px] pointer-events-none" />
      <div className="orb-pulse-3 absolute top-[40%] left-[50%] w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-[#34d399]/3 blur-[80px] pointer-events-none" />

      {CLOUD_TECHS.map((t, i) => (
        <div
          key={i}
          className="absolute font-mono text-[#38bdf8]/10 font-semibold pointer-events-none select-none hidden lg:block"
          style={{
            top: t.top, left: t.left, fontSize: t.size,
            animation: `float ${4 + i * 0.3}s ease-in-out ${t.delay} infinite`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {'<'} {t.name} {'/>'}
        </div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#34d399]/30 bg-[#34d399]/6 mb-7 fade-in group hover:border-[#34d399]/60 transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              <span className="font-mono text-[11px] text-[#34d399] tracking-wider">
                DISPONIBLE · {personal.availableFor}
              </span>
            </div>

            <h1 className="fade-up d-100 mb-4 leading-[1.02]" style={{fontFamily:'Syne,sans-serif'}}>
              <span className="block font-extrabold text-[#e2edf8] tracking-tight text-[clamp(2.5rem,8vw,5.125rem)]">
                Angel
              </span>
              <span className="block font-extrabold text-grad text-[clamp(2.2rem,7vw,5.125rem)] break-words">
                Garay Torres
              </span>
            </h1>

            <div className="flex items-center gap-2 mb-2 fade-up d-200">
              <span className="font-mono text-[13px] text-[#38bdf8]/55">~/angel $</span>
              <span className="font-mono text-[15px] text-[#38bdf8]" ref={roleRef} />
              <span className="cursor-blink font-mono text-[#38bdf8]">&#x258C;</span>
            </div>

            <div className="flex items-center flex-wrap gap-x-1.5 gap-y-1 mb-6 text-[11px] font-mono text-[#2a4060] fade-up d-200">
              <span className="text-[#4a6a8a]">Sugerencias:</span>
              {SUGGESTIONS.map((s, i) => (
                <a key={s.cmd} href={s.section}
                  className={`transition-all duration-500 px-1.5 py-0.5 rounded hover:text-[#38bdf8] hover:bg-[#38bdf8]/6 ${
                    i === cmdIdx ? 'text-[#38bdf8] bg-[#38bdf8]/8' : 'text-[#3a5a7a]'
                  }`}>
                  {s.cmd}
                </a>
              ))}
            </div>

            <p className="text-[15px] text-[#7a9bbf] leading-relaxed max-w-[440px] mb-8 fade-up d-300">
              Estudiante de Ing. de Sistemas (<strong className="text-[#c9d8e8]">9.º ciclo</strong>) en la UNDC. Construyo plataformas completas
              con arquitecturas limpias, seguridad de nivel producción y pipelines CI/CD automatizados.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 fade-up d-400">
              <a href="#projects"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38bdf8] text-[#05080f] text-[13px] font-bold hover:bg-[#7dd3fc] transition-all duration-300 glow-b"
                style={{fontFamily:'Syne,sans-serif'}}>
                Ver proyectos
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1e3a5f] text-[#7a9bbf] text-[13px] hover:border-[#38bdf8]/40 hover:text-[#c9d8e8] hover:translate-y-[-1px] transition-all duration-300">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1e3a5f] text-[#7a9bbf] text-[13px] hover:border-[#38bdf8]/40 hover:text-[#c9d8e8] hover:translate-y-[-1px] transition-all duration-300">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1e3a5f] text-[#7a9bbf] text-[13px] hover:border-[#818cf8]/40 hover:text-[#c9d8e8] hover:translate-y-[-1px] transition-all duration-300">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email
              </a>
            </div>

            <div className="flex flex-wrap gap-3 fade-up d-500">
              {STATS.map((s, i) => (
                <div key={i} className="stat-pill cursor-default">
                  <span className="font-mono text-lg font-bold text-grad-b leading-none">
                    <AnimatedCounter value={s.v} suffix={s.sf} /> 
                  </span>
                  <span className="text-[11px] text-[#4a6a8a] mt-0.5">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 fade-in d-300">
            <div className="code-panel card-bg rounded-xl overflow-hidden border border-[#38bdf8]/10">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#38bdf8]/8 bg-[#0a1220]/70">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-[#4a6a8a]">angel-profile.ts</span>
                <span className="ml-auto font-mono text-[10px] text-[#2a4060] bg-[#38bdf8]/6 px-2 py-0.5 rounded">TypeScript</span>
              </div>

              <div className="flex font-mono text-[12.5px] leading-7">
                <div className="flex flex-col items-end pr-4 pl-3 py-4 text-[#2a4060] select-none border-r border-[#1e3a5f]/40 bg-[#060c18]/30 min-w-[2.5rem]">
                  {Array.from({length: 16}, (_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <div className="p-4 overflow-x-auto">
                  <div><span className="text-[#818cf8]">const</span> <span className="text-[#38bdf8]">angel</span> <span className="text-[#c9d8e8]">= {'{'}</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">name</span><span className="text-[#c9d8e8]">: </span><span className="text-[#fcd34d]">"Angel Garay Torres"</span><span className="text-[#c9d8e8]">,</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">role</span><span className="text-[#c9d8e8]">: </span><span className="text-[#fcd34d]">"Full-Stack + DevOps"</span><span className="text-[#c9d8e8]">,</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">stack</span><span className="text-[#c9d8e8]">: [</span></div>
                  <div className="ml-8 text-[#fcd34d]">"React", "Go", "Docker",</div>
                  <div className="ml-8 text-[#fcd34d]">"PostgreSQL", "GitHub Actions"</div>
                  <div className="ml-4"><span className="text-[#c9d8e8]">],</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">security</span><span className="text-[#c9d8e8]">: </span><span className="text-[#fcd34d]">"OWASP + ISO 27001"</span><span className="text-[#c9d8e8]">,</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">ai</span><span className="text-[#c9d8e8]">: </span><span className="text-[#fcd34d]">"UNet++ · PyTorch · IoT"</span><span className="text-[#c9d8e8]">,</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">available</span><span className="text-[#c9d8e8]">: </span><span className="text-[#34d399]">true</span><span className="text-[#c9d8e8]">,</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">location</span><span className="text-[#c9d8e8]">: </span><span className="text-[#fcd34d]">"Lima, Perú"</span><span className="text-[#c9d8e8]">,</span></div>
                  <div className="ml-4"><span className="text-[#6ee7b7]">university</span><span className="text-[#c9d8e8]">: </span><span className="text-[#fcd34d]">"UNDC · 9.º ciclo"</span></div>
                  <div><span className="text-[#c9d8e8]">{'}'}</span></div>
                  <div className="mt-1 text-[#3a5a7a]"><span className="text-[#4a6a8a]">{'// '}</span>Abierto a oportunidades</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-1.5 bg-[#38bdf8]/8 border-t border-[#38bdf8]/12">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                <span className="font-mono text-[10px] text-[#34d399]">ready</span>
                <span className="font-mono text-[10px] text-[#2a4060]">·</span>
                <span className="font-mono text-[10px] text-[#2a4060]">TypeScript · UTF-8 · Ln 16</span>
                <span className="ml-auto font-mono text-[10px] text-[#2a4060]">angel-profile.ts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-end">
              {['React', 'Go', 'Docker', 'PostgreSQL', 'GitHub Actions', 'AES-256', 'JWT', 'PyTorch'].map(t => (
                <span key={t} className="tag text-[10px]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-[#38bdf8]/40 to-transparent" style={{animation:'float 2.2s ease-in-out infinite'}} />
        <span className="font-mono text-[9px] text-[#2a4060] tracking-[.2em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
