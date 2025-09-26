import React from 'react';
import { motion } from 'framer-motion';

const MandalaGraphic: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="text-sage-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <motion.circle
            cx="100"
            cy="100"
            r="95"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          {/* Inner geometric patterns */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            {/* Center lotus */}
            <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.6" />
            
            {/* Petals */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const x1 = 100 + Math.cos(angle) * 15;
              const y1 = 100 + Math.sin(angle) * 15;
              const x2 = 100 + Math.cos(angle) * 35;
              const y2 = 100 + Math.sin(angle) * 35;
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 + i * 0.1 }}
                />
              );
            })}
            
            {/* Outer ring patterns */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * (Math.PI / 180);
              const x1 = 100 + Math.cos(angle) * 50;
              const y1 = 100 + Math.sin(angle) * 50;
              const x2 = 100 + Math.cos(angle) * 70;
              const y2 = 100 + Math.sin(angle) * 70;
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="0.8"
                  opacity="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2.5 + i * 0.05 }}
                />
              );
            })}
          </motion.g>
        </svg>
      </motion.div>
      
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-sage-200 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default MandalaGraphic;