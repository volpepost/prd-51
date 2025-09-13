import React, { useEffect, useRef, useState } from 'react';
import { QrCode, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const QRCodeDownload = () => {
  const svgRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [svgString, setSvgString] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string>(window.location.href);

  useEffect(() => {
    // Atualizar URL quando a rota mudar
    const updateUrl = () => {
      const newUrl = window.location.href;
      if (newUrl !== currentUrl) {
        setCurrentUrl(newUrl);
      }
    };

    // Listener para mudanças na URL
    window.addEventListener('popstate', updateUrl);
    window.addEventListener('pushstate', updateUrl);
    window.addEventListener('replacestate', updateUrl);

    // Observer para mudanças no DOM que podem indicar mudança de rota
    const observer = new MutationObserver(updateUrl);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => {
      window.removeEventListener('popstate', updateUrl);
      window.removeEventListener('pushstate', updateUrl);
      window.removeEventListener('replacestate', updateUrl);
      observer.disconnect();
    };
  }, [currentUrl]);

  useEffect(() => {
    let isMounted = true;

    const generateSVGQRCode = async () => {
      console.log('Starting SVG QR Code generation...');
      console.log('Generating QR Code for URL:', currentUrl);

      try {
        setError(null);
        setIsLoading(true);

        console.log('Importing QRCode library...');
        const qrCodeModule = await import('qrcode');
        const QRCode = qrCodeModule.default || qrCodeModule;

        if (!isMounted) return;

        if (typeof QRCode.toString === 'function') {
          try {
            console.log('Generating SVG QR Code...');
            const svgString = await QRCode.toString(currentUrl, {
              type: 'svg',
              width: 100,
              margin: 1,
              errorCorrectionLevel: 'H',
              color: {
                dark: '#000000',
                light: '#ffffff'
              }
            });

            setSvgString(svgString);
            console.log('SVG QR Code generated successfully!');
          } catch (svgError) {
            console.error('SVG method failed:', svgError);
            throw svgError;
          }
        } else {
          throw new Error('SVG method not available');
        }

        if (isMounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('QR Code generation failed:', error);
        if (isMounted) {
          setError(`Erro: ${error instanceof Error ? error.message : 'Falha ao gerar QR Code'}`);
          setIsLoading(false);
        }
      }
    };

    const timer = setTimeout(() => {
      generateSVGQRCode();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [currentUrl]);

  return (
    <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pastel-blue-medium/20 cursor-pointer group min-h-[120px] sm:h-[140px]">
      <div className="flex items-center space-x-2 sm:space-x-4 h-full">
        {/* QR Code on the left - responsive sizing */}
        <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28">
          {isLoading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded flex items-center justify-center">
              <QrCode className="w-6 h-6 sm:w-10 sm:h-10 text-gray-400" />
            </div>
          ) : error ? (
            <div className="w-full h-full bg-red-100 rounded flex items-center justify-center">
              <QrCode className="w-6 h-6 sm:w-10 sm:h-10 text-red-500" />
            </div>
          ) : (
            <div className="bg-white p-1 sm:p-2 rounded shadow-inner w-full h-full flex items-center justify-center">
              {svgString ? (
                <div 
                  ref={svgRef} 
                  className="w-full h-full max-w-full max-h-full" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} 
                  dangerouslySetInnerHTML={{
                    __html: svgString
                  }} 
                />
              ) : (
                <div className="w-full h-full bg-red-100 rounded flex items-center justify-center">
                  <span className="text-red-500 text-xs">Erro</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Text content on the right - responsive layout */}
        <div className="flex-1 text-left space-y-1 sm:space-y-2 min-w-0 flex flex-col justify-center h-full overflow-hidden">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-pastel-blue-medium flex-shrink-0" />
            <h3 className="font-bold text-pastel-blue-medium text-xs sm:text-sm group-hover:scale-110 transition-transform truncate">
              Baixar App
            </h3>
          </div>
          <p className="text-white text-xs sm:text-sm leading-tight break-words">
            <span className="block">Escaneie com</span>
            <span className="block">seu celular</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default QRCodeDownload;
