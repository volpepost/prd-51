
import { useState, useEffect, useCallback } from 'react';

interface ResponsiveVoiceSettings {
  rate: number;
  pitch: number;
  volume: number;
  voice: string;
  autoPlay: boolean;
}

const DEFAULT_SETTINGS: ResponsiveVoiceSettings = {
  rate: 1,
  pitch: 1,
  volume: 0.8,
  voice: 'Brazilian Portuguese Female', // Voz feminina em português brasileiro
  autoPlay: false
};

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, voice: string, options?: any) => void;
      cancel: () => void;
      pause: () => void;
      resume: () => void;
      isPlaying: () => boolean;
      voiceSupport: () => boolean;
      getVoices: () => any[];
      OnVoiceReady?: () => void;
    };
  }
}

export const useResponsiveVoice = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<ResponsiveVoiceSettings>(DEFAULT_SETTINGS);
  const [currentText, setCurrentText] = useState<string>('');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('otavia-responsivevoice-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        console.warn('Error loading ResponsiveVoice settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: Partial<ResponsiveVoiceSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('otavia-responsivevoice-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load ResponsiveVoice script and check support
  useEffect(() => {
    const loadResponsiveVoice = () => {
      // Check if already loaded
      if (window.responsiveVoice) {
        setIsSupported(window.responsiveVoice.voiceSupport());
        setIsLoading(false);
        console.log('ResponsiveVoice já carregado e pronto');
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://code.responsivevoice.org/responsivevoice.js?key=FREE';
      script.async = true;
      
      script.onload = () => {
        // Wait for ResponsiveVoice to be ready
        const checkReady = () => {
          if (window.responsiveVoice && window.responsiveVoice.voiceSupport()) {
            setIsSupported(true);
            setIsLoading(false);
            console.log('ResponsiveVoice carregado com sucesso');
          } else {
            setTimeout(checkReady, 100);
          }
        };
        checkReady();
      };

      script.onerror = () => {
        console.error('Erro ao carregar ResponsiveVoice');
        setIsSupported(false);
        setIsLoading(false);
      };

      document.head.appendChild(script);
    };

    loadResponsiveVoice();

    // Cleanup
    return () => {
      if (window.responsiveVoice) {
        window.responsiveVoice.cancel();
      }
    };
  }, []);

  const speak = useCallback((text: string) => {
    if (!isSupported || !text.trim() || !window.responsiveVoice) {
      console.warn('ResponsiveVoice não está disponível ou texto está vazio');
      return;
    }

    // Stop any current speech
    window.responsiveVoice.cancel();
    setCurrentText(text);

    const options = {
      rate: settings.rate,
      pitch: settings.pitch,
      volume: settings.volume,
      onstart: () => {
        setIsPlaying(true);
        setIsPaused(false);
        console.log('Reprodução iniciada');
      },
      onend: () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentText('');
        console.log('Reprodução finalizada');
      },
      onerror: (error: any) => {
        console.error('Erro na reprodução:', error);
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentText('');
      }
    };

    window.responsiveVoice.speak(text, settings.voice, options);
  }, [isSupported, settings]);

  const stop = useCallback(() => {
    if (window.responsiveVoice) {
      window.responsiveVoice.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentText('');
    }
  }, []);

  const pause = useCallback(() => {
    if (window.responsiveVoice && isPlaying && !isPaused) {
      window.responsiveVoice.pause();
      setIsPaused(true);
    }
  }, [isPlaying, isPaused]);

  const resume = useCallback(() => {
    if (window.responsiveVoice && isPlaying && isPaused) {
      window.responsiveVoice.resume();
      setIsPaused(false);
    }
  }, [isPlaying, isPaused]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    } else if (currentText) {
      speak(currentText);
    }
  }, [isPlaying, isPaused, currentText, resume, pause, speak]);

  return {
    isSupported,
    isLoading,
    isPlaying,
    isPaused,
    settings,
    speak,
    stop,
    pause,
    resume,
    toggle,
    updateSettings: saveSettings
  };
};
