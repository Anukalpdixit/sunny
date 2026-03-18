import { UploadCloud, Sliders, ListChecks, Send, Bot, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

export default function BrandVoice({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [chatStage, setChatStage] = useState(0);
  const [tone1, setTone1] = useState(50);
  const [tone2, setTone2] = useState(50);
  const [tone3, setTone3] = useState(50);

  const handleAnalyze = () => {
    setIsAnalyzed(true);
    setTone1(70);
    setTone2(30);
    setTone3(40);
    setChatStage(1);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-[1024px] flex overflow-hidden h-[650px]">
        
        {/* Left Column - Controls */}
        <div className="w-1/2 p-4 lg:p-6 flex flex-col overflow-y-auto border-r border-slate-100">
          
          <div className="mb-4">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 mb-1">
              Teach SUNNY your brand voice
            </h1>
            <p className="text-xs text-slate-500">
              Help our AI understand how you speak to your audience so we can generate authentic content.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-[10px] font-medium text-slate-500 mb-1.5">Step 3 of 3</p>
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-yellow-400 rounded-full"></div>
              <div className="h-1 flex-1 bg-yellow-400 rounded-full"></div>
              <div className="h-1 flex-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Provide Examples Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <UploadCloud className="w-4 h-4 text-yellow-500" />
                <h2 className="text-sm font-bold text-slate-900">Provide Examples</h2>
              </div>
              <p className="text-[10px] text-slate-500 mb-3">
                Upload past successful posts or link your website so SUNNY can analyze your tone.
              </p>
              
              <div className="mb-3">
                <label className="block text-[10px] font-medium text-slate-700 mb-1">Website URL</label>
                <input 
                  type="text" 
                  placeholder="https://yourwebsite.com"
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                />
              </div>
              
              <div className="border border-dashed border-slate-300 rounded-lg p-3 flex flex-col items-center justify-center text-center mb-3 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mb-1.5">
                  <UploadCloud className="w-3 h-3 text-slate-500" />
                </div>
                <p className="text-xs font-medium text-slate-700">Click to upload files</p>
                <p className="text-[9px] text-slate-500">PDF, DOCX, or TXT (Max 5MB)</p>
              </div>
              
              <button 
                onClick={handleAnalyze}
                className="w-full py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                Analyze Examples
              </button>
            </div>

            {/* Adjust Tone Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Sliders className="w-4 h-4 text-yellow-500" />
                <h2 className="text-sm font-bold text-slate-900">Adjust Tone</h2>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] font-medium text-slate-700 mb-1.5">
                    <span>Professional</span>
                    <span>Casual</span>
                  </div>
                  {!isAnalyzed ? (
                    <div className="w-full h-1.5 bg-slate-100 rounded-lg"></div>
                  ) : (
                    <input type="range" min="0" max="100" value={tone1} onChange={(e) => setTone1(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                  )}
                </div>
                
                <div>
                  <div className="flex justify-between text-[10px] font-medium text-slate-700 mb-1.5">
                    <span>Serious</span>
                    <span>Witty / Humorous</span>
                  </div>
                  {!isAnalyzed ? (
                    <div className="w-full h-1.5 bg-slate-100 rounded-lg"></div>
                  ) : (
                    <input type="range" min="0" max="100" value={tone2} onChange={(e) => setTone2(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                  )}
                </div>
                
                <div>
                  <div className="flex justify-between text-[10px] font-medium text-slate-700 mb-1.5">
                    <span>Informational</span>
                    <span>Storytelling</span>
                  </div>
                  {!isAnalyzed ? (
                    <div className="w-full h-1.5 bg-slate-100 rounded-lg"></div>
                  ) : (
                    <input type="range" min="0" max="100" value={tone3} onChange={(e) => setTone3(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Do's & Don'ts Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <ListChecks className="w-4 h-4 text-yellow-500" />
                <h2 className="text-sm font-bold text-slate-900">Do's & Don'ts</h2>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-medium text-slate-700 mb-1">Words to use often</label>
                  <input 
                    type="text" 
                    placeholder="e.g., innovative, seamless, growth"
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-medium text-slate-700 mb-1">Words to AVOID</label>
                  <input 
                    type="text" 
                    placeholder="e.g., cheap, hack, trick"
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <button onClick={onNext} className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors">
              Skip
            </button>
            <button onClick={onBack} className="text-xs text-slate-400 hover:text-slate-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back
            </button>
          </div>

        </div>

        {/* Right Column - Chat & Finish */}
        <div className="w-1/2 bg-slate-50 flex flex-col relative" style={{ paddingRight: '-4px', paddingBottom: '2px' }}>
          
          {/* Chat Header */}
          <div className="p-3 border-b border-slate-200 bg-white flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">SUNNY AI Assistant</h3>
                <p className="text-[10px] text-slate-500">Online</p>
              </div>
            </div>
            <button 
              onClick={() => { setIsAnalyzed(false); setChatStage(0); }}
              className="px-3 py-1.5 border border-slate-200 rounded-full text-[11px] font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Reset Training
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            {chatStage === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                <Bot className="w-10 h-10 text-slate-300 mb-2" />
                <p className="text-xs text-slate-500" style={{ marginBottom: '-8px' }}>Upload examples and click Analyze<br/>to start training SUNNY.</p>
              </div>
            )}

            {chatStage >= 1 && (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 flex-shrink-0 mt-0.5">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3 max-w-[85%] shadow-sm">
                    <p className="text-xs text-slate-700 leading-relaxed" style={{ marginBottom: '-10px' }}>
                      Hi! I'm ready to learn your brand voice. I've analyzed your website and set the sliders to what I think matches. Want to generate a sample post to test it out?
                    </p>
                  </div>
                </div>
                
                {chatStage === 1 && (
                  <div className="flex gap-2 ml-7 mt-1">
                    <button 
                      onClick={() => setChatStage(3)}
                      className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[10px] font-medium hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      No, it's fine
                    </button>
                    <button 
                      onClick={() => setChatStage(2)}
                      className="px-2.5 py-1 bg-yellow-400 text-slate-900 rounded-lg text-[10px] font-medium hover:bg-yellow-500 transition-colors shadow-sm"
                    >
                      Yes, generate a post
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {chatStage >= 2 && chatStage !== 3 && (
              <>
                {/* User Message */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-slate-800 text-white rounded-2xl rounded-tr-none p-3 max-w-[85%] shadow-sm">
                    <p className="text-xs leading-relaxed">
                      Yes, generate a post.
                    </p>
                  </div>
                </div>
                
                {/* AI Message with Preview */}
                <div className="flex gap-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 flex-shrink-0 mt-0.5">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3 max-w-[95%] shadow-sm">
                    <p className="text-xs text-slate-700 mb-3">
                      Here's a sample based on your current settings:
                    </p>
                    
                    {/* Post Preview Card */}
                    <div className="border border-slate-200 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-900">Your Brand</h4>
                          <p className="text-[9px] text-slate-500">Just now</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-800 mb-2 leading-relaxed" style={{ marginBottom: '-12px' }}>
                        🚀 Big news! We just rolled out our newest feature to help you streamline your workflow. Say goodbye to manual tasks and hello to more free time. Check out the link in bio to see how it works! 👇 #Productivity #NewFeature #TechUpdate
                      </p>
                      <div className="w-full h-24 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                    
                    <p className="text-xs text-slate-700 mb-3">
                      How does this sound? We can make it more professional or more casual.
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      <button className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-[10px] font-medium flex items-center gap-1 hover:bg-emerald-100 transition-colors">
                        <ThumbsUp className="w-3 h-3" /> Looks good
                      </button>
                      <button className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[10px] font-medium hover:bg-slate-50 transition-colors">
                        More professional
                      </button>
                      <button className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-[10px] font-medium hover:bg-slate-50 transition-colors">
                        Too many emojis
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {chatStage === 3 && (
              <>
                {/* User Message */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-slate-800 text-white rounded-2xl rounded-tr-none p-3 max-w-[85%] shadow-sm">
                    <p className="text-xs leading-relaxed">
                      No, it's fine.
                    </p>
                  </div>
                </div>
                {/* AI Message */}
                <div className="flex gap-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 flex-shrink-0 mt-0.5">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3 max-w-[85%] shadow-sm">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Great! Your brand voice is all set. You can complete the setup now.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Chat Input */}
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type a prompt to test the voice..."
                disabled={chatStage === 0}
                className="w-full pl-3 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors disabled:opacity-50"
              />
              <button 
                disabled={chatStage === 0}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center text-slate-900 hover:bg-yellow-500 transition-colors disabled:opacity-50"
              >
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Finish Setup Button */}
          <div className="p-3 bg-white border-t border-slate-200">
            <button onClick={onNext} className="w-full py-2 bg-yellow-400 text-slate-900 rounded-xl text-xs font-bold hover:bg-yellow-500 transition-colors shadow-sm">
              Approve Voice & Finish Setup
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
