import React, { useState } from 'react';
import { X, Calendar, RefreshCw, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AlertManagement from '@/components/agenda/AlertManagement';
import { toast } from '@/hooks/use-toast';

interface AgendaSectionProps {
  isVisible: boolean;
}

const AgendaSection = ({ isVisible }: AgendaSectionProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const handleClose = () => {
    console.log('Fechando agenda');
    window.dispatchEvent(new CustomEvent('closeAgenda'));
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setIframeKey(prev => prev + 1);
  };

  const handleIframeLoad = () => {
    console.log('Google Calendar iframe carregado com sucesso');
    if (isRefreshing) {
      setIsRefreshing(false);
    }
  };

  const handleIframeError = () => {
    console.error('Erro ao carregar Google Calendar iframe');
    setIsRefreshing(false);
    toast({
      title: "Erro ao carregar",
      description: "Não foi possível carregar a agenda. Tente novamente.",
      variant: "destructive"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="space-y-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50 relative overflow-hidden">
        {/* Action buttons */}
        <div className="absolute top-4 right-4 z-20 flex space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="shadow-lg"
          >
            <RefreshCw className={`w-4 h-4 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Atualizando...' : 'Atualizar'}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleClose}
            className="shadow-lg"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-light/10 via-pastel-blue-medium/5 to-pastel-gray-light/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-blue-light via-pastel-blue-medium to-pastel-gray-light"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="backdrop-blur-md bg-gradient-to-r from-pastel-blue-light/20 via-pastel-blue-medium/20 to-pastel-gray-light/20 border-b border-white/30 p-6 -m-4 sm:-m-6 lg:-m-8 mb-6 lg:mb-8 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <Calendar className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Agenda Institucional</h2>
                <p className="text-gray-600 mt-1">Consulte nossa agenda de eventos e atividades</p>
              </div>
            </div>
          </div>

          {/* Tabs for Calendar and Alerts */}
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calendar" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Agenda</span>
              </TabsTrigger>
              <TabsTrigger value="alerts" className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span>Alertas</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar" className="mt-4">
              <div className="relative">
                <div className="w-full overflow-hidden rounded-lg shadow-lg border border-gray-300">
                  <iframe 
                    key={iframeKey}
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&src=YWRyaWFub0BpbWV0cm8uc2MuZ292LmJy&src=pt-br.brazilian%23holiday%40group.v.calendar.google.com&color=%23039be5&color=%230b8043&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showTasks=1"
                    style={{ border: 'none' }} 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    scrolling="no"
                    title="Agenda Institucional"
                    className="w-full"
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                  />
                  {isRefreshing && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                      <div className="flex items-center space-x-2 text-pastel-blue-dark">
                        <RefreshCw className="w-6 h-6 animate-spin" />
                        <span>Atualizando agenda...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="alerts" className="mt-4">
              <AlertManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AgendaSection;