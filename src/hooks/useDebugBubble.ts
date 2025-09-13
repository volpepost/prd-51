
import { useState } from 'react';

interface DebugBubbleState {
  isVisible: boolean;
  position: { x: number; y: number };
  title: string;
  description: string;
}

interface DebugHighlightState {
  isVisible: boolean;
  bounds: { x: number; y: number; width: number; height: number };
}

export const useDebugBubble = () => {
  const [debugBubble, setDebugBubble] = useState<DebugBubbleState>({
    isVisible: false,
    position: { x: 0, y: 0 },
    title: '',
    description: ''
  });

  const [debugHighlight, setDebugHighlight] = useState<DebugHighlightState>({
    isVisible: false,
    bounds: { x: 0, y: 0, width: 0, height: 0 }
  });

  const showDebugBubble = (event: React.MouseEvent, title: string, description: string) => {
    console.log('Debug bubble clicked:', title);
    
    event.preventDefault();
    event.stopPropagation();
    
    const elementFromPoint = document.elementFromPoint(event.clientX, event.clientY);
    const targetElement = elementFromPoint || event.currentTarget;
    
    console.log('Target element:', targetElement);
    
    const rect = targetElement.getBoundingClientRect();
    
    let bubbleX = Math.min(event.clientX + 20, window.innerWidth - 400);
    let bubbleY = Math.max(event.clientY - 100, 20);
    
    if (bubbleX < 20) bubbleX = 20;
    if (bubbleY + 350 > window.innerHeight) {
      bubbleY = window.innerHeight - 370;
    }
    
    const computedStyle = window.getComputedStyle(targetElement as Element);
    const padding = {
      top: parseInt(computedStyle.paddingTop) || 0,
      right: parseInt(computedStyle.paddingRight) || 0,
      bottom: parseInt(computedStyle.paddingBottom) || 0,
      left: parseInt(computedStyle.paddingLeft) || 0
    };
    const margin = {
      top: parseInt(computedStyle.marginTop) || 0,
      right: parseInt(computedStyle.marginRight) || 0,
      bottom: parseInt(computedStyle.marginBottom) || 0,
      left: parseInt(computedStyle.marginLeft) || 0
    };

    const elementInfo = {
      tagName: targetElement.tagName.toLowerCase(),
      className: targetElement.className || 'N/A',
      id: targetElement.id || 'N/A',
      textContent: (targetElement.textContent?.substring(0, 50) || 'N/A') + (targetElement.textContent && targetElement.textContent.length > 50 ? '...' : '')
    };
    
    const detailedInfo = `${description}

🎯 ELEMENTO CAPTURADO:
• Tag: ${elementInfo.tagName}
• Classes: ${elementInfo.className}
• ID: ${elementInfo.id}
• Texto: ${elementInfo.textContent}

📐 DIMENSÕES EXATAS:
• Largura: ${rect.width.toFixed(1)}px
• Altura: ${rect.height.toFixed(1)}px
• Posição X: ${rect.left.toFixed(1)}px
• Posição Y: ${rect.top.toFixed(1)}px

📦 ESPAÇAMENTO INTERNO (Padding):
• Top: ${padding.top}px
• Right: ${padding.right}px  
• Bottom: ${padding.bottom}px
• Left: ${padding.left}px

📏 ESPAÇAMENTO EXTERNO (Margin):
• Top: ${margin.top}px
• Right: ${margin.right}px
• Bottom: ${margin.bottom}px  
• Left: ${margin.left}px

🎨 PROPRIEDADES VISUAIS:
• Font Size: ${computedStyle.fontSize}
• Font Weight: ${computedStyle.fontWeight}
• Color: ${computedStyle.color}
• Background: ${computedStyle.backgroundColor}
• Border: ${computedStyle.border || 'none'}
• Border Radius: ${computedStyle.borderRadius}
• Display: ${computedStyle.display}
• Position: ${computedStyle.position}
• Z-Index: ${computedStyle.zIndex}
• Opacity: ${computedStyle.opacity}`;
    
    console.log('Setting debug bubble state...');
    
    setDebugBubble({
      isVisible: true,
      position: { x: bubbleX, y: bubbleY },
      title: `🔍 ${title}`,
      description: detailedInfo
    });

    setDebugHighlight({
      isVisible: true,
      bounds: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      }
    });
    
    console.log('Debug bubble should be visible now');
  };

  const closeDebugBubble = () => {
    console.log('Closing debug bubble');
    setDebugBubble({
      isVisible: false,
      position: { x: 0, y: 0 },
      title: '',
      description: ''
    });
    setDebugHighlight({
      isVisible: false,
      bounds: { x: 0, y: 0, width: 0, height: 0 }
    });
  };

  return {
    debugBubble,
    debugHighlight,
    showDebugBubble,
    closeDebugBubble
  };
};
