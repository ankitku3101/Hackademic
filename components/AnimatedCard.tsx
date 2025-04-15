'use client';

import React from 'react';
import clsx from 'clsx';

interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  circleColor?: string; 
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  icon,
  title,
  description,
  circleColor = 'bg-blue-400',
}) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center bg-transparent w-full max-w-md mx-auto">
      
      <span
        className={clsx(
          'absolute top-10 left-1/2 -translate-x-1/2 z-0 h-20 w-20 rounded-full transition-all duration-500 ease-in-out group-hover:scale-[10]',
          circleColor
        )}
      />

      <span
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <div className="relative z-20 flex flex-col items-center transition-all duration-500">
        <span
          className={clsx(
            'grid h-20 w-20 place-items-center rounded-full transition-all duration-500 ease-in-out',
            circleColor
          )}
        >
          {icon}
        </span>
        <h3 className="text-white text-lg mt-4 transition-colors duration-500 group-hover:text-white/90">
          {title}
        </h3>
        <p className="my-4 mb-0 font-normal text-gray-300 transition-colors duration-500 group-hover:text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedCard;
