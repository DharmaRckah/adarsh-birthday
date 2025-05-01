import React, { useEffect, useState } from 'react';
import { CakeIcon, GiftIcon, PartyPopperIcon } from 'lucide-react';
import Confetti from 'react-confetti';
export const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    // Stop confetti after 10 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
  return <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={true} numberOfPieces={200} />}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute animate-float-slow top-[10%] left-[10%] text-pink-500 opacity-30">
          <PartyPopperIcon size={50} />
        </div>
        <div className="absolute animate-float-medium top-[15%] right-[15%] text-yellow-500 opacity-30">
          <GiftIcon size={40} />
        </div>
        <div className="absolute animate-float top-[70%] left-[20%] text-green-500 opacity-30">
          <CakeIcon size={60} />
        </div>
        <div className="absolute animate-float-slow top-[60%] right-[10%] text-blue-500 opacity-30">
          <PartyPopperIcon size={50} />
        </div>
      </div>
      <div className="z-10 text-center max-w-3xl mx-auto">
        <h1 className="animate-bounce-in text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-teal-400">
          Happy Birthday!
        </h1>
        <div className="animate-fade-in-delay-1 mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300">
            Adarsh Singh
          </h2>
          <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl">
            <span className="animate-pulse text-pink-400">2</span>
            <span className="animate-pulse delay-100 text-yellow-400">4</span>
            <span className="animate-pulse delay-200 text-green-400">t</span>
            <span className="animate-pulse delay-300 text-blue-400">h</span>
            <span className="animate-pulse delay-400 text-purple-400">!</span>
          </div>
        </div>
        <div className="animate-fade-in-delay-2 mt-8">
          <button onClick={() => {
          document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Celebrate Now!
          </button>
        </div>
      </div>
    </section>;
};