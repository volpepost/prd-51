
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings } from 'lucide-react';

interface ProcessosCardProps {
  onClick: (serviceName: string, serviceDescription: string) => void;
}

const ProcessosCard = ({ onClick }: ProcessosCardProps) => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('showProcessos'));
  };

  return (
    <div className="relative group">
      <Card
        className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        {/* Etiqueta L com estilo mais rosa */}
        <div className="absolute -top-1 left-2 z-10">
          <Badge 
            variant="secondary" 
            className="backdrop-blur-glass bg-gradient-to-tl from-pastel-blue-dark/80 to-pastel-blue-medium/80 text-white font-bold text-xs w-7 h-6 rounded-md flex items-center justify-center shadow-lg transform skew-x-12"
          >
            L
          </Badge>
        </div>

        <div className="text-center space-y-3">
          <Settings className="w-8 h-8 text-pastel-blue-dark mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-pastel-blue-dark text-sm">PROCESSOS</h3>
          <p className="text-pastel-blue-medium text-xs">Fluxos de proteção</p>
        </div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pastel-blue-dark/10 to-pastel-blue-medium/10"></div>
      </Card>
    </div>
  );
};

export default ProcessosCard;
