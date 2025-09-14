'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import DotGrid from '../../components/animations/DotGrid';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

interface BlogPostProps {
  post: BlogPost;
}

// Function to render markdown-like content
const renderContent = (content: string) => {
  const lines = content.trim().split('\n');
  return lines.map((line, index) => {
    // Headers
    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-4xl font-bold gradient-text mb-6 mt-8">{line.slice(2)}</h1>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-3xl font-bold text-text-light mb-4 mt-8">{line.slice(3)}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-2xl font-semibold text-text-light mb-3 mt-6">{line.slice(4)}</h3>;
    }
    
    // Code blocks
    if (line.startsWith('```')) {
      const language = line.slice(3);
      const codeStart = index;
      let codeEnd = index + 1;
      while (codeEnd < lines.length && !lines[codeEnd].startsWith('```')) {
        codeEnd++;
      }
      const codeContent = lines.slice(codeStart + 1, codeEnd).join('\n');
      return (
        <div key={index} className="my-6 bg-night-blue-light/50 rounded-xl p-6 overflow-x-auto">
          <div className="text-xs text-accent-blue mb-2 font-mono">{language}</div>
          <pre className="text-text-light font-mono text-sm whitespace-pre-wrap">
            <code>{codeContent}</code>
          </pre>
        </div>
      );
    }
    
    // Lists
    if (line.startsWith('- ')) {
      return <li key={index} className="text-text-gray mb-2 ml-4">{line.slice(2)}</li>;
    }
    
    // Bold text with **
    if (line.includes('**')) {
      const parts = line.split('**');
      return (
        <p key={index} className="text-text-gray leading-relaxed mb-4">
          {parts.map((part, i) => 
            i % 2 === 1 ? <strong key={i} className="text-text-light font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }
    
    // Empty lines
    if (line.trim() === '') {
      return <div key={index} className="mb-4"></div>;
    }
    
    // Regular paragraphs
    if (line.trim() !== '' && !line.startsWith('```') && !line.startsWith('#')) {
      return <p key={index} className="text-text-gray leading-relaxed mb-4">{line}</p>;
    }
    
    return null;
  }).filter(Boolean);
};

export default function BlogPost({ post }: BlogPostProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen section-bg relative overflow-hidden">
      {/* Dynamic Dot Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <DotGrid
          dotSize={2}
          gap={35}
          baseColor="#7c3aed"
          activeColor="#a855f7"
          proximity={100}
          shockRadius={150}
          shockStrength={4}
          resistance={1200}
          returnDuration={3}
        />
      </div>

      <div className="relative z-10 pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link 
                href="/blog" 
                className="inline-flex items-center text-accent-blue hover:text-text-light transition-colors duration-200 group"
              >
                <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Posts
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-night-blue-light/50 text-accent-blue text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="text-xl text-text-gray leading-relaxed mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {post.excerpt}
            </motion.p>
            
            {/* Meta */}
            <motion.div
              className="flex items-center text-text-gray space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-accent-blue text-sm font-semibold">AG</span>
                </div>
                <span>By {post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </motion.div>
          </motion.header>

          {/* Content */}
          <motion.div
            className="glass-effect rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            className="border-t border-night-blue-light/30 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Share Links */}
              <div className="flex items-center space-x-4">
                <span className="text-text-gray text-sm">Share this article:</span>
                <div className="flex space-x-3">
                  <motion.a
                    href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-gray hover:text-accent-blue transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={`https://linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-gray hover:text-accent-blue transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Related Posts Link */}
              <Link 
                href="/blog" 
                className="text-accent-blue hover:text-text-light transition-colors duration-200 text-sm font-medium"
              >
                Read More Articles →
              </Link>
            </div>
          </motion.footer>
        </article>
      </div>
    </div>
  );
}