import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directions = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
    fade: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directions[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directions[direction]}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

