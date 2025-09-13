
import React from 'react';
import { Button } from '@/components/ui/button';

interface OctopusIconProps {
  onClick: () => void;
}

const OctopusIcon = ({ onClick }: OctopusIconProps) => {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <Button
        onClick={onClick}
        className="backdrop-blur-glass bg-pastel-blue-medium/20 border-pastel-blue-light/30 
                   hover:bg-pastel-blue-medium/30 hover:border-pastel-blue-light/50
                   text-pastel-blue-light hover:text-pastel-white
                   w-12 h-12 rounded-xl p-0 shadow-lg hover:shadow-xl
                   transition-all duration-300 hover:scale-110
                   transform-gpu will-change-transform"
        variant="ghost"
        title="Sobre a OtavIA"
      >
        {/* Ícone de polvo com óculos simplificado */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-pastel-blue-light"
        >
          {/* Cabeça do polvo */}
          <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          
          {/* Óculos */}
          <circle cx="9.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="14.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="11" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1" />
          
          {/* Tentáculos */}
          <path d="M8 13 Q6 15 7 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M10 14 Q8 16 9 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M14 14 Q16 16 15 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M16 13 Q18 15 17 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* Olhos atrás dos óculos */}
          <circle cx="9.5" cy="7" r="0.5" fill="currentColor" />
          <circle cx="14.5" cy="7" r="0.5" fill="currentColor" />
        </svg>
      </Button>
    </div>
  );
};

export default OctopusIcon;
