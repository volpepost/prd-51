
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão quando a página foi rolada mais de 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Verificação inicial
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="absolute bottom-4 right-4 z-40 bg-gradient-to-r from-pastel-blue-dark/60 to-pastel-gray-medium/60 border-pastel-blue-medium/80 text-pastel-blue-light hover:from-pastel-blue-dark/70 hover:to-pastel-gray-medium/70 hover:border-pastel-blue-light/90 hover:text-pastel-white transition-all duration-300 shadow-lg hover:shadow-pastel-blue-medium/30 backdrop-blur-sm min-w-0 flex-shrink-0"
      variant="outline"
      size="sm"
      title="Voltar ao topo"
    >
      <ArrowUp className="w-3 h-3 md:w-4 md:h-4" />
      {!isMobile && <span className="ml-1 text-xs hidden lg:inline">Topo</span>}
    </Button>
  );
};

export default ScrollToTopButton;
