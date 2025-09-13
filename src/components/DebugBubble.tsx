
import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

interface DebugBubbleProps {
  isVisible: boolean;
  position: { x: number; y: number };
  title: string;
  description: string;
  onClose: () => void;
}

const DebugBubble = ({ isVisible, position, title, description, onClose }: DebugBubbleProps) => {
  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      const bubbleWidth = 380;
      const bubbleHeight = 250;
      const padding = 20;
      
      // Posiciona o bubble ao lado direito do elemento clicado para não atrapalhar
      let x = position.x + padding;
      let y = position.y - bubbleHeight / 2;
      
      // Se sair da tela pela direita, posiciona à esquerda
      if (x + bubbleWidth > window.innerWidth) {
        x = position.x - bubbleWidth - padding;
      }
      
      // Se ainda sair pela esquerda, centraliza horizontalmente
      if (x < padding) {
        x = (window.innerWidth - bubbleWidth) / 2;
      }
      
      // Ajusta verticalmente se necessário
      if (y < padding) {
        y = padding;
      } else if (y + bubbleHeight > window.innerHeight) {
        y = window.innerHeight - bubbleHeight - padding;
      }
      
      setBubblePosition({ x, y });
    }
  }, [isVisible, position]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('drag-handle')) {
      setIsDragging(true);
      const rect = bubbleRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
      e.preventDefault();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(window.innerWidth - 380, e.clientX - dragOffset.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 350, e.clientY - dragOffset.y));
      
      setBubblePosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isVisible) return null;

  return (
    <div
      ref={bubbleRef}
      className={`fixed z-50 bg-black/95 backdrop-blur-md border border-pastel-blue-medium/50 rounded-lg p-4 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200 ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={{
        left: `${bubblePosition.x}px`,
        top: `${bubblePosition.y}px`,
        width: '380px',
        maxHeight: '350px'
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex items-start justify-between mb-3 drag-handle">
        <h3 className="text-pastel-blue-light font-semibold text-sm truncate flex-1 mr-2 pointer-events-none">
          {title}
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors flex-shrink-0 pointer-events-auto"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-white text-xs leading-relaxed overflow-y-auto max-h-64 custom-scrollbar pointer-events-auto">
        <pre className="whitespace-pre-wrap font-mono text-xs">{description}</pre>
      </div>
    </div>
  );
};

export default DebugBubble;
