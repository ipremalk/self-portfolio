import { motion } from 'framer-motion';
import { socialLinks } from '@/data/socialLinks';
import { staggerContainer, fadeInUp } from '@/utils/animations';

const SocialLinks = () => {
  return (
    <motion.div
      className="mt-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Connect With Me
      </h3>

      <div className="flex justify-center gap-6">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.platform}
              href={social.url}
              target={social.platform !== 'Email' && social.platform !== 'Phone' ? '_blank' : undefined}
              rel={social.platform !== 'Email' && social.platform !== 'Phone' ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              className="group"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                <Icon
                  className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  size={28}
                />
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
