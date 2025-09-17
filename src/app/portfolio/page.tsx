'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DotGrid from '../components/animations/DotGrid';
import MicroAnimations from '../components/animations/MicroAnimations';

const PortfolioGalleryPage = () => {
  const [filter, setFilter] = useState('all');

  const allProjects = [
    {
      id: 1,
      title: 'ADA4Career',
      description: 'An AI-powered career platform that matches job seekers with opportunities and guides their career journey.',
      image: '/img/ADA4Career.png',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'LangChain', 'OpenAI'],
      category: 'AIaaS',
      demoUrl: 'https://ada4career.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Chronicles',
      description: 'A web platform that uses Generative AI and Stable Diffusion to make English learning more creative, visual, and collaborative.',
      image: '/img/Chronicles.png',
      tags: ['Next.js', 'Python', 'Go', 'Flask', 'Fiber', 'LangChain', 'Llama 3.1'],
      category: 'AIaaS',
      demoUrl: 'https://chronicles-learn.netlify.app/',
      githubUrl: 'https://github.com/GLAZERadr/Chronicles-API.git',
      featured: true
    },
    {
      id: 3,
      title: 'Inalum Daily Operation Information System',
      description: 'A Laravel-based web application designed to support daily operational activities at Inalum.',
      image: '/img/Inalum-DAOS.png',
      tags: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'TailwindCSS'],
      category: 'web',
      demoUrl: 'https://inalum-daily-operation-information.vercel.app/login',
      githubUrl: 'https://github.com/GLAZERadr/Inalum-Daily-Operation-Information-System.git',
      featured: false
    },
    {
      id: 4,
      title: 'Inalum Material Management System',
      description: 'A Laravel-based web application designed to support material management.',
      image: '/api/placeholder/400/300',
      tags: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'TailwindCSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/GLAZERadr/Material-Management-System.git',
      featured: false
    },
    {
      id: 5,
      title: 'Telkom University FRI Asset Management System',
      description: 'A Laravel-based web application designed to manage asset in Fakultas Rekayasa Industri.',
      image: '/img/FRI-Asset.png',
      tags: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'TailwindCSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/GLAZERadr/FRI-Asset-Management-System.git',
      featured: false
    },
    {
      id: 6,
      title: 'DLP Security System Using Regex',
      description: 'A data loss prevention tool that detects and blocks sensitive information by applying regular expressions to identify patterns.',
      image: '/api/placeholder/400/300',
      tags: ['Python', 'HTML', 'CSS', 'PyTesseract', 'Cryptography'],
      category: 'tools',
      demoUrl: '#',
      githubUrl: 'https://github.com/GLAZERadr/DLP-Security-System-Using-Regex.git',
      featured: false
    },
    {
      id: 7,
      title: 'Smart Agriculture IoT Platform',
      description: 'An IoT-based platform for monitoring soil moisture, temperature, and automated irrigation systems for smart farming.',
      image: '/api/placeholder/400/300',
      tags: ['Arduino', 'Python', 'Flask', 'SQLite', 'Bootstrap'],
      category: 'tools',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'E-Commerce Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for e-commerce businesses to track sales, customer behavior, and inventory.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 9,
      title: 'AI Document Classifier',
      description: 'A machine learning system that automatically classifies and organizes documents using natural language processing.',
      image: '/api/placeholder/400/300',
      tags: ['Python', 'TensorFlow', 'NLTK', 'Scikit-learn', 'FastAPI'],
      category: 'AIaaS',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 10,
      title: 'Real-time Chat Application',
      description: 'A modern real-time chat application with file sharing, group chats, and video calling capabilities.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 11,
      title: 'Blockchain Voting System',
      description: 'A decentralized voting system built on blockchain technology ensuring transparency and security in elections.',
      image: '/api/placeholder/400/300',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      category: 'tools',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 12,
      title: 'Personal Finance Tracker',
      description: 'A comprehensive personal finance management application with budget tracking, expense analysis, and financial insights.',
      image: '/api/placeholder/400/300',
      tags: ['Vue.js', 'Django', 'PostgreSQL', 'Chart.js', 'Stripe'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'AIaaS', label: 'AI as a Service' },
    { id: 'web', label: 'Web Applications' },
    { id: 'tools', label: 'Tools & Utilities' }
  ];

  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === filter);

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
              Portfolio Gallery
            </h1>
            <p className="text-text-gray text-lg max-w-3xl mx-auto">
              A comprehensive collection of innovative projects showcasing AI, web development, and cutting-edge technology solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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

          {/* Projects Count */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-text-gray">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </p>
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
                  className="card-bg rounded-2xl overflow-hidden group hover:border-accent-blue transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  {/* Project Image */}
                  <div className="relative h-48 md:h-56 bg-gradient-to-br from-night-blue to-night-blue-dark overflow-hidden">
                    {project.image.startsWith('/img/') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl gradient-text font-bold opacity-50">
                          {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </div>
                      </div>
                    )}

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-accent-blue text-white text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    )}

                    {/* Hover Overlay - Show project details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-accent-blue text-sm font-semibold mb-1">
                          {project.category === 'AIaaS' ? 'AI as a Service' :
                           project.category === 'web' ? 'Web Application' :
                           project.category === 'tools' ? 'Tool & Utility' : project.category}
                        </div>
                        <div className="text-white font-bold text-lg mb-2">{project.title}</div>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-accent-blue/20 text-white text-xs rounded border border-accent-blue/30"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-600/50 text-white text-xs rounded">
                              +{project.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
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

        </div>
      </div>
    </div>
  );
};

export default PortfolioGalleryPage;