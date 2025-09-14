'use client';

import { useEffect, useRef, useState } from 'react';

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  shockRadius?: number;
  shockStrength?: number;
  resistance?: number;
  returnDuration?: number;
}

interface Dot {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  offsetX: number;
  offsetY: number;
  opacity: number;
  scale: number;
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 10,
  gap = 15,
  baseColor = '#5227FF',
  activeColor = '#5227FF',
  proximity = 120,
  shockRadius = 250,
  shockStrength = 5,
  resistance = 750,
  returnDuration = 1.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const parent = canvasRef.current.parentElement;
        setDimensions({
          width: parent.offsetWidth,
          height: parent.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize dots
    const dots: Dot[] = [];
    const cols = Math.floor(dimensions.width / gap);
    const rows = Math.floor(dimensions.height / gap);
    const offsetX = (dimensions.width - (cols - 1) * gap) / 2;
    const offsetY = (dimensions.height - (rows - 1) * gap) / 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = offsetX + i * gap;
        const y = offsetY + j * gap;
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          offsetX: 0,
          offsetY: 0,
          opacity: 0.3,
          scale: 1,
        });
      }
    }

    dotsRef.current = dots;

    // Mouse event handlers with throttling for performance
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Create shock wave effect
      dotsRef.current.forEach((dot) => {
        const distance = Math.sqrt(
          Math.pow(dot.originalX - clickX, 2) + Math.pow(dot.originalY - clickY, 2)
        );
        
        if (distance <= shockRadius) {
          const angle = Math.atan2(dot.originalY - clickY, dot.originalX - clickX);
          const force = Math.max(0, 1 - distance / shockRadius);
          const pushDistance = force * shockStrength;
          
          dot.offsetX += Math.cos(angle) * pushDistance;
          dot.offsetY += Math.sin(angle) * pushDistance;
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleMouseClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        let targetOpacity = 0.3;
        let targetScale = 1;

        // Mouse proximity effect
        if (mouseRef.current.isActive) {
          const distance = Math.sqrt(
            Math.pow(dot.originalX - mouseRef.current.x, 2) + 
            Math.pow(dot.originalY - mouseRef.current.y, 2)
          );

          if (distance <= proximity) {
            const factor = 1 - distance / proximity;
            targetOpacity = 0.4 + factor * 0.6;
            targetScale = 1 + factor * 0.8;
            
            // Add magnetic effect
            const angle = Math.atan2(mouseRef.current.y - dot.originalY, mouseRef.current.x - dot.originalX);
            const magnetForce = factor * 3;
            dot.offsetX += Math.cos(angle) * magnetForce * 0.1;
            dot.offsetY += Math.sin(angle) * magnetForce * 0.1;
          }
        }

        // Apply forces and return to original position
        const returnForceX = -dot.offsetX / resistance * returnDuration;
        const returnForceY = -dot.offsetY / resistance * returnDuration;
        
        dot.offsetX += returnForceX;
        dot.offsetY += returnForceY;
        
        // Update position
        dot.x = dot.originalX + dot.offsetX;
        dot.y = dot.originalY + dot.offsetY;

        // Smooth transitions
        dot.opacity += (targetOpacity - dot.opacity) * 0.1;
        dot.scale += (targetScale - dot.scale) * 0.1;

        // Draw dot with glow effect
        ctx.save();
        ctx.globalAlpha = dot.opacity;
        
        const size = dotSize * dot.scale;
        const isActive = targetOpacity > 0.5;
        
        if (isActive) {
          // Add glow effect for active dots
          ctx.shadowColor = activeColor;
          ctx.shadowBlur = size * 2;
          ctx.fillStyle = activeColor;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = baseColor;
        }
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleMouseClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    dimensions,
    dotSize,
    gap,
    baseColor,
    activeColor,
    proximity,
    shockRadius,
    shockStrength,
    resistance,
    returnDuration,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ 
        mixBlendMode: 'normal',
        zIndex: 1
      }}
    />
  );
};

export default DotGrid;