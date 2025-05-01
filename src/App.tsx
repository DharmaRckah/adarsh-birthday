import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { QuotesSection } from './components/QuotesSection';
import { CelebrationSection } from './components/CelebrationSection';
import { Footer } from './components/Footer';
export function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Happy 24th Birthday Adarsh!';
  }, []);
  return <div className="w-full min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <QuotesSection />
      <CelebrationSection />
      <Footer />
    </div>;
}