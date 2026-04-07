import { Settings as SettingsIcon, Shield, Database, Bell } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Preferences</h2>
        <p className="text-slate-500 text-sm">Configure scan behavior, exclusion rules, and application settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-teal-50 text-teal-700 font-bold rounded-lg text-sm transition-colors">
            <SettingsIcon size={18} /> General
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-lg text-sm transition-colors">
            <Shield size={18} /> Exclusions
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-lg text-sm transition-colors">
            <Database size={18} /> Algorithms
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-lg text-sm transition-colors">
            <Bell size={18} /> Notifications
          </button>
        </div>

        <div className="md:col-span-3 space-y-6">
          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Scan Configuration</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Deep Byte-to-Byte Comparison</h4>
                  <p className="text-xs text-slate-500 mt-1">Slower, but guarantees 100% accuracy for identical files.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>
              <hr className="border-slate-100" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Ignore Empty Files</h4>
                  <p className="text-xs text-slate-500 mt-1">Skip files with 0 bytes size during the scan process.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Hashing Algorithm</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-teal-200 bg-teal-50 rounded-lg cursor-pointer">
                <input type="radio" name="hash" className="text-teal-600 focus:ring-teal-500" defaultChecked />
                <div>
                  <p className="font-semibold text-teal-900 text-sm">SHA-256 (Recommended)</p>
                  <p className="text-xs text-teal-700 mt-0.5">High security, extremely low collision probability.</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                <input type="radio" name="hash" className="text-teal-600 focus:ring-teal-500" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">MD5</p>
                  <p className="text-xs text-slate-500 mt-0.5">Faster processing, suitable for non-critical data.</p>
                </div>
              </label>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
