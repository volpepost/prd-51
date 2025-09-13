
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PromptsPageHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-8">
      <Button
        onClick={() => navigate('/')}
        variant="ghost"
        className="text-pastel-white hover:text-pastel-white hover:bg-pastel-white/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar
      </Button>
      <h1 className="text-3xl font-bold text-pastel-white text-center flex-1">
        Prompts Secretos da OtavIA
      </h1>
      <div className="w-20"></div>
    </div>
  );
};

export default PromptsPageHeader;
