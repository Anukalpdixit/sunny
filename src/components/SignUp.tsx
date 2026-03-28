import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle } from 'lucide-react';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, googleProvider, linkedinProvider } from '../firebase';

export default function SignUp({ onNext, onSignIn }: { onNext: () => void, onSignIn: () => void }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isLengthValid = password.length >= 8;
  const isUpperValid = /[A-Z]/.test(password);
  const isSpecialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordValid = isLengthValid && isUpperValid && isSpecialValid;
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);
    
    if (!isPasswordValid) {
      setError('Please ensure your password meets all requirements.');
      return;
    }

    if (!passwordsMatch) {
      setError('Passwords do not match.');
      return;
    }
    
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: fullName });
      onNext();
    } catch (err: any) {
      console.error("Error signing up with email", err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please sign in  or use a different email instead.');
      } else {
        setError(err.message || 'Failed to create account');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onNext();
    } catch (error) {
      console.error("Error signing up with Google", error);
    }
  };

  const handleLinkedInSignUp = async () => {
    try {
      await signInWithPopup(auth, linkedinProvider);
      onNext();
    } catch (error) {
      console.error("Error signing up with LinkedIn", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="onboarding-card">
        
        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
              SUNNY <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Create an account</h2>
          <p className="text-slate-500 mb-8 text-sm">Join SUNNY and supercharge your social media strategy.</p>
          
          <div className="flex gap-3 mb-6">
            <button 
              onClick={handleGoogleSignUp}
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
              onClick={handleLinkedInSignUp}
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
          
          <form className="space-y-4" onSubmit={handleEmailSignUp}>
            {error && (
              <div id="signup-error" className="p-3.5 bg-red-50/80 text-red-700 text-sm font-medium rounded-xl border border-red-200 flex items-center gap-3 shadow-sm" role="alert">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            <div>
              <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <input 
                  id="fullName"
                  type="text" 
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  aria-invalid={!!error}
                  aria-describedby={error ? "signup-error" : undefined}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">Email</label>
              <div className="relative">
                <input 
                  id="email"
                  type="email" 
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={!!error}
                  aria-describedby={error ? "signup-error" : undefined}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="password" className="block text-xs font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <input 
                    id="password"
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                    required
                    aria-invalid={passwordTouched && !isPasswordValid}
                    aria-describedby="password-requirements"
                    className={`w-full pl-4 pr-10 py-2.5 bg-slate-50 border ${passwordTouched && !isPasswordValid ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-yellow-400'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors`}
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
                <div id="password-requirements" className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <p className={`text-[10px] flex items-center gap-1.5 ${(passwordTouched || password) ? (isLengthValid ? 'text-emerald-600' : 'text-red-500') : 'text-slate-500'}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span> At least 8 characters
                  </p>
                  <p className={`text-[10px] flex items-center gap-1.5 ${(passwordTouched || password) ? (isUpperValid ? 'text-emerald-600' : 'text-red-500') : 'text-slate-500'}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span> 1 uppercase letter
                  </p>
                  <p className={`text-[10px] flex items-center gap-1.5 ${(passwordTouched || password) ? (isSpecialValid ? 'text-emerald-600' : 'text-red-500') : 'text-slate-500'}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span> 1 special character
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-medium text-slate-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input 
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={() => setConfirmPasswordTouched(true)}
                    required
                    aria-invalid={confirmPasswordTouched && !passwordsMatch}
                    aria-describedby={(confirmPasswordTouched || confirmPassword) && !passwordsMatch ? "confirm-password-error" : undefined}
                    className={`w-full pl-4 pr-10 py-2.5 bg-slate-50 border ${confirmPasswordTouched && !passwordsMatch ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-yellow-400'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors`}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {(confirmPasswordTouched || confirmPassword) && !passwordsMatch && (
                  <p id="confirm-password-error" className="text-[10px] text-red-500 mt-1.5 leading-tight flex items-center gap-1.5" role="alert">
                    <span className="w-1 h-1 rounded-full bg-current"></span> Passwords do not match
                  </p>
                )}
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={loading || !fullName || !email || !password || !confirmPassword}
              aria-busy={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium py-2.5 rounded-lg transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-400"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <div className="flex items-center justify-center mt-6">
            <p className="text-center text-sm text-slate-500">
              Already have an account? <button onClick={onSignIn} className="text-yellow-500 hover:text-yellow-600 font-medium">Sign in</button>
            </p>
          </div>
        </div>
        
        {/* Right Column - Visuals */}
        <div className="hidden lg:block w-1/2 bg-slate-50 p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-slate-50/50"></div>
          
          <div className="relative h-full flex flex-col justify-center gap-8 z-10">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white mr-4">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 font-medium text-base leading-snug mb-4">
                "Setting up my brand with SUNNY took less than 5 minutes. The AI immediately understood my tone and started generating content that actually sounds like me."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://picsum.photos/seed/sarah/100/100" alt="Sarah J." className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">Founder, Bloom Boutique</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 pl-4 ml-0 w-[420px] rounded-2xl shadow-sm border border-white">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 font-medium text-base leading-snug mb-4">
                "I used to spend 10 hours a week on social media. Now I spend maybe 30 minutes approving what SUNNY creates. It's an absolute game changer."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://picsum.photos/seed/marcus/100/100" alt="Marcus T." className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Marcus Thorne</p>
                  <p className="text-xs text-slate-500">Marketing Director, TechNova</p>
                </div>
              </div>
            </div>
            
            <div className="mt-2 relative">
              {/* Abstract UI Mockup */}
              <div className="bg-white rounded-t-2xl shadow-lg border border-slate-200 p-4 pb-0 mb-[2px] h-64 overflow-hidden relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="h-4 w-24 bg-slate-100 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
                      <div className="h-2 w-1/4 bg-slate-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-24 w-full bg-slate-50 rounded-xl border border-slate-100 mt-2 p-3">
                    <div className="h-2 w-3/4 bg-slate-200 rounded-full mb-2"></div>
                    <div className="h-2 w-1/2 bg-slate-200 rounded-full mb-4"></div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-yellow-100 rounded-md"></div>
                      <div className="h-6 w-16 bg-slate-100 rounded-md"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-6 top-12 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Account Created</p>
                  <p className="text-[10px] text-slate-500">Ready to go</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>
    </div>
  );
}
