import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  // Get next and previous posts
  const currentIndex = post ? blogPosts.findIndex((p) => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }

  return (
    <div>
      {/* Hero Image */}
      <div className="w-full h-[60vh] relative">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <div className="max-w-3xl">
              <span className="inline-block bg-emerald-700 text-white text-sm font-medium px-3 py-1 mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-white/80 gap-y-2">
                <div className="flex items-center mr-6">
                  <User size={16} className="mr-2" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center mr-6">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <NavLink 
              to="/blog" 
              className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </NavLink>

            <div className="prose prose-lg prose-stone max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mt-12 flex items-center">
              <Tag size={16} className="mr-2 text-stone-600" />
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-stone-100 text-stone-800 text-sm rounded-full">
                  {post.category}
                </span>
                <span className="px-3 py-1 bg-stone-100 text-stone-800 text-sm rounded-full">
                  Landscaping
                </span>
                <span className="px-3 py-1 bg-stone-100 text-stone-800 text-sm rounded-full">
                  Garden
                </span>
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-6 bg-stone-50 rounded-lg">
              <div className="flex items-start">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-stone-800">{post.author.name}</h3>
                  <p className="text-stone-600 text-sm mb-2">{post.author.role}</p>
                  <p className="text-stone-700">
                    A passionate landscape professional with years of experience in creating beautiful outdoor spaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Post Navigation */}
            <div className="mt-12 border-t border-b border-stone-200 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevPost && (
                  <NavLink to={`/blog/${prevPost.slug}`} className="group">
                    <span className="text-sm text-stone-500 block mb-2">Previous Article</span>
                    <h4 className="font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
                      {prevPost.title}
                    </h4>
                  </NavLink>
                )}
                
                {nextPost && (
                  <NavLink to={`/blog/${nextPost.slug}`} className="group md:text-right">
                    <span className="text-sm text-stone-500 block mb-2">Next Article</span>
                    <h4 className="font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
                      {nextPost.title}
                    </h4>
                  </NavLink>
                )}
              </div>
            </div>

            {/* Related Posts (simplified for this example) */}
            <div className="mt-12">
              <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <NavLink
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group flex gap-4"
                    >
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 mb-1 group-hover:text-emerald-700 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <span className="text-sm text-stone-500">{relatedPost.date}</span>
                      </div>
                    </NavLink>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;