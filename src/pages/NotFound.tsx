import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHome } from 'react-icons/hi';
import Button from '@/components/common/Button';
import { fadeInUp } from '@/utils/animations';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          404
        </motion.h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <Link to="/">
          <Button size="lg">
            <HiHome className="mr-2" size={20} />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
