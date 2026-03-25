import { useState } from 'react'
import { projects } from '../data'

type P = typeof projects[number]

const colorCfg: Record<string, { border: string; dot: string; title: string; glow: string; bg: string }> = {
  cyan:   { border:'border-[#38bdf8]/20 hover:border-[#38bdf8]/45', dot:'bg-[#38bdf8]', title:'text-[#38bdf8]',   glow:'glow-b', bg:'bg-[#38bdf8]/4' },
  green:  { border:'border-[#34d399]/20 hover:border-[#34d399]/45', dot:'bg-[#34d399]', title:'text-[#34d399]',   glow:'glow-g', bg:'bg-[#34d399]/4' },
  purple: { border:'border-[#818cf8]/20 hover:border-[#818cf8]/45', dot:'bg-[#818cf8]', title:'text-[#a5b4fc]',   glow:'glow-p', bg:'bg-[#818cf8]/4' },
}

const tagClass = (c: string) => c === 'purple' ? 'tag tag-p' : c === 'green' ? 'tag tag-g' : 'tag'

function Card({ p }: { p: P }) {
  const [hov, setHov] = useState(false)
  const c = colorCfg[p.color]

  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`relative rounded-xl border bg-[#08111e] transition-all duration-300 overflow-hidden ${c.border}`}
    >
      {/* Hover glow bg */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${c.bg} ${hov ? 'opacity-100' : 'opacity-0'}`} />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-mono text-[10px] text-[#4a6a8a]">{p.year}</span>
              {p.featured && (
                <span className="font-mono text-[10px] text-[#34d399] border border-[#34d399]/30 px-1.5 py-0.5 rounded-sm">featured</span>
              )}
              {p.tags.map(t => (
                <span key={t} className="font-mono text-[10px] text-[#4a6a8a] border border-[#1e3a5f] px-1.5 py-0.5 rounded-sm">{t}</span>
              ))}
            </div>
            <h3 className={`font-bold text-[17px] leading-snug ${c.title}`} style={{fontFamily:'Syne,sans-serif'}}>{p.title}</h3>
            <p className="font-mono text-[11px] text-[#4a6a8a] mt-0.5">{p.role}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1.5 shrink-0">
            {p.links.github && (
              <a href={p.links.github} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded border border-[#1e3a5f] flex items-center justify-center text-[#4a6a8a] hover:text-[#c9d8e8] hover:border-[#38bdf8]/35 transition-all">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            )}
            {p.links.live && (
              <a href={p.links.live} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded border border-[#1e3a5f] flex items-center justify-center text-[#4a6a8a] hover:text-[#34d399] hover:border-[#34d399]/35 transition-all">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[13px] text-[#6b8daa] leading-relaxed mb-4">{p.description}</p>

        {/* Highlights */}
        <ul className="space-y-1 mb-4">
          {p.highlights.slice(0, 4).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-[12.5px] text-[#5a7a9a]">
              <span className={`mt-1.5 shrink-0 w-1 h-1 rounded-full ${c.dot}`}/>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1e3a5f]/50">
          {p.tech.map((t, i) => (
            <span key={t} className={tagClass(p.techColors[i] || 'blue')}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <div className="mb-10">
        <div className="section-label">Proyectos destacados</div>
        <h2 className="text-[38px] sm:text-[46px] font-extrabold text-[#e2edf8] leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
          Lo que he <span className="text-grad">construido</span>
        </h2>
        <p className="text-[14px] text-[#6b8daa] mt-2 max-w-lg">
          Proyectos full-stack con arquitecturas de producción, seguridad y despliegue automatizado.
        </p>
      </div>

      <div className="grid gap-5">
        <div className="grid lg:grid-cols-2 gap-5">
          {projects.filter(p => p.featured).map(p => <Card key={p.id} p={p} />)}
        </div>
        {projects.filter(p => !p.featured).map(p => <Card key={p.id} p={p} />)}
      </div>
    </section>
  )
}