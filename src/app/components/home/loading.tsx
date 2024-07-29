'use client';
import React, { useState, useEffect } from 'react';

interface LoadingProps {
  setProgress: (progress: number) => void;
}

const Loading: React.FC<LoadingProps> = ({ setProgress }) => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1);
      setProgress((prev) => Math.min(prev + 33, 100)); // Simula el progreso
    }, 500);
    
    return () => clearInterval(interval);
  }, [setProgress]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
      <div className="flex space-x-2">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-4 h-4 rounded-full bg-black animate-bounce ${
              dot <= dots ? 'opacity-100' : 'opacity-30'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
