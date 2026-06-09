import { useEffect, useRef } from 'react'
import { skills } from '../data'

const cats = [
  { label:'Frontend',       icon:'◈', color:'b', items: skills.frontend },
  { label:'Backend',        icon:'⬡', color:'p', items: skills.backend },
  { label:'DevOps & CI/CD', icon:'⟳', color:'g', items: skills.devops },
  { label:'Bases de datos', icon:'◉', color:'b', items: skills.databases },
  { label:'Seguridad',      icon:'⬡', color:'p', items: skills.security },
  { label:'AI / IoT / ML',  icon:'◈', color:'g', items: skills.ai_iot },
]

const cfg: Record<string, {border:string;icon:string;tag:string;accent:string}> = {
  b: { border:'border-[#38bdf8]/15 hover:border-[#38bdf8]/45', icon:'text-[#38bdf8]', tag:'tag', accent:'bg-[#38bdf8]' },
  p: { border:'border-[#818cf8]/15 hover:border-[#818cf8]/45', icon:'text-[#a5b4fc]', tag:'tag tag-p', accent:'bg-[#818cf8]' },
  g: { border:'border-[#34d399]/12 hover:border-[#34d399]/38', icon:'text-[#34d399]',  tag:'tag tag-g', accent:'bg-[#34d399]' },
}

const featuredTech = [
  { name: 'React', color: '#38bdf8' },
  { name: 'TypeScript', color: '#38bdf8' },
  { name: 'Go', color: '#818cf8' },
  { name: 'Docker', color: '#34d399' },
  { name: 'PostgreSQL', color: '#818cf8' },
  { name: 'GitHub Actions', color: '#34d399' },
  { name: 'PyTorch', color: '#818cf8' },
  { name: 'Tailwind CSS', color: '#38bdf8' },
]

const allMarquee = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.devops,
  ...skills.databases,
  ...skills.security,
  ...skills.ai_iot,
  ...skills.tools,
  ...skills.storage,
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="py-16 sm:py-20 section-border overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 reveal">
          <div className="section-label">Tecnologías</div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#e2edf8] leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            Tech <span className="text-grad-b">stack</span>
          </h2>
          <div className="section-divider w-20 mt-3 mb-3" />
          <p className="text-[13px] sm:text-[14px] text-[#6b8daa]">Del frontend al servidor. Del código al despliegue.</p>
        </div>

        <div className="reveal rd1 mb-8">
          <div className="font-mono text-[10px] text-[#3a5a7a] uppercase tracking-widest mb-3">Core technologies</div>
          <div className="flex flex-wrap gap-2">
            {featuredTech.map(t => (
              <span
                key={t.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 cursor-default"
                style={{
                  background: `${t.color}10`,
                  border: `1px solid ${t.color}28`,
                  color: t.color,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{background: t.color}} />
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cats.map((cat, i) => {
            const c = cfg[cat.color]
            return (
              <div key={cat.label}
                className={`reveal rd${Math.min(i + 1, 6)} shimmer-line rounded-xl border bg-[#08111e] p-5 transition-all duration-250 ${c.border}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${c.icon} breathe transition-all duration-300`}
                    style={{background:`${c.accent === 'bg-[#38bdf8]' ? '#38bdf8' : c.accent === 'bg-[#818cf8]' ? '#818cf8' : '#34d399'}12`}}>
                    {cat.icon}
                  </div>
                  <span className="text-[13px] font-bold text-[#c9d8e8]" style={{fontFamily:'Syne,sans-serif'}}>{cat.label}</span>
                  <span className="ml-auto font-mono text-[10px] text-[#2a4060]">{cat.items.length} techs</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map(item => (
                    <span key={item} className={c.tag}>{item}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal rd6 mt-4 rounded-xl border border-[#1e3a5f]/50 bg-[#08111e] p-4 flex flex-wrap gap-x-6 gap-y-2 items-center">
          <span className="font-mono text-[10px] text-[#3a5a7a] uppercase tracking-widest shrink-0">Herramientas & Storage</span>
          <div className="flex flex-wrap gap-1.5">
            {[...skills.tools, ...skills.storage].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Animated marquee of all technologies */}
      <div className="mt-12 py-4 border-t border-b border-[#1e3a5f]/30 overflow-hidden mask-edges">
        <div
          className="flex items-center gap-6"
          style={{ width: 'max-content', animation: 'marquee-scroll 30s linear infinite', willChange: 'transform' }}
        >
          {[...allMarquee, ...allMarquee].map((t, i) => (
            <span key={`${t}-${i}`}
              className="font-mono text-[12px] text-[#3a5a7a] hover:text-[#38bdf8] transition-colors whitespace-nowrap">
              <span className="text-[#38bdf8]/30 mx-2">//</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
