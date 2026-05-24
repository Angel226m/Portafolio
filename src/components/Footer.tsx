import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e3a5f]/40 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md border border-[#38bdf8]/30 bg-[#38bdf8]/8 flex items-center justify-center">
            <span className="font-mono text-[10px] font-bold text-[#38bdf8]">AG</span>
          </div>
          <div>
            <span className="font-mono text-[11px] text-[#4a6a8a]">© {new Date().getFullYear()} Angel Garay Torres</span>
            <div className="font-mono text-[10px] text-[#2a4060]">Full-Stack Developer & DevOps</div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${personal.email}`} className="font-mono text-[11px] text-[#4a6a8a] hover:text-[#38bdf8] transition-colors duration-300">Email</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-[#4a6a8a] hover:text-[#38bdf8] transition-colors duration-300">GitHub</a>
          <span className="font-mono text-[11px] text-[#2a4060]">{personal.location}</span>
        </div>
      </div>
    </footer>
  )
}
