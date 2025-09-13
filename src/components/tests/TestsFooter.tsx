
import React from 'react';
import { Card } from "@/components/ui/card";

interface TestsFooterProps {
  testCount: number;
}

const TestsFooter = ({ testCount }: TestsFooterProps) => {
  return (
    <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4">
      <div className="text-center">
        <p className="text-gray-300 text-sm">
          {testCount} botões de teste disponíveis com estilos únicos
        </p>
      </div>
    </Card>
  );
};

export default TestsFooter;
