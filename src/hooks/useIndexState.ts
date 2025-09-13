
import { useState } from 'react';

export const useIndexState = () => {
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  return {
    attachedFile,
    setAttachedFile
  };
};
