'use client';

import { useState } from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = 'Get Started',
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  href,
  target,
  rel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-10',
    md: 'px-6 py-3 text-base h-12',
    lg: 'px-8 py-4 text-lg h-14',
  };

  const getVariantStyles = () => {
    if (variant === 'primary') {
      return {
        borderColor: '#5227FF',
        textColor: '#5227FF',
        fillColor: '#5227FF',
      };
    } else {
      return {
        borderColor: '#7c3aed',
        textColor: '#7c3aed', 
        fillColor: '#7c3aed',
      };
    }
  };

  const styles = getVariantStyles();

  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
  };

  const buttonClasses = `
    relative flex items-center justify-center gap-1 font-semibold 
    ${isHovered ? 'rounded-xl' : 'rounded-full'} 
    border-4 border-transparent cursor-pointer overflow-hidden
    transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {/* Left Arrow (slides in on hover) */}
      <svg 
        viewBox="0 0 24 24" 
        className={`absolute w-6 h-6 z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isHovered ? 'left-4' : '-left-6'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: isHovered ? '#212121' : styles.fillColor }}
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      
      {/* Text */}
      <span 
        className={`relative z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isHovered ? 'translate-x-3' : '-translate-x-3'
        }`}
        style={{ color: isHovered ? '#212121' : styles.textColor }}
      >
        {children}
      </span>
      
      {/* Expanding Circle */}
      <div 
        className={`absolute top-1/2 left-1/2 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'w-56 h-56 opacity-100' : 'w-5 h-5 opacity-0'
        }`}
        style={{ backgroundColor: styles.fillColor }}
      />
      
      {/* Right Arrow (slides out on hover) */}
      <svg 
        viewBox="0 0 24 24" 
        className={`absolute w-6 h-6 z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isHovered ? '-right-6' : 'right-4'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: isHovered ? '#212121' : styles.fillColor }}
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </>
  );

  const buttonStyle = {
    boxShadow: isHovered 
      ? '0 0 0 12px transparent' 
      : `0 0 0 2px ${styles.borderColor}`,
    backgroundColor: 'transparent',
    transform: undefined as string | undefined,
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      style={buttonStyle}
      disabled={disabled}
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
        e.currentTarget.style.boxShadow = `0 0 0 4px ${styles.borderColor}`;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = isHovered 
          ? '0 0 0 12px transparent' 
          : `0 0 0 2px ${styles.borderColor}`;
      }}
    >
      {content}
    </button>
  );
};

export default Button;