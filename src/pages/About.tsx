import { Info, Github, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-br from-teal-600 to-indigo-700 p-12 text-center text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl">
            <Info size={40} className="text-white" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">Smart File Deductor</h2>
          <p className="text-teal-100 font-medium">Version 2.1.0-beta</p>
        </div>
        
        <div className="p-10 space-y-8">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">About the Project</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Smart File Deductor is an advanced utility designed to reclaim valuable storage space by identifying and safely removing duplicate files. Utilizing robust hashing algorithms (SHA-256/MD5), it ensures byte-for-byte accuracy, preventing accidental deletion of unique data.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div className="pt-6 border-t border-slate-100 flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
              <Github size={18} /> View Source
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors">
              <Globe size={18} /> Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
