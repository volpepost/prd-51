
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface YouTubeBubbleProps {
  isVisible: boolean;
  onClose: () => void;
}

const YouTubeBubble = ({ isVisible, onClose }: YouTubeBubbleProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    // Prevent any scrolling when the bubble opens
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // YouTube Player API event listener
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        // YouTube player state: 0 = ended
        if (data.info && data.info.playerState === 0) {
          setTimeout(() => {
            onClose();
          }, 1000); // Wait 1 second after video ends to close
        }
      } catch (error) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Prevent scroll when bubble opens
    document.addEventListener('scroll', preventScroll, { passive: false });
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    
    return () => {
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('scroll', preventScroll);
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Positioned higher above the ConformidadeAlert */}
      <div className="absolute top-20 left-4 pointer-events-auto md:top-24 md:left-6 lg:left-8">
        {/* Chat Bubble Container with floating animation */}
        <div className="relative animate-float">          
          {/* Main Chat Bubble */}
          <Card className={`
            backdrop-blur-glass bg-white/10 border-white/20 
            p-4 shadow-2xl animate-fade-in animate-scale-in
            w-80 md:w-96 relative overflow-hidden rounded-2xl
            transform-gpu will-change-transform
          `}>
            {/* Close Button */}
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 w-6 h-6 p-0 text-white/60 hover:text-white hover:bg-white/10 z-10 rounded-full"
              title="Fechar vídeo"
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Video Container */}
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-3 text-sm flex items-center">
                <span className="mr-2">📺</span>
                Vídeo sobre LGPD
              </h4>
              
              <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden bg-black/20 shadow-inner">
                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/chJANNI0nKg?autoplay=1&enablejsapi=1&origin=window.location.origin"
                  title="Vídeo sobre LGPD"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <p className="text-white/80 text-xs mt-3 text-center">
                O vídeo será fechado automaticamente ao terminar
              </p>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-br from-pastel-blue-medium/10 to-pastel-blue-light/10 animate-pulse pointer-events-none"></div>
          </Card>

          {/* Chat Bubble Tail pointing to the alert */}
          <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/20"></div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeBubble;
