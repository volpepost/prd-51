
export const useTestesData = () => {
  const testButtons = [
    { id: 1, title: "Documentação", description: "Gerir documentos" },
    { id: 2, title: "Configurações", description: "Ajustar sistema" },
    { id: 5, title: "Base Dados", description: "Consultar BD" },
    { id: 6, title: "Bloqueios", description: "Gerir acessos" },
    { id: 9, title: "Download", description: "Baixar arquivos" },
    { id: 10, title: "Upload", description: "Enviar arquivos" },
    { id: 13, title: "Agenda", description: "Programar eventos" },
    { id: 17, title: "Etiquetas", description: "Classificar" },
    { id: 18, title: "Favoritos", description: "Itens salvos" }
  ];

  return {
    testButtons
  };
};
