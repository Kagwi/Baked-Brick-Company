import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          alt={post.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 bg-emerald-700 text-white text-sm font-medium px-3 py-1">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex text-sm text-stone-500 mb-2 items-center">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">{post.title}</h3>
        <p className="text-stone-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <NavLink
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
        >
          Read More
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </NavLink>
      </div>
    </article>
  );
};

export default BlogCard;
