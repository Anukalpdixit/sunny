import { useState, useRef, useEffect } from 'react';
import { 
  Calendar, Clock, Settings, ChevronDown, Wand2, 
  MoreVertical, Plus, Send, FileSpreadsheet, 
  RefreshCw, MessageSquare, CheckCircle2, Circle, 
  ArrowRight, HelpCircle, Minimize2, Bot, Maximize2, X
} from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function ContentCalendar({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  
  // New UI States
  const [toast, setToast] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isApproved, setIsApproved] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  
  // Form State
  const [campaignName, setCampaignName] = useState('');
  const [campaignGoal, setCampaignGoal] = useState('Lead Generation');
  const [postingFrequency, setPostingFrequency] = useState('Consistent');
  const [targetPlatforms, setTargetPlatforms] = useState<string[]>(['LinkedIn', 'Instagram']);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isGenerated, isTyping]);

  const togglePlatform = (platform: string) => {
    setTargetPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
      showToast('Calendar generated successfully!');
    }, 1500);
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleQuickAction = (text: string) => {
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: `I've updated the calendar based on: "${text}". Let me know if you need any other adjustments!` 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!chatInput.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: chatInput }]);
    setChatInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "I've updated the calendar based on your request. Let me know if you need any other adjustments!" 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <DashboardLayout activeTab="calendar" onNavigate={onNavigate}>
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-yellow-500" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">Content Calendar Generator</h1>
        </div>
        <button 
          onClick={() => showToast('Opening calendar history...')}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors"
        >
          <Clock className="w-4 h-4" />
          History
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col relative bg-slate-50 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 pb-40">
            <div className="max-w-4xl mx-auto w-full space-y-8">
            
            {/* AI Initial Message */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Settings className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-slate-700 text-[15px] leading-relaxed">
                  Let's build your 30-day content calendar. Tell me a bit about your goals and preferences so I can generate the perfect strategy for you.
                </p>
                
                {/* Form Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="space-y-6">
                    {/* Campaign Name */}
                    <div>
                      <label htmlFor="campaignName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Campaign Name</label>
                      <input 
                        id="campaignName"
                        type="text" 
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        placeholder="e.g., Summer Sale 2024"
                        className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    {/* Goal */}
                    <div>
                      <label htmlFor="campaignGoal" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Campaign Goal</label>
                      <div className="relative">
                        <select 
                          id="campaignGoal" 
                          value={campaignGoal}
                          onChange={(e) => setCampaignGoal(e.target.value)}
                          className="w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-4 pr-10 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        >
                          <option value="Lead Generation">Lead Generation</option>
                          <option value="Brand Awareness">Brand Awareness</option>
                          <option value="Engagement">Engagement</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Frequency */}
                    <div>
                      <label id="postingFrequencyLabel" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Posting Frequency</label>
                      <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-labelledby="postingFrequencyLabel">
                        <button 
                          type="button" 
                          role="radio" 
                          aria-checked={postingFrequency === 'Relaxed'} 
                          onClick={() => setPostingFrequency('Relaxed')}
                          className={`py-3 px-4 rounded-xl border text-center transition-colors ${postingFrequency === 'Relaxed' ? 'border-2 border-yellow-400 bg-yellow-50/50' : 'border-slate-200 hover:border-slate-300'}`}
                        >
                          <p className={`text-sm font-medium ${postingFrequency === 'Relaxed' ? 'text-yellow-700' : 'text-slate-700'}`}>Relaxed</p>
                          <p className={`text-xs mt-0.5 ${postingFrequency === 'Relaxed' ? 'text-yellow-600/80' : 'text-slate-500'}`}>3-4 times/week</p>
                        </button>
                        <button 
                          type="button" 
                          role="radio" 
                          aria-checked={postingFrequency === 'Consistent'} 
                          onClick={() => setPostingFrequency('Consistent')}
                          className={`py-3 px-4 rounded-xl border text-center transition-colors ${postingFrequency === 'Consistent' ? 'border-2 border-yellow-400 bg-yellow-50/50' : 'border-slate-200 hover:border-slate-300'}`}
                        >
                          <p className={`text-sm font-medium ${postingFrequency === 'Consistent' ? 'text-yellow-700' : 'text-slate-700'}`}>Consistent</p>
                          <p className={`text-xs mt-0.5 ${postingFrequency === 'Consistent' ? 'text-yellow-600/80' : 'text-slate-500'}`}>1 time/day</p>
                        </button>
                        <button 
                          type="button" 
                          role="radio" 
                          aria-checked={postingFrequency === 'Aggressive'} 
                          onClick={() => setPostingFrequency('Aggressive')}
                          className={`py-3 px-4 rounded-xl border text-center transition-colors ${postingFrequency === 'Aggressive' ? 'border-2 border-yellow-400 bg-yellow-50/50' : 'border-slate-200 hover:border-slate-300'}`}
                        >
                          <p className={`text-sm font-medium ${postingFrequency === 'Aggressive' ? 'text-yellow-700' : 'text-slate-700'}`}>Aggressive</p>
                          <p className={`text-xs mt-0.5 ${postingFrequency === 'Aggressive' ? 'text-yellow-600/80' : 'text-slate-500'}`}>2+ times/day</p>
                        </button>
                      </div>
                    </div>

                    {/* Platforms */}
                    <div>
                      <label id="targetPlatformsLabel" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Platforms</label>
                      <div className="flex flex-wrap gap-2" role="group" aria-labelledby="targetPlatformsLabel">
                        <button 
                          type="button" 
                          aria-pressed={targetPlatforms.includes('LinkedIn')} 
                          onClick={() => togglePlatform('LinkedIn')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${targetPlatforms.includes('LinkedIn') ? 'border-2 border-blue-500 bg-blue-50 text-blue-700' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                          <span className="w-4 h-4 flex items-center justify-center font-bold">in</span> LinkedIn
                        </button>
                        <button 
                          type="button" 
                          aria-pressed={targetPlatforms.includes('Instagram')} 
                          onClick={() => togglePlatform('Instagram')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${targetPlatforms.includes('Instagram') ? 'border-2 border-pink-500 bg-pink-50 text-pink-700' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                          <span className="w-4 h-4 flex items-center justify-center font-bold">ig</span> Instagram
                        </button>
                        <button 
                          type="button" 
                          aria-pressed={targetPlatforms.includes('Twitter')} 
                          onClick={() => togglePlatform('Twitter')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${targetPlatforms.includes('Twitter') ? 'border-2 border-sky-500 bg-sky-50 text-sky-700' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                          Twitter
                        </button>
                        <button 
                          type="button" 
                          aria-pressed={targetPlatforms.includes('Facebook')} 
                          onClick={() => togglePlatform('Facebook')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${targetPlatforms.includes('Facebook') ? 'border-2 border-blue-600 bg-blue-50 text-blue-800' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                          Facebook
                        </button>
                        <button 
                          type="button" 
                          aria-pressed={targetPlatforms.includes('TikTok')} 
                          onClick={() => togglePlatform('TikTok')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${targetPlatforms.includes('TikTok') ? 'border-2 border-slate-900 bg-slate-100 text-slate-900' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                          TikTok
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={handleGenerate}
                      disabled={isGenerating || isGenerated}
                      aria-busy={isGenerating}
                      className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
                    >
                      <Wand2 className="w-4 h-4 text-yellow-400" />
                      {isGenerating ? 'Generating...' : 'Generate 30-Day Calendar'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* User Message */}
            {isGenerated && (
              <div className="flex justify-end">
                <div className="bg-slate-900 text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                  <p className="text-[15px] leading-relaxed">
                    Generate a 30-day calendar for {campaignName ? `"${campaignName}" (${campaignGoal})` : campaignGoal}, posting {postingFrequency} on {targetPlatforms.join(' and ')}.
                  </p>
                </div>
              </div>
            )}

            {/* AI Response & Calendar */}
            {isGenerated && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-slate-700 text-[15px] leading-relaxed">
                    Your 30-day lead generation calendar is ready! I've structured it with a mix of educational carousels, engaging reels, and strong CTA posts optimized for your selected platforms.
                  </p>
                  
                  {/* Calendar View Card */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">June Marketing Plan</h3>
                        <p className="text-sm text-slate-500 mt-0.5">30 Posts • 2 Platforms • Lead Gen Focus</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleQuickAction('I want to adjust the content mix')}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          Adjust Mix
                        </button>
                        <button 
                          onClick={() => {
                            setIsApproved(true);
                            showToast('All posts approved and scheduled!');
                          }}
                          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${isApproved ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          {isApproved ? 'Approved' : 'Approve All'}
                        </button>
                      </div>
                    </div>

                    {/* Posts List */}
                    <div className="divide-y divide-slate-100">
                      {/* Day 1 */}
                      <div className="flex p-5 hover:bg-slate-50 transition-colors group">
                        <div className="w-16 flex-shrink-0">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mon</p>
                          <p className="text-2xl font-bold text-slate-900">01</p>
                        </div>
                        <div className="flex-1 min-w-0 pr-4 border border-slate-100 rounded-xl p-4 bg-white">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">in</span>
                              <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-600">Educational Carousel</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-slate-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> 9:00 AM
                              </span>
                              <div className="relative">
                                <button 
                                  onClick={() => setOpenDropdownId(openDropdownId === 1 ? null : 1)}
                                  className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                                {openDropdownId === 1 && (
                                  <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 shadow-lg rounded-lg py-1 w-32 z-10">
                                    <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Editing post...'); }}>Edit</button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Post deleted'); }}>Delete</button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">"5 Hidden Costs of Manual Social Media Management"</h4>
                          <p className="text-sm text-slate-500 truncate">Swipe file detailing time wasted on manual tasks. CTA: Download ROI calculator.</p>
                        </div>
                      </div>

                      {/* Day 2 */}
                      <div className="flex p-5 hover:bg-slate-50 transition-colors group">
                        <div className="w-16 flex-shrink-0">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tue</p>
                          <p className="text-2xl font-bold text-slate-900">02</p>
                        </div>
                        <div className="flex-1 min-w-0 pr-4 border border-slate-100 rounded-xl p-4 bg-white">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] font-bold">ig</span>
                              <span className="px-2 py-0.5 rounded text-xs font-medium bg-pink-50 text-pink-600">Reel</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-slate-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> 12:30 PM
                              </span>
                              <div className="relative">
                                <button 
                                  onClick={() => setOpenDropdownId(openDropdownId === 2 ? null : 2)}
                                  className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                                {openDropdownId === 2 && (
                                  <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 shadow-lg rounded-lg py-1 w-32 z-10">
                                    <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Editing post...'); }}>Edit</button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Post deleted'); }}>Delete</button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">"POV: When your calendar schedules itself ✨"</h4>
                          <p className="text-sm text-slate-500 truncate">Trending audio, fast-paced UI reveal. CTA: Link in bio for free trial.</p>
                        </div>
                      </div>

                      {/* Day 3 */}
                      <div className="flex p-5 hover:bg-slate-50 transition-colors group">
                        <div className="w-16 flex-shrink-0">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Wed</p>
                          <p className="text-2xl font-bold text-slate-900">03</p>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="border border-slate-100 rounded-xl p-4 bg-white">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">in</span>
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-600">Case Study</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> 10:15 AM
                                </span>
                                <div className="relative">
                                  <button 
                                    onClick={() => setOpenDropdownId(openDropdownId === 3 ? null : 3)}
                                    className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <MoreVertical className="w-4 h-4" />
                                  </button>
                                  {openDropdownId === 3 && (
                                    <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 shadow-lg rounded-lg py-1 w-32 z-10">
                                      <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Editing post...'); }}>Edit</button>
                                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Post deleted'); }}>Delete</button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 mb-1">"How Agency X Saved 40 Hours/Month"</h4>
                            <p className="text-sm text-slate-500 truncate">Data-driven text post with chart image. CTA: Read full case study.</p>
                          </div>
                          
                          <div className="border border-slate-100 rounded-xl p-4 bg-white">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] font-bold">ig</span>
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-600">Story Series</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> 3:00 PM
                                </span>
                                <div className="relative">
                                  <button 
                                    onClick={() => setOpenDropdownId(openDropdownId === 4 ? null : 4)}
                                    className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <MoreVertical className="w-4 h-4" />
                                  </button>
                                  {openDropdownId === 4 && (
                                    <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 shadow-lg rounded-lg py-1 w-32 z-10">
                                      <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Editing post...'); }}>Edit</button>
                                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50" onClick={() => { setOpenDropdownId(null); showToast('Post deleted'); }}>Delete</button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 mb-1">"Mid-week Marketing Q&A"</h4>
                            <p className="text-sm text-slate-500 truncate">Interactive sticker series answering common client questions.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Chat Messages */}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'gap-4'}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-slate-900" />
                  </div>
                )}
                <div className={`${msg.role === 'user' ? 'bg-slate-900 text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm' : 'flex-1 space-y-4'}`}>
                  {msg.role === 'ai' ? (
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm inline-block max-w-[85%]">
                      <p className="text-slate-700 text-[15px] leading-relaxed">{msg.content}</p>
                    </div>
                  ) : (
                    <p className="text-[15px] leading-relaxed">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-slate-900" />
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm inline-block">
                  <div className="flex items-center gap-1.5 h-6">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area (Fixed Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pt-10 pb-6 px-6 pointer-events-none">
          <div className="max-w-3xl mx-auto pointer-events-auto">
            <form onSubmit={handleSendMessage} className="relative bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="flex items-center px-4 py-3">
                <Plus className="w-5 h-5 text-slate-400 mr-3" />
                <label htmlFor="calendarChatInput" className="sr-only">Ask SUNNY to tweak the calendar</label>
                <input 
                  id="calendarChatInput"
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask SUNNY to tweak the calendar..." 
                  className="flex-1 bg-transparent border-none focus:outline-none text-slate-700 placeholder:text-slate-400 text-[15px]"
                />
                <button type="submit" aria-label="Send message" disabled={!chatInput.trim() || isTyping} className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors ml-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
            
            <div className="flex items-center justify-center gap-3 mt-4">
              <button 
                type="button" 
                onClick={() => showToast('Exporting calendar to CSV...')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
                Export to CSV
              </button>
              <button 
                type="button"
                onClick={() => handleQuickAction("Regenerate with more video content")}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 text-blue-500" />
                Regenerate with more video
              </button>
              <button 
                type="button"
                onClick={() => handleQuickAction("Change tone to professional")}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-pink-500" />
                Change tone to professional
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Right Sidebar - Campaign Overview */}
        {isSidebarOpen ? (
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 relative transition-all duration-300">
            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-900">Campaign Overview</h2>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-8 overflow-y-auto">
              {/* Content Mix */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Content Mix</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span className="text-slate-700">Educational</span>
                      <span className="text-slate-500">40%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span className="text-slate-700">Promotional</span>
                      <span className="text-slate-500">30%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span className="text-slate-700">Engagement</span>
                      <span className="text-slate-500">30%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Next Steps</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">Generate Ideas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">Create Calendar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-500">Review & Edit Drafts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-500">Generate Media (Images/Video)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-500">Approve for Scheduling</span>
                  </div>
                </div>

                <button 
                  onClick={() => showToast('Proceeding to drafts view...')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                >
                  Proceed to Drafts
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>


          </div>
        ) : (
          <div className="w-16 bg-white border-l border-slate-200 flex flex-col items-center py-4 flex-shrink-0 transition-all duration-300">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Expand Overview"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 z-50">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <p className="text-sm font-medium">{toast}</p>
          <button onClick={() => setToast(null)} className="text-slate-400 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </DashboardLayout>
  );
}
