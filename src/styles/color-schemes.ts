// Esquemas de Cores Organizados
// Define combinações de cores para diferentes contextos

import { DesignTokens } from './design-tokens';

export const ColorSchemes = {
  // Cards e Seções
  cards: {
    primary: {
      background: `bg-gradient-to-r ${DesignTokens.gradients.primary}`,
      hover: 'hover:bg-[hsl(210_25%_98%/0.2)]',
      border: 'border-[hsl(220_35%_70%/0.2)]',
      text: 'text-white',
      shadow: 'hover:shadow-lg hover:shadow-[hsl(220_35%_70%/0.2)]',
    },
    
    secondary: {
      background: `bg-gradient-to-r ${DesignTokens.gradients.secondary}`,
      hover: 'hover:bg-[hsl(210_15%_95%/0.8)]',
      border: 'border-[hsl(210_40%_85%)]',
      text: 'text-[hsl(220_30%_25%)]',
      shadow: 'hover:shadow-md hover:shadow-[hsl(210_40%_85%/0.2)]',
    },
    
    glass: {
      background: 'backdrop-blur-glass bg-imetro-glass',
      border: 'border-imetro-glass-border',
      hover: 'hover:bg-white/20',
      text: 'text-white/90',
    }
  },
  
  // Badges e Etiquetas
  badges: {
    primary: {
      background: `bg-gradient-to-tl from-[hsl(230_40%_55%/0.8)] to-[hsl(220_35%_70%/0.8)]`,
      text: 'text-white',
      shadow: 'shadow-lg',
    },
    
    accent: {
      background: 'bg-[hsl(210_40%_85%/0.5)]',
      text: 'text-[hsl(230_40%_55%)]',
      border: 'border-[hsl(210_40%_85%)]',
    }
  },
  
  // Botões
  buttons: {
    primary: {
      background: `bg-gradient-to-r ${DesignTokens.gradients.primary}`,
      hover: 'hover:from-[hsl(230_40%_50%)] hover:to-[hsl(220_35%_65%)]',
      text: 'text-white',
      border: 'border-[hsl(220_35%_70%/0.6)]',
      shadow: 'hover:shadow-md hover:shadow-[hsl(220_35%_70%/0.2)]',
    },
    
    secondary: {
      background: 'bg-[hsl(210_40%_85%/0.2)]',
      hover: 'hover:bg-[hsl(210_40%_85%/0.3)]',
      text: 'text-[hsl(230_40%_55%)]',
      border: 'border-[hsl(210_40%_85%/0.5)]',
    },
    
    ghost: {
      background: 'bg-transparent',
      hover: 'hover:bg-[hsl(210_25%_98%/0.1)]',
      text: 'text-white/60 hover:text-white',
      border: 'border-white/10 hover:border-white/20',
    }
  },
  
  // Alertas e Notificações
  alerts: {
    info: {
      background: 'bg-[hsl(210_40%_85%/0.5)]',
      border: 'border-[hsl(210_40%_85%)]',
      text: 'text-[hsl(230_40%_55%)]',
      icon: 'text-[hsl(230_40%_55%)]',
    },
    
    success: {
      background: 'bg-[hsl(120_40%_85%/0.5)]',
      border: 'border-[hsl(120_40%_85%)]',
      text: 'text-[hsl(120_40%_25%)]',
      icon: 'text-[hsl(120_40%_55%)]',
    },
    
    warning: {
      background: 'bg-[hsl(45_40%_85%/0.5)]',
      border: 'border-[hsl(45_40%_85%)]',
      text: 'text-[hsl(45_40%_25%)]',
      icon: 'text-[hsl(45_40%_55%)]',
    },
    
    error: {
      background: 'bg-[hsl(0_40%_85%/0.5)]',
      border: 'border-[hsl(0_40%_85%)]',
      text: 'text-[hsl(0_40%_25%)]',
      icon: 'text-[hsl(0_40%_55%)]',
    }
  },
  
  // Efeitos e Animações
  effects: {
    glow: {
      primary: 'animate-glow',
      shadow: 'drop-shadow-[0_0_20px_hsl(220_35%_70%/0.3)]',
    },
    
    hover: {
      scale: 'hover:scale-105',
      float: 'hover:animate-float',
      blur: 'group-hover:opacity-50',
    }
  }
} as const;

// Utilitário para combinar classes de esquema
export const combineScheme = (scheme: any) => {
  return Object.values(scheme).join(' ');
};

// Utilitário para obter esquema completo
export const getScheme = (category: keyof typeof ColorSchemes, variant: string) => {
  const categorySchemes = ColorSchemes[category] as any;
  return categorySchemes[variant] || {};
};