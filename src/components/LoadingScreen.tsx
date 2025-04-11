import { useState, useEffect } from "react";

interface LoadingScreenProps {
  minDuration?: number; // Minimum duration in milliseconds
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  minDuration = 5000, // Default to 5 seconds
  children 
}) => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  
  useEffect(() => {
    // Track when content is loaded
    const contentLoadedTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 100); // Small buffer to allow for component mounting
    
    // Enforce minimum loading time
    const minLoadingTimer = setTimeout(() => {
      if (contentLoaded) {
        setLoading(false);
      } else {
        // If content isn't loaded yet, wait until it is
        const checkInterval = setInterval(() => {
          if (contentLoaded) {
            setLoading(false);
            clearInterval(checkInterval);
          }
        }, 100);
        
        // Cleanup interval if component unmounts
        return () => clearInterval(checkInterval);
      }
    }, minDuration);
    
    // Cleanup timers
    return () => {
      clearTimeout(contentLoadedTimer);
      clearTimeout(minLoadingTimer);
    };
  }, [minDuration, contentLoaded]);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop
          >
            <source src="/loading1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingScreen;