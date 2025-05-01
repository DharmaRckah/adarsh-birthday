import React, { useEffect, useState } from 'react';
import { QuoteIcon } from 'lucide-react';
const quotes = [{
  text: "In the end, it's not the years in your life that count. It's the life in your years.",
  author: 'Abraham Lincoln'
}, {
  text: 'Today you are you, that is truer than true. There is no one alive who is youer than you.',
  author: 'Dr. Seuss'
}, {
  text: 'The more you praise and celebrate your life, the more there is in life to celebrate.',
  author: 'Oprah Winfrey'
}, {
  text: 'Age is merely the number of years the world has been enjoying you.',
  author: 'Anonymous'
}, {
  text: "You don't get older, you get better.",
  author: 'Shirley Bassey'
}];
export const QuotesSection = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
          Birthday Wisdom
        </h2>
        <div className="relative h-64 flex items-center justify-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-yellow-300 opacity-50">
            <QuoteIcon size={60} />
          </div>
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            <p className="text-xl md:text-2xl mb-4 italic text-white">
              "{quotes[activeQuoteIndex].text}"
            </p>
            <p className="text-lg text-yellow-300">
              — {quotes[activeQuoteIndex].author}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {quotes.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all ${activeQuoteIndex === index ? 'bg-yellow-300 w-6' : 'bg-white/30'}`} onClick={() => {
          setIsAnimating(true);
          setTimeout(() => {
            setActiveQuoteIndex(index);
            setIsAnimating(false);
          }, 500);
        }} aria-label={`Quote ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};