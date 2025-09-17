
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target } from 'lucide-react';

interface MapeamentoCardProps {
  onClick: (serviceName: string, serviceDescription: string) => void;
}

const MapeamentoCard = ({ onClick }: MapeamentoCardProps) => {
  return (
    <div className="relative group">
      <Card
        className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        onClick={() => onClick('MAPEAMENTO', 'Inventário de dados')}
      >
        {/* Etiqueta L com estilo mais rosa */}
        <div className="absolute -top-1 left-2 z-10">
          <Badge 
            variant="secondary" 
            className="backdrop-blur-glass bg-gradient-to-tl from-pastel-blue-dark/80 to-pastel-blue-medium/80 text-white font-bold text-xs w-7 h-6 rounded-md flex items-center justify-center shadow-lg transform skew-x-12"
          >
            P
          </Badge>
        </div>

        <div className="text-center space-y-3">
          <Target className="w-8 h-8 text-pastel-blue-light mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-pastel-blue-light text-sm">PLANEJAMENTO</h3>
          <p className="text-white text-xs">Estratégias e metas</p>
        </div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pastel-blue-dark/10 to-pastel-blue-medium/10"></div>
      </Card>
    </div>
  );
};

export default MapeamentoCard;
