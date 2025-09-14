'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import MicroAnimations from './animations/MicroAnimations';
import Button from './animations/Button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'DeFi Trading Platform',
      description: 'A decentralized trading platform built with React and Web3 integration. Features real-time price feeds and smart contract interactions.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Web3', 'Solidity', 'TypeScript'],
      category: 'web3',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      description: 'Full-stack marketplace for creating, buying, and selling NFTs. Built with Next.js and integrated with IPFS for metadata storage.',
      image: '/api/placeholder/400/300',
      tags: ['Next.js', 'IPFS', 'Smart Contracts', 'TailwindCSS'],
      category: 'web3',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Dashboard',
      description: 'Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Charts.js'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Chat App',
      description: 'Real-time chat application with AI integration for smart responses and sentiment analysis.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Socket.io', 'OpenAI', 'MongoDB'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Smart Contract Auditor',
      description: 'Tool for analyzing and auditing smart contracts for common vulnerabilities and gas optimization.',
      image: '/api/placeholder/400/300',
      tags: ['Python', 'Solidity', 'Security', 'Analysis'],
      category: 'tools',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Web3 Authentication System',
      description: 'Decentralized authentication system using wallet signatures and JWT tokens for secure user management.',
      image: '/api/placeholder/400/300',
      tags: ['Web3', 'Authentication', 'JWT', 'React'],
      category: 'web3',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web3', label: 'Web3 & Blockchain' },
    { id: 'web', label: 'Web Applications' },
    { id: 'tools', label: 'Tools & Utilities' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Portfolio
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Showcasing innovative projects that blend creativity with cutting-edge technology
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filterOption) => (
            <motion.button
              key={filterOption.id}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                filter === filterOption.id
                  ? 'bg-accent-blue text-white glow-effect'
                  : 'glass-effect text-text-gray hover:text-text-light hover:border-accent-blue'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(filterOption.id)}
            >
              {filterOption.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <MicroAnimations
              key={project.id}
              type="hover"
              intensity="medium"
            >
              <motion.div
                className={`card-bg rounded-2xl overflow-hidden group hover:border-accent-blue transition-all duration-300 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-night-blue to-night-blue-dark overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl gradient-text font-bold opacity-50">
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                </div>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent-blue text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.demoUrl}
                    className="px-4 py-2 bg-accent-blue text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="px-4 py-2 glass-effect text-text-light rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-light mb-3 group-hover:text-accent-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-gray mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-night-blue-light/50 text-text-light text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.demoUrl}
                    className="flex-1 text-center py-2 bg-accent-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex-1 text-center py-2 glass-effect text-text-light rounded-lg font-medium hover:border-accent-blue transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
            </MicroAnimations>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-text-light mb-4">
            Interested in working together?
          </h3>
          <p className="text-text-gray mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start a Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;