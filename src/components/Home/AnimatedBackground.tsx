import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sage-50 via-mint-50 to-white"
        animate={{
          background: [
            'linear-gradient(135deg, #F0F4F1 0%, #F4FBF7 50%, #ffffff 100%)',
            'linear-gradient(135deg, #F4FBF7 0%, #F0F4F1 50%, #ffffff 100%)',
            'linear-gradient(135deg, #ffffff 0%, #F0F4F1 50%, #F4FBF7 100%)',
            'linear-gradient(135deg, #F0F4F1 0%, #F4FBF7 50%, #ffffff 100%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-sage-200 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;