import React, { useState, useRef, useEffect } from 'react';
interface ImageDebugProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  onLoad?: () => void;
  onError?: (error: any) => void;
}
const ImageDebug: React.FC<ImageDebugProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  onLoad,
  onError
}) => {
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorDetails, setErrorDetails] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    console.log(`🖼️ ImageDebug: Tentando carregar imagem: ${src}`);
    console.log(`🖼️ ImageDebug: Alt text: ${alt}`);
    console.log(`🖼️ ImageDebug: Classe CSS: ${className}`);
  }, [src, alt, className]);
  const handleLoad = () => {
    console.log(`✅ ImageDebug: Imagem carregada com sucesso: ${src}`);
    setLoadState('loaded');
    if (onLoad) onLoad();
  };
  const handleError = (e: any) => {
    const errorMsg = `Erro ao carregar imagem: ${src}`;
    console.error(`❌ ImageDebug: ${errorMsg}`, e);
    setLoadState('error');
    setErrorDetails(errorMsg);
    if (onError) onError(e);
  };
  return <div className="relative inline-block">
      
      
      {loadState === 'loading' && <div className={`bg-gray-200 animate-pulse ${className}`} style={{
      width,
      height
    }}>
          <div className="flex items-center justify-center h-full text-xs text-gray-500">
            Carregando...
          </div>
        </div>}
      
      {loadState === 'error' && <div className={`bg-red-100 border border-red-300 ${className}`} style={{
      width,
      height
    }}>
          <div className="flex items-center justify-center h-full text-xs text-red-600 p-2 text-center">
            ❌ Erro ao carregar<br />
            {alt}
          </div>
        </div>}
    </div>;
};
export default ImageDebug;