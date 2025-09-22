
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue-dark via-pastel-blue-medium to-pastel-purple-light flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-white/20">404</h1>
          <h2 className="text-2xl font-bold text-white">Página não encontrada</h2>
          <p className="text-white/80">A página que você está procurando não existe.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="text-white border-white/20 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            className="bg-white/20 hover:bg-white/30 text-white"
          >
            <Home className="w-4 h-4 mr-2" />
            Página Inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
