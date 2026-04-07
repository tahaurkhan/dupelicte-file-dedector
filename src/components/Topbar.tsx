import { Search, Bell } from 'lucide-react';

export default function Topbar({ currentRoute }: { currentRoute: string }) {
  const titles: Record<string, string> = {
    dashboard: 'System Overview',
    scan: 'Scan in Progress',
    results: 'Scan Results',
    explorer: 'Duplicate Architect',
    settings: 'Preferences',
    about: 'Duplicate Architect'
  };

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-8">
        <h2 className="text-xl font-bold text-slate-800 capitalize">
          {titles[currentRoute] || currentRoute}
        </h2>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-teal-700 border-b-2 border-teal-600 pb-1 text-sm font-medium">Dashboard</a>
          <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">Stats</a>
          <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">History</a>
        </nav>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search architecture..." 
            className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>
        <button className="text-slate-500 hover:text-teal-600 transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-800">Alex Rivera</p>
            <p className="text-[10px] text-slate-500">System Architect</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-teal-100 border-2 border-teal-200 overflow-hidden">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
