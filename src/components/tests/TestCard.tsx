
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestCardProps {
  id: number;
  title: string;
  description: string;
  onClick: (title: string) => void;
}

const TestCard = ({ id, title, description, onClick }: TestCardProps) => {
  const getBadgeStyle = (id: number) => {
    const styles = [
      "backdrop-blur-glass bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-purple-600/70 text-white font-bold text-xs w-6 h-6 rounded-sm flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-gradient-to-br from-cyan-500/80 to-purple-600/80 text-white font-bold text-xs w-6 h-6 rounded-md flex items-center justify-center transform rotate-45",
      "backdrop-blur-glass bg-gradient-to-tl from-pink-500/90 to-rose-400/90 text-white font-bold text-xs w-6 h-6 flex items-center justify-center transform rotate-45 shadow-lg",
      "backdrop-blur-glass bg-gradient-to-r from-violet-500/80 to-purple-600/80 text-white font-bold text-xs w-8 h-5 rounded-full flex items-center justify-center shadow-md",
      "backdrop-blur-glass bg-gradient-to-r from-indigo-500/85 to-purple-500/85 text-white font-bold text-xs w-7 h-5 rounded-lg flex items-center justify-center shadow-xl",
      "backdrop-blur-glass bg-gradient-to-br from-fuchsia-500/80 to-pink-600/80 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-gradient-to-tl from-emerald-500/80 to-teal-500/80 text-white font-bold text-xs w-6 h-6 rounded-sm flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-radial-gradient from-purple-400/90 via-pink-500/80 to-rose-600/80 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-gradient-to-r from-blue-500/80 to-indigo-600/80 text-white font-bold text-xs w-8 h-4 rounded-full flex items-center justify-center shadow-md",
      "backdrop-blur-glass bg-gradient-to-br from-orange-500/80 to-red-500/80 text-white font-bold text-xs w-6 h-6 rounded-md flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-gradient-to-r from-green-500/80 to-emerald-500/80 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-pulse",
      "backdrop-blur-glass bg-gradient-to-b from-yellow-500/80 to-orange-500/80 text-white font-bold text-xs w-5 h-7 rounded-lg flex items-center justify-center shadow-md",
      "backdrop-blur-glass bg-gradient-to-tr from-pink-600/90 via-purple-500/80 to-indigo-600/90 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-gradient-to-bl from-teal-500/80 to-cyan-600/80 text-white font-bold text-xs w-6 h-6 rounded-sm flex items-center justify-center shadow-lg transform rotate-12",
      "backdrop-blur-glass bg-gradient-to-r from-lime-500/80 to-green-600/80 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-md",
      "backdrop-blur-glass bg-gradient-to-b from-rose-500/80 to-pink-600/80 text-white font-bold text-xs w-5 h-8 rounded-full flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-gradient-to-tl from-violet-600/80 to-fuchsia-500/80 text-white font-bold text-xs w-7 h-6 rounded-md flex items-center justify-center shadow-lg transform skew-x-12",
      "backdrop-blur-glass bg-gradient-to-r from-slate-600/80 to-gray-700/80 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg",
      "backdrop-blur-glass bg-gradient-to-tr from-amber-500/90 to-yellow-600/90 text-white font-bold text-xs w-6 h-6 rounded-sm flex items-center justify-center shadow-xl transform rotate-45"
    ];
    
    return styles[(id - 1) % styles.length];
  };

  return (
    <div className="relative group">
      <Card 
        className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
        onClick={() => onClick(title)}
      >
        <div className="absolute -top-1 left-2 z-10">
          <Badge 
            variant="secondary" 
            className={getBadgeStyle(id)}
          >
            L
          </Badge>
        </div>

        <div className="flex flex-col items-center text-center space-y-3">
          <div className="relative">
            <span className="text-4xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
              {id}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
      </Card>
    </div>
  );
};

export default TestCard;
