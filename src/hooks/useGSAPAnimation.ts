import { useEffect, useRef } from 'react';
import { animations } from '../lib/animations';

export const useGSAPAnimation = <T extends HTMLElement>(
  animationType: keyof typeof animations,
  options?: gsap.TweenVars,
  dependencies: unknown[] = []
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current && animationType !== 'staggerIn' && animationType !== 'parallax') {
      animations[animationType](ref.current, options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return ref;
};

export const useStaggerAnimation = <T extends HTMLElement>(
  selector: string,
  options?: gsap.TweenVars,
  dependencies: unknown[] = []
) => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(selector);
      if (elements.length > 0) {
        animations.staggerIn(Array.from(elements) as HTMLElement[], options);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return containerRef;
};

export const useParallax = <T extends HTMLElement>(
  speed: number = 0.5,
  dependencies: unknown[] = []
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animations.parallax(ref.current, speed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return ref;
};
