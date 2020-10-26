import { useState, useEffect, useRef } from 'react';

export const useComponentVisible = (initialIsVisible: boolean) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const [isClicked, setIsClicked] = useState(false);

  const ref = useRef<HTMLElement>(null);

  const handleEscButton = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsVisible(false);
      setIsClicked(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      setIsVisible(false);
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscButton, true);
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('keydown', handleEscButton, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return {
    isVisible,
    setIsVisible,
    isClicked,
    setIsClicked,
    ref,
  };
};
