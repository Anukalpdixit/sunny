import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider, linkedinProvider } from '../firebase';

export default function SignIn({ onNext, onSignUp }: { onNext: () => void, onSignUp: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onNext();
    } catch (err: any) {
      console.error("Error signing in with email", err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onNext();
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleLinkedInSignIn = async () => {
    try {
      await signInWithPopup(auth, linkedinProvider);
      onNext();
    } catch (error) {
      console.error("Error signing in with LinkedIn", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl flex overflow-hidden min-h-[600px]">
        
        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
              SUNNY <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Sign in</h2>
          <p className="text-slate-500 mb-8 text-sm">Welcome back! Let's manage your social media strategy.</p>
          
          <div className="flex gap-3 mb-6">
            <button 
              onClick={handleGoogleSignIn}
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button 
              onClick={handleLinkedInSignIn}
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs text-slate-400 uppercase tracking-wider">or</span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          
          <form className="space-y-4" onSubmit={handleEmailSignIn}>
            {error && (
              <div id="signin-error" className="p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100" role="alert">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="michael.williams@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={!!error}
                aria-describedby={error ? "signin-error" : undefined}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-colors"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-xs font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs text-yellow-500 hover:text-yellow-600 font-medium">Forgot password?</a>
              </div>
              <div className="relative">
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-invalid={!!error}
                  aria-describedby={error ? "signin-error" : undefined}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-colors"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium py-2.5 rounded-lg transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          
          <div className="flex items-center justify-center mt-6">
            <p className="text-center text-sm text-slate-500">
              First time with us? <button onClick={onSignUp} className="text-yellow-500 hover:text-yellow-600 font-medium">Create an account</button>
            </p>
          </div>
        </div>

        
        {/* Right Column - Visuals */}
        <div className="hidden lg:block w-1/2 bg-slate-50 p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-slate-50/50"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="pl-[18px] mr-2 mb-[39px] pb-[21px] pt-[40px] pr-[23px]">
              <div className="flex gap-1 -mr-[7px] pr-[3px] mb-[6px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl font-medium text-slate-800 leading-relaxed mb-6">
                "SUNNY transformed our social media strategy. We now generate engaging content in minutes instead of hours."
              </p>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=47" alt="Rachel Green" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Rachel Green</p>
                  <p className="text-xs text-slate-500">Marketing Director</p>
                </div>
              </div>
            </div>
            
            <div className="mt-auto relative">
              {/* Main floating card */}
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 mb-4 relative z-20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">AI Social Media Manager</h3>
                    <p className="text-xs text-slate-500">Active and optimizing</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#0A66C2] flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-900">LinkedIn Post Scheduled</p>
                        <p className="text-[10px] text-slate-500">Tomorrow at 9:30 AM</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-900">Instagram Reel Generated</p>
                        <p className="text-[10px] text-slate-500">Ready for review</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1DA1F2] flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-900">Tweet Thread Created</p>
                        <p className="text-[10px] text-slate-500">5 tweets optimized</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-900">This Week's Performance</p>
                    <p className="text-[10px] text-slate-500">12 posts • 24.5K reach</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-500 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    +34%
                  </div>
                </div>
              </div>
              
              {/* Two smaller cards */}
              <div className="flex gap-4 relative z-10">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex-1">
                  <div className="w-6 h-6 rounded bg-yellow-50 text-yellow-500 flex items-center justify-center mb-2">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">30-Day Campaigns</p>
                  <p className="text-[10px] text-slate-500">Auto-generated content calendar</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex-1">
                  <div className="w-6 h-6 rounded bg-yellow-50 text-yellow-500 flex items-center justify-center mb-2">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">Analytics</p>
                  <p className="text-[10px] text-slate-500">Real-time performance tracking</p>
                </div>
              </div>
              
              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
