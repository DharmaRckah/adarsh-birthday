import React from 'react';
import { HeartIcon } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <HeartIcon className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
          <p className="text-sm text-gray-300">
            Made with love for Adarsh Singh's 24th Birthday
          </p>
          <HeartIcon className="w-5 h-5 text-red-400 ml-2 animate-pulse" />
        </div>
        <p className="text-xs text-gray-400">
          © {currentYear} | TEAM DHARMA ORG.
        </p>
      </div>
    </footer>;
};