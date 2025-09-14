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
    <section id="hero" className="min-h-screen flex items-center justify-center section-bg relative overflow-hidden">
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-accent-blue/10 to-purple-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-purple-500/10 to-accent-blue/10 blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
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