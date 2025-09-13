
import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const usePWAInstall = () => {
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Verificar se já está instalado com múltiplas verificações
    const checkInstalled = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isWebApp = (window.navigator as any).standalone === true;
      const isInWebAppiOS = window.matchMedia('(display-mode: fullscreen)').matches;
      
      const installed = isStandalone || isWebApp || isInWebAppiOS;
      setIsInstalled(installed);
      
      console.log('PWA Install Status Check:', {
        standalone: isStandalone,
        webApp: isWebApp,
        fullscreen: isInWebAppiOS,
        installed: installed,
        userAgent: navigator.userAgent
      });
      
      return installed;
    };

    // Detectar iOS e Safari com mais precisão
    const detectIOSAndSafari = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const iOS = /ipad|iphone|ipod/.test(userAgent);
      const safari = /safari/.test(userAgent) && !/chrome|crios|fxios/.test(userAgent);
      
      setIsIOSDevice(iOS);
      setIsSafari(safari && iOS);
      
      console.log('Device Detection:', {
        iOS,
        safari: safari && iOS,
        userAgent
      });
    };

    // Inicializar verificações
    const isCurrentlyInstalled = checkInstalled();
    detectIOSAndSafari();
    
    // Se já está instalado, não mostrar prompt
    if (isCurrentlyInstalled) {
      setIsInstallable(false);
      return;
    }

    // Event listener para beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      const promptEvent = e as BeforeInstallPromptEvent;
      console.log('beforeinstallprompt event fired', {
        platforms: promptEvent.platforms || []
      });
      
      e.preventDefault();
      setDeferredPrompt(promptEvent);
      setIsInstallable(true);
    };

    // Event listener para quando app é instalado
    const handleAppInstalled = (e: Event) => {
      console.log('PWA foi instalado via appinstalled event');
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    // Listener para mudanças no display mode
    const standaloneMatcher = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = () => {
      const newInstallStatus = checkInstalled();
      if (newInstallStatus && !isInstalled) {
        console.log('PWA instalado detectado via display mode change');
        setIsInstalled(true);
        setIsInstallable(false);
        setDeferredPrompt(null);
      }
    };

    // Adicionar event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    standaloneMatcher.addEventListener('change', handleDisplayModeChange);

    // Verificar periodicamente se foi instalado (fallback)
    const installCheckInterval = setInterval(() => {
      const currentlyInstalled = checkInstalled();
      if (currentlyInstalled && !isInstalled) {
        console.log('PWA instalado detectado via verificação periódica');
        setIsInstalled(true);
        setIsInstallable(false);
        setDeferredPrompt(null);
      }
    }, 2000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      standaloneMatcher.removeEventListener('change', handleDisplayModeChange);
      clearInterval(installCheckInterval);
    };
  }, [isInstalled]);

  const installApp = async () => {
    if (!deferredPrompt) {
      console.log('No deferred prompt available');
      return;
    }

    try {
      console.log('Showing install prompt...');
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      console.log('User choice result:', choiceResult);
      
      if (choiceResult.outcome === 'accepted') {
        console.log('PWA installation accepted by user');
        // Aguardar um pouco e verificar se foi instalado
        setTimeout(() => {
          const installed = window.matchMedia('(display-mode: standalone)').matches;
          if (installed) {
            setIsInstalled(true);
          }
        }, 1000);
      } else {
        console.log('PWA installation dismissed by user');
      }
      
      setDeferredPrompt(null);
      setIsInstallable(false);
    } catch (error) {
      console.error('Erro ao instalar PWA:', error);
    }
  };

  return {
    isInstallable,
    isInstalled,
    installApp,
    isIOSDevice,
    isSafari
  };
};
