import { useState } from 'react';
import { 
  Flame, Calendar as CalendarIcon, TrendingUp, MoreVertical, 
  Linkedin, Instagram, Twitter, Plus, Briefcase, Maximize2, Send,
  Sparkles, BarChart2, Users, CalendarCheck
} from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function Dashboard({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  return (
    <DashboardLayout activeTab="dashboard" onNavigate={onNavigate}>
      <div className="flex-1 flex overflow-hidden bg-[#FAFAFA]">
        {/* Main Content Wrapper */}
        <div className="flex-1 flex flex-col relative min-w-0">
          
          {/* Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-8 pb-48">
            <div className="max-w-5xl mx-auto space-y-8">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Good morning, Sarah! 👋</h1>
                  <p className="text-slate-500 font-medium text-sm">Here's your command center for today's social strategy.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => onNavigate?.('ideas')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                  >
                    <Flame className="w-4 h-4 text-orange-500" />
                    Viral Ideas
                  </button>
                  <button 
                    onClick={() => onNavigate?.('calendar')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 rounded-xl text-sm font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-sm ring-1 ring-yellow-500/50"
                  >
                    <CalendarIcon className="w-4 h-4" />
                    Generate Calendar
                  </button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Stat 1 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BarChart2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg flex items-center gap-1 border border-emerald-100/50">
                      <TrendingUp className="w-3.5 h-3.5" /> 12%
                    </span>
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">4.8%</div>
                  <div className="text-sm font-medium text-slate-500">Avg. Engagement</div>
                </div>
                
                {/* Stat 2 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg flex items-center gap-1 border border-emerald-100/50">
                      <TrendingUp className="w-3.5 h-3.5" /> 8%
                    </span>
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">+1,240</div>
                  <div className="text-sm font-medium text-slate-500">New followers this week</div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CalendarCheck className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next 7 days</span>
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">14</div>
                  <div className="text-sm font-medium text-slate-500">Scheduled Posts</div>
                </div>
              </div>

              {/* Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Daily AI Suggestions
                    </h2>
                    <button className="text-sm font-bold text-yellow-600 hover:text-yellow-700 transition-colors">View all</button>
                  </div>

                  {/* Suggestion 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 text-[11px] font-black rounded-full flex items-center gap-1.5 uppercase tracking-wide border border-orange-100">
                          <Flame className="w-3.5 h-3.5" /> Trending Topic
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Score</span>
                          <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">92/100</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">"Behind the scenes of our new product launch"</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">Short-form video format is currently trending in your industry. Expected reach: <span className="font-bold text-emerald-600">+45%</span>.</p>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => onNavigate?.('post')}
                          className="flex-1 px-4 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                        >
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          Generate Post
                        </button>
                        <button className="px-4 py-2.5 bg-white text-slate-700 text-sm font-bold rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
                          Save Idea
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Suggestion 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="h-1.5 w-full bg-blue-400"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-black rounded-full flex items-center gap-1.5 uppercase tracking-wide border border-blue-100">
                          <BarChart2 className="w-3.5 h-3.5" /> Audience Insight
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">Your audience is active later today</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">Engagement spikes between 6 PM - 8 PM on Thursdays. Consider moving your scheduled LinkedIn post.</p>
                      <div className="flex items-center gap-3">
                        <button className="flex-1 px-4 py-2.5 bg-white text-slate-700 text-sm font-bold rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
                          Reschedule Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-black text-slate-900">Upcoming Posts</h2>
                    <button className="text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">Calendar view</button>
                  </div>

                  <div className="space-y-3">
                    {/* Post 1 */}
                    <div className="group bg-white rounded-2xl border border-slate-200/60 p-3 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center min-w-[4rem] py-2 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Today</span>
                        <span className="text-lg font-black text-slate-900 leading-none">2:00</span>
                        <span className="text-[10px] font-bold text-slate-400 mt-0.5">PM</span>
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                            <Linkedin className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-xs font-bold text-slate-500">Company Update</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 truncate">We are thrilled to announce our latest...</p>
                      </div>
                      <button className="text-slate-400 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-50 transition-colors opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Post 2 */}
                    <div className="group bg-white rounded-2xl border border-slate-200/60 p-3 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center min-w-[4rem] py-2 bg-slate-50 rounded-xl group-hover:bg-pink-50 transition-colors border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Today</span>
                        <span className="text-lg font-black text-slate-900 leading-none">5:30</span>
                        <span className="text-[10px] font-bold text-slate-400 mt-0.5">PM</span>
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center">
                            <Instagram className="w-3 h-3 text-pink-600" />
                          </div>
                          <span className="text-xs font-bold text-slate-500">Behind the Scenes Reel</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 truncate">A day in the life of our design team 🎨...</p>
                      </div>
                      <button className="text-slate-400 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-50 transition-colors opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Post 3 */}
                    <div className="group bg-white rounded-2xl border border-slate-200/60 p-3 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center min-w-[4rem] py-2 bg-slate-50 rounded-xl group-hover:bg-sky-50 transition-colors border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Tmrw</span>
                        <span className="text-lg font-black text-slate-900 leading-none">9:00</span>
                        <span className="text-[10px] font-bold text-slate-400 mt-0.5">AM</span>
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center">
                            <Twitter className="w-3 h-3 text-sky-500" />
                          </div>
                          <span className="text-xs font-bold text-slate-500">Industry News</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 truncate">3 trends shaping the future of SaaS...</p>
                      </div>
                      <button className="text-slate-400 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-50 transition-colors opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Floating Chat Input - Fixed Positioning */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent pointer-events-none flex flex-col items-center justify-end z-20">
            <div className="w-full max-w-3xl pointer-events-auto space-y-4">
              {/* Chat Input Box */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/80 p-2.5 flex items-center gap-3 transition-all focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus-within:border-slate-300">
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  placeholder="Ask SUNNY to generate posts, campaigns, or ideas..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-[15px] font-medium text-slate-800 placeholder:text-slate-400"
                />
                <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-sm">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {/* Suggestion Chips */}
              <div className="flex items-center justify-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200/80 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-500" /> Create 30-day calendar
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200/80 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  <BarChart2 className="w-3.5 h-3.5 text-blue-500" /> Analyze engagement
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200/80 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  <Flame className="w-3.5 h-3.5 text-orange-500" /> Find viral hooks
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 z-10 shadow-[-4px_0_24px_rgba(0,0,0,0.02)]">
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
            <h2 className="text-sm font-black text-slate-900">Platform Status</h2>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-8 overflow-y-auto">
            {/* Connected Accounts */}
            <div>
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Connected Accounts</h3>
              <div className="space-y-4">
                {/* LinkedIn */}
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-100 transition-colors">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">LinkedIn</p>
                      <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-wider">Connected</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all"><MoreVertical className="w-4 h-4" /></button>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center border border-pink-100 group-hover:bg-pink-100 transition-colors">
                      <Instagram className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Instagram</p>
                      <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-wider">Connected</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all"><MoreVertical className="w-4 h-4" /></button>
                </div>

                {/* Twitter */}
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100 group-hover:bg-sky-100 transition-colors">
                      <Twitter className="w-4 h-4 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Twitter/X</p>
                      <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-wider">Connected</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all"><MoreVertical className="w-4 h-4" /></button>
                </div>

                <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all flex items-center justify-center gap-2 mt-2">
                  <Plus className="w-4 h-4" /> Connect Account
                </button>
              </div>
            </div>

            {/* Current AI Persona */}
            <div>
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Current AI Persona</h3>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-black text-slate-900">Professional</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                  Authoritative, clear, and business-focused. Optimized for B2B SaaS audience.
                </p>
                <button 
                  onClick={() => onNavigate?.('brand')}
                  className="text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  Edit Brand Voice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
