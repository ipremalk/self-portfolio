import { useEffect, useState } from 'react';

interface UseScrollAnimationReturn {
  scrollY: number;
  isScrolled: boolean;
  scrollDirection: 'up' | 'down' | null;
}

/**
 * Custom hook to track scroll position and direction
 * @param threshold - Scroll threshold to consider as "scrolled"
 * @returns Scroll state information
 */
export const useScrollAnimation = (threshold: number = 50): UseScrollAnimationReturn => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    // Throttle scroll event for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return {
    scrollY,
    isScrolled: scrollY > threshold,
    scrollDirection,
  };
};
