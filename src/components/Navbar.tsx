import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#05080f]/85 backdrop-blur-2xl border-b border-[#38bdf8]/8 shadow-[0_1px_30px_rgba(0,0,0,.3)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center glow-b group-hover:scale-110 transition-transform duration-300">
            <span className="font-mono text-[11px] font-bold text-[#38bdf8]">AG</span>
          </div>
          <span style={{fontFamily:'Syne,sans-serif'}} className="font-bold text-sm text-[#c9d8e8] tracking-wide">
            Angel<span className="text-[#38bdf8]/40">.</span>dev
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className={`nav-link text-[13px] transition-colors ${
                  active === l.href ? 'active text-[#c9d8e8]' : 'text-[#7a9bbf] hover:text-[#c9d8e8]'
                }`}
                style={{fontFamily:'Plus Jakarta Sans,sans-serif'}}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:angelgarayt22@gmail.com"
          className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#38bdf8]/25 bg-[#38bdf8]/5 text-[#38bdf8] text-[12px] font-mono hover:bg-[#38bdf8]/12 hover:border-[#38bdf8]/50 transition-all duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
          Disponible
        </a>

        <button className="md:hidden text-[#7a9bbf] hover:text-[#c9d8e8] relative z-50" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="transition-transform duration-300">
            {open
              ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" d="M3 7h18M3 12h18M3 17h18"/>
            }
          </svg>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#05080f]/98 backdrop-blur-2xl border-t border-[#38bdf8]/10 shadow-2xl">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}
                  className={`text-[13px] transition-all block py-2 ${
                    active === l.href ? 'text-[#38bdf8]' : 'text-[#7a9bbf] hover:text-[#c9d8e8]'
                  }`}>
                  {active === l.href && <span className="text-[#38bdf8] mr-2">▸</span>}
                  {l.label}
                </a>
              </li>
            ))}
            <a href="mailto:angelgarayt22@gmail.com"
              className="flex items-center gap-2 px-3.5 py-2 rounded-md border border-[#38bdf8]/25 bg-[#38bdf8]/5 text-[#38bdf8] text-[12px] font-mono mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              Disponible
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
