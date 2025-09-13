import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';

interface AnnualEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnnualEventsModal = ({ isOpen, onClose }: AnnualEventsModalProps) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-pastel-blue-dark" />
            <span>Eventos Anuais Recorrentes</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
            {/* Feriados Nacionais */}
            <div className="border rounded-lg p-4 bg-red-50 border-red-200">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Feriados Nacionais
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Confraternização Universal</span>
                  <span className="text-red-600 font-medium">01/01</span>
                </div>
                <div className="flex justify-between">
                  <span>Carnaval (Terça-feira)</span>
                  <span className="text-red-600 font-medium">Fev/Mar</span>
                </div>
                <div className="flex justify-between">
                  <span>Sexta-feira Santa</span>
                  <span className="text-red-600 font-medium">Mar/Abr</span>
                </div>
                <div className="flex justify-between">
                  <span>Tiradentes</span>
                  <span className="text-red-600 font-medium">21/04</span>
                </div>
                <div className="flex justify-between">
                  <span>Dia do Trabalhador</span>
                  <span className="text-red-600 font-medium">01/05</span>
                </div>
                <div className="flex justify-between">
                  <span>Independência do Brasil</span>
                  <span className="text-red-600 font-medium">07/09</span>
                </div>
                <div className="flex justify-between">
                  <span>Nossa Senhora Aparecida</span>
                  <span className="text-red-600 font-medium">12/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Finados</span>
                  <span className="text-red-600 font-medium">02/11</span>
                </div>
                <div className="flex justify-between">
                  <span>Proclamação da República</span>
                  <span className="text-red-600 font-medium">15/11</span>
                </div>
                <div className="flex justify-between">
                  <span>Natal</span>
                  <span className="text-red-600 font-medium">25/12</span>
                </div>
              </div>
            </div>

            {/* Eventos Institucionais LGPD */}
            <div className="border rounded-lg p-4 bg-pastel-blue-light/20 border-pastel-blue-medium/40">
              <h4 className="font-semibold text-pastel-blue-dark mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Eventos LGPD
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Dia da Privacidade de Dados</span>
                  <span className="text-pastel-blue-dark font-medium">28/01</span>
                </div>
                <div className="flex justify-between">
                  <span>Aniversário da LGPD</span>
                  <span className="text-pastel-blue-dark font-medium">14/08</span>
                </div>
                <div className="flex justify-between">
                  <span>Semana de Conscientização LGPD</span>
                  <span className="text-pastel-blue-dark font-medium">Ago</span>
                </div>
                <div className="flex justify-between">
                  <span>Auditoria Anual de Dados</span>
                  <span className="text-pastel-blue-dark font-medium">Set</span>
                </div>
                <div className="flex justify-between">
                  <span>Revisão de Políticas</span>
                  <span className="text-pastel-blue-dark font-medium">Dez</span>
                </div>
              </div>
            </div>

            {/* Eventos Metrologia */}
            <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Eventos Metrologia
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Dia Mundial da Metrologia</span>
                  <span className="text-blue-600 font-medium">20/05</span>
                </div>
                <div className="flex justify-between">
                  <span>Semana da Qualidade</span>
                  <span className="text-blue-600 font-medium">Nov</span>
                </div>
                <div className="flex justify-between">
                  <span>Calibração de Equipamentos</span>
                  <span className="text-blue-600 font-medium">Trimestral</span>
                </div>
              </div>
            </div>

            {/* Eventos Administrativos */}
            <div className="border rounded-lg p-4 bg-green-50 border-green-200">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Eventos Administrativos
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Planejamento Estratégico</span>
                  <span className="text-green-600 font-medium">Jan</span>
                </div>
                <div className="flex justify-between">
                  <span>Avaliação de Desempenho</span>
                  <span className="text-green-600 font-medium">Jun</span>
                </div>
                <div className="flex justify-between">
                  <span>Relatório Anual</span>
                  <span className="text-green-600 font-medium">Dez</span>
                </div>
                <div className="flex justify-between">
                  <span>Auditoria Interna</span>
                  <span className="text-green-600 font-medium">Semestral</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Nota:</strong> Esta lista contém os principais eventos anuais e feriados. 
              Para datas específicas e eventos adicionais, consulte a agenda principal acima que é sincronizada com o Google Calendar institucional.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnualEventsModal;