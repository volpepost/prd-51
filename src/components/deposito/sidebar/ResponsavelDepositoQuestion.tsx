
import React from 'react';
import { Card } from "@/components/ui/card";
import { Warehouse } from 'lucide-react';

interface ResponsavelDepositoQuestionProps {
  onClick: (questionTitle: string, question: string) => void;
}

const ResponsavelDepositoQuestion = ({ onClick }: ResponsavelDepositoQuestionProps) => {
  return (
    <Card
      className="backdrop-blur-sm bg-white/10 border-white/20 p-3 hover:bg-white/20 transition-all cursor-pointer group"
      onClick={() => onClick('Responsável Depósito', 'Especialidades para controle de depósito INMETRO.')}
    >
      <div className="flex items-start space-x-3">
        <Warehouse className="w-5 h-5 text-pastel-blue-dark mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-pastel-blue-dark text-sm">Responsável Depósito</h4>
          <p className="text-white text-xs mt-1 break-words">Especialidades para controle de depósito INMETRO.</p>
        </div>
      </div>
    </Card>
  );
};

export default ResponsavelDepositoQuestion;
