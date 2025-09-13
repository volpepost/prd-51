
import React from 'react';
import { useTestesData } from '@/hooks/useTestesData';
import { useTestesHandlers } from '@/hooks/useTestesHandlers';
import TestesLayout from '@/components/tests/TestesLayout';

const TestesPageContent = () => {
  const testData = useTestesData();
  const handlers = useTestesHandlers();

  return (
    <TestesLayout 
      testButtons={testData.testButtons}
      onButtonClick={handlers.handleButtonClick}
    />
  );
};

export default TestesPageContent;
