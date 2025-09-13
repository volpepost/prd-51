import React, { useState, useEffect } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConformidadeAlert from "@/components/shared/alerts/ConformidadeAlert";
import DiretoriaAlert from "@/components/shared/alerts/DiretoriaAlert";

interface HeaderProps {
  onServiceClick?: (serviceName: string, serviceDescription: string) => void;
  onDebugClick?: (event: React.MouseEvent, title: string, description: string) => void;
}

const Header = ({ onServiceClick, onDebugClick }: HeaderProps) => {
  const [currentImage, setCurrentImage] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [usedImages, setUsedImages] = useState<number[]>([]);
  const [imageLoadError, setImageLoadError] = useState(false);
  
  // Nova imagem única com tema pastel azul
  const images = [
    "/lovable-uploads/header-owl.png"
  ];

  const getNextRandomImage = () => {
    console.log('🎲 HEADER: Selecionando próxima imagem...');
    
    // Se já usamos todas as imagens, reinicia o ciclo
    if (usedImages.length >= images.length) {
      console.log('🔄 HEADER: Reiniciando ciclo de imagens');
      setUsedImages([]);
    }
    
    // Obtém as imagens ainda não utilizadas
    const availableIndices = images.map((_, index) => index).filter(index => !usedImages.includes(index));
    
    // Se não há imagens disponíveis (caso edge), usa todas novamente
    const indicesToChooseFrom = availableIndices.length > 0 ? availableIndices : images.map((_, index) => index);
    
    // Seleciona um índice aleatório das imagens disponíveis
    const randomIndex = indicesToChooseFrom[Math.floor(Math.random() * indicesToChooseFrom.length)];
    
    // Atualiza a lista de imagens usadas
    setUsedImages(prev => [...prev, randomIndex]);
    
    const selectedImage = images[randomIndex];
    console.log(`🖼️ HEADER: Imagem selecionada: ${selectedImage} (índice ${randomIndex})`);
    
    return selectedImage;
  };
  
  const handleImageLoad = () => {
    console.log('✅ HEADER: Imagem carregada com SUCESSO:', currentImage);
    setImageLoadError(false);
  };

  const handleImageError = (error: any) => {
    console.error('❌ HEADER: FALHA ao carregar imagem:', currentImage, error);
    setImageLoadError(true);
  };
  
  useEffect(() => {
    console.log('🚀 HEADER: Componente inicializando...');
    
    // Seleciona uma imagem seguindo o sistema de rotação
    const selectedImage = getNextRandomImage();
    setCurrentImage(selectedImage);
    
    console.log('🖼️ HEADER: Sistema de imagens inicializado:', {
      imagemSelecionada: selectedImage,
      indiceNaLista: images.indexOf(selectedImage),
      totalImagens: images.length,
      imagensJaUsadas: usedImages.length,
      todasAsImagens: images
    });

    // Formatar data atual
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear()).slice(-2);
    setCurrentDate(`${day}.${month}.${year}`);
  }, []);

  const handleDownloadClick = () => {
    // Trigger PWA install prompt or show install instructions
    const event = new CustomEvent('showPWAInstall');
    window.dispatchEvent(event);
  };

  return (
    <header className="relative h-96 w-full overflow-hidden">
      <div className="absolute inset-0">
        {currentImage && (
          <img 
            src={currentImage} 
            alt="Header Background" 
            className="w-full h-full object-cover object-center" 
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        {imageLoadError && (
          <div className="w-full h-full bg-gradient-to-br from-pastel-blue-medium to-pastel-blue-light flex items-center justify-center">
            <div className="text-center p-4">
              <p className="text-foreground/70 text-sm mb-2">⚠️ Imagem de fundo não pôde ser carregada</p>
              <p className="text-muted-foreground text-xs mt-1">Imagem: {currentImage}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue-dark/40 via-transparent to-pastel-blue-medium/30"></div>
      </div>
      
      <div className="absolute top-4 right-6 z-10 text-right">
        <div className="flex items-center space-x-3">
          <div>
            <span className="text-xs font-medium text-pastel-white/90 block">Presidente versão 2.0</span>
            <span className="text-xs font-medium text-pastel-blue-light block mt-1">{currentDate}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleDownloadClick}
              variant="ghost"
              size="sm"
              className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border hover:bg-pastel-white/20 hover:border-pastel-blue-light/40 text-pastel-white/80 hover:text-pastel-white h-10 w-10 p-0 rounded-xl transition-all duration-300 hover:scale-110"
              title="Baixar App Otavia"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Alert Cards no lado esquerdo - apenas desktop */}
      <div className="absolute top-4 left-6 z-10 hidden lg:flex flex-col space-y-3 w-[416px]">
        {onServiceClick && (
          <>
            <div className="scale-95 transform-gpu origin-top-left">
              <ConformidadeAlert onClick={onServiceClick} onDebugClick={onDebugClick} headerMode={true} />
            </div>
            <div className="scale-95 transform-gpu origin-top-left">
              <DiretoriaAlert onClick={onServiceClick} onDebugClick={onDebugClick} headerMode={true} />
            </div>
          </>
        )}
      </div>
      
      {/* Botão YouTube na posição original para mobile */}
      <div className="absolute top-4 left-6 z-10 lg:hidden">
        <Button
          onClick={() => {
            const event = new CustomEvent('showYoutubeBubble');
            window.dispatchEvent(event);
          }}
          variant="ghost"
          size="sm"
          className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border hover:bg-pastel-white/10 hover:border-pastel-blue-light/20 text-pastel-white/40 hover:text-pastel-white/60 h-8 w-8 p-0 rounded-xl transition-all duration-300 hover:scale-110"
          title="Abrir vídeo sobre LGPD"
        >
          <MessageCircle className="w-2 h-2" />
        </Button>
      </div>
      
      <div className="absolute bottom-4 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3"></div>
            <div className="lg:pl-2 xl:pl-8 flex justify-start">
              <div className="backdrop-blur-glass bg-blue-500/20 border-blue-300/30 px-6 py-3 rounded-lg flex flex-col items-center space-y-2 w-full">
                <img 
                  src="/lovable-uploads/da4fe42d-bb2a-4385-8e4d-e60267c3257e.png" 
                  alt="Santa Catarina Logo" 
                  className="h-12 w-auto"
                  onLoad={() => console.log('✅ HEADER: SC logo loaded successfully')}
                  onError={(e) => console.error('❌ HEADER: SC logo failed to load:', e)}
                />
                <h1 className="text-lg font-bold text-yellow-400 text-center">Presidente</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
