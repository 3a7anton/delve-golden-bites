import { useEffect, ReactNode } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  useSmoothScroll();

  useEffect(() => {
    // Add smooth scrolling class to body
    document.body.style.overflow = 'auto';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return <>{children}</>;
};
