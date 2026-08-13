import React from 'react';
import { cn } from './Button';

const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full border-b border-border bg-transparent px-0 py-2 text-sm text-charcoal placeholder:text-muted/60 focus:outline-none focus:border-maroon transition-colors disabled:cursor-not-allowed disabled:opacity-50 font-sans",
          error && "border-maroon focus:border-maroon",
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-xs text-maroon mt-1 font-mono">{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export { Input };
