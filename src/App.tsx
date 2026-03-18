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

export default function App() {
  const [step, setStep] = useState<'welcome' | 'signin' | 'signup' | 'business' | 'connect' | 'brand'>('signup');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {step === 'signup' && <SignUp onNext={() => setStep('welcome')} onSignIn={() => setStep('signin')} />}
      {step === 'signin' && <SignIn onNext={() => setStep('welcome')} onSignUp={() => setStep('signup')} />}
      {step === 'welcome' && <Welcome onNext={() => setStep('business')} />}
      
      {step === 'business' && (
        <BusinessSetup onNext={() => setStep('connect')} onBack={() => setStep('welcome')} />
      )}

      {step === 'connect' && (
        <ConnectAccounts onNext={() => setStep('brand')} onBack={() => setStep('business')} />
      )}

      {step === 'brand' && (
        <BrandVoice onNext={() => console.log('Finish Onboarding')} onBack={() => setStep('connect')} />
      )}
    </div>
  );
}
