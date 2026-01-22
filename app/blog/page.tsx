import { getPublishedPosts } from '@/data/blogs';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Blog | Cavin Larry',
  description: 'Technical articles about software development, networking, and IT infrastructure',
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-200 mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-400">
            Technical articles about software development, networking, APIs, and IT infrastructure.
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-teal-300/30"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="space-y-3">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-teal-300/10 text-teal-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}