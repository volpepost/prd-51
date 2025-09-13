
import { useEventHandlers } from "@/hooks/useEventHandlers";

export const useIndexHandlers = (indexData: any) => {
  const { 
    showSection,
    setSelectedContext,
    setIsContextMode,
    setResponse,
    attachedFile,
    setAttachedFile,
    pdfText,
    pdfMetadata,
    buildFinalQuery,
    sendQueryToOtavia,
    setIsLoadingGeneral,
    setIsLoadingDoneda,
    setIsLoadingOtavIA,
    extractTextFromPDF,
    resetPdfState,
    currentMode,
    getModeTitle
  } = indexData;

  const { handleServiceClick, handleQuestionClick } = useEventHandlers(
    showSection,
    setSelectedContext,
    setIsContextMode,
    setResponse
  );

  const handleShowSobreOtavia = () => {
    showSection('sobreOtavia');
    setTimeout(() => {
      const sobreOtaviaSection = document.querySelector('[data-sobre-otavia-section]');
      if (sobreOtaviaSection) {
        sobreOtaviaSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      console.warn("Apenas arquivos PDF são suportados.");
      return;
    }
    setAttachedFile(file);
    await extractTextFromPDF(file);
  };

  const removeAttachedFile = () => {
    setAttachedFile(null);
    resetPdfState();
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSendQuery = async () => {
    const finalQuery = buildFinalQuery(attachedFile, pdfText, pdfMetadata);
    if (!finalQuery) return;

    const prompt = `Responda de forma clara e natural, sem usar formatação especial, símbolos de destaque, asteriscos ou qualquer tipo de marcação visual.

Suas Especialidades:
- Interpretação e aplicação da LGPD (Lei nº 13.709/2018)
- Fundamente suas respostas com referências diretas aos artigos da LGPD
- Análise de conformidade e mitigação de riscos
- Orientações sobre direitos dos titulares
- Bases legais para tratamento de dados
- Procedimentos para incidentes de segurança

Sempre mantenha um tom profissional, didático e focado em soluções práticas. Use apenas linguagem natural e fluida, sem qualquer tipo de formatação especial, asteriscos ou símbolos.

Pergunta: ${finalQuery}`;

    await sendQueryToOtavia(prompt, setIsLoadingGeneral, 'flash');
    if (attachedFile) {
      removeAttachedFile();
    }
  };

  const handleDonedaQuery = async () => {
    const finalQuery = buildFinalQuery(attachedFile, pdfText, pdfMetadata);
    if (!finalQuery) return;

    const donedaPrompt = `Responda no "Modo Doneda", oferecendo análises profundas e didáticas sobre LGPD. Responda de forma clara e natural, sem usar formatação especial, símbolos de destaque, asteriscos ou qualquer tipo de marcação visual.

Características do Modo Doneda:
- Explicações fundamentadas em princípios teóricos e práticos
- Linguagem clara e didática, mesmo para conceitos complexos
- Foco na compreensão dos "porquês" da LGPD
- Visão crítica e contextualizada sobre proteção de dados
- Aplicação específica para órgãos públicos como o IMETROSC

Use apenas linguagem natural e fluida, sem qualquer formatação especial, asteriscos ou símbolos. Sempre termine perguntando: "A explicação foi clara e atendeu às suas expectativas? Caso precise de uma análise mais aprofundada ou técnica sobre este ponto, por favor, me diga!"

Pergunta: ${finalQuery}`;

    await sendQueryToOtavia(donedaPrompt, setIsLoadingDoneda, 'doneda');
    if (attachedFile) {
      removeAttachedFile();
    }
  };

  const handleOtavIAQuery = async () => {
    const finalQuery = buildFinalQuery(attachedFile, pdfText, pdfMetadata);
    if (!finalQuery) return;

    const otavIAPrompt = `Responda no "Modo Pro", como uma assistente de IA altamente especializada, projetada para ser o braço direito do Encarregado de Dados (DPO) e otimizar a conformidade com a LGPD. Responda de forma clara e natural, sem usar formatação especial, símbolos de destaque, asteriscos ou qualquer tipo de marcação visual.

Suas Especialidades Avançadas:
1. Especialista em LGPD: Interpretação avançada, análise de risco, gestão de incidentes, direitos dos titulares
2. Gestão Documental: Organização, registros de tratamento, comunicações formais
3. Proteção de Evidências: Gestão segura de documentos, rastreabilidade, confidencialidade

Princípios de Atuação:
- Proatividade: Antecipe necessidades e problemas
- Clareza: Conceitos complexos de forma acessível
- Pragmatismo: Soluções práticas e acionáveis
- Múltiplas Soluções: Apresente alternativas quando possível

Use apenas linguagem natural e fluida, sem qualquer formatação especial, asteriscos ou símbolos. Inclua apenas esta observação legal no final: As informações fornecidas são baseadas na LGPD e boas práticas. Recomenda-se validação com o Setor Jurídico para decisões estratégicas e mitigação de riscos legais.

Pergunta: ${finalQuery}`;

    await sendQueryToOtavia(otavIAPrompt, setIsLoadingOtavIA, 'pro');
    if (attachedFile) {
      removeAttachedFile();
    }
  };

  return {
    handleServiceClick,
    handleQuestionClick,
    handleShowSobreOtavia,
    handleFileUpload,
    removeAttachedFile,
    handleSendQuery,
    handleDonedaQuery,
    handleOtavIAQuery,
    currentMode,
    getModeTitle
  };
};
