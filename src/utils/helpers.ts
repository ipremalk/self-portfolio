import { format } from 'date-fns';

/**
 * Format a date to a readable string
 */
export const formatDate = (date: Date, formatStr: string = 'MMM yyyy'): string => {
  return format(date, formatStr);
};

/**
 * Calculate reading time based on word count
 */
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Truncate text to specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Get duration between two dates in human-readable format
 */
export const getDuration = (startDate: Date, endDate?: Date): string => {
  const end = endDate || new Date();
  const months = Math.floor(
    (end.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
  );

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }

  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }

  return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${
    remainingMonths === 1 ? 'month' : 'months'
  }`;
};

/**
 * Scroll to top of page smoothly
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Debounce function calls
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
