import { useState } from 'react';

export const useCommonState = () => {
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  return {
    attachedFile,
    setAttachedFile
  };
};