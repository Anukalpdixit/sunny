/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BusinessSetup from './components/BusinessSetup';
import ConnectAccounts from './components/ConnectAccounts';
import BrandVoice from './components/BrandVoice';
import ContentCalendar from './components/ContentCalendar';
import IdeasInspiration from './components/IdeasInspiration';
import Campaigns from './components/Campaigns';
import GeneratePost from './components/GeneratePost';
import Dashboard from './components/Dashboard';

export default function App() {
  const [step, setStep] = useState<'welcome' | 'signin' | 'signup' | 'business' | 'connect' | 'brand' | 'dashboard' | 'calendar' | 'ideas' | 'campaigns' | 'post'>('calendar');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {step === 'signup' && <SignUp onNext={() => setStep('welcome')} onSignIn={() => setStep('signin')} />}
      {step === 'signin' && <SignIn onNext={() => setStep('calendar')} onSignUp={() => setStep('signup')} />}
      {step === 'welcome' && <Welcome onNext={() => setStep('business')} onSkip={() => setStep('calendar')} />}
      
      {step === 'business' && (
        <BusinessSetup onNext={() => setStep('connect')} onBack={() => setStep('welcome')} />
      )}

      {step === 'connect' && (
        <ConnectAccounts onNext={() => setStep('brand')} onBack={() => setStep('business')} />
      )}

      {step === 'brand' && (
        <BrandVoice onNext={() => setStep('calendar')} onBack={() => setStep('connect')} />
      )}

      {step === 'dashboard' && (
        <Dashboard onNavigate={setStep} />
      )}

      {step === 'calendar' && (
        <ContentCalendar onNavigate={setStep} />
      )}

      {step === 'ideas' && (
        <IdeasInspiration onNavigate={setStep} />
      )}

      {step === 'campaigns' && (
        <Campaigns onNavigate={setStep} />
      )}

      {step === 'post' && (
        <GeneratePost onNavigate={setStep} />
      )}
    </div>
  );
}
