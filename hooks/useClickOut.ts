import { useEffect, useRef } from 'react';

export const useClickOut = (handler: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const checkClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', checkClick);
    return () => document.removeEventListener('mousedown', checkClick);
  }, []);
  return ref;
};
