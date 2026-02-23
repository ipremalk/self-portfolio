import { useState, useEffect } from 'react';

/**
 * Custom hook to detect media query matches
 * @param query - Media query string (e.g., '(min-width: 768px)')
 * @returns boolean indicating if query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Create event listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

/**
 * Predefined breakpoint hooks
 */
export const useIsMobile = (): boolean => useMediaQuery('(max-width: 47.99rem)'); // < 768px
export const useIsTablet = (): boolean =>
  useMediaQuery('(min-width: 48rem) and (max-width: 63.99rem)'); // 768px - 1023px
export const useIsDesktop = (): boolean => useMediaQuery('(min-width: 64rem)'); // >= 1024px
