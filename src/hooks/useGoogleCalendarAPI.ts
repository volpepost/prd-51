import { useState, useEffect, useCallback } from 'react';
import { gapi } from 'gapi-script';
import { toast } from '@/hooks/use-toast';
import { getGoogleOAuthConfig, logEnvironmentInfo } from '@/config/environment';

declare global {
  interface Window {
    gapi: any;
  }
}

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  description?: string;
}

// Configuração dinâmica baseada no ambiente
const getGoogleConfig = () => getGoogleOAuthConfig();

export const useGoogleCalendarAPI = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeGapi = useCallback(async () => {
    try {
      const config = getGoogleConfig();
      
      // Log environment info for debugging
      logEnvironmentInfo();
      
      await new Promise<void>((resolve) => {
        gapi.load('client:auth2', resolve);
      });

      await gapi.client.init({
        apiKey: config.apiKey,
        clientId: config.clientId,
        discoveryDocs: [config.discoveryDoc],
        scope: config.scope
      });
      
      const authInstance = (gapi as any).auth2.getAuthInstance();
      setIsAuthenticated(authInstance.isSignedIn.get());
      setIsInitialized(true);
    } catch (error) {
      console.error('Erro ao inicializar Google API:', error);
      toast({
        title: "Erro na inicialização",
        description: "Não foi possível conectar com o Google Calendar",
        variant: "destructive"
      });
    }
  }, []);

  const signIn = useCallback(async () => {
    try {
      const authInstance = (gapi as any).auth2.getAuthInstance();
      await authInstance.signIn();
      setIsAuthenticated(true);
      toast({
        title: "Conectado!",
        description: "Acesso ao Google Calendar autorizado"
      });
    } catch (error) {
      console.error('Erro no login:', error);
      toast({
        title: "Erro na autenticação",
        description: "Não foi possível fazer login no Google",
        variant: "destructive"
      });
    }
  }, []);

  const signOut = useCallback(async () => {
    const authInstance = (gapi as any).auth2.getAuthInstance();
    await authInstance.signOut();
    setIsAuthenticated(false);
    setEvents([]);
  }, []);

  const fetchEvents = useCallback(async () => {
    if (!isAuthenticated) return;

    setIsLoading(true);
    try {
      const now = new Date();
      const endTime = new Date();
      endTime.setDate(now.getDate() + 7); // Próximos 7 dias

      const response = await (gapi.client as any).calendar.events.list({
        calendarId: 'adriano@imetro.sc.gov.br',
        timeMin: now.toISOString(),
        timeMax: endTime.toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 20,
        orderBy: 'startTime'
      });

      const items = response.result.items || [];
      const formattedEvents: CalendarEvent[] = items.map((item: any) => ({
        id: item.id,
        title: item.summary || 'Sem título',
        date: new Date(item.start.dateTime || item.start.date),
        description: item.description || ''
      }));

      setEvents(formattedEvents);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
      toast({
        title: "Erro ao carregar eventos",
        description: "Não foi possível acessar o calendário",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    initializeGapi();
  }, [initializeGapi]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
      // Atualizar eventos a cada 5 minutos
      const interval = setInterval(fetchEvents, 5 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated, fetchEvents]);

  return {
    events,
    isLoading,
    isAuthenticated,
    isInitialized,
    signIn,
    signOut,
    refreshEvents: fetchEvents
  };
};