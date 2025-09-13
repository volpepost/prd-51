
import React, { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

type PdfFileAttachmentProps = {
  attachedFile: File | null;
  isReading: boolean;
  error: string | null;
  onFileSelect: (file: File) => void;
  onRemove: () => void;
};

const PdfFileAttachment: React.FC<PdfFileAttachmentProps> = ({
  attachedFile,
  isReading,
  error,
  onFileSelect,
  onRemove,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center space-x-2">
      <input
        type="file"
        accept=".pdf"
        className="hidden"
        id="file-upload"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files && e.target.files[0];
          if (file) onFileSelect(file);
        }}
        aria-label="Anexar PDF"
        disabled={isReading}
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={`border-pastel-blue-dark/70 text-pastel-blue-light hover:bg-pastel-blue-dark/40 hover:border-pastel-blue-medium/90 hover:text-pastel-white bg-pastel-blue-dark/40 hover:shadow-[0_0_12px_hsl(220_35%_70%/0.4)] transition-all duration-300 backdrop-blur-sm ${
            attachedFile ? "border-green-500/70" : ""
          }`}
          asChild
          disabled={isReading}
        >
          <span>
            <Paperclip className="w-4 h-4" />
          </span>
        </Button>
      </label>
      {attachedFile && (
        <div className="flex items-center space-x-2 pl-2">
          {!isMobile && (
            <span className="text-xs text-green-200">{attachedFile.name}</span>
          )}
          <button
            onClick={onRemove}
            className="w-5 h-5 rounded-full bg-slate-600/30 hover:bg-slate-700/40 border border-slate-400/40 flex items-center justify-center transition-all"
            title="Remover PDF"
          >
            <X className="w-3 h-3 text-slate-100" />
          </button>
        </div>
      )}
      {error && (
        <span className="ml-2 text-xs text-red-300">{error}</span>
      )}
    </div>
  );
};

export default PdfFileAttachment;
