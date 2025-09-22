import React from 'react';
import { Card } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  gradient: string;
  delay?: string;
  children: React.ReactNode;
}

const SectionCard = ({ title, icon: Icon, gradient, delay, children }: SectionCardProps) => {
  return (
    <div
      className="animate-in slide-in-from-bottom-4 duration-500"
      style={{ animationDelay: delay }}
    >
      <Card className="group section-card">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        <div className="absolute inset-[1px] bg-white rounded-lg"></div>
        
        <div className="relative z-10 p-4 sm:p-6">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className={`section-card-icon bg-gradient-to-br ${gradient}`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
            </div>
            
            <div className="flex-1 space-y-3 sm:space-y-4">
              <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                {title}
              </h3>
              
              {children}
            </div>
          </div>
          
          <div className={`mt-3 sm:mt-4 h-0.5 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
        </div>
      </Card>
    </div>
  );
};

export default SectionCard;