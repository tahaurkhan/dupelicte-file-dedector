import { PauseCircle, XCircle, FileText, Image as ImageIcon, Layers, Folder } from 'lucide-react';

export default function Scan() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <section className="bg-white rounded-xl p-10 shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Layers size={120} />
        </div>
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-teal-600 font-semibold tracking-wider text-xs uppercase mb-2 block">Current Process</span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Deep Directory Analysis</h3>
            </div>
            <div className="text-right">
              <p className="text-slate-500 font-medium text-sm">Scan Velocity</p>
              <p className="text-2xl font-bold text-teal-700">1,420 <span className="text-sm font-normal text-slate-500">files/sec</span></p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-slate-900">68% Analyzed</span>
              <span className="text-slate-500">2.4 TB / 3.5 TB</span>
            </div>
            <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 w-[68%] relative">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 flex-1 min-w-[300px]">
              <Folder className="text-teal-600" size={18} />
              <code className="text-xs text-slate-600 truncate font-mono">/Volumes/Archive/2023/Project_Files/Raw_Assets/HighRes_Renders/Final_V2/</code>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition-colors">
                <PauseCircle size={18} /> Pause Scan
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition-colors">
                <XCircle size={18} /> Cancel Scan
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Processing Stream</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <FileText className="text-teal-600" size={20} />
                  <span className="text-sm font-medium text-slate-900">rendering_pipeline_cache_092.tmp</span>
                </div>
                <span className="text-[10px] bg-teal-100 text-teal-700 px-2 py-1 rounded font-bold">MATCH FOUND</span>
              </div>
              <div className="flex items-center justify-between p-3 opacity-60">
                <div className="flex items-center gap-3 text-slate-500">
                  <ImageIcon size={20} />
                  <span className="text-sm">IMG_9402_backup.heic</span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold">PENDING</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="text-teal-600 text-sm font-bold hover:underline">Skip Current File &raquo;</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-100 rounded-xl p-6 text-center border border-slate-200">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Skipped Files</p>
            <h3 className="text-4xl font-extrabold text-slate-900">12,842</h3>
            <p className="text-[10px] text-slate-500 mt-2 italic">Policy: Ignore System Files</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-l-4 border-teal-600 shadow-sm border-y border-r border-slate-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Duplicates</p>
                <h3 className="text-3xl font-extrabold text-teal-700 mt-1">452</h3>
              </div>
              <div className="p-2 bg-teal-50 rounded-lg">
                <Layers className="text-teal-600" size={24} />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Potential savings: <span className="font-bold text-slate-900">4.2 GB</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
