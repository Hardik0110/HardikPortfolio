import React from 'react';

const CloudBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="cloud absolute top-10 left-10 w-40 h-20 bg-white rounded-full opacity-70"></div>
      <div className="cloud absolute top-20 left-60 w-60 h-24 bg-white rounded-full opacity-80"></div>
      <div className="cloud absolute top-5 right-40 w-40 h-16 bg-white rounded-full opacity-70"></div>
    </div>
  );
};

export default CloudBackground;