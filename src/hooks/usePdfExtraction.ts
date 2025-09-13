
import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";

// Seta explicitamente o workerSrc apontando para o bundle importado acima
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface PdfMetadata {
  title?: string;
  author?: string;
  creator?: string;
  producer?: string;
  creationDate?: string;
  modificationDate?: string;
  keywords?: string;
  subject?: string;
  pages: number;
  hasText: boolean;
  fileSize: number;
  documentType?: 'NORMATIVO' | 'TÉCNICO' | 'OPERACIONAL' | 'EDUCATIVO';
  language?: string;
  isScanned?: boolean;
}

interface PdfInfo {
  Title?: string;
  Author?: string;
  Creator?: string;
  Producer?: string;
  CreationDate?: string;
  ModDate?: string;
  Keywords?: string;
  Subject?: string;
  [key: string]: any;
}

export const usePdfExtraction = () => {
  const [isReadingPDF, setIsReadingPDF] = useState(false);
  const [pdfText, setPdfText] = useState<string | null>(null);
  const [pdfMetadata, setPdfMetadata] = useState<PdfMetadata | null>(null);
  const [extractionProgress, setExtractionProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [previewText, setPreviewText] = useState<string>('');

  const validatePDF = (file: File): string | null => {
    // Verificação de tamanho (limite de 20MB para PDFs técnicos)
    if (file.size > 20 * 1024 * 1024) {
      return "PDF muito grande (máximo 20MB). Tente um arquivo menor ou comprima o PDF.";
    }

    // Verificação de tipo
    if (file.type !== "application/pdf") {
      return "Apenas arquivos PDF são suportados.";
    }

    return null;
  };

  const detectDocumentType = (text: string, metadata: PdfInfo): 'NORMATIVO' | 'TÉCNICO' | 'OPERACIONAL' | 'EDUCATIVO' => {
    const textLower = text.toLowerCase();
    const titleLower = (metadata.Title || '').toLowerCase();
    
    // Detecta documentos normativos
    if (textLower.includes('portaria') || textLower.includes('resolução') || 
        textLower.includes('lei') || textLower.includes('decreto') ||
        textLower.includes('rtm') || textLower.includes('regulamento técnico') ||
        titleLower.includes('portaria') || titleLower.includes('resolução')) {
      return 'NORMATIVO';
    }
    
    // Detecta documentos técnicos
    if (textLower.includes('manual') || textLower.includes('especificação') ||
        textLower.includes('procedimento de ensaio') || textLower.includes('instalação') ||
        textLower.includes('manutenção') || textLower.includes('calibração') ||
        titleLower.includes('manual') || titleLower.includes('técnico')) {
      return 'TÉCNICO';
    }
    
    // Detecta documentos operacionais
    if (textLower.includes('relatório') || textLower.includes('formulário') ||
        textLower.includes('procedimento operacional') || textLower.includes('fluxo') ||
        titleLower.includes('relatório') || titleLower.includes('procedimento')) {
      return 'OPERACIONAL';
    }
    
    return 'EDUCATIVO';
  };

  const extractTextFromPDF = async (file: File) => {
    setIsReadingPDF(true);
    setError(null);
    setPdfText(null);
    setPdfMetadata(null);
    setPreviewText('');
    setExtractionProgress(0);

    try {
      // Validação inicial
      const validationError = validatePDF(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      const arrayBuffer = await file.arrayBuffer();
      setExtractionProgress(10);

      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      setExtractionProgress(20);

      // Extrai metadados com tipo seguro
      const metadata = await pdf.getMetadata().catch(() => ({ info: {}, metadata: null }));
      const info: PdfInfo = metadata.info || {};

      const pdfMeta: PdfMetadata = {
        title: info.Title || '',
        author: info.Author || '',
        creator: info.Creator || '',
        producer: info.Producer || '',
        creationDate: info.CreationDate || '',
        modificationDate: info.ModDate || '',
        keywords: info.Keywords || '',
        subject: info.Subject || '',
        pages: pdf.numPages,
        hasText: false,
        fileSize: file.size,
        language: 'pt-BR', // Assumindo português brasileiro por padrão
        isScanned: false
      };

      setExtractionProgress(30);

      let fullText = '';
      const maxPagesToProcess = Math.min(pdf.numPages, 100); // Aumentado para 100 páginas
      let textCharCount = 0;

      for (let pageNum = 1; pageNum <= maxPagesToProcess; pageNum++) {
        try {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          
          if (content.items.length > 0) {
            pdfMeta.hasText = true;
          }

          const pageText = content.items
            .map((item: any) => {
              let text = item.str || '';
              // Preserva quebras de linha e formatação básica
              if (item.hasEOL) {
                text += '\n';
              }
              return text;
            })
            .join(' ')
            .replace(/\s+/g, ' ') // Normaliza espaços
            .trim();

          if (pageText.length > 0) {
            fullText += `\n--- Página ${pageNum} ---\n${pageText}\n`;
            textCharCount += pageText.length;
          }
          
          // Atualiza progresso
          setExtractionProgress(30 + (pageNum / maxPagesToProcess) * 60);

          // Define preview com as primeiras 400 caracteres do primeiro texto significativo
          if (!previewText && pageText.trim().length > 50) {
            const preview = pageText.trim().substring(0, 400);
            setPreviewText(preview + (pageText.length > 400 ? '...' : ''));
          }

        } catch (pageError) {
          console.warn(`Erro ao processar página ${pageNum}:`, pageError);
          continue;
        }
      }

      // Detecta se é PDF escaneado baseado na quantidade de texto
      if (textCharCount < 100 && pdf.numPages > 2) {
        pdfMeta.isScanned = true;
      }

      // Detecta tipo de documento
      pdfMeta.documentType = detectDocumentType(fullText, info);

      if (pdf.numPages > maxPagesToProcess) {
        fullText += `\n[NOTA: PDF possui ${pdf.numPages} páginas. Processadas as primeiras ${maxPagesToProcess} páginas para otimização.]`;
      }

      setPdfMetadata(pdfMeta);

      if (!pdfMeta.hasText) {
        setError("PDF não contém texto extraível. Pode ser um PDF escaneado ou de imagens. Tente converter para um formato com texto pesquisável.");
        setPdfText(null);
      } else {
        const processedText = fullText.trim();
        setPdfText(processedText);
        
        if (processedText.length < 200) {
          setError("PDF contém muito pouco texto. Verifique se o arquivo está correto ou se é um PDF escaneado.");
        }
      }

      setExtractionProgress(100);

    } catch (err) {
      console.error("Erro ao processar PDF:", err);
      
      let errorMessage = "Falha ao processar o PDF.";
      if (err instanceof Error) {
        if (err.message.includes('Invalid PDF')) {
          errorMessage = "Arquivo PDF corrompido ou inválido. Tente um arquivo diferente.";
        } else if (err.message.includes('password')) {
          errorMessage = "PDF protegido por senha não é suportado. Remova a proteção e tente novamente.";
        } else if (err.message.includes('network')) {
          errorMessage = "Erro de rede ao processar PDF. Verifique sua conexão.";
        } else {
          errorMessage = `Erro técnico: ${err.message}`;
        }
      }
      
      setError(errorMessage);
      setPdfText(null);
      setPdfMetadata(null);
      setPreviewText('');
    } finally {
      setIsReadingPDF(false);
    }
  };

  const reset = () => {
    setPdfText(null);
    setPdfMetadata(null);
    setIsReadingPDF(false);
    setError(null);
    setPreviewText('');
    setExtractionProgress(0);
  };

  return { 
    isReadingPDF, 
    pdfText, 
    pdfMetadata,
    previewText,
    extractionProgress,
    error, 
    extractTextFromPDF, 
    reset 
  };
};
