import React from 'react';

interface AlertProps {
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ children, className = '' }) => {
  return (
    <div className={`alert alert-warning ${className}`} role="alert">
      {children}
    </div>
  );
};
