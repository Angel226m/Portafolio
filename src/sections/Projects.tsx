import { useEffect, useRef, useState } from 'react'
import { projects } from '../data'
import WordReveal from '../components/WordReveal'
import ImageLightbox from '../components/ImageLightbox'

type P = typeof projects[number]

const tagClass = (c: string) => c === 'purple' ? 'tag tag-p' : c === 'green' ? 'tag tag-g' : 'tag'

const accentMap: Record<string, string> = {
  cyan: '#38bdf8',
  green: '#34d399',
  purple: '#818cf8',
}

function Images({ images, accent }: { images: string[]; accent: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <div className={`grid ${images.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(img)}
            className="relative overflow-hidden rounded-xl bg-[#0a1220] group/img focus:outline-none"
            style={{ aspectRatio: '16/9' }}
          >
            <img
              src={img}
              alt={`Captura ${i + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-110"
              loading="lazy"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3"
              style={{ background: `linear-gradient(to top, ${accent}33, transparent 60%)` }}
            >
              <span className="text-xs font-mono text-white/90 bg-black/50 backdrop-blur-sm px-2 py-1 rounded translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                Ampliar
              </span>
            </div>
          </button>
        ))}
      </div>
      {lightbox && (
        <ImageLightbox src={lightbox} alt="Vista previa" onClose={() => setLightbox(null)} />
      )}
    </>
  )
}

function Card({ p }: { p: P }) {
  const accent = accentMap[p.color] || '#38bdf8'
  const dotColor = p.color === 'purple' ? '#818cf8' : p.color === 'green' ? '#34d399' : '#38bdf8'

  return (
    <article
      className="card-glow relative rounded-2xl border border-[#1e3a5f]/30 bg-gradient-to-b from-[#0c1528] to-[#08111e] overflow-hidden h-full flex flex-col"
    >
      {p.images && p.images.length > 0 && (
        <div className="p-3 pb-0">
          <Images images={p.images} accent={accent} />
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-1.5">
            <span className="font-mono text-[10px] text-[#4a6a8a]">{p.year}</span>
            {p.featured && (
              <span className="font-mono text-[10px] text-[#34d399] border border-[#34d399]/30 px-1.5 py-0.5 rounded-sm badge-glow">featured</span>
            )}
            {p.tags.map(t => (
              <span key={t} className="font-mono text-[10px] text-[#4a6a8a] border border-[#1e3a5f] px-1.5 py-0.5 rounded-sm">{t}</span>
            ))}
          </div>
          <h3 className="font-bold text-[17px] leading-snug text-[#e2edf8]" style={{fontFamily:'Syne,sans-serif'}}>
            {p.title}
          </h3>
          <p className="font-mono text-[11px] text-[#4a6a8a] mt-0.5">{p.role}</p>
        </div>

        <p className="text-[13px] text-[#6b8daa] leading-relaxed mb-3 line-clamp-3">{p.description}</p>

        <ul className="space-y-1 mb-4">
          {p.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-[#5a7a9a]">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: dotColor }}/>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#1e3a5f]/40">
            <div className="flex flex-wrap gap-1.5">
              {p.tech.slice(0, 5).map((t, i) => (
                <span key={t} className={`${tagClass(p.techColors[i] || 'blue')} hover:brightness-125 transition-all duration-200`}>{t}</span>
              ))}
              {p.tech.length > 5 && (
                <span className="font-mono text-[10px] text-[#2a4060] px-2 py-0.5">+{p.tech.length - 5}</span>
              )}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {p.links.github && (
                <a href={p.links.github} target="_blank" rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg border border-[#1e3a5f] flex items-center justify-center text-[#4a6a8a] hover:text-[#c9d8e8] hover:border-[#38bdf8]/35 hover:bg-[#38bdf8]/5 transition-all">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              )}
              {p.links.live && (
                <a href={p.links.live} target="_blank" rel="noopener noreferrer" title="Sitio público"
                  className="w-7 h-7 rounded-lg border border-[#1e3a5f] flex items-center justify-center text-[#4a6a8a] hover:text-[#34d399] hover:border-[#34d399]/35 hover:bg-[#34d399]/5 transition-all">
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              )}
              {p.links.admin && (
                <a href={p.links.admin} target="_blank" rel="noopener noreferrer" title="Panel empleado"
                  className="w-7 h-7 rounded-lg border border-[#1e3a5f] flex items-center justify-center text-[#4a6a8a] hover:text-[#fbbf24] hover:border-[#fbbf24]/35 hover:bg-[#fbbf24]/5 transition-all">
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.07 })
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6" ref={sectionRef}>
      <div className="mb-10 sm:mb-12 reveal">
        <div className="section-label">Proyectos destacados</div>
        <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#e2edf8] leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
          <WordReveal text="Lo que he construido" />
        </h2>
        <div className="section-divider w-20 mt-3 mb-3" />
        <p className="text-[13px] sm:text-[14px] text-[#6b8daa] max-w-lg">
          Proyectos full-stack con arquitecturas de producción, seguridad y despliegue automatizado.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <div key={p.id} className={`reveal rd${Math.min(i + 1, 6)} ${!p.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <Card p={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
