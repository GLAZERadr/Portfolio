'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, User, CheckCircle } from 'lucide-react';

interface Technology {
  name: string;
  purpose: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  technologies: Technology[];
  challenges: string[];
  outcomes: string[];
  duration: string;
  teamSize: string;
  myRole: string;
  status: string;
}

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen section-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night-blue-dark/80 via-primary-black to-night-blue-dark/80"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-accent-blue/12 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-text-gray hover:text-accent-blue transition-colors duration-200">
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Info */}
            <div className="space-y-6">
              {/* Category & Status */}
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue text-sm rounded-full border border-accent-blue/30">
                  {project.category === 'AIaaS' ? 'AI as a Service' :
                   project.category === 'web' ? 'Web Application' :
                   project.category === 'tools' ? 'Tool & Utility' : project.category}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                  {project.status}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-text-gray leading-relaxed">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-night-blue-light/30">
                <div className="flex items-center gap-2 text-text-gray">
                  <Calendar size={16} />
                  <span className="text-sm">Duration: {project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-text-gray">
                  <Users size={16} />
                  <span className="text-sm">Team: {project.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-text-gray">
                  <User size={16} />
                  <span className="text-sm">Role: {project.myRole}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.demoUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 glass-effect text-text-light rounded-xl font-medium hover:border-accent-blue transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={18} />
                  Source Code
                </motion.a>
              </div>
            </div>

            {/* Project Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-night-blue to-night-blue-dark rounded-2xl overflow-hidden">
                {project.image.startsWith('/img/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl gradient-text font-bold opacity-50">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold gradient-text mb-6">Project Overview</h2>
                <div className="prose prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-text-gray leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>

              {/* Technologies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold gradient-text mb-6">Technologies Used</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="glass-effect rounded-xl p-4">
                      <h3 className="text-accent-blue font-semibold mb-2">{tech.name}</h3>
                      <p className="text-text-gray text-sm">{tech.purpose}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Challenges */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold gradient-text mb-6">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <p className="text-text-gray leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Outcomes */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold gradient-text mb-6">Results & Impact</h2>
                <div className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-text-gray leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tags */}
              <motion.div
                className="glass-effect rounded-2xl p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-text-light mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-night-blue-light/50 text-text-light text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                className="glass-effect rounded-2xl p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-text-light mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <motion.a
                    href={project.demoUrl}
                    className="flex items-center gap-2 w-full px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-lg hover:bg-accent-blue/30 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={16} />
                    <span>View Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 w-full px-4 py-2 bg-gray-600/20 text-gray-300 rounded-lg hover:bg-gray-600/30 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={16} />
                    <span>View Source</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Navigation */}
              <motion.div
                className="glass-effect rounded-2xl p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-text-light mb-4">Explore More</h3>
                <div className="space-y-3">
                  <Link href="/portfolio" className="flex items-center gap-2 text-text-gray hover:text-accent-blue transition-colors duration-200">
                    <ArrowLeft size={16} />
                    <span>All Projects</span>
                  </Link>
                  <Link href="/blog" className="flex items-center gap-2 text-text-gray hover:text-accent-blue transition-colors duration-200">
                    <span>Latest Insights</span>
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 text-text-gray hover:text-accent-blue transition-colors duration-200">
                    <span>Get In Touch</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;