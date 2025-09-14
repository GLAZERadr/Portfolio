'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import DotGrid from '../components/animations/DotGrid';

const BlogListPage = () => {
  const blogPosts = [
    {
      id: 'web3-development-guide',
      title: 'The Complete Guide to Web3 Development in 2024',
      excerpt: 'Explore the latest trends, tools, and best practices for building decentralized applications in the rapidly evolving Web3 ecosystem.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Web3', 'Blockchain', 'DeFi', 'Smart Contracts'],
      featured: true,
      author: 'Adrian Glazer'
    },
    {
      id: 'react-performance-optimization',
      title: 'Advanced React Performance Optimization Techniques',
      excerpt: 'Learn how to optimize your React applications for better performance with advanced techniques like memoization, code splitting, and lazy loading.',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['React', 'Performance', 'JavaScript', 'Optimization'],
      author: 'Adrian Glazer'
    },
    {
      id: 'solidity-security-patterns',
      title: 'Essential Security Patterns for Solidity Smart Contracts',
      excerpt: 'Discover critical security patterns and best practices to write secure smart contracts and avoid common vulnerabilities.',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Solidity', 'Security', 'Smart Contracts', 'Best Practices'],
      author: 'Adrian Glazer'
    },
    {
      id: 'nextjs-13-features',
      title: 'Exploring Next.js 13: App Directory and Server Components',
      excerpt: 'Deep dive into Next.js 13\'s revolutionary app directory and server components, and how they change the way we build React applications.',
      date: '2023-12-28',
      readTime: '7 min read',
      tags: ['Next.js', 'React', 'Server Components', 'App Directory'],
      author: 'Adrian Glazer'
    }
  ];

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
      <div className="absolute inset-0 w-full h-full opacity-30">
        <DotGrid
          dotSize={3}
          gap={30}
          baseColor="#7c3aed"
          activeColor="#a855f7"
          proximity={150}
          shockRadius={250}
          shockStrength={8}
          resistance={800}
          returnDuration={2.5}
        />
      </div>

      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Blog & Insights
            </h1>
            <p className="text-text-gray text-lg max-w-3xl mx-auto">
              Sharing knowledge and insights about web development, blockchain, and emerging technologies
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.article
              key={post.id}
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href={`/blog/${post.id}`}>
                <motion.div
                  className="glass-effect rounded-2xl overflow-hidden group cursor-pointer hover:border-accent-blue transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Featured Image Placeholder */}
                  <div className="h-80 bg-gradient-to-br from-accent-blue/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl gradient-text font-bold">Featured Article</div>
                    </div>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-accent-blue text-white text-sm font-semibold rounded-full">
                      Featured
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-night-blue-light/50 text-accent-blue text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-text-light mb-4 group-hover:text-accent-blue transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-text-gray text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-text-gray">
                      <div className="flex items-center space-x-4">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.article>
          ))}

          {/* All Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, postIndex) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: postIndex * 0.1 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <motion.div
                    className="glass-effect rounded-xl overflow-hidden group cursor-pointer hover:border-accent-blue transition-all duration-300 h-full"
                    whileHover={{ y: -5 }}
                  >
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-night-blue-light/50 to-accent-blue/10 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-2xl gradient-text font-bold">{post.tags[0]}</div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-night-blue-light/50 text-accent-blue text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-text-light mb-3 group-hover:text-accent-blue transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-text-gray">
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Stay Updated
              </h3>
              <p className="text-text-gray mb-6 text-lg">
                Get the latest insights on web development, blockchain, and tech trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-night-blue-light/50 text-text-light placeholder-text-gray rounded-xl border border-transparent focus:border-accent-blue outline-none transition-all duration-300"
                />
                <motion.button
                  className="px-6 py-3 bg-accent-blue text-white font-medium rounded-xl hover:bg-opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;