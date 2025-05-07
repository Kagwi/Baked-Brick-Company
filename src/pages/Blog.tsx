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
        backgroundImage="https://images.pexels.com/photos/888882/pexels-photo-888882.jpeg?auto=compress&cs=tinysrgb&w=600"
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-stone-600 mb-6">
              Stay up to date with our latest articles, tips, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
            <p className="text-stone-500 text-sm mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
