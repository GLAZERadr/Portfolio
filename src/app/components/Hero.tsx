'use client';

import { motion } from 'framer-motion';
import DotGrid from './animations/DotGrid';
import TextType from './animations/TextType';
import Button from './animations/Button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Consistent layered background with depth - same as other sections */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-blue-dark/80 via-primary-black to-night-blue-dark/80"></div>
        
        {/* Floating gradient orbs for depth */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-accent-blue/12 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/8 to-accent-blue/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Dynamic Dot Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={4}
          gap={20}
          baseColor="#5227FF"
          activeColor="#7c3aed"
          proximity={200}
          shockRadius={400}
          shockStrength={12}
          resistance={600}
          returnDuration={1.8}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-text-gray mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hey There,
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I AM ADRIAN
          </motion.h1>

          {/* Animated Tagline */}
          <motion.div
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-text-light mb-8 min-h-[1.5em] flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TextType
              text={[
                "Full-Stack Developer",
                "AI Engineer",
                "Entrepreneur"
              ]}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-text-gray max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Building innovative solutions with modern technologies. 
            Passionate about creating seamless user experiences and AI-powered applications that shape the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;