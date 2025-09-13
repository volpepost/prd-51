import { useState, useEffect, useRef } from 'react';

interface AlertData {
  tipo: string;
  titulo: string;
  descricao: string;
  status: 'ativo' | 'inativo';
  icone?: string;
  cor?: string;
  mensagensCarrossel?: string[];
}

interface GoogleSheetsResponse {
  values: string[][];
}

interface ChangedAlert {
  tipo: 'diretoria' | 'lembrete';
  timestamp: number;
}

export const useGoogleSheetsData = (refreshInterval = 300000) => { // 5 minutos por padrão
  const [alertsData, setAlertsData] = useState<AlertData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [changedAlert, setChangedAlert] = useState<ChangedAlert | null>(null);
  
  // Ref para armazenar dados anteriores
  const previousDataRef = useRef<AlertData[]>([]);
  const isFirstLoadRef = useRef(true);

  // URL da planilha do Google Sheets (formato CSV)
  const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1uZbtGyk354oY_eQj4v2qXhDSeaRXOFRBAkymw5t5aVI/export?format=csv';

  // Função para comparar dados e detectar mudanças
  const detectChanges = (newData: AlertData[], oldData: AlertData[]) => {
    if (isFirstLoadRef.current || oldData.length === 0) {
      console.log('Primeira carga ou dados antigos vazios - não detectando mudanças');
      return null;
    }

    console.log('Comparando dados:', { newData, oldData });

    for (const newAlert of newData) {
      const oldAlert = oldData.find(old => old.tipo === newAlert.tipo);
      
      if (oldAlert) {
        const titleChanged = oldAlert.titulo !== newAlert.titulo;
        const descChanged = oldAlert.descricao !== newAlert.descricao;
        
        console.log(`Verificando mudanças em ${newAlert.tipo}:`, {
          titleChanged,
          descChanged,
          oldTitle: oldAlert.titulo,
          newTitle: newAlert.titulo,
          oldDesc: oldAlert.descricao,
          newDesc: newAlert.descricao
        });
        
        if (titleChanged || descChanged) {
          console.log(`Mudança detectada em ${newAlert.tipo}!`);
          return {
            tipo: newAlert.tipo as 'diretoria' | 'lembrete',
            timestamp: Date.now()
          };
        }
      }
    }
    
    console.log('Nenhuma mudança detectada');
    return null;
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('Buscando dados do Google Sheets...');
      
      const response = await fetch(SHEET_URL);
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.status}`);
      }
      
      const csvText = await response.text();
      console.log('CSV recebido:', csvText);
      
      // Parse do CSV - removendo caracteres de quebra de linha Windows (\r)
      const lines = csvText.split('\n')
        .map(line => line.replace(/\r/g, '').trim())
        .filter(line => line.length > 0);
      
      console.log('Linhas processadas:', lines);
      console.log('Total de linhas:', lines.length);
      
      const alerts: AlertData[] = [];
      
      // Processar Mensagem da Diretoria
      // Linha 1: título fixo, Linhas 2-3: mensagens do carrossel
      if (lines.length >= 3) {
        const tituloDir = lines[0].replace(/"/g, '').trim();
        const mensagem1Dir = lines[1].replace(/"/g, '').trim();
        const mensagem2Dir = lines[2].replace(/"/g, '').trim();
        
        console.log('Processando Diretoria:', { 
          titulo: tituloDir, 
          mensagens: [mensagem1Dir, mensagem2Dir] 
        });
        
        if (tituloDir && (mensagem1Dir || mensagem2Dir)) {
          const mensagensCarrossel = [mensagem1Dir, mensagem2Dir].filter(msg => msg.length > 0);
          
          alerts.push({
            tipo: 'diretoria',
            titulo: tituloDir,
            descricao: mensagensCarrossel[0] || 'Carregando...', // Primeira mensagem como padrão
            status: 'ativo' as const,
            icone: 'megaphone',
            cor: 'pink',
            mensagensCarrossel: mensagensCarrossel
          });
        }
      }
      
      // Processar Lembrete (anteriormente Conformidade)
      // Linha 4: título fixo, Linhas 5-6: mensagens do carrossel
      if (lines.length >= 6) {
        const tituloConf = lines[3].replace(/"/g, '').trim();
        const mensagem1Conf = lines[4].replace(/"/g, '').trim();
        const mensagem2Conf = lines[5].replace(/"/g, '').trim();
        
        console.log('Processando Lembrete:', { 
          titulo: tituloConf, 
          mensagens: [mensagem1Conf, mensagem2Conf] 
        });
        
        if (tituloConf && (mensagem1Conf || mensagem2Conf)) {
          const mensagensCarrossel = [mensagem1Conf, mensagem2Conf].filter(msg => msg.length > 0);
          
          alerts.push({
            tipo: 'lembrete',
            titulo: tituloConf,
            descricao: mensagensCarrossel[0] || 'Carregando...', // Primeira mensagem como padrão
            status: 'ativo' as const,
            icone: 'bell',
            cor: 'pink',
            mensagensCarrossel: mensagensCarrossel
          });
        }
      }
      
      // Adicionar alertas padrão se não houver dados específicos
      if (alerts.length === 0) {
        alerts.push(
          {
            tipo: 'diretoria',
            titulo: 'Mensagem da Diretoria',
            descricao: 'Novas orientações sobre proteção de dados (Em breve)',
            status: 'ativo' as const,
            icone: 'megaphone',
            cor: 'pink',
            mensagensCarrossel: ['Novas orientações sobre proteção de dados (Em breve)']
          },
          {
            tipo: 'lembrete',
            titulo: 'ATENÇÃO: Lembrete Urgente',
            descricao: 'Verificação de adequação à LGPD (Em breve)',
            status: 'ativo' as const,
            icone: 'bell',
            cor: 'pink',
            mensagensCarrossel: ['Verificação de adequação à LGPD (Em breve)']
          }
        );
      }
      
      console.log('Dados processados final:', alerts);
      console.log('Dados anteriores:', previousDataRef.current);
      
      // Detectar mudanças
      const change = detectChanges(alerts, previousDataRef.current);
      if (change) {
        console.log('Mudança detectada:', change);
        setChangedAlert(change);
        
        // Limpar o estado de mudança após 5 segundos
        setTimeout(() => {
          console.log('Limpando estado de mudança');
          setChangedAlert(null);
        }, 5000);
      }
      
      // Salvar dados atuais como anteriores para próxima comparação
      previousDataRef.current = [...alerts];
      isFirstLoadRef.current = false;
      
      console.log('Alertas criados:', alerts.length);
      
      setAlertsData(alerts);
      setLastUpdated(new Date());
      
      // Cache local
      localStorage.setItem('alerts_cache', JSON.stringify({
        data: alerts,
        timestamp: Date.now()
      }));
      
    } catch (err) {
      console.error('Erro ao buscar dados do Google Sheets:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      
      // Tentar usar cache local em caso de erro
      const cache = localStorage.getItem('alerts_cache');
      if (cache) {
        try {
          const { data, timestamp } = JSON.parse(cache);
          // Usar cache se for mais novo que 1 hora
          if (Date.now() - timestamp < 3600000) {
            setAlertsData(data);
            console.log('Usando dados do cache local');
          }
        } catch (cacheError) {
          console.error('Erro ao ler cache:', cacheError);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = () => {
    fetchData();
  };

  useEffect(() => {
    // Buscar dados imediatamente
    fetchData();
    
    // Configurar refresh automático
    const interval = setInterval(fetchData, refreshInterval);
    
    return () => clearInterval(interval);
  }, [refreshInterval]);

  // Funções para buscar alertas específicos
  const getAlertByType = (tipo: string) => {
    return alertsData.find(alert => alert.tipo.toLowerCase() === tipo.toLowerCase());
  };

  const getLembreteAlert = () => getAlertByType('lembrete');
  const getConformidadeAlert = () => getLembreteAlert(); // Manter compatibilidade
  const getDiretoriaAlert = () => getAlertByType('diretoria');

  // Função para verificar se um alerta específico mudou
  const isAlertChanged = (tipo: 'diretoria' | 'conformidade' | 'lembrete') => {
    // Mapear 'conformidade' para 'lembrete' para manter compatibilidade
    const tipoMapeado = tipo === 'conformidade' ? 'lembrete' : tipo;
    const result = changedAlert?.tipo === tipoMapeado && (Date.now() - changedAlert.timestamp) < 5000;
    console.log(`Verificando se ${tipo} mudou:`, { changedAlert, result });
    return result;
  };

  return {
    alertsData,
    isLoading,
    error,
    lastUpdated,
    refreshData,
    getAlertByType,
    getConformidadeAlert, // Manter para compatibilidade
    getLembreteAlert,
    getDiretoriaAlert,
    isAlertChanged,
    changedAlert
  };
};
