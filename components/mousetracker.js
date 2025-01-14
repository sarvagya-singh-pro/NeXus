"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      style={{
        width: 30,
        height: 30,
        backgroundColor: '#7a97ff',
        boxShadow: '0 0 50px 5px #7a97ff', // Add a glow effect
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        x: mousePosition.x,
        y: mousePosition.y,
        zIndex:100,

      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
};

export default MouseFollower;