
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Bot, Brain, Heart, Zap, Shield, Award, Sparkles, Database, Users, FileText, Star, Warehouse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SobreOtaviaSectionProps {
  isVisible: boolean;
}

const SobreOtaviaSection = ({ isVisible }: SobreOtaviaSectionProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeSobreOtavia'));
  };

  const handleModosOperacaoClick = () => {
    navigate('/prompts-secretos');
  };

  const handleEstatisticasClick = () => {
    navigate('/estatisticas');
  };

  if (!isVisible) return null;

  return (
    <div className="animate-in slide-in-from-bottom-4 fade-in-0 duration-500" data-sobre-otavia-section>
      <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4 md:p-8 relative overflow-hidden">
        {/* Padrão de fundo futurista */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-light/20 via-pastel-blue-medium/20 to-pastel-gray-light/20"></div>
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M0 0L50 0L50 50L0 50Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <Button
          onClick={handleClose}
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white/60 hover:text-white hover:bg-white/10 z-10"
          title="Fechar"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Layout principal */}
        <div className="relative z-10">
          {/* Título principal */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pastel-blue-dark via-pastel-blue-medium to-pastel-gray-medium bg-clip-text text-transparent flex items-center justify-center space-x-2 md:space-x-3">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-pastel-blue-medium" />
              <span>Sobre a OtavIA</span>
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-pastel-blue-light" />
            </h2>
            <p className="text-white/80 mt-2 text-base md:text-lg">Sua assistente virtual especializada em LGPD</p>
          </div>

          {/* Layout flexível - Responsivo */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Crachá redesenhado - Design Ultra Sofisticado com Reflexo de Vidro - APENAS FRENTE */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                {/* Frente do Crachá - Design Premium com Reflexo de Vidro - MAIS ESCURO */}
                <div className="relative group perspective-1000">
                  {/* Container com efeito 3D e sombras múltiplas */}
                  <div className="relative transform-gpu transition-all duration-700 hover:rotate-y-12 preserve-3d">
                    {/* Sombras em camadas para profundidade */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-dark/40 via-transparent to-pastel-blue-medium/40 rounded-3xl blur-xl transform translate-y-4 scale-105 opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-medium/30 via-transparent to-pastel-blue-light/30 rounded-3xl blur-lg transform translate-y-2 scale-102 opacity-50"></div>
                    
                    {/* Crachá principal com múltiplas camadas de vidro - FUNDO MAIS ESCURO */}
                    <div className="relative backdrop-blur-2xl bg-gradient-to-br from-black/40 via-black/30 to-black/25 border-2 border-white/30 rounded-3xl shadow-2xl overflow-hidden">
                      
                      {/* Reflexo de vidro principal - animado - REDUZIDO */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 animate-pulse"></div>
                      
                      {/* Reflexo diagonal dinâmico - REDUZIDO */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute -top-10 -left-10 w-20 h-96 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transform-gpu animate-[slide_8s_ease-in-out_infinite] opacity-50"></div>
                      </div>
                      
                      {/* Reflexões secundárias - REDUZIDAS */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-sm"></div>
                      <div className="absolute bottom-8 left-6 w-12 h-12 bg-gradient-to-tl from-white/8 to-transparent rounded-full blur-md"></div>

                      {/* Fundo abstrato digital lilás degradê com cristais - MAIS ESCURO */}
                      <div className="absolute inset-0 opacity-60">
                        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-dark/60 via-pastel-blue-medium/40 to-pastel-blue-light/30"></div>
                        <svg className="w-full h-full" viewBox="0 0 200 300">
                          <defs>
                            <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
                              <stop offset="33%" stopColor="rgba(168, 85, 247, 0.5)" />
                              <stop offset="66%" stopColor="rgba(59, 130, 246, 0.6)" />
                              <stop offset="100%" stopColor="rgba(147, 197, 253, 0.5)" />
                            </linearGradient>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                              <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          {/* Formas cristalinas */}
                          <polygon points="50,30 80,50 70,90 40,80" fill="url(#crystalGradient)" opacity="0.8" filter="url(#glow)"/>
                          <polygon points="120,60 160,40 170,80 140,100" fill="url(#crystalGradient)" opacity="0.7" filter="url(#glow)"/>
                          <polygon points="30,150 70,130 80,170 50,190" fill="url(#crystalGradient)" opacity="0.6" filter="url(#glow)"/>
                          <polygon points="140,180 180,160 190,200 160,220" fill="url(#crystalGradient)" opacity="0.8" filter="url(#glow)"/>
                          {/* Cristais menores */}
                          <circle cx="60" cy="120" r="8" fill="rgba(147, 51, 234, 0.5)" filter="url(#glow)"/>
                          <circle cx="150" cy="140" r="6" fill="rgba(59, 130, 246, 0.6)" filter="url(#glow)"/>
                          <circle cx="100" cy="200" r="10" fill="rgba(168, 85, 247, 0.5)" filter="url(#glow)"/>
                        </svg>
                      </div>

                      {/* Bordas internas com brilho - REDUZIDO */}
                      <div className="absolute inset-1 rounded-3xl border border-white/15 pointer-events-none"></div>
                      <div className="absolute inset-2 rounded-2xl border border-white/8 pointer-events-none"></div>

                      {/* Header do crachá - com reflexo de vidro - MAIS ESCURO */}
                      <div className="relative bg-gradient-to-r from-black/30 via-black/25 to-black/20 p-3 border-b border-white/20 backdrop-blur-sm">
                        {/* Reflexo no header - REDUZIDO */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/8 to-transparent opacity-40"></div>
                        <div className="relative text-center">
                          <div className="text-white/90 font-mono text-xs tracking-wide drop-shadow-sm">IMETROSC - SISTEMA LGPD</div>
                          <div className="text-white/95 font-medium text-sm mt-1 drop-shadow-sm">CREDENCIAL DIGITAL</div>
                        </div>
                      </div>

                      {/* Conteúdo principal do crachá */}
                      <div className="relative p-4">
                        {/* Foto da OtavIA com moldura premium e reflexos - FOTO AUMENTADA */}
                        <div className="relative mb-4 mx-auto w-32 h-32">
                          {/* Anel de luz externa */}
                          <div className="absolute -inset-2 bg-gradient-to-r from-pastel-blue-dark/30 via-pastel-blue-medium/30 to-pastel-blue-light/30 rounded-3xl blur-md animate-pulse"></div>
                          {/* Moldura principal com múltiplas camadas */}
                          <div className="relative bg-gradient-to-br from-white/20 via-white/12 to-white/8 rounded-2xl p-1 border-2 border-white/30 backdrop-blur-md shadow-xl">
                            {/* Reflexo na moldura - REDUZIDO */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent rounded-2xl"></div>
                            {/* Imagem com overlay de vidro */}
                            <div className="relative rounded-xl overflow-hidden">
                              <img
                                src="/lovable-uploads/26c43a48-5c33-4483-a00b-2456cdc81ff5.png"
                                alt="OtavIA"
                                className="w-full h-full object-cover object-center"
                              />
                              {/* Overlay de vidro na foto - REDUZIDO */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"></div>
                            </div>
                          </div>
                        </div>

                        {/* Informações principais - com efeitos de vidro */}
                        <div className="text-center space-y-2">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-white/95 drop-shadow-lg">
                              OtavIA
                            </h3>
                            <div className="text-white/85 font-medium text-xs drop-shadow-sm">
                              Assistente Virtual LGPD
                            </div>
                          </div>

                          {/* Especialidades com efeitos de vidro - CORES TROCADAS */}
                          <div className="space-y-1.5">
                            {/* Proteção de Dados - USANDO COR DO RESPONSÁVEL DEPÓSITO */}
                            <div className="relative flex items-center justify-center space-x-2 bg-gradient-to-r from-white/10 via-white/6 to-white/4 rounded-xl px-3 py-2.5 border border-white/15 shadow-xl backdrop-blur-sm overflow-hidden">
                              {/* Reflexo interno - REDUZIDO */}
                              <div className="absolute inset-0 bg-gradient-to-r from-white/6 via-transparent to-transparent"></div>
                              <Shield className="w-6 h-6 text-white/70 drop-shadow-lg relative z-10" />
                              <span className="text-white/95 font-bold text-base drop-shadow-sm relative z-10">Proteção de Dados</span>
                            </div>
                            
                            {/* Responsável pelo Depósito - SEM BORDA VERDE */}
                            <div className="relative bg-gradient-to-r from-white/15 via-white/12 to-white/8 rounded-xl px-3 py-1.5 border border-white/15 backdrop-blur-sm overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>
                              <div className="flex items-center justify-center space-x-1.5 relative z-10">
                                <Warehouse className="w-3 h-3 text-white/70" />
                                <span className="text-white/95 font-medium text-xs">Responsável pelo Depósito</span>
                              </div>
                            </div>
                            
                            {/* Certificada IMETROSC - FUNDO MAIS CLARO */}
                            <div className="relative flex items-center justify-center space-x-1.5 bg-gradient-to-r from-white/30 via-white/25 to-white/20 rounded-xl px-2 py-1 border border-white/20 backdrop-blur-sm overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-transparent"></div>
                              <Award className="w-3 h-3 text-white/80 relative z-10" />
                              <span className="text-white/95 font-medium text-xs relative z-10">Certificada IMETROSC</span>
                            </div>
                          </div>

                          {/* Status com efeito pulsante premium - FONTE MENOR E MAIS BAIXO */}
                          <div className="space-y-2 mt-4">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="relative">
                                <div className="w-2 h-2 bg-green-400/80 rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-2 h-2 bg-green-400/40 rounded-full animate-ping"></div>
                              </div>
                              <span className="text-white/80 font-medium text-xs drop-shadow-sm">SISTEMA ONLINE</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer do crachá com reflexo - MAIS ESCURO */}
                      <div className="relative bg-gradient-to-r from-black/25 via-black/20 to-black/15 p-2 border-t border-white/20 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-transparent to-transparent"></div>
                        <div className="text-center text-xs text-white/80 font-mono drop-shadow-sm relative z-10">
                          ◆ ACESSO AUTORIZADO ◆
                        </div>
                      </div>

                      {/* Reflexo lateral direito - efeito dinâmico - REDUZIDO */}
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-white/30 via-white/15 to-transparent"></div>
                      
                      {/* Reflexo inferior - REDUZIDO */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo principal - mantido igual */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {/* Primeira linha - 2 colunas responsivas */}
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {/* Seção Apresentação - COM ÍCONE CLICÁVEL */}
                <div className="bg-gradient-to-br from-pastel-blue-dark/50 via-pastel-blue-medium/40 to-pastel-blue-light/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border-2 border-white/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <div 
                      className="p-2 bg-gradient-to-r from-pastel-blue-medium/50 to-pastel-blue-light/50 rounded-lg cursor-pointer transition-colors hover:from-pastel-blue-medium/70 hover:to-pastel-blue-light/70"
                      onClick={handleEstatisticasClick}
                    >
                      <Bot className="w-4 h-4 text-pastel-blue-light" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white">Quem é a OtavIA?</h3>
                  </div>
                  <p className="text-white/95 leading-relaxed text-xs md:text-sm">
                    A OtavIA é uma assistente virtual especializada em LGPD e proteção de dados, 
                    desenvolvida especificamente para o IMETROSC. Seu nome é uma homenagem ao 
                    polvo, conhecido por sua inteligência adaptativa e capacidade de resolver 
                    problemas complexos com elegância.
                  </p>
                </div>

                {/* Modos de Operação - COM LINK SECRETO */}
                <div className="bg-gradient-to-br from-pastel-blue-dark/50 via-pastel-blue-medium/40 to-pastel-blue-light/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border-2 border-white/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="p-2 bg-gradient-to-r from-pastel-blue-medium/50 to-pastel-blue-light/50 rounded-lg">
                      <Brain 
                        className="w-4 h-4 text-pastel-blue-light cursor-pointer" 
                        onClick={handleModosOperacaoClick}
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white">Modos de Operação</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-xl p-2 border-2 border-yellow-400/40">
                      <div className="flex items-center space-x-2 mb-1">
                        <Zap className="w-3 h-3 text-yellow-300" />
                        <h4 className="font-bold text-yellow-100 text-xs">Otavia Flash</h4>
                      </div>
                      <p className="text-xs text-white/90">Respostas rápidas e diretas</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-2 border-2 border-blue-400/40">
                      <div className="flex items-center space-x-2 mb-1">
                        <FileText className="w-3 h-3 text-blue-300" />
                        <h4 className="font-bold text-blue-100 text-xs">Modo Doneda</h4>
                      </div>
                      <p className="text-xs text-white/90">Análises aprofundadas e didáticas</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-2 border-2 border-pastel-blue-medium/40">
                      <div className="flex items-center space-x-2 mb-1">
                        <Star className="w-3 h-3 text-pastel-blue-light" />
                        <h4 className="font-bold text-pastel-blue-light text-xs">Otavia Pro</h4>
                      </div>
                      <p className="text-xs text-white/90">Assistência especializada para DPO</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Segunda linha - 2 colunas responsivas */}
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {/* Capacidades */}
                <div className="bg-gradient-to-br from-green-900/50 via-blue-900/40 to-pastel-blue-light/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border-2 border-white/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="p-2 bg-gradient-to-r from-green-500/50 to-blue-500/50 rounded-lg">
                      <Database className="w-4 h-4 text-green-200" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white">Principais Capacidades</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/95 font-medium text-xs">Interpretação da LGPD</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/95 font-medium text-xs">Análise de conformidade</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-pastel-blue-medium rounded-full flex-shrink-0"></div>
                      <span className="text-white/95 font-medium text-xs">Direitos dos titulares</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-pastel-blue-light rounded-full flex-shrink-0"></div>
                      <span className="text-white/95 font-medium text-xs">Gestão de incidentes</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/95 font-medium text-xs">Controle de depósito</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/95 font-medium text-xs">Auditoria de processos</span>
                    </div>
                  </div>
                </div>

                {/* Mensagem final */}
                <div className="bg-gradient-to-r from-pastel-blue-dark/60 via-pastel-blue-medium/50 to-pastel-blue-light/60 backdrop-blur-sm rounded-2xl p-4 md:p-5 border-2 border-white/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="p-2 bg-gradient-to-r from-pastel-blue-medium/50 to-pastel-blue-light/50 rounded-lg">
                      <Users className="w-4 h-4 text-pastel-blue-light" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold bg-gradient-to-r from-pastel-blue-light to-pastel-gray-light bg-clip-text text-transparent">
                      Desenvolvida para o IMETROSC
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm font-medium">
                    Sua parceira na jornada de conformidade com a LGPD
                  </p>
                  <div className="mt-3 bg-white/20 rounded-xl p-3 border border-white/30">
                    <p className="text-white/90 leading-relaxed text-xs md:text-sm">
                      A OtavIA oferece análise técnica especializada baseada nas melhores práticas 
                      da LGPD. Sempre recomendamos validação com o setor jurídico para decisões 
                      estratégicas e mitigação de riscos legais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Estilos CSS customizados para os efeitos 3D e animações */}
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .rotate-y-12 {
            transform: rotateY(12deg);
          }
          .-rotate-y-12 {
            transform: rotateY(-12deg);
          }
          @keyframes slide {
            0%, 100% { transform: translateX(-200px) rotate(12deg); opacity: 0; }
            50% { transform: translateX(200px) rotate(12deg); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default SobreOtaviaSection;
