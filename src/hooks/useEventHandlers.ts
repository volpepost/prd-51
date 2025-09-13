
export const useEventHandlers = (
  showSection: (sectionName: string) => void,
  setSelectedContext: (context: string) => void,
  setIsContextMode: (mode: boolean) => void,
  setResponse: (response: string) => void
) => {
  const scrollToSection = (selector: string) => {
    setTimeout(() => {
      const section = document.querySelector(selector);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleServiceClick = (serviceName: string, serviceDescription: string) => {
    console.log('Serviço selecionado:', serviceName, serviceDescription);
    
    switch (serviceName) {
      case 'MAPEAMENTO':
        showSection('mapeamento');
        scrollToSection('[data-mapeamento-section]');
        return;
      case 'GESTÃO DEPÓSITO':
        showSection('gestaoDeposito');
        scrollToSection('[data-gestao-deposito-section]');
        return;
      case 'AUDITORIA DEPÓSITO':
        showSection('auditoriaDeposito');
        scrollToSection('[data-auditoria-deposito-section]');
        return;
      case 'CONTROLE DE ACESSO':
        showSection('controleAcesso');
        scrollToSection('[data-controle-acesso-section]');
        return;
    }
    
    // Funcionalidade de contexto removida - apenas scroll
  };

  const handleQuestionClick = (questionTitle: string, question: string) => {
    console.log('Pergunta selecionada:', questionTitle, question);
    
    switch (questionTitle) {
      case 'Consentimento':
        showSection('consentimento');
        scrollToSection('[data-consentimento-section]');
        return;
      case 'Vazamento':
        showSection('vazamento');
        scrollToSection('[data-vazamento-section]');
        return;
      case 'Cookies':
        showSection('cookies');
        scrollToSection('[data-cookies-section]');
        return;
    }
    
    // Funcionalidade de contexto removida - apenas scroll
  };

  return {
    handleServiceClick,
    handleQuestionClick
  };
};
