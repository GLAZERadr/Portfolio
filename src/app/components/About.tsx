'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const skills = [
    // Programming Languages
    { name: 'Python', color: '#3776AB', bgColor: 'from-blue-600/20 to-yellow-400/20' },
    { name: 'JavaScript', color: '#F7DF1E', bgColor: 'from-yellow-400/20 to-yellow-600/20' },
    { name: 'HTML', color: '#E34F26', bgColor: 'from-orange-500/20 to-red-500/20' },
    { name: 'CSS', color: '#1572B6', bgColor: 'from-blue-500/20 to-blue-700/20' },
    { name: 'Go', color: '#00ADD8', bgColor: 'from-cyan-400/20 to-blue-500/20' },
    
    // Frameworks
    { name: 'Flask', color: '#000000', bgColor: 'from-gray-700/20 to-gray-900/20' },
    { name: 'Django', color: '#092E20', bgColor: 'from-green-800/20 to-gray-800/20' },
    { name: 'Fiber', color: '#00D9FF', bgColor: 'from-cyan-400/20 to-cyan-600/20' },
    { name: 'Express', color: '#000000', bgColor: 'from-gray-600/20 to-gray-800/20' },
    
    // Databases
    { name: 'MySQL', color: '#4479A1', bgColor: 'from-blue-600/20 to-orange-400/20' },
    { name: 'Oracle', color: '#F80000', bgColor: 'from-red-500/20 to-red-700/20' },
    { name: 'PostgreSQL', color: '#336791', bgColor: 'from-blue-700/20 to-blue-900/20' },
    { name: 'Cassandra', color: '#1287B1', bgColor: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'MongoDB', color: '#47A248', bgColor: 'from-green-600/20 to-green-800/20' },
    
    // Cloud & Tools
    { name: 'Azure', color: '#0078D4', bgColor: 'from-blue-500/20 to-blue-700/20' },
    { name: 'AWS', color: '#FF9900', bgColor: 'from-orange-400/20 to-orange-600/20' },
    { name: 'Git', color: '#F05032', bgColor: 'from-orange-500/20 to-red-500/20' },
    { name: 'GitHub', color: '#181717', bgColor: 'from-gray-700/20 to-gray-900/20' },
    { name: 'VSCode', color: '#007ACC', bgColor: 'from-blue-600/20 to-blue-800/20' },
    { name: 'Tableau', color: '#E97627', bgColor: 'from-orange-500/20 to-blue-600/20' },
    { name: 'Hadoop', color: '#FF9900', bgColor: 'from-yellow-500/20 to-orange-600/20' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            About Me
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content - Left Side */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-light leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Adrian{' '}
                <span className="gradient-text">
                  Glazer
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-accent-blue font-medium tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Full-Stack Developer & AI Engineer
              </motion.p>
            </div>

            {/* Description */}
            <motion.div 
              className="space-y-4 text-text-gray leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                Hello, I’m a data enthusiast and AI engineer with experience turning complex datasets into actionable insights and building intelligent systems that create real impact. 
                My journey began with data analytics and dashboard development, and has grown into developing machine learning models, AI-powered platforms, and scalable cloud solutions.
              </p>
              
              <p className="text-lg">
                I specialize in Python, SQL, and Power BI for analytics, and leverage frameworks like TensorFlow, PyTorch, and Hugging Face to build and deploy AI solutions. 
                Recently, I’ve focused on AI-driven products such as chatbots, job-matching algorithms, and generative AI applications that combine innovation with usability.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-accent-blue text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Portfolio
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-night-blue-light/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-3xl font-bold gradient-text">25+</div>
                <div className="text-text-gray text-sm uppercase tracking-wide">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-text-gray text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-text-gray text-sm uppercase tracking-wide">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main photo container - clean and professional */}
              <motion.div
                className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden relative group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                {/* Subtle border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-purple-500/20 p-[2px]">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-night-blue-dark">
                    {/* Image */}
                    <Image
                      src="/me.jpeg"
                      alt="Adrian Glazer"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                      priority
                    />
                    
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
              
              {/* Minimalist floating accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-blue rounded-full opacity-80"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Technologies I Work With
            </h3>
            <p className="text-text-gray text-lg">
              A curated selection of tools and frameworks I use to bring ideas to life
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default About;