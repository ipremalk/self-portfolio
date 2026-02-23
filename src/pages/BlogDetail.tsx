import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/data/blogPosts';
import { staggerContainer } from '@/utils/animations';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <section className="py-20 px-6 min-h-screen">
      <motion.div
        className="max-w-screen-xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <BlogPost post={post} relatedPosts={relatedPosts} />
      </motion.div>
    </section>
  );
};

export default BlogDetail;
