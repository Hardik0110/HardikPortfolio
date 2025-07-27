import React, { useEffect, useState, ReactNode } from "react";

interface LoadingScreenProps {
  minDuration: number;
  children: ReactNode;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ minDuration, children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!showContent) {
    return (
      <div className="fixed inset-0 bg-[#2D4059] flex flex-col items-center justify-center z-50">
        {/* Bouncing Letters */}
        <div className="flex space-x-2 mb-8">
          {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => (
            <span
              key={index}
              className="text-4xl font-bold text-yellow-600"
              style={{
                animation: "bounce 0.5s ease infinite",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        {/* Progress Bar Container */}
        <div className="w-64 h-6 bg-white rounded-full p-1 border-4 border-yellow-400 relative overflow-hidden">
          <div className="progress-bar h-full bg-yellow-400 rounded-full"></div>
          {/* Moving Emoji */}
          <div className="running-emoji absolute top-1/2 -translate-y-1/2">🏃</div>
        </div>
        
        {/* Desktop View Message - Only visible on mobile */}
        <div className="mt-8 px-4 text-center md:hidden">
          <p className="text-white text-lg font-semibold mb-2">
            💻 For the best experience
          </p>
          <p className="text-yellow-400 text-base font-medium">
            This website is <span className="underline font-bold">optimized for desktop view</span>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 text-6xl animate-bounce delay-100">🌟</div>
        <div className="absolute bottom-20 right-20 text-6xl animate-bounce delay-300">✨</div>
        <div className="absolute top-20 right-20 text-6xl animate-bounce delay-500">⭐</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-bounce delay-700">💫</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingScreen;