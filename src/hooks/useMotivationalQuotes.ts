
import { useState, useEffect } from 'react';

export const useMotivationalQuotes = () => {
  const [quote, setQuote] = useState('');
  const apiKey = 'AIzaSyA838Rx52FU8EIPO5_mETnpyddNZyFhzGU';

  const lgpdFocusedQuotes = [
    '"A proteção de dados é um direito fundamental na era digital."',
    '"Conformidade com LGPD é construir confiança no mundo digital."',
    '"Cada dado protegido é um passo em direção à privacidade responsável."',
    '"Transparência e segurança são os pilares da proteção de dados."',
    '"A LGPD não é apenas lei, é compromisso com a dignidade digital."',
    '"Dados seguros constroem relacionamentos confiáveis."',
    '"Privacidade é direito, proteção é dever."',
    '"Na era digital, a conformidade é o caminho para a excelência."'
  ];

  const generateOtaviaQuote = async () => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Crie uma frase motivacional única e inspiradora relacionada à proteção de dados, LGPD, privacidade digital ou conformidade regulatória. A frase deve:

- Ser única, impactante e memorável
- Relacionar-se com proteção de dados, LGPD, privacidade ou conformidade
- Usar linguagem profissional mas inspiradora
- Ter entre 8 a 20 palavras
- Ser completamente original
- Estar entre aspas duplas
- Inspirar confiança e excelência em proteção de dados

Exemplos do estilo desejado (mas crie algo COMPLETAMENTE DIFERENTE):
"A privacidade é o alicerce da confiança digital."
"Cada política de dados implementada é um passo rumo à excelência."

Gere APENAS uma frase motivacional única sobre proteção de dados, nada mais.`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.9,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 150,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const generatedQuote = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
      
      if (generatedQuote) {
        setQuote(generatedQuote);
      } else {
        const randomIndex = Math.floor(Math.random() * lgpdFocusedQuotes.length);
        setQuote(lgpdFocusedQuotes[randomIndex]);
      }
    } catch (error) {
      console.error("Erro ao gerar citação sobre proteção de dados:", error);
      const randomIndex = Math.floor(Math.random() * lgpdFocusedQuotes.length);
      setQuote(lgpdFocusedQuotes[randomIndex]);
    }
  };

  useEffect(() => {
    generateOtaviaQuote();
  }, []);

  return { quote };
};
