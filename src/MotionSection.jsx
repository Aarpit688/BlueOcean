import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionSection = ({ 
  children, 
  className = '', 
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.6,
  ...props 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getVariants = () => {
    switch (animationType) {  
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: 'easeOut' },
          },
        };
      case 'fadeDown':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: 'easeOut' },
          },
        };
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay, ease: 'easeOut' },
          },
        };
      case 'slideInLeft':
        return {
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: 'easeOut' },
          },
        };
      case 'slideInRight':
        return {
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: 'easeOut' },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: 'easeOut' },
          },
        };
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;