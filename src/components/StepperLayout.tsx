import React from 'react';

interface StepperLayoutProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  onBack: () => void;
  onSkip: () => void;
  onContinue: () => void;
  children: React.ReactNode;
}

export default function StepperLayout({
  currentStep,
  totalSteps,
  stepTitle,
  onBack,
  onSkip,
  onContinue,
  children
}: StepperLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 w-1/4">
            <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center text-slate-900">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <span className="font-bold text-slate-900 tracking-tight">SUNNY</span>
          </div>
          
          {/* Stepper */}
          <nav aria-label="Progress" className="flex-1 flex items-center justify-center">
            <ol className="flex items-center gap-3">
              {[1, 2, 3].map((step) => {
                const isCompleted = step < currentStep;
                const isCurrent = step === currentStep;
                
                return (
                  <React.Fragment key={step}>
                    <li aria-current={isCurrent ? 'step' : undefined} className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                      isCompleted ? 'bg-emerald-500 text-white' :
                      isCurrent ? 'bg-yellow-400 text-slate-900' :
                      'bg-slate-100 text-slate-400'
                    }`}>
                      {isCompleted ? (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <span className={isCompleted ? "sr-only" : ""}>{isCompleted ? "Completed" : step}</span>
                      )}
                    </li>
                    
                    {step < 3 && (
                      <li aria-hidden="true" className={`w-8 h-0.5 ${isCompleted ? 'bg-emerald-500' : 'bg-slate-200'}`}></li>
                    )}
                  </React.Fragment>
                );
              })}
              <li className="ml-4 text-sm font-medium text-slate-500" aria-live="polite">
                Step {currentStep}/{totalSteps}: {stepTitle}
              </li>
            </ol>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center justify-end gap-4 w-1/4">
            <button onClick={onBack} className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
              Back
            </button>
            <button onClick={onSkip} className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
              Skip
            </button>
            <button onClick={onContinue} className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-sm font-medium rounded-full transition-colors">
              Continue
            </button>
          </div>
          
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© 2024 SUNNY AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Help Center</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
