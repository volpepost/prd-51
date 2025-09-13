
import { useState } from 'react';
import { useAudio } from "@/hooks/useAudio";

export const useOtaviaQueries = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoadingGeneral, setIsLoadingGeneral] = useState(false);
  const [isLoadingDoneda, setIsLoadingDoneda] = useState(false);
  const [isLoadingOtavIA, setIsLoadingOtavIA] = useState(false);
  const [apiKey] = useState('AIzaSyBc-YhczNX-0O-GgFQ9zZ8YQUc0K5wbwAc');
  const [selectedContext, setSelectedContext] = useState('');
  const [isContextMode, setIsContextMode] = useState(false);
  const [currentMode, setCurrentMode] = useState<'flash' | 'doneda' | 'pro'>('flash');

  const { playHarmonicSound } = useAudio();

  const sendQueryToOtavia = async (finalQuery: string, setLoadingState: (loading: boolean) => void, mode: 'flash' | 'doneda' | 'pro' = 'flash') => {
    setLoadingState(true);
    setResponse('');
    setIsContextMode(false);
    
    // Define o modo atual ANTES de fazer a requisição
    setCurrentMode(mode);
    
    console.log("Enviando consulta para Otavia:", finalQuery);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: finalQuery
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024
          }
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Não foi possível gerar uma resposta.";
      setResponse(generatedText);
      setSelectedContext('');
      playHarmonicSound();
    } catch (error) {
      console.error("Erro ao consultar Otavia:", error);
      let errorMessage = "Erro ao processar a pergunta. Tente novamente.";
      if (error instanceof Error) {
        if (error.message.includes('API_KEY_INVALID')) {
          errorMessage = "Chave da API inválida. Verifique sua configuração.";
        } else if (error.message.includes('QUOTA_EXCEEDED')) {
          errorMessage = "Limite da API excedido. Tente novamente mais tarde.";
        } else {
          errorMessage = `Erro: ${error.message}`;
        }
      }
      setResponse(errorMessage);
      console.error("Erro:", errorMessage);
    } finally {
      setLoadingState(false);
    }
  };

  const buildFinalQuery = (attachedFile: File | null, pdfText: string, pdfMetadata: any) => {
    let finalQuery = '';
    if (attachedFile && pdfText) {
      finalQuery = query.trim() || `Analise o documento PDF anexado "${attachedFile.name}" e forneça insights sobre conformidade com LGPD, se aplicável.`;
    } else {
      finalQuery = query.trim();
      if (!finalQuery) {
        console.warn("Por favor, digite uma pergunta antes de enviar.");
        return null;
      }
    }
    if (isContextMode && selectedContext) {
      finalQuery = `Contexto: ${selectedContext}. Pergunta: ${finalQuery}`;
    }
    if (attachedFile && pdfText) {
      finalQuery += `\n\nConteúdo do PDF anexado (${attachedFile.name}):\n${pdfText}`;
      if (pdfMetadata) {
        finalQuery += `\n\nMetadados do PDF:\n- Páginas: ${pdfMetadata.pages}\n- Tipo de documento: ${pdfMetadata.documentType || 'Não identificado'}\n- Tamanho: ${Math.round(pdfMetadata.fileSize / 1024)} KB`;
        if (pdfMetadata.title) finalQuery += `\n- Título: ${pdfMetadata.title}`;
        if (pdfMetadata.author) finalQuery += `\n- Autor: ${pdfMetadata.author}`;
      }
    }
    return finalQuery;
  };

  const isLoading = isLoadingGeneral || isLoadingDoneda || isLoadingOtavIA;

  const getModeTitle = () => {
    switch (currentMode) {
      case 'flash':
        return 'Flash';
      case 'doneda':
        return 'Doneda';
      case 'pro':
        return 'Pro';
      default:
        return 'Flash';
    }
  };

  return {
    query,
    setQuery,
    response,
    setResponse,
    isLoadingGeneral,
    setIsLoadingGeneral,
    isLoadingDoneda,
    setIsLoadingDoneda,
    isLoadingOtavIA,
    setIsLoadingOtavIA,
    selectedContext,
    setSelectedContext,
    isContextMode,
    setIsContextMode,
    sendQueryToOtavia,
    buildFinalQuery,
    isLoading,
    currentMode,
    getModeTitle
  };
};
