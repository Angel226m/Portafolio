import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e3a5f]/40 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded border border-[#38bdf8]/30 flex items-center justify-center">
            <span className="font-mono text-[10px] font-bold text-[#38bdf8]">AG</span>
          </div>
          <span className="font-mono text-[11px] text-[#4a6a8a]">© {new Date().getFullYear()} Angel Garay Torres</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${personal.email}`} className="font-mono text-[11px] text-[#4a6a8a] hover:text-[#38bdf8] transition-colors">Email</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-[#4a6a8a] hover:text-[#38bdf8] transition-colors">GitHub</a>
          <span className="font-mono text-[11px] text-[#2a4060]">Chincha, Perú</span>
        </div>
      </div>
    </footer>
  )
}