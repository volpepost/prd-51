import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Bot, Send, HelpCircle, Crown, Brain, Mic, MicOff, X, Copy } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import PdfFileAttachment from './PdfFileAttachment';
import PdfStatus from './PdfStatus';
import AudioControls from './AudioControls';
import ResponseThemeToggle from './ResponseThemeToggle';

interface AIChatProps {
  query: string;
  setQuery: (query: string) => void;
  response: string;
  isLoading: boolean;
  isLoadingGeneral: boolean;
  isLoadingDoneda: boolean;
  isLoadingOtavIA: boolean;
  selectedContext: string;
  isContextMode: boolean;
  setIsContextMode: (mode: boolean) => void;
  setSelectedContext: (context: string) => void;
  attachedFile: File | null;
  handleSendQuery: () => void;
  handleDonedaQuery: () => void;
  handleOtavIAQuery: () => void;
  handleFileUpload: (file: File) => void;
  removeAttachedFile: () => void;
  isReadingPDF: boolean;
  pdfText: string | null;
  pdfMetadata: any;
  previewText: string;
  extractionProgress: number;
  pdfError: string | null;
  currentMode?: 'flash' | 'doneda' | 'pro';
  getModeTitle?: () => string;
}

const AIChat = ({
  query,
  setQuery,
  response,
  isLoading,
  isLoadingGeneral,
  isLoadingDoneda,
  isLoadingOtavIA,
  selectedContext,
  isContextMode,
  setIsContextMode,
  setSelectedContext,
  attachedFile,
  handleSendQuery,
  handleDonedaQuery,
  handleOtavIAQuery,
  handleFileUpload,
  removeAttachedFile,
  isReadingPDF,
  pdfText,
  pdfMetadata,
  previewText,
  extractionProgress,
  pdfError,
  currentMode,
  getModeTitle
}: AIChatProps) => {
  const isMobile = useIsMobile();
  const [isDarkResponseTheme, setIsDarkResponseTheme] = useState(true);
  const [showResponse, setShowResponse] = useState(true);
  const { stop } = useTextToSpeech();
  const {
    isListening,
    transcript,
    isSupported,
    startListening,
    stopListening,
    resetTranscript
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      const newQuery = query + (query ? ' ' : '') + transcript;
      setQuery(newQuery);
      resetTranscript();
    }
  }, [transcript, setQuery, resetTranscript, query]);

  useEffect(() => {
    if (response) {
      setShowResponse(true);
    }
  }, [response]);

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const toggleResponseTheme = () => {
    setIsDarkResponseTheme(!isDarkResponseTheme);
  };

  const closeResponse = () => {
    stop();
    setShowResponse(false);
  };

  const copyResponse = async () => {
    if (response) {
      try {
        await navigator.clipboard.writeText(response);
        console.log('Resposta copiada para a área de transferência');
      } catch (error) {
        console.error('Erro ao copiar resposta:', error);
      }
    }
  };

  const getResponseTitle = () => {
    if (currentMode) {
      const agentName = currentMode === 'flash' ? 'Flash' : 
                       currentMode === 'doneda' ? 'Doneda' : 
                       currentMode === 'pro' ? 'Pro' : 'Flash';
      return `Análise do Presidente: ${agentName}`;
    }
    return 'Análise do Presidente: Flash';
  };

  return (
    <div className="space-y-4">
      <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-6" data-chat-section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {isLoading && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="relative">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg border border-white/30 animate-bounce">
                      <div className="flex space-x-1">
                         <div className="w-1.5 h-1.5 bg-pastel-blue-dark rounded-full animate-pulse"></div>
                         <div className="w-1.5 h-1.5 bg-pastel-blue-dark rounded-full animate-pulse" style={{
                           animationDelay: '0.2s'
                         }}></div>
                         <div className="w-1.5 h-1.5 bg-pastel-blue-dark rounded-full animate-pulse" style={{
                          animationDelay: '0.4s'
                        }}></div>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-4 border-l-transparent border-r-transparent border-t-white/90"></div>
                    <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-white/70 rounded-full animate-float" style={{
                      animationDelay: '0.1s'
                    }}></div>
                    <div className="absolute top-4 left-8 w-1 h-1 bg-white/50 rounded-full animate-float" style={{
                      animationDelay: '0.3s'
                    }}></div>
                  </div>
                </div>
              )}
              
              <Bot className={`w-8 h-8 text-cyan-400 transition-all duration-500 ${isLoading ? 'animate-float animate-pulse' : 'hover:scale-110'}`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Presidente - Assistente Virtual</h3>
              {selectedContext && isContextMode && (
                 <p className="text-pastel-blue-light text-sm mt-1">
                  Contexto: {selectedContext}
                </p>
              )}
              {attachedFile && (
                <p className="text-pastel-blue-light text-sm mt-1">
                  📎 {attachedFile.name}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <Textarea 
              placeholder={isContextMode && selectedContext ? `Digite o assunto específico sobre ${selectedContext.split(' - ')[0].toLowerCase()}...` : "Digite sua consulta..."}
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-white/60 min-h-[80px] resize-none pr-12 focus-visible:ring-pastel-blue-medium focus-visible:ring-2 focus-visible:border-pastel-blue-medium focus-visible:ring-offset-0 transition-all duration-300 focus-visible:shadow-lg focus-visible:shadow-pastel-blue-medium/25"
              rows={2}
            />
            
            {/* Voice Recognition Button */}
            {isSupported && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleVoiceToggle}
                disabled={isLoading}
                className={`absolute top-2 right-2 w-8 h-8 p-0 ${
                  isListening 
                    ? 'text-red-400 hover:text-red-300 bg-red-900/20 hover:bg-red-900/30' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                title={isListening ? "Parar gravação" : "Iniciar comando por voz"}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
            )}
            
            {isContextMode && selectedContext && (
              <div className="absolute top-2 right-12">
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setIsContextMode(false);
                    setSelectedContext('');
                  }} 
                  className="text-white/60 hover:text-white hover:bg-white/10 h-6 w-6 p-0"
                >
                  ×
                </Button>
              </div>
            )}
          </div>
          
          {/* Voice Status Indicator */}
          {isListening && (
            <div className="flex items-center space-x-2 bg-red-900/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-400/30">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-300 text-sm font-medium">
                Ouvindo... Fale sua pergunta
              </span>
            </div>
          )}
          
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-1">
              <PdfFileAttachment 
                attachedFile={attachedFile} 
                isReading={isReadingPDF} 
                error={pdfError} 
                onFileSelect={handleFileUpload} 
                onRemove={removeAttachedFile} 
              />
              <Button 
                className="border-white/50 text-white hover:bg-white/20 hover:border-white/70 bg-white/10 hover:shadow-md hover:shadow-white/20 transition-all duration-300" 
                variant="outline" 
                onClick={handleOtavIAQuery} 
                disabled={isLoading}
                size="sm"
                title="Presidente Pro"
              >
                <Brain className="w-3 h-3 text-white" />
                {!isMobile && (
                  <span className="ml-1 text-xs text-white">
                    {isLoadingOtavIA ? "Analisando..." : "Pro"}
                  </span>
                )}
              </Button>
              <Button 
                className="border-white/50 text-white hover:bg-white/20 hover:border-white/70 bg-white/10 hover:shadow-md hover:shadow-white/20 transition-all duration-300" 
                variant="outline" 
                onClick={handleDonedaQuery} 
                disabled={isLoading}
                size="sm"
                title="Modo Presidente"
              >
                <Crown className="w-3 h-3 text-white" />
                {!isMobile && (
                  <span className="ml-1 text-xs text-white">
                    {isLoadingDoneda ? "Consultando..." : "Presidente"}
                  </span>
                )}
              </Button>
              <Button 
                className="border-white/50 text-white hover:bg-white/20 hover:border-white/70 bg-white/10 hover:shadow-md hover:shadow-white/20 transition-all duration-300" 
                variant="outline" 
                onClick={handleSendQuery} 
                disabled={isLoading}
                size="sm"
                title="Presidente Flash"
              >
                <Send className="w-3 h-3 text-white" />
                {!isMobile && (
                  <span className="ml-1 text-xs text-white">
                    {isLoadingGeneral ? "Processando..." : "Flash"}
                  </span>
                )}
              </Button>
            </div>
          </div>

          <PdfStatus 
            attachedFile={attachedFile} 
            isReadingPDF={isReadingPDF} 
            pdfText={pdfText} 
            pdfMetadata={pdfMetadata} 
            previewText={previewText} 
            extractionProgress={extractionProgress} 
            pdfError={pdfError} 
            onRemoveFile={removeAttachedFile} 
          />

          {(response || isLoading) && showResponse && (
            <Card className={`backdrop-blur-sm border-white/10 p-4 mt-4 transition-all duration-300 relative ${
              isDarkResponseTheme 
                ? 'bg-white/5' 
                : 'bg-white/95 border-gray-200/30'
            }`}>
              {/* Close Button */}
              <Button
                onClick={closeResponse}
                variant="ghost"
                size="sm"
                className={`absolute top-2 right-2 w-6 h-6 p-0 z-10 ${
                  isDarkResponseTheme 
                    ? 'text-white/60 hover:text-white hover:bg-white/10' 
                     : 'text-pastel-blue-dark hover:text-pastel-blue-dark hover:bg-pastel-blue-light/50'
                }`}
                title="Fechar resposta"
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="flex items-start justify-between mb-2 pr-8">
                <div className="flex items-center space-x-3">
                  <Bot className={`w-8 h-8 flex-shrink-0 transition-all duration-500 ${
                    isDarkResponseTheme ? 'text-cyan-400' : 'text-cyan-600'
                  } ${isLoading ? 'animate-float animate-pulse' : ''}`} />
                  <h4 className={`font-bold text-xl ${
                    isDarkResponseTheme ? 'text-white' : 'text-gray-800'
                  }`}>
                    {getResponseTitle()}
                  </h4>
                </div>
                
                {/* Copy, Audio Controls and Theme Toggle */}
                {response && !isLoading && (
                  <div className="flex-shrink-0 flex items-center space-x-2">
                    <Button
                      onClick={copyResponse}
                      variant="ghost"
                      size="sm"
                      className={`w-8 h-8 p-0 ${
                        isDarkResponseTheme 
                          ? 'text-white/60 hover:text-white hover:bg-white/10' 
                          : 'text-pastel-blue-dark hover:text-pastel-blue-dark hover:bg-pastel-blue-light/50'
                      }`}
                      title="Copiar resposta"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <AudioControls text={response} autoPlay={true} compact={true} />
                    <ResponseThemeToggle 
                      isDarkTheme={isDarkResponseTheme} 
                      onToggle={toggleResponseTheme} 
                    />
                  </div>
                )}
              </div>
              
              <div className="ml-11">
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-pastel-blue-medium"></div>
                     <p className={isDarkResponseTheme ? 'text-pastel-blue-light' : 'text-gray-600'}>
                      Analisando conformidade LGPD...
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className={`whitespace-pre-wrap ${
                      isDarkResponseTheme ? 'text-white' : 'text-gray-800'
                    }`}>{response}</p>
                  </div>
                )}
              </div>
              
              {response && !isLoading && (
                <div className={`flex items-center space-x-2 backdrop-blur-sm px-3 py-2 rounded-lg border mt-4 ${
                  isDarkResponseTheme 
                     ? 'bg-pastel-gray-light/20 border-pastel-gray-medium/30' 
                     : 'bg-pastel-gray-light/80 border-pastel-gray-medium/50'
                }`}>
                  <HelpCircle className={`w-4 h-4 flex-shrink-0 ${
                    isDarkResponseTheme ? 'text-pastel-blue-medium' : 'text-pastel-blue-dark'
                  }`} />
                  <span className={`text-xs font-medium ${
                    isDarkResponseTheme ? 'text-pastel-blue-medium' : 'text-pastel-blue-dark'
                  }`}>
                    Esta análise não substitui parecer jurídico formal do setor competente
                  </span>
                </div>
              )}
            </Card>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AIChat;
