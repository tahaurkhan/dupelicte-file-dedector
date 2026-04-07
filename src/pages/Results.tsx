import { Folder, CheckCircle, Copy, FileText } from 'lucide-react';

export default function Results() {
  return (
    <div className="flex h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Scan Results</h2>
            <p className="text-slate-500 text-sm">1,248 potential duplicates found in <span className="font-semibold">Architect_Project_Alpha</span></p>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-200 text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors">
              Export Report
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-red-600/20 hover:bg-red-700 transition-colors">
              Delete Selected
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4" />
                <div className="flex items-center gap-2">
                  <Folder className="text-slate-400" size={20} />
                  <h3 className="font-bold text-slate-900">Presentation_Visuals_v2.zip</h3>
                </div>
                <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-600 font-medium">3 Duplicates</span>
              </div>
              <span className="text-sm font-semibold text-teal-700">856.4 MB reclaimable</span>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                <div className="w-10"></div>
                <div className="flex-1 grid grid-cols-12 items-center gap-4">
                  <div className="col-span-6 flex items-center gap-3">
                    <CheckCircle className="text-teal-600" size={18} />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">Presentation_Visuals_v2.zip</p>
                      <p className="text-xs text-slate-500 truncate">/Users/admin/Work/Projects/Alpha/Assets/</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-sm text-slate-500">428.2 MB</div>
                  <div className="col-span-2 text-sm text-slate-500">Oct 12, 2023</div>
                  <div className="col-span-2 flex justify-end">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-teal-50 text-teal-700">Original</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4" />
                <div className="flex-1 ml-6 grid grid-cols-12 items-center gap-4">
                  <div className="col-span-6 flex items-center gap-3">
                    <Copy className="text-red-500" size={18} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">Presentation_Visuals_v2_copy.zip</p>
                      <p className="text-xs text-slate-500 truncate">/Users/admin/Downloads/Backup/</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-sm text-slate-500">428.2 MB</div>
                  <div className="col-span-2 text-sm text-slate-500">Nov 04, 2023</div>
                  <div className="col-span-2 flex justify-end">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-red-50 text-red-600">Duplicate</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col p-6 shadow-xl z-10">
        <div className="mb-8 text-center">
          <div className="aspect-square w-full rounded-xl bg-slate-100 mb-4 flex items-center justify-center overflow-hidden border border-slate-200">
            <div className="w-24 h-24 bg-slate-800 rounded flex items-center justify-center text-white">
              <FileText size={48} />
            </div>
          </div>
          <h4 className="font-bold text-lg text-slate-900 leading-tight">Archive_Visuals.zip</h4>
          <p className="text-xs text-slate-500 mt-1">Zip Archive • 428.2 MB</p>
        </div>
        
        <div className="flex-1 space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-2">Metadata</span>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Modified</span>
                <span className="text-xs font-semibold text-slate-900">Jan 18, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Created</span>
                <span className="text-xs font-semibold text-slate-900">Jan 18, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">MD5 Hash</span>
                <span className="text-xs font-mono text-indigo-600 truncate ml-4">a1b2c3d4e5f6g7h8</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-2">Location</span>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs font-medium text-slate-800 break-all">/Users/admin/Desktop/Old/Files/Archive_Visuals.zip</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-200 space-y-3">
          <button className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
            Reveal in Finder
          </button>
          <button className="w-full bg-red-50 text-red-600 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors">
            Move to Trash
          </button>
        </div>
      </aside>
    </div>
  );
}
