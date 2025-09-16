
import React from 'react';
import { Card } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import { useMotivationalQuote } from "@/hooks/useMotivationalQuote";
import { useIsMobile } from '@/hooks/use-mobile';

const WelcomeSection = () => {
  const { quote } = useMotivationalQuote();
  const isMobile = useIsMobile();
  
  return (
    <Card className="backdrop-blur-glass bg-pastel-blue-dark/30 border-pastel-blue-medium/30 p-6 text-center relative overflow-hidden h-[130px]">
      <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue-dark/20 to-pastel-blue-medium/20"></div>
      <div className="relative z-10 h-full flex flex-col justify-center">
        <h2 className={`font-bold text-white mb-4 ${
          isMobile ? 'text-xl' : 'text-3xl'
        }`}>
          Como posso ajudar, Sr Presidente?
        </h2>
        <div className="flex items-center justify-center max-w-3xl mx-auto space-x-2">
          <Quote className={`text-pastel-white flex-shrink-0 ${
            isMobile ? 'w-4 h-4' : 'w-5 h-5'
          }`} />
          <p className={`text-pastel-white ${
            isMobile ? 'text-sm' : 'text-base'
          }`}>
            {quote || "Carregando inspiração..."}
          </p>
          <Quote className={`text-pastel-white flex-shrink-0 rotate-180 ${
            isMobile ? 'w-4 h-4' : 'w-5 h-5'
          }`} />
        </div>
      </div>
    </Card>
  );
};

export default WelcomeSection;
