
import React from 'react';
import IndexPageLayout from '@/components/index/IndexPageLayout';

interface IndexProps {
  showYoutubeBubble?: boolean;
  setShowYoutubeBubble?: (show: boolean) => void;
}

const Index = ({ showYoutubeBubble, setShowYoutubeBubble }: IndexProps) => {
  return (
    <IndexPageLayout
      showYoutubeBubble={showYoutubeBubble}
      setShowYoutubeBubble={setShowYoutubeBubble}
    />
  );
};

export default Index;
