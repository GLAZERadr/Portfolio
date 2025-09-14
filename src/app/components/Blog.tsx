'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import DotGrid from './animations/DotGrid';

const Blog = () => {
  const blogPosts = [
    {
      id: 'web3-development-guide',
      title: 'The Complete Guide to Web3 Development in 2024',
      excerpt: 'Explore the latest trends, tools, and best practices for building decentralized applications in the rapidly evolving Web3 ecosystem.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Web3', 'Blockchain', 'DeFi', 'Smart Contracts'],
      featured: true
    },
    {
      id: 'react-performance-optimization',
      title: 'Advanced React Performance Optimization Techniques',
      excerpt: 'Learn how to optimize your React applications for better performance with advanced techniques like memoization, code splitting, and lazy loading.',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['React', 'Performance', 'JavaScript', 'Optimization']
    },
    {
      id: 'solidity-security-patterns',
      title: 'Essential Security Patterns for Solidity Smart Contracts',
      excerpt: 'Discover critical security patterns and best practices to write secure smart contracts and avoid common vulnerabilities.',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Solidity', 'Security', 'Smart Contracts', 'Best Practices']
    },
    {
      id: 'nextjs-13-features',
      title: 'Exploring Next.js 13: App Directory and Server Components',
      excerpt: 'Deep dive into Next.js 13\'s revolutionary app directory and server components, and how they change the way we build React applications.',
      date: '2023-12-28',
      readTime: '7 min read',
      tags: ['Next.js', 'React', 'Server Components', 'App Directory']
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
    <section id="blog" className="py-20 card-bg relative overflow-hidden">
      {/* Dynamic Dot Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-50">
        <DotGrid
          dotSize={3}
          gap={25}
          baseColor="#7c3aed"
          activeColor="#a855f7"
          proximity={140}
          shockRadius={220}
          shockStrength={7}
          resistance={850}
          returnDuration={2}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Latest Insights
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, blockchain, and emerging technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.id}`}>
                <motion.div
                  className="glass-effect rounded-2xl overflow-hidden group cursor-pointer hover:border-accent-blue transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Featured Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-accent-blue/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl gradient-text font-bold">Featured Post</div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent-blue text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-night-blue-light/50 text-accent-blue text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-text-light mb-4 group-hover:text-accent-blue transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-gray leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-text-gray">
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

          {/* Recent Posts */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-text-light mb-6">Recent Posts</h3>
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.id}`}>
                  <motion.div
                    className="glass-effect rounded-xl p-6 group cursor-pointer hover:border-accent-blue transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
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
                    <h4 className="text-lg font-semibold text-text-light mb-2 group-hover:text-accent-blue transition-colors duration-300 leading-tight">
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-text-gray">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span>{post.readTime}</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Stay Updated
            </h3>
            <p className="text-text-gray mb-6">
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

        {/* View All Posts Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/blog">
            <motion.button
              className="px-8 py-3 glass-effect text-text-light font-medium rounded-2xl hover:border-accent-blue transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Posts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;