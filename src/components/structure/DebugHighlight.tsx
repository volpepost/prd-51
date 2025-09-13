
import React from 'react';

interface DebugHighlightProps {
  isVisible: boolean;
  bounds: { x: number; y: number; width: number; height: number };
}

const DebugHighlight = ({ isVisible, bounds }: DebugHighlightProps) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-40"
      style={{
        left: `${bounds.x}px`,
        top: `${bounds.y}px`,
        width: `${bounds.width}px`,
        height: `${bounds.height}px`,
        border: '2px solid #10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        boxShadow: '0 0 0 1px rgba(16, 185, 129, 0.3), inset 0 0 0 1px rgba(16, 185, 129, 0.2)'
      }}
    >
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-500 rounded-full border border-green-600"></div>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-green-600"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 rounded-full border border-green-600"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-green-600"></div>
    </div>
  );
};

export default DebugHighlight;
