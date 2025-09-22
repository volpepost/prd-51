import React from 'react';
import { Card } from "@/components/ui/card";
import { X, LucideIcon } from 'lucide-react';

interface BaseSectionProps {
  isVisible: boolean;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  onClose: () => void;
  children: React.ReactNode;
  customCloseEvent?: string;
}

const BaseSection = ({ 
  isVisible, 
  title, 
  subtitle, 
  icon: Icon, 
  onClose, 
  children,
  customCloseEvent
}: BaseSectionProps) => {
  const handleClose = () => {
    if (customCloseEvent) {
      window.dispatchEvent(new CustomEvent(customCloseEvent));
    } else {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="space-y-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50 relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="section-close-btn"
        >
          <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </button>

        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-light/10 via-pastel-blue-medium/5 to-pastel-gray-light/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-blue-light via-pastel-blue-medium to-pastel-gray-medium"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="section-header">
            <div className="flex items-center space-x-3">
              <Icon className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                {subtitle && <p className="text-sm text-gray-700">{subtitle}</p>}
              </div>
            </div>
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseSection;