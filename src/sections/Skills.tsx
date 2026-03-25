import { skills } from '../data'

const cats = [
  { label:'Frontend',       icon:'◈', color:'b', items: skills.frontend },
  { label:'Backend',        icon:'⬡', color:'p', items: skills.backend },
  { label:'DevOps & CI/CD', icon:'⟳', color:'g', items: skills.devops },
  { label:'Bases de datos', icon:'◉', color:'b', items: skills.databases },
  { label:'Seguridad',      icon:'⬡', color:'p', items: skills.security },
  { label:'AI / IoT / ML',  icon:'◈', color:'g', items: skills.ai_iot },
]

const cfg: Record<string, {border:string;icon:string;tag:string}> = {
  b: { border:'border-[#38bdf8]/15 hover:border-[#38bdf8]/40', icon:'text-[#38bdf8]', tag:'tag' },
  p: { border:'border-[#818cf8]/15 hover:border-[#818cf8]/40', icon:'text-[#a5b4fc]', tag:'tag tag-p' },
  g: { border:'border-[#34d399]/12 hover:border-[#34d399]/38', icon:'text-[#34d399]',  tag:'tag tag-g' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-[#1e3a5f]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="section-label">Tecnologías</div>
          <h2 className="text-[38px] sm:text-[46px] font-extrabold text-[#e2edf8] leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            Tech <span className="text-grad-b">stack</span>
          </h2>
          <p className="text-[14px] text-[#6b8daa] mt-2">Del frontend al servidor. Del código al despliegue.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cats.map(cat => {
            const c = cfg[cat.color]
            return (
              <div key={cat.label}
                className={`rounded-lg border bg-[#08111e] p-5 transition-all duration-250 ${c.border}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-base ${c.icon} font-mono`}>{cat.icon}</span>
                  <span className="text-[13px] font-semibold text-[#c9d8e8]" style={{fontFamily:'Syne,sans-serif'}}>{cat.label}</span>
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

        {/* Tools row */}
        <div className="mt-4 rounded-lg border border-[#1e3a5f]/60 bg-[#08111e] p-4">
          <span className="font-mono text-[10px] text-[#4a6a8a] uppercase tracking-widest mr-3">Herramientas</span>
          <div className="inline-flex flex-wrap gap-1.5 mt-2">
            {[...skills.tools, ...skills.storage].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}