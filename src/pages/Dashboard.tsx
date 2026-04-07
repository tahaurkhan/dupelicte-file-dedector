import { Zap, HardDrive, Folder, Image as ImageIcon, Film, FileText, CloudUpload } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">System Overview</h2>
          <p className="text-slate-500 max-w-md">Analyze and optimize your storage landscape with high-precision file mapping.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-200 text-slate-800 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors">
            Deep Cleaning
          </button>
          <button className="bg-gradient-to-r from-teal-700 to-teal-600 text-white px-8 py-3 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-teal-700/20 hover:opacity-90 transition-opacity">
            <Zap size={18} />
            START SCAN
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
              <HardDrive size={24} />
            </div>
            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded">+12% vs last month</span>
          </div>
          <p className="text-sm font-medium text-slate-500">Space Reclaimed</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1">124.8 GB</h3>
          <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-teal-600 w-3/4 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <Folder size={24} />
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500">Duplicate Groups</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1">1,482</h3>
          <div className="mt-4 flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-cyan-100 text-[10px] flex items-center justify-center font-bold text-cyan-800 border-2 border-white">PDF</div>
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-[10px] flex items-center justify-center font-bold text-indigo-800 border-2 border-white">JPG</div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-[10px] flex items-center justify-center font-bold text-emerald-800 border-2 border-white">MP4</div>
            <div className="w-6 h-6 rounded-full bg-slate-200 text-[10px] flex items-center justify-center font-bold text-slate-600 border-2 border-white">+4</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <Zap size={24} />
            </div>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Stable
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500">System Integrity</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1">98.4%</h3>
          <p className="text-xs text-slate-500 mt-4">Scanning efficiency optimized</p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-slate-100/50 rounded-2xl p-10 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-teal-500 transition-colors min-h-[400px]">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-teal-600">
            <CloudUpload size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Drop folders to architect scan</h3>
          <p className="text-slate-500 mb-8 text-center max-w-sm">Select specific directories or drives for deep duplicate analysis. Supports NTFS, FAT32, and APFS.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button className="flex-1 bg-white border border-slate-200 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Folder size={18} /> Select Folder
            </button>
            <button className="flex-1 bg-white border border-slate-200 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <HardDrive size={18} /> Select Drive
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="flex justify-between items-center px-2">
            <h4 className="font-bold text-slate-900">Recent Insights</h4>
            <button className="text-xs font-bold text-teal-600 hover:underline">View History</button>
          </div>
          <div className="space-y-4">
            {[
              { icon: ImageIcon, title: 'C:\\Users\\Work\\Projects\\Assets', time: '2h ago', size: '45.2 GB', clean: '3.2 GB Clean', color: 'text-teal-600' },
              { icon: Film, title: 'D:\\Media\\Backups\\Old_Renders', time: '6h ago', size: '120.8 GB', clean: '14.5 GB Clean', color: 'text-teal-600' },
              { icon: FileText, title: 'Desktop\\Temp_Archive', time: '1d ago', size: '1.2 GB', clean: 'Low Impact', color: 'text-red-500' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl flex gap-4 items-center border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                  <item.icon className="text-slate-600" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{item.title}</p>
                  <p className="text-[10px] text-slate-500">Scanned {item.time} • {item.size}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className={`text-xs font-bold ${item.color}`}>{item.clean}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
