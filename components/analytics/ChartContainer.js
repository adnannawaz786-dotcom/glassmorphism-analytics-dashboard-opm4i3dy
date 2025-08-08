import React from 'react';
import { motion } from 'framer-motion';

const ChartContainer = ({ children, title, subtitle, className = "", ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-xl shadow-black/10
        p-6 hover:bg-white/15 transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-6">
            {title && (
              <h3 className="text-lg font-semibold text-white/90 mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-white/60">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {/* Chart Content */}
        <div className="relative">
          {children}
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};

export default ChartContainer;