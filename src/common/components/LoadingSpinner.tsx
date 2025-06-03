import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LoadingSpinner = ({ size = 'medium',color = '#1DB954'} :LoadingSpinnerProps) => {
  return (
    <div className={`loading-spinner ${size}`} style={{ borderTopColor: color }}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner; 