import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#05080f]/90 backdrop-blur-xl border-b border-[#38bdf8]/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center glow-b">
            <span className="font-mono text-[11px] font-bold text-[#38bdf8]">AG</span>
          </div>
          <span style={{fontFamily:'Syne,sans-serif'}} className="font-bold text-sm text-[#c9d8e8] tracking-wide">
            Angel<span className="text-[#38bdf8]/40">.</span>dev
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-[13px] text-[#7a9bbf] hover:text-[#c9d8e8] transition-colors" style={{fontFamily:'Plus Jakarta Sans,sans-serif'}}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="mailto:angelgarayt22@gmail.com"
          className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#38bdf8]/25 bg-[#38bdf8]/5 text-[#38bdf8] text-[12px] font-mono hover:bg-[#38bdf8]/12 hover:border-[#38bdf8]/50 transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
          Disponible
        </a>

        {/* Hamburger */}
        <button className="md:hidden text-[#7a9bbf] hover:text-[#c9d8e8]" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" d="M3 7h18M3 12h18M3 17h18"/>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#08111e]/98 backdrop-blur-xl border-t border-[#38bdf8]/10">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}
                  className="text-[13px] text-[#7a9bbf] hover:text-[#c9d8e8] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}