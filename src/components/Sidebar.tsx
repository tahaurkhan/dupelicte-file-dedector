import { LayoutDashboard, Search, List, FolderOpen, Settings, Plus, Info, HelpCircle, Compass } from 'lucide-react';

export default function Sidebar({ currentRoute, setCurrentRoute }: { currentRoute: string, setCurrentRoute: (route: string) => void }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'scan', label: 'Scan', icon: Search },
    { id: 'results', label: 'Results', icon: List },
    { id: 'explorer', label: 'Explorer', icon: FolderOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col h-full shrink-0">
      <div className="p-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-700 to-teal-500 rounded-lg flex items-center justify-center text-white shadow-md">
            <Compass size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-teal-800">Precision Scan</h1>
            <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">File Architect v1.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentRoute(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-slate-200/50 text-teal-700 font-semibold border-r-4 border-teal-600'
                  : 'text-slate-500 hover:bg-slate-200/50 hover:text-teal-600 font-medium'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <button className="w-full bg-gradient-to-br from-teal-700 to-teal-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity">
          <Plus size={20} />
          Start New Scan
        </button>
        <div className="mt-6 pt-4 border-t border-slate-200 space-y-1">
          <button onClick={() => setCurrentRoute('about')} className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${currentRoute === 'about' ? 'text-teal-700 font-semibold bg-slate-200/50' : 'text-slate-500 hover:text-teal-600'}`}>
            <Info size={18} />
            <span className="text-sm">About</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 hover:text-teal-600 transition-colors">
            <HelpCircle size={18} />
            <span className="text-sm">Help</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
