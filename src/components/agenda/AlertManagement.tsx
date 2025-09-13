import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, BellOff, Calendar, LogIn, RefreshCw } from 'lucide-react';
import { format, isToday, isTomorrow, addDays, parseISO, isAfter, startOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from '@/hooks/use-toast';
import { useGoogleCalendarAPI } from '@/hooks/useGoogleCalendarAPI';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  description?: string;
}

const AlertManagement = () => {
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');
  const { 
    events, 
    isLoading, 
    isAuthenticated, 
    isInitialized, 
    signIn, 
    refreshEvents 
  } = useGoogleCalendarAPI();

  // Verificar eventos para hoje e amanhã e mostrar notificações
  useEffect(() => {
    if (events.length > 0) {
      const todayEvents = events.filter(event => isToday(event.date));
      const tomorrowEvents = events.filter(event => isTomorrow(event.date));
      
      todayEvents.forEach(event => {
        toast({
          title: "🚨 Evento Hoje!",
          description: `${event.title} está marcado para hoje!`,
          duration: 10000
        });
      });

      tomorrowEvents.forEach(event => {
        toast({
          title: "🔔 Lembrete de Evento",
          description: `${event.title} está marcado para amanhã!`,
          duration: 8000
        });
      });
    }
  }, [events]);

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      if (permission === 'granted') {
        toast({
          title: "Notificações ativadas",
          description: "Você receberá alertas de eventos próximos."
        });
      }
    }
  };

  const formatEventDate = (date: Date) => {
    if (isToday(date)) {
      return `Hoje às ${format(date, 'HH:mm')}`;
    } else if (isTomorrow(date)) {
      return `Amanhã às ${format(date, 'HH:mm')}`;
    } else {
      return format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
    }
  };

  const getEventStatus = (date: Date) => {
    if (isToday(date)) {
      return { text: 'Hoje', color: 'text-red-600', icon: Bell };
    } else if (isTomorrow(date)) {
      return { text: 'Amanhã', color: 'text-orange-600', icon: Bell };
    } else {
      return { text: 'Próximo', color: 'text-blue-600', icon: Calendar };
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Eventos Próximos</h3>
        <div className="flex space-x-2">
          {!isAuthenticated ? (
            <Button
              variant="outline"
              size="sm"
              onClick={signIn}
              disabled={!isInitialized}
              className="text-xs"
            >
              <LogIn className="w-4 h-4 mr-1" />
              Conectar Google
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={refreshEvents}
                disabled={isLoading}
                className="text-xs"
              >
                <RefreshCw className={`w-4 h-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
                Atualizar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={requestNotificationPermission}
                className="text-xs"
              >
                <Bell className="w-4 h-4 mr-1" />
                Notificações
              </Button>
            </>
          )}
        </div>
      </div>

      {!isAuthenticated ? (
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-sm mb-4">
            Conecte-se ao Google Calendar para ver seus eventos reais
          </p>
          <Button onClick={signIn} disabled={!isInitialized}>
            <LogIn className="w-4 h-4 mr-2" />
            Conectar Google Calendar
          </Button>
        </div>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {isLoading ? (
            <div className="text-center py-4">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-gray-400" />
              <p className="text-gray-500 text-sm mt-2">Carregando eventos...</p>
            </div>
          ) : events.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-4">
              Nenhum evento próximo encontrado na agenda.
            </p>
          ) : (
            events.map((event) => {
              const status = getEventStatus(event.date);
              const StatusIcon = status.icon;
              
              return (
                <Card key={event.id} className="p-3 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{event.title}</h4>
                      <p className="text-sm text-gray-600">{formatEventDate(event.date)}</p>
                      {event.description && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{event.description}</p>
                      )}
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`inline-flex items-center text-xs ${status.color}`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {status.text}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default AlertManagement;