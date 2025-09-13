
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingChatIconProps {
  onClick: () => void;
}

const FloatingChatIcon = ({ onClick }: FloatingChatIconProps) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size="sm"
      className="fixed left-[14.4px] top-[14.4px] z-[9999] backdrop-blur-glass bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white/50 hover:text-white/70 w-8 h-8 p-0 rounded-xl transition-all duration-300 hover:scale-105"
      title="Abrir vídeo sobre LGPD"
    >
      <MessageCircle className="w-2 h-2" />
    </Button>
  );
};

export default FloatingChatIcon;
