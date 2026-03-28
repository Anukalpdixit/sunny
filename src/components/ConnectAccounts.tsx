import { ShieldAlert, Check, Share2 } from 'lucide-react';

export default function ConnectAccounts({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 py-8 font-sans">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-[922px] flex overflow-hidden my-auto">
        
        {/* Main Content - Form */}
        <div className="w-full p-4 lg:p-6 flex flex-col">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-yellow-500" />
              Connect Channels <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            </h1>
            
            {/* Default Posting Timezone */}
            <div className="flex flex-col sm:items-end">
              <label htmlFor="timezone" className="sr-only">Default Posting Timezone</label>
              <select id="timezone" className="w-full sm:w-auto px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors min-w-[200px] mb-[5px] mt-0 -mr-1">
                <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                <option>(GMT+00:00) London</option>
              </select>
              <p className="text-[10px] text-slate-500 pb-[1px] -mb-6">All scheduled posts will default to this timezone.</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-xs font-medium text-slate-500 mb-2">Step 2 of 3</p>
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-yellow-400 rounded-full"></div>
              <div className="h-1 flex-1 bg-yellow-400 rounded-full"></div>
              <div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
            </div>
          </div>

          <p className="text-slate-500 text-xs mb-3">Grant SUNNY permissions to schedule posts and analyze performance across your platforms.</p>

          {/* Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            
            {/* Instagram - Connected */}
            <div className="border-2 border-emerald-500 rounded-xl p-3 relative bg-emerald-50/10">
              <div className="absolute top-3 right-3 bg-emerald-100 text-emerald-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
                <Check className="w-2.5 h-2.5" /> Connected
              </div>
              
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Instagram</h3>
                  <p className="text-[10px] text-slate-500">@acmecorp</p>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                  <Check className="w-3 h-3 text-emerald-500" /> Post Scheduling
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                  <Check className="w-3 h-3 text-emerald-500" /> Analytics Reading
                </div>
              </div>
              
              <button aria-label="Manage Instagram Connection" className="w-full py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                Manage Connection
              </button>
            </div>

            {/* Facebook */}
            <div className="border border-slate-200 rounded-xl p-3">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Facebook</h3>
                  <p className="text-[10px] text-slate-500">Pages & Groups</p>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center"><span className="w-1 h-1 bg-slate-300 rounded-full"></span></div> Needs: Post Scheduling
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center"><span className="w-1 h-1 bg-slate-300 rounded-full"></span></div> Needs: Analytics Reading
                </div>
              </div>
              
              <button aria-label="Connect Facebook Account" className="w-full py-1.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg text-xs font-medium transition-colors">
                Connect Account
              </button>
            </div>

            {/* LinkedIn */}
            <div className="border border-slate-200 rounded-xl p-3">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">LinkedIn</h3>
                  <p className="text-[10px] text-slate-500">Company Pages</p>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center"><span className="w-1 h-1 bg-slate-300 rounded-full"></span></div> Needs: Post Scheduling
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center"><span className="w-1 h-1 bg-slate-300 rounded-full"></span></div> Needs: Analytics Reading
                </div>
              </div>
              
              <button aria-label="Connect LinkedIn Account" className="w-full py-1.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg text-xs font-medium transition-colors">
                Connect Account
              </button>
            </div>

            {/* X (Twitter) - Warning */}
            <div className="border-2 border-yellow-400 rounded-xl p-3 relative bg-yellow-50/30">
              <div className="absolute top-3 right-3 text-yellow-500">
                <ShieldAlert className="w-4 h-4" />
              </div>
              
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">X (Twitter)</h3>
                  <p className="text-[10px] text-slate-500">@acmecorp</p>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-yellow-700">
                  <ShieldAlert className="w-3 h-3" /> Reconnection required
                </div>
              </div>
              
              <button aria-label="Reconnect X (Twitter) Account" className="w-full py-1.5 border border-yellow-400 text-yellow-700 bg-white hover:bg-yellow-50 rounded-lg text-xs font-medium transition-colors">
                Reconnect Account
              </button>
            </div>

            {/* TikTok */}
            <div className="border border-slate-200 rounded-xl p-3">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.27 6.36 6.34 6.34 0 006.33-6.36V8.05a8.36 8.36 0 004.39 1.25V5.85a4.84 4.84 0 01-2.4-.91z"/></svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">TikTok</h3>
                  <p className="text-[10px] text-slate-500">Business Accounts</p>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center"><span className="w-1 h-1 bg-slate-300 rounded-full"></span></div> Needs: Video Publishing
                </div>
              </div>
              
              <button aria-label="Connect TikTok Account" className="w-full py-1.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg text-xs font-medium transition-colors">
                Connect Account
              </button>
            </div>

            {/* YouTube */}
            <div className="border border-slate-200 rounded-xl p-3">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF0000] flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">YouTube</h3>
                  <p className="text-[10px] text-slate-500">Shorts & Videos</p>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center"><span className="w-1 h-1 bg-slate-300 rounded-full"></span></div> Needs: Video Uploads
                </div>
              </div>
              
              <button aria-label="Connect YouTube Account" className="w-full py-1.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg text-xs font-medium transition-colors">
                Connect Account
              </button>
            </div>

          </div>

          {/* Info Box */}
          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3 flex gap-3 mb-4">
            <div className="text-yellow-600 flex-shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] font-semibold text-yellow-900 mb-0.5">Why do we need these permissions?</h4>
              <p className="text-[10px] text-yellow-700 leading-relaxed">
                SUNNY requires posting permissions to automate your content calendar and read-only access to analytics to provide AI-driven growth insights. We never post without your approval or share your data.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
            <button onClick={onNext} className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors">
              Skip
            </button>
            <div className="flex items-center gap-4">
              <button onClick={onBack} className="text-xs text-slate-400 hover:text-slate-600 font-medium flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back
              </button>
              <button onClick={onNext} className="text-yellow-500 hover:text-yellow-600 text-xs font-bold transition-colors flex items-center gap-1">
                Next
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
