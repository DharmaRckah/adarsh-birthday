import React, { memo } from 'react';
import { MilestoneCard } from './MilestoneCard';
import { UserIcon, BrainIcon, HeartIcon, StarIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
          24 Years of Amazing You!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MilestoneCard icon={<UserIcon className="w-10 h-10 text-blue-400" />} title="24 Years Young" description="A quarter century of bringing joy and light to everyone around you!" delay={0} />
          <MilestoneCard icon={<BrainIcon className="w-10 h-10 text-green-400" />} title="Wisdom & Growth" description="Each year brings new wisdom, experiences and beautiful memories." delay={1} />
          <MilestoneCard icon={<HeartIcon className="w-10 h-10 text-pink-400" />} title="Loved By Many" description="Your kindness and spirit have touched countless hearts along the way." delay={2} />
          <MilestoneCard icon={<StarIcon className="w-10 h-10 text-yellow-400" />} title="Bright Future" description="The best is yet to come as you continue to shine brighter each year!" delay={3} />
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl italic text-yellow-200 max-w-3xl mx-auto">
            "At 24, you've already accomplished so much, but this is just the
            beginning of your amazing journey!"
          </p>
        </div>
      </div>
    </section>;
};