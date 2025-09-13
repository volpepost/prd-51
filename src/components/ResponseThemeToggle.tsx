
import React from 'react';
import { Button } from "@/components/ui/button";
import { Palette } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ResponseThemeToggleProps {
  isDarkTheme: boolean;
  onToggle: () => void;
}

const ResponseThemeToggle = ({ isDarkTheme, onToggle }: ResponseThemeToggleProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="bg-gradient-to-r from-pastel-blue-dark/60 to-pastel-gray-medium/60 border-pastel-blue-medium/80 text-pastel-blue-light hover:from-pastel-blue-dark/70 hover:to-pastel-gray-medium/70 hover:border-pastel-blue-light/90 hover:text-pastel-white transition-all duration-300 shadow-lg hover:shadow-pastel-blue-medium/30 backdrop-blur-sm min-w-0 flex-shrink-0 px-2 py-1 h-7"
      title={isDarkTheme ? "Alterar para tema claro" : "Alterar para tema escuro"}
    >
      <Palette className="w-3 h-3" />
      {!isMobile && <span className="ml-1 text-xs hidden lg:inline">Tema</span>}
    </Button>
  );
};

export default ResponseThemeToggle;
