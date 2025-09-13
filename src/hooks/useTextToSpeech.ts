
import { useState, useEffect, useRef, useCallback } from 'react';

interface Voice {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
}

interface TextToSpeechSettings {
  rate: number;
  pitch: number;
  volume: number;
  autoPlay: boolean;
  selectedVoiceURI: string;
}

const DEFAULT_SETTINGS: TextToSpeechSettings = {
  rate: 1,
  pitch: 1,
  volume: 0.8,
  autoPlay: false,
  selectedVoiceURI: ''
};

export const useTextToSpeech = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [settings, setSettings] = useState<TextToSpeechSettings>(DEFAULT_SETTINGS);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const currentTextRef = useRef<string>('');
  const franciscaVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('otavia-tts-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        console.warn('Error loading TTS settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: Partial<TextToSpeechSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('otavia-tts-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Check support and find Francisca voice
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        
        // Procurar especificamente pela voz Francisca
        const franciscaVoice = availableVoices.find(voice => 
          voice.name.toLowerCase().includes('francisca')
        );

        if (franciscaVoice) {
          franciscaVoiceRef.current = franciscaVoice;
          const franciscaVoiceObj = {
            voice: franciscaVoice,
            name: franciscaVoice.name,
            lang: franciscaVoice.lang
          };
          setVoices([franciscaVoiceObj]);
          console.log('Voz Francisca encontrada e configurada:', franciscaVoice.name);
        } else {
          console.warn('Voz Francisca não encontrada no sistema');
          setVoices([]);
        }
      };

      // Load voices immediately
      loadVoices();
      
      // Load voices when they change (some browsers load them asynchronously)
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Set Francisca voice as default when found
  useEffect(() => {
    if (franciscaVoiceRef.current && !settings.selectedVoiceURI) {
      saveSettings({ selectedVoiceURI: franciscaVoiceRef.current.voiceURI });
    }
  }, [franciscaVoiceRef.current, settings.selectedVoiceURI, saveSettings]);

  const speak = useCallback((text: string) => {
    if (!isSupported || !text.trim()) return;

    // Só prosseguir se a voz Francisca estiver disponível
    if (!franciscaVoiceRef.current) {
      console.warn('Voz Francisca não está disponível. Texto não será reproduzido.');
      return;
    }

    // Stop any current speech
    speechSynthesis.cancel();
    
    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Always use Francisca voice
    utterance.voice = franciscaVoiceRef.current;
    
    // Apply settings
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;
    utterance.volume = settings.volume;
    
    // Set up event handlers
    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };
    
    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
      currentTextRef.current = '';
    };
    
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
      currentTextRef.current = '';
    };
    
    utterance.onpause = () => {
      setIsPaused(true);
    };
    
    utterance.onresume = () => {
      setIsPaused(false);
    };
    
    // Store references
    utteranceRef.current = utterance;
    currentTextRef.current = text;
    
    // Start speaking
    speechSynthesis.speak(utterance);
  }, [isSupported, settings]);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    utteranceRef.current = null;
    currentTextRef.current = '';
  }, []);

  const pause = useCallback(() => {
    if (isPlaying && !isPaused) {
      speechSynthesis.pause();
    }
  }, [isPlaying, isPaused]);

  const resume = useCallback(() => {
    if (isPlaying && isPaused) {
      speechSynthesis.resume();
    }
  }, [isPlaying, isPaused]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    } else if (currentTextRef.current) {
      speak(currentTextRef.current);
    }
  }, [isPlaying, isPaused, resume, pause, speak]);

  return {
    isSupported,
    isPlaying,
    isPaused,
    voices,
    settings,
    speak,
    stop,
    pause,
    resume,
    toggle,
    updateSettings: saveSettings
  };
};
