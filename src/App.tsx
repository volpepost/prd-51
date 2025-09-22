
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import TestesPageContent from "@/components/tests/TestesPageContent";
import SiteStructurePageContent from "@/components/structure/SiteStructurePageContent";
import PromptsPageContent from "@/components/prompts/PromptsPageContent";
import EstatisticasCodigo from "./pages/EstatisticasCodigo";
import NotFound from "./pages/NotFound";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import UpdateNotification from "./components/UpdateNotification";
import YouTubeBubble from "./components/YouTubeBubble";

const queryClient = new QueryClient();

const App = () => {
  const [showYoutubeBubble, setShowYoutubeBubble] = useState(false);

  const handleShowYoutube = () => {
    setShowYoutubeBubble(true);
  };

  const handleCloseYoutube = () => {
    setShowYoutubeBubble(false);
  };

  // Escutar evento customizado do Header
  useEffect(() => {
    const handleShowYoutubeBubbleEvent = () => {
      setShowYoutubeBubble(true);
    };

    window.addEventListener('showYoutubeBubble', handleShowYoutubeBubbleEvent);

    return () => {
      window.removeEventListener('showYoutubeBubble', handleShowYoutubeBubbleEvent);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PWAInstallPrompt />
        <UpdateNotification />
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index showYoutubeBubble={showYoutubeBubble} setShowYoutubeBubble={setShowYoutubeBubble} />} />
            <Route path="/testes" element={<TestesPageContent />} />
            <Route path="/estrutura" element={<SiteStructurePageContent />} />
            <Route path="/prompts-secretos" element={<PromptsPageContent />} />
            <Route path="/estatisticas" element={<EstatisticasCodigo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* YouTube Bubble */}
        <YouTubeBubble 
          isVisible={showYoutubeBubble} 
          onClose={handleCloseYoutube} 
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
