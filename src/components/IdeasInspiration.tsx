import { useState, useRef, useEffect } from 'react';
import { 
  Flame, Filter, Settings, Bot, Send, Plus, 
  TrendingUp, Bookmark, Sparkles, Target, Smile,
  Minimize2, Trash2, Instagram, Linkedin, Twitter,
  Video, Layout, FileText, Maximize2
} from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function IdeasInspiration({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const [chatInput, setChatInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <DashboardLayout activeTab="ideas" onNavigate={onNavigate}>
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center">
            <Flame className="w-5 h-5 text-yellow-500" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">Viral Idea Generator</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors">
          <Filter className="w-4 h-4" />
          Filter Industry
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col relative bg-slate-50 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 pb-40">
            <div className="max-w-4xl mx-auto w-full space-y-8">
              
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-slate-900 text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                  <p className="text-[15px] leading-relaxed">
                    Find viral post ideas for my coffee shop's new summer menu launch.
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-slate-900" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm inline-block max-w-[85%]">
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      I've analyzed trending content in the cafe & beverage industry. Here are 4 high-potential viral ideas for your summer menu launch:
                    </p>
                  </div>

                  {/* Idea Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col border-l-4 border-l-emerald-500">
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 rounded-md text-xs font-medium text-slate-600">
                            <Instagram className="w-3.5 h-3.5 text-pink-600" />
                            Reel / Short Video
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-bold">
                            <TrendingUp className="w-3 h-3" />
                            94/100
                          </div>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">The Hook</p>
                        <h3 className="text-base font-bold text-slate-900 mb-6 leading-snug flex-1">
                          "Stop ordering regular iced coffee. Try this secret summer menu hack instead 🤫☕️"
                        </h3>
                        <div className="flex items-center gap-2 mt-auto">
                          <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                            Create Post
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 py-2 rounded-lg text-sm font-medium transition-colors">
                            <Bookmark className="w-4 h-4" />
                            Save
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col border-l-4 border-l-emerald-500">
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 rounded-md text-xs font-medium text-slate-600">
                            <Layout className="w-3.5 h-3.5 text-blue-600" />
                            Carousel
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-bold">
                            <TrendingUp className="w-3 h-3" />
                            88/100
                          </div>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">The Hook</p>
                        <h3 className="text-base font-bold text-slate-900 mb-6 leading-snug flex-1">
                          "3 reasons why our new Iced Matcha is selling out by 10 AM every day 🍵✨"
                        </h3>
                        <div className="flex items-center gap-2 mt-auto">
                          <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                            Create Post
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 py-2 rounded-lg text-sm font-medium transition-colors">
                            <Bookmark className="w-4 h-4" />
                            Save
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col border-l-4 border-l-yellow-400">
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 rounded-md text-xs font-medium text-slate-600">
                            <Video className="w-3.5 h-3.5 text-slate-900" />
                            Behind the Scenes
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 text-yellow-600 rounded text-xs font-bold">
                            <TrendingUp className="w-3 h-3" />
                            76/100
                          </div>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">The Hook</p>
                        <h3 className="text-base font-bold text-slate-900 mb-6 leading-snug flex-1">
                          "Come with me to prep 50 gallons of cold brew for our summer launch weekend 🧊🏃‍♂️"
                        </h3>
                        <div className="flex items-center gap-2 mt-auto">
                          <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                            Create Post
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 py-2 rounded-lg text-sm font-medium transition-colors">
                            <Bookmark className="w-4 h-4" />
                            Save
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col border-l-4 border-l-emerald-500">
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 rounded-md text-xs font-medium text-slate-600">
                            <Twitter className="w-3.5 h-3.5 text-blue-400" />
                            Poll / Question
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-bold">
                            <TrendingUp className="w-3 h-3" />
                            91/100
                          </div>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">The Hook</p>
                        <h3 className="text-base font-bold text-slate-900 mb-6 leading-snug flex-1">
                          "Settle a debate for our baristas: Iced Coffee vs Cold Brew. Which team are you on this summer? 👇"
                        </h3>
                        <div className="flex items-center gap-2 mt-auto">
                          <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                            Create Post
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 py-2 rounded-lg text-sm font-medium transition-colors">
                            <Bookmark className="w-4 h-4" />
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area (Fixed Bottom) */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pt-10 pb-6 px-6 pointer-events-none">
            <div className="max-w-3xl mx-auto pointer-events-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <button type="button" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                  Generate more ideas
                </button>
                <button type="button" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors">
                  <Target className="w-3.5 h-3.5 text-blue-500" />
                  Change audience to Gen Z
                </button>
                <button type="button" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors">
                  <Smile className="w-3.5 h-3.5 text-pink-500" />
                  Make them funny
                </button>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="relative bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="flex items-center px-4 py-3">
                  <Plus className="w-5 h-5 text-slate-400 mr-3" />
                  <label htmlFor="ideaChatInput" className="sr-only">Ask SUNNY to generate posts, campaigns, or ideas...</label>
                  <input 
                    id="ideaChatInput"
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask SUNNY to generate posts, campaigns, or ideas..." 
                    className="flex-1 bg-transparent border-none focus:outline-none text-slate-700 placeholder:text-slate-400 text-[15px]"
                  />
                  <button type="submit" aria-label="Send message" disabled={!chatInput.trim()} className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors ml-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Saved Ideas */}
        {isSidebarOpen ? (
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 relative transition-all duration-300">
            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-900">Saved Ideas</h2>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              {/* Saved Idea 1 */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm group">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    LinkedIn
                  </div>
                  <button className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-slate-900 mb-3 leading-snug">
                  "3 mistakes cafe owners make when pricing their summer menu..."
                </p>
                <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-medium transition-colors">
                  Convert to Post
                </button>
              </div>

              {/* Saved Idea 2 */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm group">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    Reel
                  </div>
                  <button className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-slate-900 mb-3 leading-snug">
                  "POV: You found the best iced latte in the city ☕️✨"
                </p>
                <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-medium transition-colors">
                  Convert to Post
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-16 bg-white border-l border-slate-200 flex flex-col items-center py-4 flex-shrink-0 transition-all duration-300">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Expand Saved Ideas"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
