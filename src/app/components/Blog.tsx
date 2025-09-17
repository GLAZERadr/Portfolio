'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import DotGrid from './animations/DotGrid';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      setSubmitStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Call our API route
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSubmitStatus('success');
      setMessage(data.message || 'Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const blogPosts = [
    {
      id: 'transformer-architecture-evolution',
      title: 'The Evolution of Transformer Architecture: From Attention to Multi-Modal AI',
      excerpt: 'Exploring how transformer models have evolved from language processing to powering vision, audio, and multi-modal AI systems, revolutionizing machine learning research.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Transformers', 'Deep Learning', 'Multi-Modal AI', 'Research'],
      featured: true
    },
    {
      id: 'llm-reasoning-capabilities',
      title: 'Understanding Emergent Reasoning in Large Language Models',
      excerpt: 'Research insights into how large language models develop reasoning capabilities and the implications for artificial general intelligence development.',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['LLM', 'Reasoning', 'AGI', 'Cognitive Science']
    },
    {
      id: 'federated-learning-privacy',
      title: 'Federated Learning: Balancing AI Innovation with Data Privacy',
      excerpt: 'Examining how federated learning enables collaborative AI model training while preserving privacy, and its applications in healthcare and finance.',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Federated Learning', 'Privacy', 'Healthcare AI', 'Research']
    },
    {
      id: 'neural-scaling-laws',
      title: 'Neural Scaling Laws: What We\'ve Learned About Model Size and Performance',
      excerpt: 'Analysis of recent research on scaling laws in neural networks and their implications for future AI development and computational efficiency.',
      date: '2023-12-28',
      readTime: '7 min read',
      tags: ['Scaling Laws', 'Neural Networks', 'Efficiency', 'Research']
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
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Layered background with depth - same as Experience section */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-blue-dark/80 via-primary-black to-night-blue-dark/80"></div>
        
        {/* Floating gradient orbs for depth */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-accent-blue/12 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/8 to-accent-blue/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
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
            Sharing research insights and discoveries in artificial intelligence, machine learning, and emerging AI technologies
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
              Get the latest insights on AI research, machine learning breakthroughs, and emerging technologies delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  className={`flex-1 px-4 py-3 bg-night-blue-light/50 text-text-light placeholder-text-gray rounded-xl border outline-none transition-all duration-300 ${
                    submitStatus === 'error' && message
                      ? 'border-red-500 focus:border-red-500'
                      : submitStatus === 'success'
                      ? 'border-green-500 focus:border-green-500'
                      : 'border-transparent focus:border-accent-blue'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 font-medium rounded-xl transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-accent-blue/50 text-white cursor-not-allowed'
                      : 'bg-accent-blue text-white hover:bg-opacity-90'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </motion.button>
              </div>

              {/* Status Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 p-3 rounded-lg text-sm text-center ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </form>
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
            <motion.div
              className="relative group cursor-pointer inline-block"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -8,
                rotateX: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                rotateZ: -2
              }}
              viewport={{ once: true }}
            >
              {/* Main button */}
              <motion.div
                className="relative px-8 py-4 glass-effect rounded-2xl text-lg font-semibold text-text-light border border-transparent overflow-hidden"
                whileHover={{
                  borderColor: '#7c3aed',
                  color: '#7c3aed',
                  boxShadow: '0 0 30px #7c3aed40'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={{
                    translateX: ['100%', '-100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear"
                  }}
                />
                
                {/* Floating particles on hover */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -12, 0],
                    x: [0, 6, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.2
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 12, 0],
                    x: [0, -6, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.4
                  }}
                />
                
                {/* Text with reading icon effect */}
                <motion.span 
                  className="relative z-10 flex items-center gap-2"
                  whileHover={{ 
                    textShadow: '0 0 10px #7c3aed' 
                  }}
                >
                  View All Posts
                </motion.span>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;