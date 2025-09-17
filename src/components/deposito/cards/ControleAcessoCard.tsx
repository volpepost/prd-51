
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from 'lucide-react';

interface ControleAcessoCardProps {
  onClick: (serviceName: string, serviceDescription: string) => void;
}

const ControleAcessoCard = ({ onClick }: ControleAcessoCardProps) => {
  return (
    <div className="relative group">
      <Card
        className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pastel-blue-medium/20 cursor-pointer"
        onClick={() => onClick('CONTROLE DE ACESSO', 'Segurança e permissões')}
      >
        {/* Etiqueta D com estilo do botão 18 */}
        <div className="absolute -top-1 left-2 z-10">
          <Badge 
            variant="secondary" 
            className="backdrop-blur-glass bg-gradient-to-tl from-pastel-blue-dark/80 to-pastel-blue-medium/80 text-white font-bold text-xs w-7 h-6 rounded-md flex items-center justify-center shadow-lg transform skew-x-12"
          >
            D
          </Badge>
        </div>

        <div className="text-center space-y-3">
          <AlertTriangle className="w-8 h-8 text-pastel-blue-light mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-pastel-blue-light text-sm">PLANO DE CRISE</h3>
          <p className="text-white text-xs">Gestão de emergências</p>
        </div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pastel-blue-medium/10 to-pastel-blue-light/10"></div>
      </Card>
    </div>
  );
};

export default ControleAcessoCard;
