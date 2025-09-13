
import { useState, useEffect } from 'react';

interface ServiceWorkerUpdateState {
  isUpdateAvailable: boolean;
  isUpdating: boolean;
  isUpdateActivated: boolean;
  updateServiceWorker: () => void;
  registration: ServiceWorkerRegistration | null;
}

export const useServiceWorkerUpdate = (): ServiceWorkerUpdateState => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdateActivated, setIsUpdateActivated] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    // Verificar se service workers são suportados
    if (!('serviceWorker' in navigator)) {
      console.log('Service Workers não suportados neste navegador');
      return;
    }

    // Registrar service worker
    const registerServiceWorker = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js');
        setRegistration(reg);
        console.log('Service Worker registrado com sucesso');

        // Verificar se há worker aguardando
        if (reg.waiting) {
          setWaitingWorker(reg.waiting);
          setIsUpdateAvailable(true);
        }

        // Listener para quando um novo SW está instalado
        reg.addEventListener('updatefound', () => {
          console.log('Nova versão do Service Worker encontrada');
          const newWorker = reg.installing;
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // Há uma nova versão disponível
                  setWaitingWorker(newWorker);
                  setIsUpdateAvailable(true);
                  console.log('Nova versão disponível');
                } else {
                  // Primeira instalação
                  console.log('Service Worker instalado pela primeira vez');
                }
              }
            });
          }
        });

      } catch (error) {
        console.error('Erro ao registrar Service Worker:', error);
      }
    };

    registerServiceWorker();

    // Listener para mensagens do service worker
    const handleMessage = (event: MessageEvent) => {
      const { data } = event;
      
      if (data?.type === 'UPDATE_AVAILABLE') {
        console.log('Atualização disponível - mensagem recebida do SW');
        setIsUpdateAvailable(true);
      }
      
      if (data?.type === 'UPDATE_ACTIVATED') {
        console.log('Atualização ativada - recarregando página');
        setIsUpdateActivated(true);
        setIsUpdating(false);
        // Recarregar a página para usar a nova versão
        window.location.reload();
      }
    };

    navigator.serviceWorker.addEventListener('message', handleMessage);

    // Cleanup
    return () => {
      navigator.serviceWorker.removeEventListener('message', handleMessage);
    };
  }, []);

  const updateServiceWorker = () => {
    if (!waitingWorker) {
      console.log('Nenhum worker aguardando para ativação');
      return;
    }

    console.log('Ativando nova versão do Service Worker');
    setIsUpdating(true);
    setIsUpdateAvailable(false);

    // Enviar mensagem para o SW aguardando pular a espera
    waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    
    // Aguardar a ativação
    waitingWorker.addEventListener('statechange', () => {
      if (waitingWorker.state === 'activated') {
        console.log('Service Worker ativado');
        setIsUpdateActivated(true);
        setIsUpdating(false);
      }
    });
  };

  return {
    isUpdateAvailable,
    isUpdating,
    isUpdateActivated,
    updateServiceWorker,
    registration
  };
};
