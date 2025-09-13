
import React from 'react';
import { Card } from "@/components/ui/card";
import { Settings } from 'lucide-react';

interface CookiesQuestionProps {
  onClick: (questionTitle: string, question: string) => void;
}

const CookiesQuestion = ({ onClick }: CookiesQuestionProps) => {
  return (
    <Card
      className="backdrop-blur-sm bg-white/10 border-white/20 p-3 hover:bg-white/20 transition-all cursor-pointer group"
      onClick={() => onClick('Cookies', 'Adequação de política de cookies.')}
    >
      <div className="flex items-start space-x-3">
        <Settings className="w-5 h-5 text-pastel-blue-dark mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-pastel-blue-dark text-base">Cookies</h4>
          <p className="text-pastel-blue-light text-xs mt-1 break-words">Adequação de política de cookies.</p>
        </div>
      </div>
    </Card>
  );
};

export default CookiesQuestion;
