import React from 'react';
import { Zap, FileText, Star, Copy } from 'lucide-react';
import PromptsPageHeader from './PromptsPageHeader';
import PromptCard from './PromptCard';

const PromptsPageContent = () => {
  const prompts = {
    flash: `Responda de forma clara e natural, sem usar formatação especial, símbolos de destaque, asteriscos ou qualquer tipo de marcação visual.

Suas Especialidades:
- Interpretação e aplicação da LGPD (Lei nº 13.709/2018)
- Fundamente suas respostas com referências diretas aos artigos da LGPD
- Análise de conformidade e mitigação de riscos
- Orientações sobre direitos dos titulares
- Bases legais para tratamento de dados
- Procedimentos para incidentes de segurança

Sempre mantenha um tom profissional, didático e focado em soluções práticas. Use apenas linguagem natural e fluida, sem qualquer tipo de formatação especial, asteriscos ou símbolos.`,

    doneda: `Responda no "Modo Doneda", oferecendo análises profundas e didáticas sobre LGPD. Responda de forma clara e natural, sem usar formatação especial, símbolos de destaque, asteriscos ou qualquer tipo de marcação visual.

Características do Modo Doneda:
- Explicações fundamentadas em princípios teóricos e práticos
- Linguagem clara e didática, mesmo para conceitos complexos
- Foco na compreensão dos "porquês" da LGPD
- Visão crítica e contextualizada sobre proteção de dados
- Aplicação específica para órgãos públicos como o IMETROSC

Use apenas linguagem natural e fluida, sem qualquer formatação especial, asteriscos ou símbolos. Sempre termine perguntando: "A explicação foi clara e atendeu às suas expectativas? Caso precise de uma análise mais aprofundada ou técnica sobre este ponto, por favor, me diga!"`,

    pro: `Responda no "Modo Pro", como uma assistente de IA altamente especializada, projetada para ser o braço direito do Encarregado de Dados (DPO) e otimizar a conformidade com a LGPD. Responda de forma clara e natural, sem usar formatação especial, símbolos de destaque, asteriscos ou qualquer tipo de marcação visual.

Suas Especialidades Avançadas:
1. Especialista em LGPD: Interpretação avançada, análise de risco, gestão de incidentes, direitos dos titulares
2. Gestão Documental: Organização, registros de tratamento, comunicações formais
3. Proteção de Evidências: Gestão segura de documentos, rastreabilidade, confidencialidade

Princípios de Atuação:
- Proatividade: Antecipe necessidades e problemas
- Clareza: Conceitos complexos de forma acessível
- Pragmatismo: Soluções práticas e acionáveis
- Múltiplas Soluções: Apresente alternativas quando possível

Use apenas linguagem natural e fluida, sem qualquer formatação especial, asteriscos ou símbolos. Inclua apenas esta observação legal no final: As informações fornecidas são baseadas na LGPD e boas práticas. Recomenda-se validação com o Setor Jurídico para decisões estratégicas e mitigação de riscos legais.`,

    replica: `Crie uma página de assistente virtual completa baseada na estrutura da OtavIA com as seguintes customizações:

**INSTRUÇÕES PARA PERSONALIZAÇÃO:**

**ESTILO VISUAL:**
- Mantenha o estilo de vidro transparente fosco (backdrop-blur-glass, bg-imetro-glass)
- Use o sistema de gradientes: from-pastel-blue-dark via-pastel-blue-medium to-pastel-blue-light para o fundo
- Cores disponíveis no sistema:
  * imetro-glass: hsl(var(--glass-bg)) (vidro fosco)
  * imetro-glass-border: hsl(var(--glass-border)) (borda vidro fosco)
  * pastel-blue-light, pastel-blue-medium, pastel-blue-dark
  * pastel-gray-light, pastel-gray-medium, pastel-white
- Gradientes para cards: from-pastel-blue-light/60, from-pastel-blue-medium/60, from-pastel-gray-medium/60

1. **IMAGENS DO HEADER:**
   - Substitua as imagens do header por: [INSERIR URLs DAS NOVAS IMAGENS]
   - Mantenha o mesmo layout responsivo e carousel

2. **IDENTIDADE DO AGENTE:**
   - Nome do Agente: [INSERIR NOME DO AGENTE]
   - Título do Agente: [INSERIR TÍTULO/CARGO]
   - Nome do Assistente Virtual: [INSERIR NOME DA IA]

3. **CRACHÁ PERSONALIZADO:**
   - O crachá deverá assumir o nome do agente do site
   - Solicitar envio de foto 3x4 do agente para personalização

4. **ÍCONES DO APLICATIVO:**
   - Fornecer novos ícones para instalação do PWA:
     * Ícone 192x192 pixels (formato PNG)
     * Ícone 512x512 pixels (formato PNG)
   - Atualizar o manifest.json com os novos ícones

5. **PROMPTS PERSONALIZADOS:**
   - Modo Flash: [INSERIR PROMPT PERSONALIZADO PARA RESPOSTAS RÁPIDAS]
   - Modo Especialista: [INSERIR PROMPT PARA ANÁLISES APROFUNDADAS]
   - Modo Pro: [INSERIR PROMPT PARA MODO PROFISSIONAL AVANÇADO]

6. **SIDEBAR - PERGUNTAS FREQUENTES:**
   - Pergunta 1: [INSERIR TÍTULO] - [INSERIR PERGUNTA COMPLETA]
   - Pergunta 2: [INSERIR TÍTULO] - [INSERIR PERGUNTA COMPLETA]
   - Pergunta 3: [INSERIR TÍTULO] - [INSERIR PERGUNTA COMPLETA]
   - Pergunta 4: [INSERIR TÍTULO] - [INSERIR PERGUNTA COMPLETA]
   - Pergunta 5: [INSERIR TÍTULO] - [INSERIR PERGUNTA COMPLETA]

7. **CARDS DE SERVIÇOS:**
   - Card 1: [INSERIR TÍTULO] - [INSERIR DESCRIÇÃO] - [INSERIR ÍCONE LUCIDE]
   - Card 2: [INSERIR TÍTULO] - [INSERIR DESCRIÇÃO] - [INSERIR ÍCONE LUCIDE]
   - Card 3: [INSERIR TÍTULO] - [INSERIR DESCRIÇÃO] - [INSERIR ÍCONE LUCIDE]
   - Card 4: [INSERIR TÍTULO] - [INSERIR DESCRIÇÃO] - [INSERIR ÍCONE LUCIDE]

8. **ALERTAS/SEÇÕES ESPECIAIS:**
   - Alerta 1: [INSERIR TÍTULO] - [INSERIR DESCRIÇÃO] - [INSERIR TIPO: info/warning/success/error]
   - Alerta 2: [INSERIR TÍTULO] - [INSERIR DESCRIÇÃO] - [INSERIR TIPO: info/warning/success/error]

**EXEMPLO DE USO:**
Preencha os campos entre colchetes com as informações específicas do seu agente e execute o comando para gerar uma página completa com toda a funcionalidade da OtavIA, mas personalizada para seu caso de uso específico.

**FUNCIONALIDADES INCLUÍDAS:**
- Chat com IA integrado
- Upload de arquivos PDF
- Múltiplos modos de resposta
- Interface responsiva com estilo vidro fosco
- Sistema de cards interativos
- Sidebar com perguntas frequentes
- Seções especiais personalizáveis
- PWA com ícones customizados
- Crachá personalizado do agente`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue-dark via-pastel-blue-medium to-pastel-blue-light">
      <div className="container mx-auto px-4 py-8">
        <PromptsPageHeader />

        <div className="space-y-6">
          <PromptCard
            title="Otavia Flash"
            prompt={prompts.flash}
            icon={<Zap className="w-5 h-5" />}
            gradientFrom="from-pastel-blue-light/60"
            gradientTo="to-pastel-white/50"
            iconColor="text-pastel-blue-dark"
          />

          <PromptCard
            title="Modo Doneda"
            prompt={prompts.doneda}
            icon={<FileText className="w-5 h-5" />}
            gradientFrom="from-pastel-blue-medium/60"
            gradientTo="to-pastel-gray-light/50"
            iconColor="text-pastel-blue-dark"
          />

          <PromptCard
            title="Otavia Pro"
            prompt={prompts.pro}
            icon={<Star className="w-5 h-5" />}
            gradientFrom="from-pastel-blue-dark/60"
            gradientTo="to-pastel-blue-medium/50"
            iconColor="text-pastel-white"
          />

          <PromptCard
            title="Prompt de Replica"
            prompt={prompts.replica}
            icon={<Copy className="w-5 h-5" />}
            gradientFrom="from-pastel-gray-medium/60" 
            gradientTo="to-pastel-blue-light/50"
            iconColor="text-pastel-blue-dark"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-pastel-white/60 text-sm">
            ⚠️ Página de acesso restrito - Prompts atualizados automaticamente
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptsPageContent;
