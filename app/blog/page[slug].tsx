import { getPostBySlug, getPublishedPosts } from '@/data/blogs';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export async function generateStaticParams() {
  const posts = getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Cavin Larry`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Cavin Larry'],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Back Navigation */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-200 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-teal-300/10 text-teal-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-slate max-w-none">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-slate-200 mt-12 mb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-200 mt-10 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-slate-300 mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-slate-400 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-slate-400">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-400">
                  {children}
                </ol>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-teal-300 hover:text-teal-200 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-teal-300 pl-4 italic text-slate-400 my-6">
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content || ''}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-teal-300 hover:text-teal-200 transition-colors"
            >
              ← More articles
            </Link>
            <Link
              href="/"
              className="text-teal-300 hover:text-teal-200 transition-colors"
            >
              Back to home →
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}