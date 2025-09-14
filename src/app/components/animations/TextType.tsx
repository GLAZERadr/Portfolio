'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  onComplete?: () => void;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
  onComplete,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | undefined>(undefined);
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!textRef.current || text.length === 0) return;

    const tl = gsap.timeline({
      repeat: -1, // Infinite loop
      onComplete: () => {
        onComplete?.();
      },
    });

    timelineRef.current = tl;

    // Cursor blinking animation
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }

    let globalIndex = 0;

    text.forEach((sentence, sentenceIndex) => {
      const isLastSentence = sentenceIndex === text.length - 1;

      // Type each character
      for (let i = 0; i <= sentence.length; i++) {
        tl.to(
          {},
          {
            duration: typingSpeed / 1000,
            onStart: () => {
              setCurrentText(sentence.slice(0, i));
            },
            delay: globalIndex === 0 ? 0.5 : 0, // Initial delay for first character
          }
        );
        globalIndex++;
      }

      // Pause at end of sentence
      tl.to({}, { duration: pauseDuration / 1000 });

      // Erase text (including last sentence for infinite loop)
      for (let i = sentence.length; i >= 0; i--) {
        tl.to(
          {},
          {
            duration: (typingSpeed * 0.5) / 1000, // Erasing is faster
            onStart: () => {
              setCurrentText(sentence.slice(0, i));
            },
          }
        );
      }

      // Pause before next sentence (or loop restart)
      if (!isLastSentence) {
        tl.to({}, { duration: 0.3 });
      } else {
        // Longer pause before restarting the loop
        tl.to({}, { duration: 1.0 });
      }
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [text, typingSpeed, pauseDuration, showCursor, onComplete]);

  // Keep cursor blinking for infinite loop (remove completion check)

  return (
    <span className={`inline-block ${className}`}>
      <span ref={textRef} className="inline-block">
        {currentText}
      </span>
      {showCursor && (
        <span
          ref={cursorRef}
          className="inline-block ml-1 font-normal"
          style={{ opacity: 1 }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;