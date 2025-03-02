// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticCursorProps {
  children: ReactNode; // Accepts any React component
}

const MagneticCursor: React.FC<MagneticCursorProps> = ({ children,data }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.pageX - centerX;
        const deltaY = e.pageY - centerY;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const magneticDistance = 900; // Magnetic attraction range
        const attractionStrength = 0.15; // Magnetic strength

        if (distance < magneticDistance) {
          const strength = 1 - distance / magneticDistance;
          x.set(deltaX * strength * attractionStrength);
          y.set(deltaY * strength * attractionStrength);
          setIsHovering(true);
        } else {
          x.set(0);
          y.set(0);
          setIsHovering(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  return (
    <div className={data}>
      {/* Visual Indicator for Magnetic Range */}
      <div
        className={`absolute bg-red-700  rounded-full transition-opacity duration-300 ${
          isHovering ? 'bg-green-300/30' : 'opacity-0'
        }`}
      />

      <motion.div
        ref={elementRef}
        className='relative z-10'
        style={{ x: springX, y: springY }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MagneticCursor;
