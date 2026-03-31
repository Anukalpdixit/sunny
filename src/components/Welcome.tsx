import { Check } from 'lucide-react';

export default function Welcome({ onNext, onSkip }: { onNext: () => void, onSkip?: () => void }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 py-8 font-sans">
      <div className="onboarding-card">
        
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col">
          <div className="mb-6">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
              SUNNY <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            </h1>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-1">Welcome to SUNNY</h2>
          <p className="text-sm text-slate-500 mb-6">Your AI Social Media Manager</p>
          
          <div className="space-y-4 mb-6 flex-1 pr-2">
            <div className="flex gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Identify viral content angles</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Discover trending topics and high-performing content strategies tailored to your audience</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Create 30-day campaigns</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Generate comprehensive monthly content calendars with AI-powered campaign strategies</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Generate posts automatically</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Create engaging captions, hashtags, and visual content with intelligent AI assistance</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Schedule content across platforms</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Optimize posting times and publish seamlessly to LinkedIn, Instagram, Twitter, and more</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
            <button 
              onClick={onNext}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium py-2.5 rounded-lg transition-colors text-sm"
            >
              Start Setup
            </button>
            <button 
              onClick={onSkip || onNext}
              className="w-full text-xs text-slate-500 hover:text-slate-700 font-medium py-1.5 transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>
        
        {/* Right Column - Visuals */}
        <div className="hidden lg:block w-1/2 bg-slate-50 p-6 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-slate-50/50"></div>
          
          <div className="relative z-10 w-full max-w-sm mx-auto">
            {/* Main floating card */}
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 mb-4">
              <div className="space-y-3">
                
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">AI Content Engine</p>
                    <p className="text-xs text-slate-500">Analyzing your brand voice</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Viral Content Ideas</p>
                      <p className="text-xs text-slate-500">15 trending angles identified</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">NEW</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">30-Day Campaign Ready</p>
                      <p className="text-xs text-slate-500">Content calendar generated</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Visual Content Creator</p>
                      <p className="text-xs text-slate-500">AI-powered media generation</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-yellow-400 animate-spin"></div>
                </div>
                
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50/50 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Automation Ready</p>
                  <p className="text-xs text-slate-500">3 platforms connected</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
              </div>
            </div>
            
            {/* Two smaller cards */}
            <div className="flex gap-4 mt-12">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex-1">
                <div className="w-6 h-6 rounded bg-yellow-50 text-yellow-500 flex items-center justify-center mb-2">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                </div>
                <p className="text-xs font-semibold text-slate-900">Smart Analytics</p>
                <p className="text-[10px] text-slate-500">Track engagement & growth</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex-1">
                <div className="w-6 h-6 rounded bg-yellow-50 text-yellow-500 flex items-center justify-center mb-2">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="text-xs font-semibold text-slate-900">Auto Scheduling</p>
                <p className="text-[10px] text-slate-500">Optimal posting times</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
