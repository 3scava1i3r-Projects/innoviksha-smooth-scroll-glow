
// // import React, { useState, useEffect } from 'react';
// // import { useCursor } from '../contexts/CursorContext';
// // import { motion } from 'framer-motion';

// // const CustomCursor: React.FC = () => {
// //   const [position, setPosition] = useState({ x: -100, y: -100 });
// //   const { cursorType } = useCursor();

// //   useEffect(() => {
// //     const updatePosition = (e: MouseEvent) => {
// //       setPosition({ x: e.clientX, y: e.clientY });
// //     };

// //     window.addEventListener('mousemove', updatePosition);

// //     return () => window.removeEventListener('mousemove', updatePosition);
// //   }, []);

// //   const variants = {
// //     default: {
// //       x: position.x - 8,
// //       y: position.y - 8,
// //       height: 16,
// //       width: 16,
// //       backgroundColor: 'hsl(var(--primary))',
// //       mixBlendMode: 'difference',
// //     },
// //     hover: {
// //       x: position.x - 32,
// //       y: position.y - 32,
// //       height: 64,
// //       width: 64,
// //       backgroundColor: '#fff',
// //       mixBlendMode: 'difference',
// //     },
// //   };

// //   return (
// //     <motion.div
// //       className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
// //       variants={variants}
// //       animate={cursorType}
// //       transition={{ type: 'spring', stiffness: 500, damping: 30 }}
// //     />
// //   );
// // };

// // export default CustomCursor;


// import React, { useState, useEffect, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { useCursor } from '../contexts/CursorContext';

// const CURSOR_SIZES = {
//   default: 16,
//   hover: 64,
// };

// const CustomCursor: React.FC = () => {
//   const [position, setPosition] = useState({ x: -100, y: -100 });
//   const { cursorType } = useCursor();

//   useEffect(() => {
//     let ticking = false;

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setPosition({ x: e.clientX, y: e.clientY });
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const variants = useMemo(() => {
//     return {
//       default: {
//         x: position.x - CURSOR_SIZES.default / 2,
//         y: position.y - CURSOR_SIZES.default / 2,
//         height: CURSOR_SIZES.default,
//         width: CURSOR_SIZES.default,
//         backgroundColor: 'hsl(var(--primary))',
//         mixBlendMode: 'difference',
//       },
//       hover: {
//         x: position.x - CURSOR_SIZES.hover / 2,
//         y: position.y - CURSOR_SIZES.hover / 2,
//         height: CURSOR_SIZES.hover,
//         width: CURSOR_SIZES.hover,
//         backgroundColor: '#fff',
//         mixBlendMode: 'difference',
//       },
//     };
//   }, [position]);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
//       variants={variants}
//       animate={cursorType}
//       transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//     />
//   );
// };

// export default CustomCursor;


import React, { useEffect, useRef } from 'react';
import { useCursor } from '../contexts/CursorContext';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { cursorType } = useCursor();

  useEffect(() => {
    let x = -100;
    let y = -100;
    let rafId: number;

    const updatePosition = (e: MouseEvent) => {
      // Account for device pixel ratio (Retina displays)
      const rect = document.documentElement.getBoundingClientRect();
      x = e.clientX;
      y = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            // Use translate instead of translate3d for better Mac compatibility
            cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
          }
          rafId = 0;
        });
      }
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const size = cursorType === 'hover' ? 64 : 16;
  const bg = cursorType === 'hover' ? '#fff' : 'hsl(var(--primary))';

  // Check if running on Mac (different GPU handling)
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  const styles = cursorType === 'hover'
    ? {
        backgroundColor: 'rgba(156, 163, 175, 0.2)',
        border: '2px solid #9CA3AF',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)', // Safari/Mac support
        // Mac fallback: stronger border when mix-blend-mode is disabled
        ...(isMac && {
          backgroundColor: 'rgba(156, 163, 175, 0.15)',
          border: '3px solid #9CA3AF',
          boxShadow: 'inset 0 0 20px rgba(156, 163, 175, 0.3)',
        })
      }
    : {
        backgroundColor: '#9CA3AF',
        border: 'none',
        backdropFilter: 'none',
        // Mac fallback: add subtle glow effect
        ...(isMac && {
          boxShadow: '0 0 10px rgba(156, 163, 175, 0.5)',
        })
      };

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-[width,height,background-color,border,box-shadow] duration-150 ease-out"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        backgroundColor: bg,
        mixBlendMode: isMac ? 'normal' : 'difference',
        willChange: 'transform',
        transform: 'translateZ(0)',
        // Enhanced Mac compatibility
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        ...styles,
      }}
    />
  );
};

export default CustomCursor;
