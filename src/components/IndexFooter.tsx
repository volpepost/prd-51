
import React from 'react';
import { TreePalm, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import ImageDebug from '@/components/ui/image-debug';

const IndexFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Show back arrow only on structure page
  const isStructurePage = location.pathname === '/estrutura';

  const handleTreeClick = () => {
    navigate('/estrutura');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleOctopusClick = () => {
    console.log('Clique no polvo detectado - disparando evento showSobreOtavia');
    window.dispatchEvent(new CustomEvent('showSobreOtavia'));
  };

  return (
    <footer className="backdrop-blur-glass bg-imetro-glass border-t border-imetro-glass-border p-6 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isStructurePage && (
              <button
                onClick={handleBackClick}
                className="text-pastel-blue-dark hover:text-pastel-blue-medium transition-colors duration-300 mr-4"
                title="Voltar à página principal"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="flex-1 flex items-center justify-center space-x-3">
            <button
              onClick={handleOctopusClick}
              className="opacity-50 hover:opacity-70 transition-opacity duration-300 cursor-pointer flex-shrink-0"
              title="Sobre a OtavIA"
            >
              <ImageDebug
                src="/lovable-uploads/header-owl.png"
                alt="OtavIA - Coruja inteligente"
                width="16"
                height="16"
                className="w-4 h-4"
                onLoad={() => console.log('✅ Footer owl icon loaded successfully')}
                onError={(e) => console.error('❌ Footer owl icon failed to load:', e)}
              />
            </button>
            
            <p className={`text-pastel-blue-dark text-center ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}>
              OtavIA oferece análise técnica especializada em LGPD e não substitui decisões oficiais ou pareceres jurídicos formais.
            </p>
            
            <button
              onClick={handleTreeClick}
              className="text-pastel-blue-medium hover:text-pastel-blue-dark transition-colors duration-300 flex-shrink-0"
              title="Ver estrutura do site"
            >
              <TreePalm className="w-4 h-4" />
            </button>
          </div>
          
          <div className="w-8"></div>
        </div>
      </div>
    </footer>
  );
};

export default IndexFooter;
