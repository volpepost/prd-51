
import React from 'react';
import { Card } from "@/components/ui/card";
import { FileText, CheckCircle, AlertTriangle, X } from 'lucide-react';

interface PdfStatusProps {
  attachedFile: File | null;
  isReadingPDF: boolean;
  pdfText: string | null;
  pdfMetadata: any;
  previewText: string;
  extractionProgress: number;
  pdfError: string | null;
  onRemoveFile: () => void;
}

const PdfStatus: React.FC<PdfStatusProps> = ({
  attachedFile,
  isReadingPDF,
  pdfText,
  pdfMetadata,
  previewText,
  extractionProgress,
  pdfError,
  onRemoveFile
}) => {
  if (!attachedFile && !isReadingPDF) return null;

  return (
    <Card className="bg-white/5 border-white/10 p-3">
      <div className="flex items-start space-x-3">
        <FileText className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-200 truncate">
              {attachedFile?.name}
            </span>
            {pdfText && !isReadingPDF && (
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            )}
            {pdfError && (
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
            )}
          </div>
          
          {isReadingPDF && (
            <div className="space-y-2">
              <div className="w-full bg-slate-600/30 rounded-full h-2">
                <div 
                  className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${extractionProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-300">
                Extraindo texto do PDF... {extractionProgress}%
              </p>
            </div>
          )}
          
          {pdfText && !isReadingPDF && pdfMetadata && (
            <div className="space-y-1">
              <p className="text-xs text-green-300">
                ✓ PDF processado - {pdfMetadata.pages} páginas
              </p>
              {previewText && (
                <div className="bg-slate-800/50 rounded p-2 mt-2">
                  <p className="text-xs text-slate-300 italic">
                    Preview: "{previewText}"
                  </p>
                </div>
              )}
            </div>
          )}
          
          {pdfError && (
            <p className="text-xs text-red-300 mt-1">
              {pdfError}
            </p>
          )}
        </div>
        
        <button
          onClick={onRemoveFile}
          className="w-5 h-5 rounded-full bg-slate-600/30 hover:bg-slate-700/40 border border-slate-400/40 flex items-center justify-center transition-all flex-shrink-0"
          title="Remover PDF"
        >
          <X className="w-3 h-3 text-slate-100" />
        </button>
      </div>
    </Card>
  );
};

export default PdfStatus;
