import { motion } from 'framer-motion';
import { BlogPost } from '@/types';
import BlogCard from './BlogCard';
import { staggerContainer, fadeInUp } from '@/utils/animations';

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-600 dark:text-gray-400">
          No blog posts found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={fadeInUp}>
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogList;
