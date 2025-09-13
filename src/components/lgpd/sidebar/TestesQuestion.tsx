
import React from 'react';
import { Button } from "@/components/ui/button";
import { TestTube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TestesQuestion = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/testes');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start text-left h-auto p-3 backdrop-blur-glass bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3 w-full">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
          <TestTube className="w-4 h-4 text-purple-300 group-hover:text-purple-200" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white group-hover:text-purple-200 transition-colors duration-300">
            Testes
          </p>
          <p className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors duration-300 truncate">
            Página de testes e funcionalidades
          </p>
        </div>
      </div>
    </Button>
  );
};

export default TestesQuestion;
