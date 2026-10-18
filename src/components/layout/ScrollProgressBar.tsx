import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgressBar: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
