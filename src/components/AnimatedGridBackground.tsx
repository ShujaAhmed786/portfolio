"use client";

import React from "react";

interface AnimatedGridBackgroundProps {
  children?: React.ReactNode;
  showOrbs?: boolean;
  className?: string;
}

export function AnimatedGridBackground({
  children,
  showOrbs = false,
  className = "",
}: AnimatedGridBackgroundProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background base navy color */}
      <div className="absolute inset-0 bg-navy-900 pointer-events-none" />

      {/* Grid Pattern, kept faint and flat */}
      <div
        className="absolute inset-0 bg-grid-tech pointer-events-none opacity-15"
        aria-hidden="true"
      />


      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
