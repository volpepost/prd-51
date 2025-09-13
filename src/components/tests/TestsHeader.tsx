
import React from 'react';
import { Card } from "@/components/ui/card";

const TestsHeader = () => {
  return (
    <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-6 mb-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Página de Testes
        </h1>
        <p className="text-gray-300 text-lg">
          Explore as funcionalidades de teste com botões personalizados
        </p>
      </div>
    </Card>
  );
};

export default TestsHeader;
