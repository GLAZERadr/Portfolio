'use client';

import { motion } from 'framer-motion';
import DotGrid from './animations/DotGrid';

const Experience = () => {
  const experiences = [
    {
      year: '2024 - Present',
      title: 'Co-founder and Chief Executive Officer',
      company: 'ADA4Career',
      description: 'Spearheaded launch and UX validation of closed beta with 20+ users, testing personalized CV optimization, job-matching algorithms, and AIDA chat features. Led ADA4Career to international recognition—Top 17 Microsoft Imagine Cup Semifinalist and Most Honorable Team awardee.',
      technologies: ['AI/ML', 'Python', 'Azure', 'AWS', 'Leadership', 'Strategy'],
      type: 'work'
    },
    {
      year: '2024 - 2025',
      title: 'Full-Stack 3D Web Developer',
      company: 'PT Indonesia Asahan Aluminium (Inalum)',
      description: 'Developed interactive 3D web applications and immersive user experiences. Built full-stack solutions integrating 3D visualization with backend data systems for industrial applications.',
      technologies: ['JavaScript', 'Three.js', 'WebGL', 'React', 'Node.js', '3D Graphics'],
      type: 'work'
    },
    {
      year: '2024 - 2025',
      title: 'Database Specialist',
      company: 'Siemens Healthineers',
      description: 'Built dashboards with 3 key tabs and engineer profile cards, improving task distribution efficiency by 25%. Analyzed 4 datasets (60,000+ rows, 15+ columns) to assess performance of 20+ field engineers across 200+ service notifications.',
      technologies: ['Python', 'SQL', 'Tableau', 'Data Analysis', 'Dashboard Development'],
      type: 'work'
    },
    {
      year: '2021 - 2025',
      title: 'Bachelor of Data Science',
      company: 'Telkom University',
      description: 'Graduated with GPA: 3.7, specializing in data science, machine learning, and statistical analysis. Built strong foundation in data engineering and AI/ML technologies.',
      technologies: ['Data Science', 'Machine Learning', 'Statistics', 'Python', 'Research'],
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Layered background with depth */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-blue-dark/80 via-primary-black to-night-blue-dark/80"></div>
        
        {/* Floating gradient orbs for depth */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-accent-blue/12 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/8 to-accent-blue/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      {/* Dynamic Dot Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <DotGrid
          dotSize={4}
          gap={25}
          baseColor="#4c6ef5"
          activeColor="#7c3aed"
          proximity={120}
          shockRadius={200}
          shockStrength={6}
          resistance={900}
          returnDuration={2.5}
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
            Experience Journey
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            My path through the evolving landscape of web development and blockchain technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="relative flex items-center">
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-primary-black glow-effect"></div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-effect rounded-2xl p-6 hover:border-accent-blue transition-all duration-300">
                    {/* Year Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue text-sm font-semibold rounded-full">
                        {exp.year}
                      </span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'work' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-text-light mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-accent-blue font-medium mb-4">
                      {exp.company}
                    </h4>

                    {/* Description */}
                    <p className="text-text-gray leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-night-blue-light/50 text-text-light text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-text-light mb-4">
            Ready for the next challenge
          </h3>
          <p className="text-text-gray mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to work on innovative projects that push the boundaries 
            of technology and create meaningful impact.
          </p>
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
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Main button */}
            <motion.div
              className="relative px-8 py-4 glass-effect rounded-2xl text-lg font-semibold text-text-light border border-transparent overflow-hidden"
              whileHover={{
                borderColor: '#5227FF',
                color: '#5227FF',
                boxShadow: '0 0 30px #5227FF40'
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
                className="absolute -top-1 -right-1 w-2 h-2 bg-accent-blue rounded-full opacity-0 group-hover:opacity-100"
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
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100"
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
              
              {/* Text with sparkle effect */}
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ 
                  textShadow: '0 0 10px #5227FF' 
                }}
              >
                Let&apos;s Work Together
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;