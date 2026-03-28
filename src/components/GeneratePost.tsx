import { useState } from 'react';
import { 
  ArrowLeft, Calendar, Wand2, UploadCloud, RefreshCw, 
  TrendingUp, Maximize2, Linkedin, Instagram, Twitter, Facebook,
  Check
} from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function GeneratePost({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  return (
    <DashboardLayout activeTab="post" onNavigate={onNavigate}>
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate && onNavigate('dashboard')}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Create Post</h1>
            <p className="text-xs text-slate-500">Drafting for 3 platforms</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors">
            Save Draft
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors">
            <Calendar className="w-4 h-4" />
            Schedule Post
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Editor) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Select Platforms */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h2 className="text-sm font-bold text-slate-900 mb-4">Select Platforms</h2>
              <div className="flex flex-wrap items-center gap-3">
                {/* LinkedIn */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-200 bg-blue-50 cursor-pointer">
                  <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">LinkedIn</span>
                </label>
                
                {/* Instagram */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg border border-pink-200 bg-pink-50 cursor-pointer">
                  <div className="w-4 h-4 rounded bg-pink-600 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span className="text-sm font-medium text-slate-700">Instagram</span>
                </label>

                {/* Twitter */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-200 bg-blue-50 cursor-pointer">
                  <div className="w-4 h-4 rounded bg-blue-400 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <Twitter className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-slate-700">Twitter</span>
                </label>

                {/* Facebook */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center">
                  </div>
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-600">Facebook</span>
                </label>
              </div>
            </div>

            {/* Media */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-slate-900">Media</h2>
                <button className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  <Wand2 className="w-3.5 h-3.5" />
                  Generate with AI
                </button>
              </div>
              
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <UploadCloud className="w-5 h-5 text-slate-500" />
                </div>
                <p className="text-sm font-medium text-slate-900 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500">SVG, PNG, JPG or MP4 (max. 800x400px)</p>
              </div>

              <div className="flex gap-4">
                <div className="relative group">
                  <img 
                    src="https://picsum.photos/seed/cutecreature/200/200" 
                    alt="Uploaded media" 
                    className="w-32 h-32 object-cover rounded-xl border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-slate-900">Caption</h2>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-600 transition-colors">
                    <Wand2 className="w-3.5 h-3.5" />
                    Rewrite
                  </button>
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-600 transition-colors">
                    <Wand2 className="w-3.5 h-3.5" />
                    Shorten
                  </button>
                </div>
              </div>
              <textarea 
                placeholder="Write your caption here... Ask SUNNY for suggestions if you're stuck!"
                className="w-full h-32 p-4 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none placeholder:text-slate-400"
              ></textarea>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            
            {/* Tabs */}
            <div className="flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-6">
                <button className="pb-3 text-sm font-bold text-slate-900 border-b-2 border-slate-900">
                  AI Suggestions
                </button>
                <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
                  Preview
                </button>
              </div>
              <button className="pb-3 text-slate-400 hover:text-slate-600 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Engagement Score */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 opacity-50"></div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Engagement Score</h3>
              <p className="text-xs text-slate-500 mb-4">Predicted performance based on history</p>
              
              <div className="flex items-end gap-3 mb-4">
                <div className="text-4xl font-black text-slate-900 leading-none">85<span className="text-lg text-slate-400 font-medium">/100</span></div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  High Potential
                </div>
              </div>

              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[85%]"></div>
              </div>
            </div>

            {/* Suggested Hooks */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-yellow-500">💡</span> Suggested Hooks
                </h3>
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
              
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:border-blue-300 cursor-pointer transition-colors">
                <p className="text-sm text-slate-700 leading-relaxed">
                  "Stop wasting hours on social media. Here's the framework we use to..."
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:border-blue-300 cursor-pointer transition-colors">
                <p className="text-sm text-slate-700 leading-relaxed">
                  "The 3 hidden costs of manual posting that agencies ignore."
                </p>
              </div>
            </div>

            {/* Trending Hashtags */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="text-red-500">🔥</span> Trending Hashtags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#SaaSTips', '#MarketingHacks', '#AItools', '#Productivity'].map(tag => (
                  <button key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1">
                    <span className="text-slate-400">+</span> {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* SUNNY TIP */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">Sunny Tip</h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                Adding a question at the end of your caption increases comments by 34% on average for your audience.
              </p>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
