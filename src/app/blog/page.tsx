'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import DotGrid from '../components/animations/DotGrid';

const BlogListPage = () => {
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
      featured: true,
      author: 'Adrian Glazer'
    },
    {
      id: 'llm-reasoning-capabilities',
      title: 'Understanding Emergent Reasoning in Large Language Models',
      excerpt: 'Research insights into how large language models develop reasoning capabilities and the implications for artificial general intelligence development.',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['LLM', 'Reasoning', 'AGI', 'Cognitive Science'],
      author: 'Adrian Glazer'
    },
    {
      id: 'federated-learning-privacy',
      title: 'Federated Learning: Balancing AI Innovation with Data Privacy',
      excerpt: 'Examining how federated learning enables collaborative AI model training while preserving privacy, and its applications in healthcare and finance.',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Federated Learning', 'Privacy', 'Healthcare AI', 'Research'],
      author: 'Adrian Glazer'
    },
    {
      id: 'neural-scaling-laws',
      title: 'Neural Scaling Laws: What We\'ve Learned About Model Size and Performance',
      excerpt: 'Analysis of recent research on scaling laws in neural networks and their implications for future AI development and computational efficiency.',
      date: '2023-12-28',
      readTime: '7 min read',
      tags: ['Scaling Laws', 'Neural Networks', 'Efficiency', 'Research'],
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
              Sharing research insights and discoveries in artificial intelligence, machine learning, and emerging AI technologies
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
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;