import { Briefcase, Target, Users, MapPin, Search, Check, Link, Trash2, Plus, Swords } from 'lucide-react';
import { useState } from 'react';

export default function BusinessSetup({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['Increase Brand Awareness', 'Website Traffic']);
  const [selectedAudience, setSelectedAudience] = useState<string>('Professionals');
  const [competitors, setCompetitors] = useState<string[]>(['']);

  const handleNext = () => {
    if (!businessName.trim() || !industry || !shortDescription.trim()) {
      setShowErrors(true);
      return;
    }
    onNext();
  };

  const updateCompetitor = (index: number, value: string) => {
    const newCompetitors = [...competitors];
    newCompetitors[index] = value;
    setCompetitors(newCompetitors);
  };

  const addCompetitor = () => {
    setCompetitors([...competitors, '']);
  };

  const removeCompetitor = (index: number) => {
    setCompetitors(competitors.filter((_, i) => i !== index));
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const goals = [
    { id: 'Increase Brand Awareness', icon: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
    { id: 'Generate Leads', icon: <Users className="w-3 h-3" /> },
    { id: 'Drive Sales', icon: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { id: 'Boost Engagement', icon: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
    { id: 'Website Traffic', icon: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
    { id: 'Customer Loyalty', icon: <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 py-8 font-sans">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-[922px] flex overflow-hidden my-auto">
        
        {/* Main Content - Form */}
        <div className="w-full p-6 lg:p-10 flex flex-col">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
              Tell us about your business
            </h1>
            <p className="text-sm text-slate-500">
              This helps SUNNY's AI understand your brand and generate highly relevant content.
            </p>
          </div>
          
          <div className="mb-6">
            <p className="text-xs font-medium text-slate-500 mb-2">Step 1 of 3</p>
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-yellow-400 rounded-full"></div>
              <div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
              <div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Business Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className={`w-full px-3 py-2 bg-white border ${showErrors && !businessName.trim() ? 'border-red-500' : 'border-slate-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors`}
                />
                {showErrors && !businessName.trim() && <p className="text-red-500 text-[10px] mt-1">Business Name is required</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Industry <span className="text-red-500">*</span></label>
                <select 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className={`w-full px-3 py-2 bg-white border ${showErrors && !industry ? 'border-red-500' : 'border-slate-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors appearance-none`}
                >
                  <option value="">Select an industry</option>
                  <option value="tech">Technology</option>
                  <option value="retail">Retail</option>
                  <option value="services">Professional Services</option>
                </select>
                {showErrors && !industry && <p className="text-red-500 text-[10px] mt-1">Industry is required</p>}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-1">
                <label className="block text-xs font-medium text-slate-700">Short Description <span className="text-red-500">*</span></label>
                <span className={`text-[10px] ${shortDescription.length > 200 ? 'text-red-500 font-medium' : 'text-slate-500 font-medium'}`}>
                  {shortDescription.length}/200 characters
                </span>
              </div>
              <textarea 
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Briefly describe what your business does..."
                rows={2}
                className={`w-full px-3 py-2 bg-white border ${showErrors && !shortDescription.trim() ? 'border-red-500' : 'border-slate-200'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none`}
              ></textarea>
              {showErrors && !shortDescription.trim() && <p className="text-red-500 text-[10px] mt-1">Short Description is required</p>}
            </div>
          </div>
          
          {/* Primary Goals */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-yellow-500" />
              <h2 className="text-base font-bold text-slate-900">Primary Goals</h2>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">Select up to 3 main objectives for your social media.</p>
            
            <div className="flex flex-wrap gap-2">
              {goals.map((goal) => {
                const isSelected = selectedGoals.includes(goal.id);
                return (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                      isSelected 
                        ? 'bg-yellow-400 text-slate-900 border-yellow-400' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-yellow-300 hover:bg-yellow-50'
                    }`}
                  >
                    {goal.icon}
                    {goal.id}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Target Audience */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-yellow-500" />
              <h2 className="text-base font-bold text-slate-900">Target Audience</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div 
                onClick={() => setSelectedAudience('Professionals')}
                className={`p-3 rounded-xl border cursor-pointer transition-colors relative ${
                  selectedAudience === 'Professionals' 
                    ? 'border-yellow-400 bg-yellow-50/30' 
                    : 'border-slate-200 hover:border-yellow-300'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${selectedAudience === 'Professionals' ? 'bg-yellow-100 text-yellow-600' : 'bg-slate-100 text-slate-500'}`}>
                    <Users className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className={`text-xs font-semibold ${selectedAudience === 'Professionals' ? 'text-yellow-900' : 'text-slate-900'}`}>Professionals</h3>
                    <p className="text-[10px] text-slate-500 mt-0.5">Ages 25-45, B2B focus</p>
                  </div>
                </div>
                {selectedAudience === 'Professionals' && (
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 bg-yellow-500 rounded flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>
              
              <div 
                onClick={() => setSelectedAudience('Students')}
                className={`p-3 rounded-xl border cursor-pointer transition-colors relative ${
                  selectedAudience === 'Students' 
                    ? 'border-yellow-400 bg-yellow-50/30' 
                    : 'border-slate-200 hover:border-yellow-300'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${selectedAudience === 'Students' ? 'bg-yellow-100 text-yellow-600' : 'bg-slate-100 text-slate-500'}`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" /></svg>
                  </div>
                  <div>
                    <h3 className={`text-xs font-semibold ${selectedAudience === 'Students' ? 'text-yellow-900' : 'text-slate-900'}`}>Students / Gen Z</h3>
                    <p className="text-[10px] text-slate-500 mt-0.5">Ages 16-24, Trend-focused</p>
                  </div>
                </div>
                {selectedAudience === 'Students' && (
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 bg-yellow-500 rounded flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-[11px] font-medium text-slate-700 mb-1">Locations</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. United States, London, Global"
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                />
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-100 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <Swords className="w-5 h-5 text-indigo-600" />
                <h2 className="text-base font-bold text-slate-900">Competitors</h2>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md font-medium">Optional</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-4">Add competitor URLs so SUNNY can analyze their strategies.</p>
              
              <div className="space-y-3">
                {competitors.map((comp, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Link className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <input 
                        type="text" 
                        value={comp}
                        onChange={(e) => updateCompetitor(index, e.target.value)}
                        placeholder={`https://competitor${index + 1}.com`}
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                      />
                    </div>
                    {index === competitors.length - 1 ? (
                      <button 
                        onClick={addCompetitor}
                        className="w-9 h-9 flex items-center justify-center border border-dashed border-slate-300 rounded-lg text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-colors flex-shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    ) : (
                      <button 
                        onClick={() => removeCompetitor(index)}
                        className="w-9 h-9 flex items-center justify-center text-red-400 hover:text-red-500 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
            <button onClick={handleNext} className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors">
              Skip
            </button>
            <div className="flex items-center gap-4">
              <button onClick={onBack} className="text-xs text-slate-400 hover:text-slate-600 font-medium flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back
              </button>
              <button onClick={handleNext} className="text-yellow-500 hover:text-yellow-600 text-xs font-bold transition-colors flex items-center gap-1">
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

