'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const skills = [
    { name: 'React', color: '#61DAFB', bgColor: 'from-cyan-400/20 to-blue-500/20' },
    { name: 'Next.js', color: '#000000', bgColor: 'from-gray-700/20 to-gray-900/20' },
    { name: 'TypeScript', color: '#3178C6', bgColor: 'from-blue-600/20 to-blue-800/20' },
    { name: 'Node.js', color: '#339933', bgColor: 'from-green-500/20 to-green-700/20' },
    { name: 'Python', color: '#3776AB', bgColor: 'from-yellow-400/20 to-blue-600/20' },
    { name: 'Solidity', color: '#363636', bgColor: 'from-gray-600/20 to-gray-800/20' },
    { name: 'Web3', color: '#F16822', bgColor: 'from-orange-400/20 to-orange-600/20' },
    { name: 'Blockchain', color: '#FFD700', bgColor: 'from-yellow-400/20 to-yellow-600/20' },
    { name: 'Smart Contracts', color: '#8B5CF6', bgColor: 'from-purple-400/20 to-purple-600/20' },
    { name: 'TailwindCSS', color: '#06B6D4', bgColor: 'from-cyan-400/20 to-cyan-600/20' },
    { name: 'PostgreSQL', color: '#336791', bgColor: 'from-blue-700/20 to-blue-900/20' },
    { name: 'MongoDB', color: '#47A248', bgColor: 'from-green-600/20 to-green-800/20' }
  ];

  return (
    <section id="about" className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden card-bg p-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-night-blue-light to-night-blue-dark flex items-center justify-center">
                  {/* Uncomment and use when image exists */}
                  <Image
                    src="/me.jpeg"
                    alt="Adrian Glazer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-blue rounded-full glow-effect"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full glow-effect"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-text-gray leading-relaxed">
              <p className="text-lg">
                I&apos;m a passionate full-stack developer with over 5 years of experience 
                building modern web applications and decentralized solutions. My journey 
                started with traditional web development and evolved into the exciting 
                world of blockchain and Web3 technologies.
              </p>
              
              <p className="text-lg">
                I specialize in creating seamless user experiences using React and Next.js, 
                while also developing robust backend systems with Node.js and Python. 
                My recent focus has been on building DeFi applications and smart contracts 
                that push the boundaries of what&apos;s possible on the blockchain.
              </p>
              
              <p className="text-lg">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                technical blog posts and community talks.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-text-light mb-4">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.08,
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
                    {/* Main pill */}
                    <motion.div
                      className="relative px-4 py-2 glass-effect rounded-xl text-sm font-medium text-text-light border border-transparent overflow-hidden"
                      whileHover={{
                        borderColor: skill.color,
                        color: skill.color,
                        boxShadow: `0 0 20px ${skill.color}40`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated background gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.bgColor} opacity-0 group-hover:opacity-100`}
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
                        className="absolute -top-1 -right-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          y: [0, -8, 0],
                          x: [0, 4, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.2
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          y: [0, 8, 0],
                          x: [0, -4, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.4
                        }}
                      />
                      
                      {/* Text content */}
                      <span className="relative z-10">
                        {skill.name}
                      </span>
                      
                      {/* Pulsing ring on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                        style={{ 
                          border: `2px solid ${skill.color}`,
                          filter: 'blur(1px)'
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    {/* Floating tooltip */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {skill.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45 -mt-1" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-text-gray text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-text-gray text-sm">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-text-gray text-sm">Commits</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;