import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-wider transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-brass/50 disabled:opacity-50 disabled:pointer-events-none rounded-none";
  
  const variants = {
    primary: "bg-maroon text-chalk hover:bg-[#5C1620] shadow-sm",
    secondary: "bg-charcoal text-chalk hover:bg-[#1A1411]",
    outline: "bg-transparent border border-brass/60 text-charcoal hover:bg-brass/10 hover:border-brass",
    ghost: "bg-transparent text-charcoal hover:bg-charcoal/5",
    bottle: "bg-bottle text-chalk hover:bg-[#152A1D]",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs uppercase font-mono",
    md: "h-11 px-6 text-sm uppercase font-mono",
    lg: "h-13 px-8 text-base uppercase font-mono",
    icon: "h-11 w-11",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export { Button };
