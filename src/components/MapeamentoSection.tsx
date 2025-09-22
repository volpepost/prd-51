
import { Card } from "@/components/ui/card";
import { Map, AlertCircle, CheckCircle, Shield, Eye } from 'lucide-react';
import { BaseSection, SectionCard } from '@/components/shared';

interface MapeamentoSectionProps {
  isVisible: boolean;
}

const MapeamentoSection = ({ isVisible }: MapeamentoSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeMapeamento'));
  };

  const lembretes = [
    {
      numero: "1",
      titulo: "Todo Dado Pessoal Importa!",
      icon: AlertCircle,
      gradient: "from-red-500 to-orange-500",
      items: [
        {
          subtitulo: "Consciência Diária:",
          texto: "Antes de interagir com qualquer informação, pergunte: \"Isso é um dado pessoal? De quem é? Por que estamos usando isso?\"."
        },
        {
          subtitulo: "Definição Clara:",
          texto: "Lembre-se que dado pessoal é qualquer informação que identifique ou possa identificar uma pessoa natural (ex: nome, CPF, e-mail, telefone, IP, localização)."
        }
      ]
    },
    {
      numero: "2",
      titulo: "Entenda o \"Porquê\" e o \"Para Quê\" (Finalidade e Base Legal)",
      icon: Shield,
      gradient: "from-blue-500 to-indigo-500",
      items: [
        {
          subtitulo: "Propósito:",
          texto: "Nunca colete ou use um dado pessoal sem um propósito claro e legítimo. Antes de preencher uma planilha ou enviar um e-mail com dados de clientes, pergunte: \"Para que exatamente estamos usando este dado?\"."
        },
        {
          subtitulo: "LGPD no Coração:",
          texto: "Para cada finalidade, deve haver uma base legal (um \"motivo\" permitido pela LGPD) para o tratamento. As mais comuns são consentimento, cumprimento de contrato, obrigação legal, legítimo interesse. Você não precisa memorizar todas, mas saiba que elas existem e que o time de privacidade as valida."
        },
        {
          subtitulo: "Menos é Mais (Minimização):",
          texto: "Colete e use apenas os dados estritamente necessários para a finalidade que você definiu. Se não precisa de uma informação, não a colete."
        }
      ]
    },
    {
      numero: "3",
      titulo: "Saiba Onde os Dados Estão e Por Onde Eles Viajam (Fluxo e Armazenamento)",
      icon: Map,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      items: [
        {
          subtitulo: "Rastreabilidade:",
          texto: "Pense nos dados como \"pacotes\". Você precisa saber onde cada pacote está guardado (servidor, nuvem, arquivo físico) e para onde ele vai (outro departamento, fornecedor, sistema de e-mail marketing)."
        },
        {
          subtitulo: "Quem Tem Acesso?",
          texto: "Quem dentro da sua equipe ou fora dela (parceiros, fornecedores) tem acesso a quais dados? Esse controle é crucial para a segurança."
        },
        {
          subtitulo: "Prazo de Retenção:",
          texto: "Os dados não podem ser guardados para sempre. Quando o propósito do uso do dado acabar, ele deve ser descartado ou anonimizado. Saiba qual o prazo para cada tipo de dado."
        }
      ]
    },
    {
      numero: "4",
      titulo: "Segurança Sempre (Proteção e Acesso)",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
      items: [
        {
          subtitulo: "Proteja os Dados:",
          texto: "Independentemente de onde os dados estão ou como são usados, a segurança é primordial. Isso inclui senhas fortes, acesso restrito e cuidado ao compartilhar informações."
        },
        {
          subtitulo: "Acesso Controlado:",
          texto: "Somente pessoas autorizadas e que precisam acessar um dado para realizar suas tarefas devem ter esse acesso."
        }
      ]
    },
    {
      numero: "5",
      titulo: "Transparência e Direitos dos Titulares",
      icon: Eye,
      gradient: "from-amber-500 to-orange-500",
      items: [
        {
          subtitulo: "Comunicar é Preciso:",
          texto: "Os titulares dos dados (as pessoas a quem os dados se referem) têm direitos! Eles podem pedir acesso aos seus dados, correção, exclusão, etc."
        },
        {
          subtitulo: "Informação Clara:",
          texto: "Esteja preparado para explicar de forma simples e clara como os dados pessoais estão sendo usados, caso um titular pergunte."
        }
      ]
    }
  ];

  return (
    <BaseSection
      isVisible={isVisible}
      title="Mapeamento de Dados Pessoais"
      subtitle="O que você DEVE LEMBRAR TODOS OS DIAS para aplicar o Mapeamento de Dados"
      icon={Map}
      onClose={handleClose}
      customCloseEvent="closeMapeamento"
    >
      <div className="space-y-6">
        {lembretes.map((lembrete, index) => (
          <SectionCard
            key={index}
            title={`${lembrete.numero}. ${lembrete.titulo}`}
            icon={lembrete.icon}
            gradient={lembrete.gradient}
          >
            <div className="space-y-3">
              {lembrete.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-50/60 rounded-lg p-3 border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">{item.subtitulo}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>

      <div className="mt-8 animate-in fade-in-50 duration-700">
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-[1px] bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg"></div>
          
          <div className="relative z-10 p-4 sm:p-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              
              <div className="flex-1 space-y-3">
                <h3 className="font-bold text-green-700 text-base sm:text-lg">
                  Resumo Final em Uma Frase:
                </h3>
                <div className="bg-white/60 rounded-lg p-4 border border-green-200">
                  <p className="text-gray-800 text-sm leading-relaxed font-medium">
                    O Mapeamento de Dados é o seu <strong>compromisso diário</strong> em saber tudo sobre os dados pessoais que você toca: <strong>o que é</strong>, <strong>de quem é</strong>, <strong>por que se usa</strong>, <strong>onde está</strong>, <strong>por onde vai</strong> e <strong>por quanto tempo fica</strong>, garantindo sempre <strong>segurança</strong> e <strong>respeito aos direitos do titular</strong>.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 border border-green-300">
                  <p className="text-green-800 text-sm font-semibold text-center">
                    Mantenha esse lembrete visualmente acessível, e incentive a equipe a internalizar essas perguntas no dia a dia. Isso transforma a LGPD de um manual em uma prática constante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light px-4 py-2 rounded-full border border-pastel-blue-light">
          <Map className="w-4 h-4 text-blue-600" />
          <span>Lembre-se diariamente: dados pessoais merecem cuidado constante</span>
        </div>
      </div>
    </BaseSection>
  );
};

export default MapeamentoSection;
