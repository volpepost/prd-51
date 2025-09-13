
import React from 'react';
import { useSiteStructureData } from '@/hooks/useSiteStructureData';
import { useSiteStructureHandlers } from '@/hooks/useSiteStructureHandlers';
import SiteStructureContent from "@/components/structure/SiteStructureContent";
import DebugHighlight from "@/components/structure/DebugHighlight";
import DebugBubble from "@/components/DebugBubble";

const SiteStructurePageContent = () => {
  const structureData = useSiteStructureData();
  const handlers = useSiteStructureHandlers(structureData);

  return (
    <>
      <SiteStructureContent
        {...structureData}
        {...handlers}
      />

      <DebugHighlight
        isVisible={structureData.debugHighlight.isVisible}
        bounds={structureData.debugHighlight.bounds}
      />

      {structureData.debugBubble.isVisible && (
        <DebugBubble
          isVisible={structureData.debugBubble.isVisible}
          position={structureData.debugBubble.position}
          title={structureData.debugBubble.title}
          description={structureData.debugBubble.description}
          onClose={handlers.closeDebugBubble}
        />
      )}
    </>
  );
};

export default SiteStructurePageContent;
