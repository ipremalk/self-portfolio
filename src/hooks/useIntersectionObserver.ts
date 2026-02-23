import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook to observe element visibility using Intersection Observer API
 * @param elementRef - Reference to the element to observe
 * @param options - Intersection Observer options
 * @returns boolean indicating if element is intersecting
 */
export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
): boolean => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // If element was already visible and we want to freeze, don't observe
    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return isIntersecting;
};
