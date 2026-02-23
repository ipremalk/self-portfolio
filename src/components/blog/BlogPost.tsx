import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiClock, HiCalendar, HiArrowLeft, HiUser } from 'react-icons/hi';
import { BlogPost as BlogPostType } from '@/types';
import { formatDate } from '@/utils/helpers';
import { fadeInUp } from '@/utils/animations';

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts?: BlogPostType[];
}

const BlogPost = ({ post, relatedPosts }: BlogPostProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <motion.div className="mb-8" variants={fadeInUp}>
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <HiArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header className="mb-8" variants={fadeInUp}>
        <div className="mb-4">
          <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <HiUser size={18} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiCalendar size={18} />
            <span>{formatDate(post.publishedDate, 'MMMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiClock size={18} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        className="prose prose-lg dark:prose-invert max-w-none mb-12"
        variants={fadeInUp}
      >
        <div
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
        />
      </motion.div>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <motion.div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800" variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </article>
  );
};

export default BlogPost;
