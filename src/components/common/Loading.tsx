import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loading = ({ size = 'md', text }: LoadingProps) => {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className={`${sizeMap[size]} border-4 border-primary-200 border-t-primary-600 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {text && <p className="mt-4 text-gray-600 dark:text-gray-400">{text}</p>}
    </div>
  );
};

export default Loading;
