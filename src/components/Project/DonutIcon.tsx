import React from 'react';

const DonutIcon = () => {
  return (
    <div className="donut-hover">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" fill="#FFA9A6" />
        <circle cx="16" cy="16" r="6" fill="#FFFFFF" />
        <circle cx="19" cy="12" r="1.5" fill="#FF7BAC" />
        <circle cx="13" cy="16" r="1" fill="#FF7BAC" />
        <circle cx="17" cy="19" r="1.25" fill="#FF7BAC" />
      </svg>
    </div>
  );
};

export default DonutIcon;