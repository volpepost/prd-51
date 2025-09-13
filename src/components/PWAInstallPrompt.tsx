import React, { useState, useEffect } from 'react';
import { X, Download, Share, Plus, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { usePWAInstall } from '@/hooks/usePWAInstall';

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);
  const [iconError, setIconError] = useState(false);
  const { isInstallable, isInstalled, installApp, isIOSDevice, isSafari } = usePWAInstall();

  // Usar o novo ícone da OtavIA
  const appIcon = "/lovable-uploads/fda6d872-8f07-4e11-96aa-57c01e39f04b.png";

  useEffect(() => {
    // Listen for custom event to show PWA install
    const handleShowPWAInstall = () => {
      if (!isInstalled) {
        console.log('Showing PWA install prompt');
        setShowPrompt(true);
      } else {
        console.log('PWA já está instalado, não mostrando prompt');
      }
    };

    window.addEventListener('showPWAInstall', handleShowPWAInstall);
    return () => window.removeEventListener('showPWAInstall', handleShowPWAInstall);
  }, [isInstalled]);

  // Auto-close se foi instalado
  useEffect(() => {
    if (isInstalled && showPrompt) {
      setInstallSuccess(true);
      setTimeout(() => {
        setShowPrompt(false);
        setInstallSuccess(false);
      }, 2000);
    }
  }, [isInstalled, showPrompt]);

  const handleClose = () => {
    setShowPrompt(false);
    setIsInstalling(false);
    setInstallSuccess(false);
  };

  const handleInstall = async () => {
    if (isSafari) {
      // Para iOS Safari, apenas mostrar as instruções
      return;
    }
    
    console.log('Iniciando instalação PWA...');
    setIsInstalling(true);
    
    try {
      await installApp();
      // A verificação de sucesso é feita no useEffect acima
    } catch (error) {
      console.error('Erro na instalação:', error);
      setIsInstalling(false);
    }
  };

  const handleIconError = () => {
    console.error('Erro ao carregar ícone do PWA:', appIcon);
    setIconError(true);
  };

  const handleIconLoad = () => {
    console.log('✅ Ícone do PWA carregado com sucesso:', appIcon);
    setIconError(false);
  };

  if (!showPrompt || isInstalled) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop com efeito vidro fosco */}
      <div 
        className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-pastel-blue-dark/30 via-pastel-gray-medium/30 to-pastel-blue-medium/30"
        onClick={!isInstalling ? handleClose : undefined}
      />
      
      {/* Modal com efeito vidro fosco */}
      <Card className="relative w-full max-w-md backdrop-blur-xl bg-white/10 border-white/20 p-6 rounded-2xl shadow-2xl animate-scale-in">
        {/* Close Button */}
        {!isInstalling && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0 rounded-full"
          >
            <X className="w-4 h-4" />
          </Button>
        )}

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Ícone da Otavia com status */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/20 border-2 border-white/30 p-1">
              {!iconError ? (
                <img 
                  src={appIcon}
                  alt="Otavia App Icon" 
                  className="w-full h-full object-cover rounded-2xl"
                  onLoad={handleIconLoad}
                  onError={handleIconError}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-pastel-blue-dark to-pastel-blue-medium rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">O</span>
                </div>
              )}
              
              {/* Status overlay */}
              {installSuccess && (
                <div className="absolute inset-0 bg-green-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              )}
              
              {isInstalling && (
                <div className="absolute inset-0 bg-pastel-blue-medium/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Loader2 className="w-12 h-12 text-white animate-spin" />
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <div>
            {installSuccess ? (
              <>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  App Instalado!
                </h3>
                <p className="text-white/80 text-sm">
                  Otavia foi instalada com sucesso
                </p>
              </>
            ) : isInstalling ? (
              <>
                <h3 className="text-xl font-bold text-pastel-blue-medium mb-2">
                  Instalando...
                </h3>
                <p className="text-white/80 text-sm">
                  Aguarde enquanto instalamos a Otavia
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-2">
                  Instalar Otavia
                </h3>
                <p className="text-white/80 text-sm">
                  Tenha acesso rápido ao seu assistente LGPD
                </p>
              </>
            )}
          </div>

          {/* iOS Safari Instructions */}
          {isSafari && !isInstalling && !installSuccess ? (
            <div className="space-y-4">
              <p className="text-white/90 text-sm">
                Para instalar no iOS:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <span className="text-sm">1. Toque em</span>
                  <Share className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Compartilhar</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <span className="text-sm">2. Toque em</span>
                  <Plus className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Adicionar à Tela Inicial</span>
                </div>
              </div>
            </div>
          ) : !isInstalling && !installSuccess && (
            // Android/Desktop Install Button
            <Button
              onClick={handleInstall}
              disabled={!isInstallable}
              className="w-full bg-gradient-to-r from-pastel-blue-dark/80 to-pastel-blue-medium/80 backdrop-blur-sm hover:from-pastel-blue-dark/90 hover:to-pastel-blue-medium/90 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5 mr-2" />
              {isInstallable ? 'Instalar App' : 'Preparando...'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;
