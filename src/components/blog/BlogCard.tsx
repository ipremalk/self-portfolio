import { Link } from 'react-router-dom';
import { HiClock, HiCalendar, HiArrowRight } from 'react-icons/hi';
import { BlogPost } from '@/types';
import { formatDate } from '@/utils/helpers';
import Card from '@/components/common/Card';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <Card hover className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
            {post.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <HiCalendar size={16} />
            <span>{formatDate(post.publishedDate, 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiClock size={16} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group">
          <span>Read More</span>
          <HiArrowRight
            className="ml-2 group-hover:translate-x-2 transition-transform"
            size={16}
          />
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
