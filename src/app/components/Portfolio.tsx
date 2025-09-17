'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MicroAnimations from './animations/MicroAnimations';
import Button from './animations/Button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
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
      description: ' A Laravel-based web application designed to support daily operational activities at Inalum.',
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
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'AIaaS', label: 'AI as a Services' },
    { id: 'web', label: 'Web Applications' },
    { id: 'tools', label: 'Tools & Utilities' }
  ];

  const filteredProjects = filter === 'all'
    ? projects.slice(0, 6)
    : projects.filter(project => project.category === filter).slice(0, 6);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Consistent layered background with depth */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-blue-dark/80 via-primary-black to-night-blue-dark/80"></div>
        
        {/* Floating gradient orbs for depth */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-accent-blue/12 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/8 to-accent-blue/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10">
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

        {/* Filter Buttons and View All Projects */}
        <motion.div
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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
          </div>

          {/* View All Projects Link */}
          <div className="flex justify-center lg:justify-end">
            <Link href="/portfolio">
              <motion.div
                className="relative group cursor-pointer inline-block"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.95
                }}
              >
                <motion.div
                  className="relative px-6 py-3 glass-effect rounded-2xl text-sm font-semibold text-text-light border border-transparent overflow-hidden"
                  whileHover={{
                    borderColor: '#4c6ef5',
                    color: '#4c6ef5',
                    boxShadow: '0 0 20px #4c6ef540'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Text with icon */}
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                  >
                    View All Projects
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </motion.div>
              </motion.div>
            </Link>
          </div>
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
      </div>
    </section>
  );
};

export default Portfolio;