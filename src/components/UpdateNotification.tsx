
import React from 'react';
import { RefreshCw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useServiceWorkerUpdate } from '@/hooks/useServiceWorkerUpdate';

const UpdateNotification = () => {
  const { 
    isUpdateAvailable, 
    isUpdating, 
    updateServiceWorker 
  } = useServiceWorkerUpdate();

  if (!isUpdateAvailable) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-4 rounded-2xl shadow-2xl animate-slide-up">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/20 border border-white/30 p-1 flex-shrink-0">
            <img 
              src="/lovable-uploads/6298df6a-d19a-49d9-9086-e1da2afcd0fc.png" 
              alt="Otavia Update" 
              className="w-full h-full object-cover rounded-lg"
              onLoad={() => console.log('✅ Update notification icon loaded successfully')}
              onError={(e) => console.error('❌ Update notification icon failed to load:', e)}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold text-sm">
                Nova Versão
              </h4>
            </div>
            
            <p className="text-white/80 text-xs mb-3">
              Uma atualização da Otavia está disponível com melhorias e correções.
            </p>

            <div className="flex space-x-2">
              <Button
                onClick={updateServiceWorker}
                disabled={isUpdating}
                size="sm"
                className="bg-gradient-to-r from-pastel-blue-dark/80 to-pastel-blue-medium/80 backdrop-blur-sm hover:from-pastel-blue-dark/90 hover:to-pastel-blue-medium/90 text-white text-xs h-8 px-3 border border-white/20"
              >
                {isUpdating ? (
                  <>
                    <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                    Atualizando...
                  </>
                ) : (
                  <>
                    <Download className="w-3 h-3 mr-1" />
                    Atualizar
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UpdateNotification;
