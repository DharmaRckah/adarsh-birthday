import React, { useEffect, useRef } from 'react';
interface MilestoneCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}
export const MilestoneCard = ({
  icon,
  title,
  description,
  delay
}: MilestoneCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay * 200);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  return <div ref={cardRef} className="opacity-0 translate-y-10 transition-all duration-700 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/15 transform hover:-translate-y-2 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-yellow-200">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>;
};