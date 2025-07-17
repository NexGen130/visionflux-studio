import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white hover:from-indigo-700 hover:to-teal-700 focus:ring-teal-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600 focus:ring-slate-500',
    outline: 'border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white focus:ring-teal-500',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800 focus:ring-slate-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && disabledClasses,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

