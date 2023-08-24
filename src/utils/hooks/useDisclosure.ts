'use client';

import { useState } from 'react';

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    document.body.style.overflowY = 'scroll';
    setIsOpen(false);
  };
  const onOpen = () => {
    document.body.style.overflowY = 'hidden';
    setIsOpen(true);
  };

  return {
    isOpen,
    onClose,
    onOpen,
  };
};
