
import React from 'react';
import { Card } from "@/components/ui/card";
import { User, Scale, Shield, Gauge, MapPin } from 'lucide-react';
import QRCodeDownload from './QRCodeDownload';

interface SidebarProps {
  onQuestionClick: (questionTitle: string, question: string) => void;
}

const Sidebar = ({ onQuestionClick }: SidebarProps) => {
  const menuItems = [
    {
      title: 'Administração',
      icon: User,
      description: 'Gestão administrativa e recursos humanos',
      color: 'text-blue-600'
    },
    {
      title: 'Jurídico',
      icon: Scale,
      description: 'Assessoria jurídica e compliance legal',
      color: 'text-purple-600'
    },
    {
      title: 'Qualidade',
      icon: Shield,
      description: 'Controle de qualidade e certificações',
      color: 'text-green-600'
    },
    {
      title: 'Metrologia',
      icon: Gauge,
      description: 'Serviços metrológicos e calibração',
      color: 'text-orange-600'
    },
    {
      title: 'Regionais',
      icon: MapPin,
      description: 'Unidades regionais e atendimento local',
      color: 'text-red-600'
    }
  ];

  const handleMenuClick = (title: string, description: string) => {
    onQuestionClick(title, description);
  };

  return (
    <div className="space-y-4 lg:pl-2 xl:pl-8">
      <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4">
        <h3 className="font-bold text-white mb-4 text-lg">Controle de Setor</h3>
        
        <div className="space-y-3">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={item.title}
                className="backdrop-blur-sm bg-white/10 border-white/20 p-3 hover:bg-white/20 transition-all cursor-pointer group"
                onClick={() => handleMenuClick(item.title, item.description)}
              >
                <div className="flex items-start space-x-3">
                  <IconComponent className={`w-5 h-5 text-white mt-1 group-hover:scale-110 transition-transform flex-shrink-0`} />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-pastel-blue-dark text-base">{item.title}</h4>
                    <p className="text-white text-xs mt-1 break-words">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>
      
      {/* QR Code Download */}
      <QRCodeDownload />
    </div>
  );
};

export default Sidebar;
