import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      <Hero
        title="Our Blog"
        subtitle="Expert advice, tips, and insights for your landscaping projects"
        backgroundImage="https://raw.githubusercontent.com/Kagwi/Baked-Brick-Company/refs/heads/main/Baked%20Brick10.webp"
        showButtons={false}
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-700 text-white'
                    : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-stone-800 mb-2">No posts found</h3>
              <p className="text-stone-600">
                There are no posts in this category yet. Please check back later or select another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
