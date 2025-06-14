
import React, { useState, useEffect } from 'react';
import { useCursor } from '../contexts/CursorContext';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const { cursorType } = useCursor();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      height: 16,
      width: 16,
      border: '1px solid hsl(var(--primary))',
      backgroundColor: 'transparent',
      mixBlendMode: 'difference',
    },
    hover: {
      x: position.x - 32,
      y: position.y - 32,
      height: 64,
      width: 64,
      border: '1px solid #fff',
      backgroundColor: 'transparent',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorType}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
