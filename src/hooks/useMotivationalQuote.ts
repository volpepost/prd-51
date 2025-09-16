
import { useState, useEffect } from 'react';
import { motivationalQuotes365 } from '@/data/motivationalQuotes365';

export const useMotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Citações específicas para contexto de liderança e administração
    const leadershipQuotes = [
      'Liderança é a capacidade de transformar visão em realidade.',
      'Um grande líder desenvolve pessoas, não apenas resultados.',
      'A excelência administrativa começa com decisões bem fundamentadas.',
      'Liderar é servir com propósito e inspirar com exemplo.',
      'A gestão eficaz equilibra pessoas, processos e resultados.',
      'Grandes líderes criam outros líderes, não apenas seguidores.',
      'A administração moderna exige visão estratégica e execução precisa.',
      'Liderança autêntica constrói confiança e move organizações.',
      'O sucesso administrativo está na capacidade de unir equipes.',
      'Liderar é tomar decisões difíceis com sabedoria e coragem.'
    ];

    // Seleciona uma frase do array específico ou usa as gerais como fallback
    const useSpecificQuotes = Math.random() > 0.3; // 70% de chance de usar citações específicas
    const quotesArray = useSpecificQuotes ? leadershipQuotes : motivationalQuotes365;
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const selectedQuote = quotesArray[randomIndex];
    
    setQuote(selectedQuote);
    console.log('Citação motivacional carregada:', selectedQuote);
  }, []); // Carrega apenas uma vez na inicialização

  return { quote };
};
