import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { socialLinks } from '@/data/socialLinks';
import { scrollToTop } from '@/utils/helpers';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Premal Katigar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Lead React Engineer passionate about building exceptional user experiences with
              modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 3).map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target={social.platform !== 'Email' ? '_blank' : undefined}
                    rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Premal Katigar. Built with{' '}
            <FaHeart className="inline text-red-500 mx-1" size={14} /> using React & Tailwind CSS
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <HiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
