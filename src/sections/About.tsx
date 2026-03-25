import { personal, education, softSkills } from '../data'

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#1e3a5f]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="section-label">Sobre mí</div>
          <h2 className="text-[38px] sm:text-[46px] font-extrabold text-[#e2edf8] leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            El desarrollador <span className="text-grad">detrás</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
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
                Soy estudiante de Ingeniería de Sistemas en el 8.º ciclo, apasionado por construir software
                con impacto real. Me especializo en <span className="text-[#c9d8e8]">arquitecturas limpias</span> (Clean Architecture, Hexagonal),
                <span className="text-[#c9d8e8]"> seguridad de producción</span> (OWASP, ISO 27001, AES-256-GCM) y
                <span className="text-[#c9d8e8]"> DevOps completo</span> (Docker, GitHub Actions, VPS).
              </p>
              <p>
                Lo que me diferencia es la combinación de desarrollo web tradicional con
                <span className="text-[#c9d8e8]"> inteligencia artificial e IoT</span> — desde modelos UNet++ para detección de grietas
                hasta sistemas en producción con Raspberry Pi y streaming WebRTC.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="font-mono text-[11px] text-[#38bdf8] uppercase tracking-widest mb-4">Formación</h4>
              <div className="space-y-3">
                {education.map(e => (
                  <div key={e.institution} className="flex items-start gap-3 p-3 rounded-lg border border-[#1e3a5f]/60 bg-[#08111e]">
                    <div className="mt-1 w-2 h-2 shrink-0 rounded-full border border-[#38bdf8]/50" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[13px] font-semibold text-[#c9d8e8]">{e.degree}</span>
                        {e.current && <span className="font-mono text-[10px] text-[#34d399] border border-[#34d399]/30 px-1.5 py-0.5 rounded-sm">Cursando</span>}
                      </div>
                      <div className="text-[12px] text-[#6b8daa]">{e.institution}{e.detail && ` · ${e.detail}`}</div>
                      <div className="font-mono text-[11px] text-[#4a6a8a]">{e.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Soft skills */}
            <div className="rounded-lg border border-[#1e3a5f]/60 bg-[#08111e] p-5">
              <h4 className="font-mono text-[11px] text-[#818cf8] uppercase tracking-widest mb-3">Habilidades blandas</h4>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map(s => <span key={s} className="tag tag-p">{s}</span>)}
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-lg border border-[#38bdf8]/20 bg-[#38bdf8]/5 p-5 space-y-2.5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                <span className="font-mono text-[11px] text-[#34d399] uppercase tracking-widest">Disponible</span>
              </div>
              {[
                { icon:'M', label: personal.email, href:`mailto:${personal.email}` },
                { icon:'T', label: personal.phone, href:`tel:${personal.phone}` },
                { icon:'G', label: personal.githubHandle, href: personal.github },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.icon==='G'?'_blank':undefined}
                  rel={item.icon==='G'?'noopener noreferrer':undefined}
                  className="flex items-center gap-2 text-[12.5px] font-mono text-[#6b8daa] hover:text-[#38bdf8] transition-colors group">
                  <span className="w-5 h-5 rounded border border-[#1e3a5f] flex items-center justify-center text-[10px] text-[#4a6a8a] group-hover:border-[#38bdf8]/40 transition-colors">
                    {item.icon==='M'?<svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    :item.icon==='T'?<svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
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