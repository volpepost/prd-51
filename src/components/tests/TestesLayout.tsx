
import React from 'react';
import TestsHeader from "./TestsHeader";
import TestsFooter from "./TestsFooter";
import TestCard from "./TestCard";

interface TestButton {
  id: number;
  title: string;
  description: string;
}

interface TestesLayoutProps {
  testButtons: TestButton[];
  onButtonClick: (buttonTitle: string) => void;
}

const TestesLayout = ({ testButtons, onButtonClick }: TestesLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <TestsHeader />

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Botões de Teste
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {testButtons.map((button) => (
              <TestCard
                key={button.id}
                id={button.id}
                title={button.title}
                description={button.description}
                onClick={onButtonClick}
              />
            ))}
          </div>
        </div>

        <TestsFooter testCount={testButtons.length} />
      </div>
    </div>
  );
};

export default TestesLayout;
