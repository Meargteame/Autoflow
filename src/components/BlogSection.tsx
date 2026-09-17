import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';

export function BlogSection() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const others = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="section-badge bg-white/10 border-white/20 text-white mb-4 inline-flex">
              INSIGHTS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mt-4">
              Latest posts <span className="highlight-lime text-[#1a1a1a]">and updates</span>
            </h2>
          </div>
          <a href="#" className="btn-dark bg-[#1a3a2a] text-sm self-start sm:self-auto">
            View all posts
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured post */}
          {featured && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl text-[#1a1a1a] mb-3">
                  {featured.title}
                </h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={featured.imageUrl}
                    alt={featured.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">{featured.author}</p>
                  <p className="text-xs text-[#6b7280]">{featured.authorDate}</p>
                </div>
              </div>
            </div>
          )}

          {/* Other posts list */}
          <div className="space-y-4">
            {others.map((post) => (
              <a
                key={post.id}
                href="#"
                className="flex items-center gap-4 bg-white rounded-xl p-4 hover:shadow-md transition-shadow group"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-20 h-16 sm:w-24 sm:h-18 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-xs text-[#6b7280] mb-1">{post.date}</p>
                  <h4 className="text-sm sm:text-base font-semibold text-[#1a1a1a] group-hover:text-[#1a8a7d] transition-colors">
                    {post.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
