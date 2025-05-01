import React, { useEffect, useState, memo } from 'react';
import { CakeIcon, GiftIcon, HeartIcon } from 'lucide-react';
interface Balloon {
  id: number;
  x: number;
  color: string;
  size: number;
  speed: number;
}
export const CelebrationSection = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Generate random balloons
  useEffect(() => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-pink-500', 'bg-purple-500'];
    const newBalloons = Array.from({
      length: 15
    }).map((_, i) => ({
      id: i,
      x: Math.random() * windowWidth,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 20 + 30,
      speed: Math.random() * 2 + 1
    }));
    setBalloons(newBalloons);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
          Let's Celebrate!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/15">
            <div className="mb-4 flex justify-center">
              <CakeIcon className="w-12 h-12 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-200">
              Make a Wish
            </h3>
            <p className="text-gray-300">
              Your 24th year will be filled with success and happiness!
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/15">
            <div className="mb-4 flex justify-center">
              <GiftIcon className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-200">
              Gift of Time
            </h3>
            <p className="text-gray-300">
              Another year of amazing memories and wonderful experiences!
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/15">
            <div className="mb-4 flex justify-center">
              <HeartIcon className="w-12 h-12 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-200">
              Surrounded by Love
            </h3>
            <p className="text-gray-300">
              Celebrating you and all the joy you bring to everyone!
            </p>
          </div>
        </div>
        <div className="mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}>
            Back to Top
          </button>
        </div>
      </div>
      {/* Animated balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {balloons.map(balloon => <div key={balloon.id} className={`absolute rounded-full ${balloon.color} animate-float-balloons`} style={{
        left: `${balloon.x}px`,
        width: `${balloon.size}px`,
        height: `${balloon.size * 1.2}px`,
        animationDuration: `${20 / balloon.speed}s`,
        animationDelay: `${balloon.id * 0.5}s`
      }}>
            <div className="h-4 w-1 bg-white/50 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"></div>
          </div>)}
      </div>
    </section>;
};