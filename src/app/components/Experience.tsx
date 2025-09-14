'use client';

import { motion } from 'framer-motion';
import DotGrid from './animations/DotGrid';

const Experience = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Web3 Startup',
      description: 'Leading development of DeFi protocols and smart contracts. Built scalable React applications with Web3 integration.',
      technologies: ['React', 'Solidity', 'Web3.js', 'Node.js', 'TypeScript'],
      type: 'work'
    },
    {
      year: '2023',
      title: 'Frontend Lead',
      company: 'TechCorp Solutions',
      description: 'Managed a team of 5 developers building enterprise SaaS applications. Implemented modern CI/CD pipelines.',
      technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Docker'],
      type: 'work'
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'Digital Agency',
      description: 'Developed custom web applications for various clients. Specialized in e-commerce and content management systems.',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS'],
      type: 'work'
    },
    {
      year: '2021',
      title: 'Blockchain Development Certification',
      company: 'ConsenSys Academy',
      description: 'Completed comprehensive blockchain development program focusing on Ethereum and smart contract development.',
      technologies: ['Solidity', 'Truffle', 'Web3', 'Ethereum', 'DeFi'],
      type: 'education'
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'StartupXYZ',
      description: 'Started my journey in web development. Worked on various frontend projects and learned modern development practices.',
      technologies: ['JavaScript', 'React', 'HTML/CSS', 'Node.js', 'MongoDB'],
      type: 'work'
    },
  ];

  return (
    <section id="experience" className="py-20 card-bg relative overflow-hidden">
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
          <motion.button
            className="px-8 py-3 glass-effect text-text-light font-medium rounded-2xl hover:border-accent-blue transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;