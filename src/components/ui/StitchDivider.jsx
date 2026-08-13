import React from 'react';

/**
 * Running-stitch divider line (Section 1.5 of spec)
 * A horizontal dashed/rounded-dash rule instead of plain hr
 */
export const StitchDivider = ({ className = '' }) => {
  return (
    <div className={`w-full py-6 flex items-center justify-center gap-2 ${className}`}>
      <div className="flex-1 running-stitch"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-brass/60"></div>
      <div className="flex-1 running-stitch"></div>
    </div>
  );
};
