
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

interface PromptCardProps {
  title: string;
  prompt: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}

const PromptCard = ({ title, prompt, icon, gradientFrom, gradientTo, iconColor }: PromptCardProps) => {
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    toast.success(`Prompt do ${title} copiado!`);
  };

  return (
    <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-lg`}>
            <div className={iconColor}>
              {icon}
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <Button
          onClick={handleCopyPrompt}
          variant="ghost"
          size="sm"
          className="text-white/70 hover:text-white hover:bg-white/10"
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>
      <div className="bg-black/30 rounded-lg p-4 border border-white/20">
        <pre className="text-white/90 text-sm whitespace-pre-wrap font-mono leading-relaxed">
          {prompt}
        </pre>
      </div>
    </Card>
  );
};

export default PromptCard;
