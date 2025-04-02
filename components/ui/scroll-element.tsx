import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps, SVGMotionProps, Variant } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

const generateVariants = (direction: Direction, duration: number) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'right' || direction === 'down' ? 100 : -100;

  return {
    hidden: { filter: 'blur(10px)', opacity: 0, [axis]: value },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      [axis]: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };
};

type MotionComponentProps = HTMLMotionProps<any> & SVGMotionProps<any>;

interface ScrollElementProps extends Omit<MotionComponentProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden?: any;
    visible?: any;
  };
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  delay?: number;
  direction?: Direction;
}

function ScrollElement({
  children,
  className,
  variants,
  viewport, // Now viewport can be overridden
  delay = 0,
  direction = 'down',
  ...rest
}: ScrollElementProps) {
  const [viewportSettings, setViewportSettings] = useState(viewport || { amount: 0.3, margin: '0px 0px -200px 0px' });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewportSettings({ amount: 0.05, margin: '0px 0px -50px 0px' }); // Mobile: Trigger at 5%
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setViewportSettings({ amount: 0.1, margin: '0px 0px -100px 0px' }); // Tablet: Trigger at 10%
      } else {
        setViewportSettings({ amount: 0.3, margin: '0px 0px -200px 0px' }); // Desktop: Trigger at 30%
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [viewport]); // Update when viewport prop changes

  const baseVariants = variants || generateVariants(direction, 0.5);
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...baseVariants.visible.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      variants={modifiedVariants}
      viewport={viewportSettings} // 👈 Dynamic viewport settings applied
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default ScrollElement;
