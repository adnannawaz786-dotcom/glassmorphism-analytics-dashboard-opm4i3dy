import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive',
  icon: Icon,
  className = '',
  delay = 0 
}) => {
  const isPositive = changeType === 'positive';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative overflow-hidden rounded-2xl p-6
        bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-white/15 hover:border-white/30
        transition-all duration-300 group
        ${className}
      `}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with icon and title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {Icon && (
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <Icon className="w-5 h-5 text-white/80" />
              </div>
            )}
            <h3 className="text-sm font-medium text-white/70">{title}</h3>
          </div>
        </div>

        {/* Main value */}
        <div className="mb-3">
          <motion.p 
            className="text-3xl font-bold text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.2 }}
          >
            {value}
          </motion.p>
        </div>

        {/* Change indicator */}
        {change && (
          <motion.div 
            className="flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.4 }}
          >
            <TrendIcon 
              className={`w-4 h-4 ${
                isPositive ? 'text-green-400' : 'text-red-400'
              }`} 
            />
            <span 
              className={`text-sm font-medium ${
                isPositive ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {change}
            </span>
            <span className="text-xs text-white/50 ml-1">vs last month</span>
          </motion.div>
        )}
      </div>

      {/* Hover effect shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export default MetricCard;