// Componentes Temáticos Reutilizáveis
// Componentes básicos que seguem o sistema de design

import React from 'react';
import { cn } from '@/lib/utils';
import { ColorSchemes, combineScheme } from '@/styles/color-schemes';

// Card Temático
interface ThemedCardProps {
  variant?: 'primary' | 'secondary' | 'glass';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ThemedCard: React.FC<ThemedCardProps> = ({ 
  variant = 'glass', 
  className, 
  children, 
  onClick 
}) => {
  const scheme = ColorSchemes.cards[variant];
  
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg transition-all duration-300',
        scheme.background,
        scheme.border,
        scheme.hover,
        'shadow' in scheme ? scheme.shadow : '',
        'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Badge Temático
interface ThemedBadgeProps {
  variant?: 'primary' | 'accent';
  className?: string;
  children: React.ReactNode;
}

export const ThemedBadge: React.FC<ThemedBadgeProps> = ({ 
  variant = 'primary', 
  className, 
  children 
}) => {
  const scheme = ColorSchemes.badges[variant];
  
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-md font-bold text-xs',
        scheme.background,
        scheme.text,
        'shadow' in scheme ? scheme.shadow : '',
        'border' in scheme ? scheme.border : '',
        className
      )}
    >
      {children}
    </div>
  );
};

// Botão Temático
interface ThemedButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className, 
  children, 
  onClick,
  disabled = false
}) => {
  const scheme = ColorSchemes.buttons[variant];
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 border',
        scheme.background,
        scheme.hover,
        scheme.text,
        scheme.border,
        'shadow' in scheme ? scheme.shadow : '',
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Alert Temático
interface ThemedAlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const ThemedAlert: React.FC<ThemedAlertProps> = ({ 
  variant = 'info', 
  className, 
  children,
  icon
}) => {
  const scheme = ColorSchemes.alerts[variant];
  
  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg border',
        scheme.background,
        scheme.border,
        className
      )}
    >
      {icon && (
        <div className={cn('flex-shrink-0 mt-1', scheme.icon)}>
          {icon}
        </div>
      )}
      <div className={scheme.text}>
        {children}
      </div>
    </div>
  );
};

// Gradiente de Fundo
interface ThemedGradientProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'glass';
  className?: string;
  children: React.ReactNode;
}

export const ThemedGradient: React.FC<ThemedGradientProps> = ({ 
  variant = 'primary', 
  className, 
  children 
}) => {
  const gradients = {
    primary: 'bg-gradient-to-r from-[hsl(230_40%_55%)] to-[hsl(220_35%_70%)]',
    secondary: 'bg-gradient-to-r from-[hsl(210_40%_85%)] to-[hsl(210_15%_95%)]',
    accent: 'bg-gradient-to-r from-[hsl(210_40%_85%)]/60 to-[hsl(210_25%_98%)]/50',
    glass: 'bg-gradient-to-r from-[hsl(210_40%_85%)]/20 via-[hsl(220_35%_70%)]/15 to-[hsl(210_15%_95%)]/20'
  };
  
  return (
    <div className={cn(gradients[variant], className)}>
      {children}
    </div>
  );
};

// Ícone Temático
interface ThemedIconProps {
  variant?: 'primary' | 'secondary' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const ThemedIcon: React.FC<ThemedIconProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className, 
  children 
}) => {
  const colors = {
    primary: 'text-[hsl(230_40%_55%)]',
    secondary: 'text-[hsl(210_40%_85%)]',
    muted: 'text-[hsl(210_20%_88%)]'
  };
  
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  return (
    <div className={cn(colors[variant], sizes[size], className)}>
      {children}
    </div>
  );
};