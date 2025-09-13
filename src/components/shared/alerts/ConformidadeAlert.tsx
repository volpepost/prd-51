import React from 'react';
import { Card } from "@/components/ui/card";
import { Bell, AlertTriangle, Shield, CheckCircle, RefreshCw, FilePen } from 'lucide-react';
import { useGoogleSheetsData } from '@/hooks/useGoogleSheetsData';
import { useAlertCarousel } from '@/hooks/useAlertCarousel';
import DebugSection from "@/components/structure/DebugSection";

interface ConformidadeAlertProps {
  onClick: (serviceName: string, serviceDescription: string) => void;
  onShowYoutube?: () => void;
  onDebugClick?: (event: React.MouseEvent, title: string, description: string) => void;
  headerMode?: boolean; // Nova prop para modo header
}

const ConformidadeAlert = ({ onClick, onShowYoutube, onDebugClick, headerMode = false }: ConformidadeAlertProps) => {
  const { getLembreteAlert, isLoading, error, lastUpdated, isAlertChanged } = useGoogleSheetsData();
  
  const alertData = getLembreteAlert();
  const isChanged = isAlertChanged('lembrete');
  
  console.log('ConformidadeAlert - isChanged:', isChanged);
  
  // Fallback para dados padrão se não houver dados da planilha
  const defaultData = {
    titulo: "ATENÇÃO: Lembrete Urgente",
    descricao: "Verificação de adequação à LGPD (Em breve)",
    icone: "bell",
    cor: "purple",
    mensagensCarrossel: ["Verificação de adequação à LGPD (Em breve)"]
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
      case 'bell': return Bell;
      case 'shield': return Shield;
      case 'check': return CheckCircle;
      case 'alert': return AlertTriangle;
      default: return Bell;
    }
  };
  
  const IconComponent = getIcon(data.icone || 'bell');
  
  // Mapear cores dos textos
  const getColorClasses = () => {
    if (headerMode) {
      return {
        bg: 'bg-blue-600/40',
        border: 'border-blue-400/50',
        icon: 'text-white',
        text: 'text-white'
      };
    }
    return {
      bg: 'bg-pastel-blue-medium/20',
      border: 'border-pastel-blue-medium/30',
      icon: 'text-pastel-blue-dark',
      text: 'text-pastel-blue-dark'
    };
  };
  
  const colors = getColorClasses();

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const googleSheetsUrl = 'https://docs.google.com/spreadsheets/d/1uZbtGyk354oY_eQj4v2qXhDSeaRXOFRBAkymw5t5aVI/edit';
    window.open(googleSheetsUrl, '_blank');
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

      {/* Ícone de edição do Google Sheets com fundo transparente */}
      <button
        onClick={handleEditClick}
        className="absolute bottom-2 right-2 p-1 rounded-full bg-transparent hover:bg-white/10 transition-all duration-200 shadow-lg z-30"
        title="Editar no Google Sheets"
      >
        <FilePen className="w-4 h-4 text-white/70 hover:text-white transition-colors duration-200" />
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
                className={`${colors.text} text-sm transition-all duration-300 ${
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
        title="Lembrete Alert Card"
        description="Card de alerta de lembrete individual"
        onDebugClick={onDebugClick}
      >
        {cardContent}
      </DebugSection>
    );
  }

  return cardContent;
};

export default ConformidadeAlert;
