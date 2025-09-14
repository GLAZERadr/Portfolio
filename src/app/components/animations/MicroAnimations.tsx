'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MicroAnimationsProps {
  children: React.ReactNode;
  type?: 'hover' | 'scale' | 'bounce' | 'glow' | 'float' | 'pulse';
  intensity?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

const MicroAnimations: React.FC<MicroAnimationsProps> = ({
  children,
  type = 'hover',
  intensity = 'medium',
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const intensityValues = {
    subtle: { scale: 1.02, y: -1, duration: 0.2 },
    medium: { scale: 1.05, y: -3, duration: 0.3 },
    strong: { scale: 1.1, y: -5, duration: 0.4 },
  };

  const config = intensityValues[intensity];

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animation: gsap.core.Tween | undefined;

    const handleMouseEnter = () => {
      if (animation) animation.kill();

      switch (type) {
        case 'hover':
          animation = gsap.to(element, {
            scale: config.scale,
            y: config.y,
            duration: config.duration,
            ease: 'power2.out',
          });
          break;

        case 'scale':
          animation = gsap.to(element, {
            scale: config.scale,
            duration: config.duration,
            ease: 'back.out(1.7)',
          });
          break;

        case 'bounce':
          animation = gsap.to(element, {
            y: config.y * 2,
            duration: config.duration,
            ease: 'bounce.out',
          });
          break;

        case 'glow':
          animation = gsap.to(element, {
            boxShadow: `0 0 20px rgba(76, 110, 245, ${intensity === 'strong' ? 0.6 : intensity === 'medium' ? 0.4 : 0.2})`,
            duration: config.duration,
            ease: 'power2.out',
          });
          break;

        case 'float':
          animation = gsap.to(element, {
            y: config.y,
            rotation: intensity === 'strong' ? 2 : 1,
            duration: config.duration,
            ease: 'power2.out',
          });
          break;

        case 'pulse':
          animation = gsap.to(element, {
            scale: config.scale,
            duration: config.duration,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
          });
          break;
      }
    };

    const handleMouseLeave = () => {
      if (animation) animation.kill();

      animation = gsap.to(element, {
        scale: 1,
        y: 0,
        rotation: 0,
        boxShadow: '0 0 0px rgba(76, 110, 245, 0)',
        duration: config.duration,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Auto-floating animation for float type
    if (type === 'float') {
      gsap.fromTo(element, 
        { y: 0 },
        {
          y: -2,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    }

    // Auto-pulsing for pulse type
    if (type === 'pulse') {
      gsap.fromTo(element,
        { scale: 1 },
        {
          scale: 1.02,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    }

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (animation) animation.kill();
    };
  }, [type, intensity, config]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default MicroAnimations;