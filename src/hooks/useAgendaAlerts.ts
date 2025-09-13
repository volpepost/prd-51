import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

export interface AlertEvent {
  id: string;
  title: string;
  date: Date;
  description?: string;
  alertSent?: boolean;
  snoozedUntil?: Date;
}

const STORAGE_KEY = 'agenda-alerts';
const CHECK_INTERVAL = 60000; // 1 minuto

export const useAgendaAlerts = () => {
  const [events, setEvents] = useState<AlertEvent[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  // Carregar eventos do localStorage
  const loadEvents = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Converter strings de data de volta para Date objects
        const eventsWithDates = parsed.map((event: any) => ({
          ...event,
          date: new Date(event.date),
          snoozedUntil: event.snoozedUntil ? new Date(event.snoozedUntil) : undefined
        }));
        setEvents(eventsWithDates);
      }
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
    }
  }, []);

  // Salvar eventos no localStorage
  const saveEvents = useCallback((newEvents: AlertEvent[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newEvents));
      setEvents(newEvents);
    } catch (error) {
      console.error('Erro ao salvar eventos:', error);
    }
  }, []);

  // Adicionar novo evento
  const addEvent = useCallback((eventData: Omit<AlertEvent, 'id'>) => {
    const newEvent: AlertEvent = {
      ...eventData,
      id: Date.now().toString()
    };
    const updatedEvents = [...events, newEvent];
    saveEvents(updatedEvents);
    toast({
      title: "Alerta adicionado",
      description: `Evento "${eventData.title}" foi adicionado à sua agenda.`
    });
  }, [events, saveEvents]);

  // Remover evento
  const removeEvent = useCallback((id: string) => {
    const updatedEvents = events.filter(event => event.id !== id);
    saveEvents(updatedEvents);
    toast({
      title: "Alerta removido",
      description: "O evento foi removido da sua agenda."
    });
  }, [events, saveEvents]);

  // Verificar alertas
  const checkAlerts = useCallback(() => {
    if (events.length === 0) return;

    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    const updatedEvents = events.map(event => {
      const eventDate = new Date(event.date);
      const timeDiff = eventDate.getTime() - now.getTime();
      const hoursUntilEvent = timeDiff / (1000 * 60 * 60);

      // Verificar se deve alertar (24h antes, +/- 1h de tolerância)
      const shouldAlert = hoursUntilEvent <= 25 && hoursUntilEvent >= 23 && !event.alertSent;
      
      // Verificar se está snoozado
      const isSnoozing = event.snoozedUntil && now < event.snoozedUntil;

      if (shouldAlert && !isSnoozing) {
        toast({
          title: "🔔 Lembrete de Evento",
          description: `${event.title} está marcado para amanhã!`,
          duration: 10000
        });

        // Verificar se o browser suporta notificações
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Lembrete de Evento', {
            body: `${event.title} está marcado para amanhã!`,
            icon: '/favicon.ico'
          });
        }

        return { ...event, alertSent: true };
      }

      return event;
    });

    // Salvar se houve mudanças
    const hasChanges = updatedEvents.some((event, index) => 
      event.alertSent !== events[index]?.alertSent
    );

    if (hasChanges) {
      saveEvents(updatedEvents);
    }
  }, [events, saveEvents]);

  // Snooze alerta por algumas horas
  const snoozeAlert = useCallback((id: string, hours: number = 2) => {
    const snoozeUntil = new Date(Date.now() + hours * 60 * 60 * 1000);
    const updatedEvents = events.map(event => 
      event.id === id ? { ...event, snoozedUntil: snoozeUntil } : event
    );
    saveEvents(updatedEvents);
    toast({
      title: "Alerta adiado",
      description: `Lembrete adiado por ${hours} hora(s).`
    });
  }, [events, saveEvents]);

  // Pedir permissão para notificações
  const requestNotificationPermission = useCallback(async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        toast({
          title: "Notificações ativadas",
          description: "Você receberá alertas mesmo quando a aba estiver fechada."
        });
      }
    }
  }, []);

  // Carregar eventos na inicialização
  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  // Configurar verificação automática
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChecking(true);
      checkAlerts();
      setTimeout(() => setIsChecking(false), 1000);
    }, CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, [checkAlerts]);

  return {
    events,
    isChecking,
    addEvent,
    removeEvent,
    snoozeAlert,
    requestNotificationPermission,
    checkAlerts
  };
};