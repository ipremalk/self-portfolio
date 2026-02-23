import { motion } from 'framer-motion';
import { HiSearch } from 'react-icons/hi';
import { BLOG_CATEGORIES } from '@/utils/constants';

interface BlogFiltersProps {
  activeCategory: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (term: string) => void;
}

const BlogFilters = ({
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}: BlogFiltersProps) => {
  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3">
        {BLOG_CATEGORIES.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-primary-600 text-white dark:bg-primary-500'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilters;
