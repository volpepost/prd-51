
import { useState, useEffect, useRef } from 'react';

interface UseAlertCarouselProps {
  messages: string[];
  intervalMs?: number;
  pauseOnHover?: boolean;
}

export const useAlertCarousel = ({ 
  messages, 
  intervalMs = 30000, // 30 segundos
  pauseOnHover = true 
}: UseAlertCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função para avançar para próxima mensagem com efeito de rolagem
  const nextMessage = () => {
    if (!messages || messages.length <= 1) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300); // Tempo para completar a animação de slide
  };

  // Configurar intervalo automático
  useEffect(() => {
    if (!messages || messages.length <= 1 || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      console.log('Trocando mensagem do carrossel após 30 segundos');
      nextMessage();
    }, intervalMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [messages, intervalMs, isPaused]);

  // Limpar intervalo quando componente desmontar
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Resetar índice quando mensagens mudarem
  useEffect(() => {
    setCurrentIndex(0);
  }, [messages]);

  // Handlers para pause/resume
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      console.log('Pausando carrossel no hover');
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      console.log('Retomando carrossel após hover');
      setIsPaused(false);
    }
  };

  // Mensagem atual
  const currentMessage = messages && messages.length > 0 ? messages[currentIndex] : '';

  return {
    currentMessage,
    currentIndex,
    isAnimating,
    totalMessages: messages?.length || 0,
    hasMultipleMessages: messages && messages.length > 1,
    handleMouseEnter,
    handleMouseLeave
  };
};
