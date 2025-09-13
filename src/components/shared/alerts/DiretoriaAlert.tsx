import React from 'react';
import { Card } from "@/components/ui/card";
import { Megaphone, Users, Bell, Shield, CheckCircle, RefreshCw } from 'lucide-react';
import { Phone } from 'lucide-react';
import { useGoogleSheetsData } from '@/hooks/useGoogleSheetsData';
import { useAlertCarousel } from '@/hooks/useAlertCarousel';
import DebugSection from "@/components/structure/DebugSection";

interface DiretoriaAlertProps {
  onClick: (serviceName: string, serviceDescription: string) => void;
  onDebugClick?: (event: React.MouseEvent, title: string, description: string) => void;
  headerMode?: boolean; // Nova prop para modo header
}

const DiretoriaAlert = ({ onClick, onDebugClick, headerMode = false }: DiretoriaAlertProps) => {
  const { getDiretoriaAlert, isLoading, error, lastUpdated, isAlertChanged } = useGoogleSheetsData();
  
  const alertData = getDiretoriaAlert();
  const isChanged = isAlertChanged('diretoria');
  
  console.log('DiretoriaAlert - isChanged:', isChanged);
  
  // Fallback para dados padrão se não houver dados da planilha
  const defaultData = {
    titulo: "Mensagem da Diretoria",
    descricao: "Novas orientações sobre proteção de dados (Em breve)",
    icone: "megaphone",
    cor: "purple",
    mensagensCarrossel: ["Novas orientações sobre proteção de dados (Em breve)"]
  };
  
  const data = alertData || defaultData;
  
  // Hook do carrossel para as mensagens - garantindo 30 segundos
  const { 
    currentMessage, 
    currentIndex,
    isAnimating, 
    hasMultipleMessages,
    handleMouseEnter, 
    handleMouseLeave 
  } = useAlertCarousel({
    messages: data.mensagensCarrossel || [data.descricao],
    intervalMs: 30000 // 30 segundos
  });
  
  // Mapear ícones
  const getIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case 'megaphone': return Megaphone;
      case 'users': return Users;
      case 'bell': return Bell;
      case 'shield': return Shield;
      case 'check': return CheckCircle;
      default: return Megaphone;
    }
  };
  
  const IconComponent = getIcon(data.icone || 'megaphone');
  
  // Mapear cores dos textos e efeitos hover
  const getColorClasses = () => {
    if (headerMode) {
      return {
        bg: 'bg-blue-600/40',
        border: 'border-blue-400/50',
        icon: 'text-white',
        title: 'text-yellow-400',
        desc: 'text-white'
      };
    }
    return {
      bg: 'bg-pastel-blue-medium/20',
      border: 'border-pastel-blue-medium/30',
      icon: 'text-pastel-blue-dark',
      title: 'text-pastel-blue-dark',
      desc: 'text-pastel-blue-dark'
    };
  };
  
  const colors = getColorClasses();
  
  const handleClick = () => {
    onClick(data.titulo, currentMessage || data.descricao);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = '5548991558123';
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre as orientações da Diretoria.');
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const cardContent = (
    <Card 
      className={`relative backdrop-blur-glass ${colors.bg} ${colors.border} p-4 overflow-hidden shadow-[0px_8px_28px_-9px_rgba(0,0,0,0.45)]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Efeito de reflexo de vidro */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 animate-glass-reflection"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
          transform: 'translateX(-100%) skewX(-20deg)',
        }}
      />

      {/* Informações de atualização - posicionadas no canto superior direito */}
      {lastUpdated && (
        <div className="absolute top-1 right-2 z-20">
          <p className="text-xs text-yellow-400 font-medium">
            Atualizado: {lastUpdated.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      )}

      {/* Ícone do WhatsApp fixo e imóvel - posicionado no canto inferior direito */}
      <button
        onClick={handleWhatsAppClick}
        className="absolute bottom-2 right-2 p-1 rounded-full bg-green-500/60 hover:bg-green-500 transition-all duration-200 shadow-lg z-30"
        title="Contatar via WhatsApp"
      >
        <Phone className="w-4 h-4 text-white/70 hover:text-white transition-colors duration-200" />
      </button>

      {/* Indicadores de múltiplas mensagens centralizados na borda inferior */}
      {hasMultipleMessages && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
          {data.mensagensCarrossel?.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-400 opacity-100 scale-110' 
                  : 'bg-gray-500 opacity-50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Conteúdo do card */}
      <div className="relative z-10">
        {/* Indicador de loading/erro */}
        {(isLoading || error) && (
          <div className="absolute top-2 right-2 flex items-center space-x-1">
            {isLoading && (
              <RefreshCw className="w-3 h-3 text-gray-400 animate-spin" />
            )}
            {error && (
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" title={`Erro: ${error}`} />
            )}
          </div>
        )}
        
        <div className="flex flex-col space-y-2 pt-2">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <IconComponent className={`w-6 h-6 ${colors.icon} ${isChanged ? 'animate-blink-icon' : ''}`} />
                <h3 className="font-bold" style={{color: 'hsl(48 100% 80%)'}}>{data.titulo}</h3>
              </div>
            </div>
          <div className="flex-1 relative pb-4">
            <div className="relative min-h-[20px] max-h-[60px] overflow-hidden">
              <p 
                className={`${colors.desc} text-sm transition-all duration-300 ${
                  isAnimating ? 'transform translate-x-[-100%] opacity-0' : 'transform translate-x-0 opacity-100'
                } line-clamp-3`}
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {currentMessage || data.descricao}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  // Se onDebugClick foi fornecido, envolver com DebugSection
  if (onDebugClick) {
    return (
      <DebugSection
        title="Diretoria Alert Card"
        description="Card de alerta da diretoria individual"
        onDebugClick={onDebugClick}
      >
        {cardContent}
      </DebugSection>
    );
  }

  return cardContent;
};

export default DiretoriaAlert;
