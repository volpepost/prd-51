
import { useState, useEffect } from 'react';
import { motivationalQuotes365 } from '@/data/motivationalQuotes365';

export const useMotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Citações específicas para contexto de LGPD e proteção de dados
    const lgpdQuotes = [
      'A proteção de dados é um direito fundamental na era digital.',
      'Conformidade com LGPD é construir confiança no mundo digital.',
      'Cada dado protegido é um passo em direção à privacidade responsável.',
      'Transparência e segurança são os pilares da proteção de dados.',
      'A LGPD não é apenas lei, é compromisso com a dignidade digital.',
      'Dados seguros constroem relacionamentos confiáveis.',
      'Privacidade é direito, proteção é dever.',
      'Na era digital, a conformidade é o caminho para a excelência.'
    ];

    // Seleciona uma frase do array específico ou usa as gerais como fallback
    const useSpecificQuotes = Math.random() > 0.3; // 70% de chance de usar citações específicas
    const quotesArray = useSpecificQuotes ? lgpdQuotes : motivationalQuotes365;
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const selectedQuote = quotesArray[randomIndex];
    
    setQuote(selectedQuote);
    console.log('Citação motivacional carregada:', selectedQuote);
  }, []); // Carrega apenas uma vez na inicialização

  return { quote };
};
