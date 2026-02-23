import { useState, useMemo } from 'react';
import BlogList from '@/components/blog/BlogList';
import BlogFilters from '@/components/blog/BlogFilters';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, React, TypeScript, and more
          </p>
        </div>

        <BlogFilters
          activeCategory={activeCategory}
          searchTerm={searchTerm}
          onCategoryChange={setActiveCategory}
          onSearchChange={setSearchTerm}
        />

        <BlogList posts={filteredPosts} />
      </div>
    </section>
  );
};

export default Blog;
