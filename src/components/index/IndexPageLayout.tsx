
import React, { useEffect } from 'react';
import { useIndexData } from '@/hooks/useIndexData';
import { useIndexHandlers } from '@/hooks/handlers/useIndexHandlers';
import IndexLayout from "@/components/IndexLayout";

interface IndexPageLayoutProps {
  showYoutubeBubble?: boolean;
  setShowYoutubeBubble?: (show: boolean) => void;
}

const IndexPageLayout = ({ showYoutubeBubble, setShowYoutubeBubble }: IndexPageLayoutProps) => {
  const indexData = useIndexData();
  const handlers = useIndexHandlers(indexData);

  // Adicionar listener para o evento showSobreOtavia
  useEffect(() => {
    const handleShowSobreOtaviaEvent = () => {
      console.log('Evento showSobreOtavia recebido na página Index');
      handlers.handleShowSobreOtavia();
    };

    window.addEventListener('showSobreOtavia', handleShowSobreOtaviaEvent);

    return () => {
      window.removeEventListener('showSobreOtavia', handleShowSobreOtaviaEvent);
    };
  }, [handlers.handleShowSobreOtavia]);

  return (
    <IndexLayout
      {...indexData}
      {...handlers}
    />
  );
};

export default IndexPageLayout;
