
export const useTestesHandlers = () => {
  const handleButtonClick = (buttonTitle: string) => {
    console.log(`Botão clicado: ${buttonTitle}`);
  };

  return {
    handleButtonClick
  };
};
