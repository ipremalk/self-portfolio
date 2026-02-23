import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({ children, className = '', hover = false, onClick }: CardProps) => {
  const baseStyles =
    'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700';
  const hoverStyles = hover
    ? 'cursor-pointer transition-shadow hover:shadow-xl'
    : '';

  if (hover || onClick) {
    return (
      <motion.div
        className={`${baseStyles} ${hoverStyles} ${className}`}
        whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
        whileTap={onClick ? { scale: 0.98 } : undefined}
        onClick={onClick}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default Card;
