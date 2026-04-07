import { Folder, File, ChevronRight, HardDrive } from 'lucide-react';

export default function Explorer() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">File Explorer</h2>
        <p className="text-slate-500 text-sm">Navigate your file system to select specific directories for scanning.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200 text-sm text-slate-600 font-medium">
          <HardDrive size={16} />
          <ChevronRight size={14} className="text-slate-400" />
          <span>Users</span>
          <ChevronRight size={14} className="text-slate-400" />
          <span>admin</span>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-900 font-bold">Documents</span>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { name: 'Projects', type: 'folder', items: '12 items', date: 'Today, 10:42 AM' },
            { name: 'Financials_2023', type: 'folder', items: '4 items', date: 'Yesterday' },
            { name: 'Report_Draft_v2.docx', type: 'file', size: '2.4 MB', date: 'Oct 12, 2023' },
            { name: 'meeting_notes.txt', type: 'file', size: '12 KB', date: 'Oct 10, 2023' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between px-6 py-3 hover:bg-slate-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                {item.type === 'folder' ? (
                  <Folder className="text-teal-500" size={20} />
                ) : (
                  <File className="text-slate-400" size={20} />
                )}
                <span className="font-medium text-slate-800 text-sm">{item.name}</span>
              </div>
              <div className="flex items-center gap-8 text-xs text-slate-500">
                <span className="w-20 text-right">{item.items || item.size}</span>
                <span className="w-24 text-right">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
