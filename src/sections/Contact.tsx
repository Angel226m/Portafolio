import { personal } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-[#1e3a5f]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="section-label">Contacto</div>
            <h2 className="text-[38px] sm:text-[46px] font-extrabold text-[#e2edf8] leading-tight mb-4" style={{fontFamily:'Syne,sans-serif'}}>
              ¿Hablamos<span className="text-grad">?</span>
            </h2>
            <p className="text-[14px] text-[#6b8daa] leading-relaxed mb-6 max-w-sm">
              Busco prácticas preprofesionales o posición junior. Si tienes un proyecto
              interesante o una oportunidad, estoy listo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#38bdf8] text-[#05080f] text-[13px] font-bold hover:bg-[#7dd3fc] transition-colors glow-b"
                style={{fontFamily:'Syne,sans-serif'}}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Enviar email
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#1e3a5f] text-[#7a9bbf] text-[13px] hover:border-[#38bdf8]/35 hover:text-[#c9d8e8] transition-all">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Right — info card */}
          <div className="rounded-xl border border-[#1e3a5f]/60 bg-[#08111e] p-6 space-y-4">
            {[
              { label:'Email',    value: personal.email,   href:`mailto:${personal.email}` },
              { label:'Teléfono', value: personal.phone,   href:`tel:${personal.phone}` },
              { label:'GitHub',   value: personal.githubHandle, href: personal.github },
              { label:'Ubicación',value: personal.location, href: undefined },
            ].map(row => (
              <div key={row.label} className="flex items-center justify-between py-3 border-b border-[#1e3a5f]/40 last:border-0 last:pb-0">
                <span className="font-mono text-[11px] text-[#4a6a8a] uppercase tracking-widest">{row.label}</span>
                {row.href
                  ? <a href={row.href} target={row.label==='GitHub'?'_blank':undefined}
                      rel={row.label==='GitHub'?'noopener noreferrer':undefined}
                      className="font-mono text-[12.5px] text-[#c9d8e8] hover:text-[#38bdf8] transition-colors">{row.value}</a>
                  : <span className="font-mono text-[12.5px] text-[#c9d8e8]">{row.value}</span>
                }
              </div>
            ))}
            <div className="flex items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"/>
              <span className="font-mono text-[11px] text-[#34d399]">Disponible para trabajo remoto / híbrido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}