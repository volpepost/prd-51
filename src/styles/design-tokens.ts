// Design Tokens - Sistema de Design Centralizado
// Este arquivo centraliza todos os tokens de design para fácil manutenção

export const DesignTokens = {
  // Cores Base do Sistema (HSL)
  colors: {
    // Paleta Principal - Azul Pastel
    primary: {
      light: '210 40% 85%',      // --pastel-blue-light
      medium: '220 35% 70%',     // --pastel-blue-medium  
      dark: '230 40% 55%',       // --pastel-blue-dark
    },
    
    // Paleta Secundária - Cinza
    secondary: {
      light: '210 15% 95%',      // --pastel-gray-light
      medium: '210 20% 85%',     // --pastel-gray-medium
      white: '210 25% 98%',      // --pastel-white
    },
    
    // Cores de Estado
    success: {
      light: '120 40% 85%',
      medium: '120 35% 70%', 
      dark: '120 40% 55%',
    },
    
    warning: {
      light: '45 40% 85%',
      medium: '45 35% 70%',
      dark: '45 40% 55%',
    },
    
    error: {
      light: '0 40% 85%',
      medium: '0 35% 70%',
      dark: '0 40% 55%',
    },
    
    // Cores do Sistema
    background: '210 25% 98%',
    foreground: '220 30% 25%',
    border: '210 20% 86%',
    muted: '210 20% 88%',
  },
  
  // Gradientes do Sistema
  gradients: {
    primary: 'from-[hsl(230_40%_55%)] to-[hsl(220_35%_70%)]',
    secondary: 'from-[hsl(210_40%_85%)] to-[hsl(210_15%_95%)]',
    accent: 'from-[hsl(210_40%_85%)]/60 to-[hsl(210_25%_98%)]/50',
    glass: 'from-[hsl(210_40%_85%)]/20 via-[hsl(220_35%_70%)]/15 to-[hsl(210_15%_95%)]/20',
  },
  
  // Sombras do Sistema
  shadows: {
    primary: '0 0 20px hsl(220 35% 70% / 0.3)',
    primaryGlow: '0 0 40px hsl(220 35% 70% / 0.6)',
    card: '0 10px 30px -10px hsl(220 35% 70% / 0.3)',
    glass: '0 0 40px hsl(210 40% 85% / 0.4)',
  },
  
  // Estados de Hover/Focus
  states: {
    hover: {
      background: 'hsl(210 25% 98% / 0.2)',
      border: 'hsl(220 35% 70% / 0.4)',
    },
    focus: {
      ring: 'hsl(220 35% 70%)',
      shadow: 'hsl(220 35% 70% / 0.25)',
    }
  }
} as const;

// Utilitários para uso nos componentes
export const getColorClass = (colorPath: string) => {
  const parts = colorPath.split('.');
  let current: any = DesignTokens.colors;
  
  for (const part of parts) {
    current = current[part];
  }
  
  return current ? `hsl(${current})` : '';
};

export const getGradientClass = (gradientName: keyof typeof DesignTokens.gradients) => {
  return `bg-gradient-to-r ${DesignTokens.gradients[gradientName]}`;
};