
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, Loader2 } from 'lucide-react';
import { useResponsiveVoice } from '@/hooks/useResponsiveVoice';
import { useIsMobile } from '@/hooks/use-mobile';

interface AudioControlsProps {
  text: string;
  autoPlay?: boolean;
  compact?: boolean;
}

const AudioControls = ({ text, autoPlay = false, compact = true }: AudioControlsProps) => {
  const isMobile = useIsMobile();
  const {
    isSupported,
    isLoading,
    isPlaying,
    settings,
    speak,
    stop
  } = useResponsiveVoice();

  React.useEffect(() => {
    if (autoPlay && text && settings.autoPlay && !isPlaying && !isLoading && isSupported) {
      speak(text);
    }
  }, [text, autoPlay, settings.autoPlay, isPlaying, isLoading, isSupported, speak]);

  // Show loading while ResponsiveVoice is being loaded
  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          disabled
          className="bg-gradient-to-r from-pastel-blue-dark/60 to-pastel-gray-medium/60 border-pastel-blue-medium/80 text-pastel-blue-light backdrop-blur-sm min-w-0 flex-shrink-0 px-2 py-1 h-7"
        >
          <Loader2 className="w-3 h-3 flex-shrink-0 animate-spin" />
          {!isMobile && (
            <span className="ml-1 text-xs font-medium hidden lg:inline">
              Carregando...
            </span>
          )}
        </Button>
      </div>
    );
  }

  if (!isSupported) {
    return null;
  }

  if (!text.trim()) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => isPlaying ? stop() : speak(text)}
        className="bg-gradient-to-r from-pastel-blue-dark/60 to-pastel-gray-medium/60 border-pastel-blue-medium/80 text-pastel-blue-light hover:from-pastel-blue-medium/70 hover:to-pastel-gray-light/70 hover:border-pastel-blue-light/90 hover:text-pastel-white transition-all duration-300 shadow-lg hover:shadow-pastel-blue-medium/30 backdrop-blur-sm min-w-0 flex-shrink-0 px-2 py-1 h-7"
      >
        {isPlaying ? <Pause className="w-3 h-3 flex-shrink-0" /> : <Play className="w-3 h-3 flex-shrink-0" />}
        {!isMobile && (
          <span className="ml-1 text-xs font-medium hidden lg:inline">
            {isPlaying ? 'Pausar' : 'Ouvir'}
          </span>
        )}
      </Button>
      
      {isPlaying && (
        <div className="flex items-center space-x-1 min-w-0">
          <div className="w-1 h-1 bg-pastel-blue-medium rounded-full animate-pulse flex-shrink-0"></div>
          <span className="text-pastel-blue-light text-xs hidden sm:inline truncate">Reproduzindo...</span>
        </div>
      )}
    </div>
  );
};

export default AudioControls;
