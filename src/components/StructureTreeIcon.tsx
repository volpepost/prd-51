
import React from 'react';
import { TreePalm } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const StructureTreeIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/estrutura');
  };

  return (
    <div className="fixed bottom-4 right-20 z-40">
      <Button
        onClick={handleClick}
        className="backdrop-blur-glass bg-green-500/20 border-green-400/30 
                   hover:bg-green-500/30 hover:border-green-400/50
                   w-12 h-12 rounded-xl p-0 shadow-lg hover:shadow-xl
                   transition-all duration-300 hover:scale-110
                   transform-gpu will-change-transform"
        variant="ghost"
        title="Ver estrutura do site"
      >
        <TreePalm className="w-6 h-6 text-green-300" />
      </Button>
    </div>
  );
};

export default StructureTreeIcon;
