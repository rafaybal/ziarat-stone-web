
import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useInView(
  elementRef: RefObject<Element>,
  options: InViewOptions = { threshold: 0 }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementRef, options.root, options.rootMargin, options.threshold]);

  return isInView;
}
