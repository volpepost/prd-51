
import React, { useEffect } from 'react';
import { useIndexData } from '@/hooks/useIndexData';
import { useIndexHandlers } from '@/hooks/handlers/useIndexHandlers';
import IndexLayout from "@/components/IndexLayout";

const IndexPageLayout = () => {
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
