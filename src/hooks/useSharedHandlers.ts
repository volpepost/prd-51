import { useCallback } from 'react';

export const useSharedHandlers = () => {
  const createCloseHandler = useCallback((eventName: string) => {
    return () => {
      window.dispatchEvent(new CustomEvent(eventName));
    };
  }, []);

  const createShowHandler = useCallback((eventName: string) => {
    return () => {
      window.dispatchEvent(new CustomEvent(eventName));
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return {
    createCloseHandler,
    createShowHandler,
    scrollToSection
  };
};