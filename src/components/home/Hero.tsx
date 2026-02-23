import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiMail } from 'react-icons/hi';
import Button from '@/components/common/Button';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Premal Katigar
            </span>
          </h1>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
            Lead React Engineer
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
            at <span className="font-semibold text-primary-600 dark:text-primary-400">Speridian Technologies</span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building exceptional user experiences with modern web technologies.
            Specializing in React, TypeScript, and scalable frontend architectures.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact">
            <Button size="lg" className="group">
              Get in Touch
              <HiMail className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>

          <Link to="/blog">
            <Button variant="outline" size="lg" className="group">
              View Blog
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
