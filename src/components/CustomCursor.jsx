import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.style.cursor === 'pointer' ||
        target.closest('a') ||
        target.closest('button');
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative w-8 h-8">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{
              borderColor: 'rgba(96, 153, 102, 0.8)',
            }}
            animate={{
              scale: isPointer ? 1.2 : 1,
              borderColor: isPointer 
                ? 'rgba(157, 192, 139, 1)' 
                : 'rgba(96, 153, 102, 0.8)',
            }}
            transition={{
              duration: 0.3,
            }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #609966 0%, #9DC08B 100%)',
            }}
            animate={{
              width: isPointer ? 12 : 8,
              height: isPointer ? 12 : 8,
            }}
            transition={{
              duration: 0.3,
            }}
          />
        </div>
      </motion.div>

      {/* Trail cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.3,
        }}
      >
        <div 
          className="w-2 h-2 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #9DC08B 0%, #EDF1D6 100%)',
            opacity: 0.6,
            filter: 'blur(2px)',
          }}
        />
      </motion.div>

      {/* Second trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5,
        }}
      >
        <div 
          className="w-3 h-3 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 153, 102, 0.4) 0%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
