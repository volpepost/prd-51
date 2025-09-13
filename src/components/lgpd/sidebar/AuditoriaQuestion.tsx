
import React from 'react';
import { Card } from "@/components/ui/card";
import { FileText } from 'lucide-react';

interface AuditoriaQuestionProps {
  onClick: () => void;
}

const AuditoriaQuestion = ({ onClick }: AuditoriaQuestionProps) => {
  return (
    <Card
      className="backdrop-blur-sm bg-white/10 border-white/20 p-3 hover:bg-white/20 transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <FileText className="w-5 h-5 text-pastel-blue-dark mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-pastel-blue-dark text-base">Auditoria</h4>
          <p className="text-pastel-blue-light text-xs mt-1 break-words">Checklist de conformidade LGPD.</p>
        </div>
      </div>
    </Card>
  );
};

export default AuditoriaQuestion;
