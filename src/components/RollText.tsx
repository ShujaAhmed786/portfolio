"use client";

import React from "react";

export interface RollTextProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  duplicateClassName?: string;
  as?: "span" | "div";
}

export function RollText({
  children,
  text,
  className = "",
  duplicateClassName = "",
  as: Component = "span",
}: RollTextProps) {
  const content = text !== undefined ? text : children;

  return (
    <Component
      className={`group/roll relative inline-flex flex-col overflow-hidden align-baseline leading-tight select-none ${className}`.trim()}
    >
      {/* Primary visible label: swaps upward on hover or parent group hover */}
      <span className="roll-text-primary inline-block transition-transform duration-[380ms] [transition-timing-function:var(--ease-hover)] group-hover:-translate-y-full group-hover/roll:-translate-y-full will-change-transform">
        {content}
      </span>

      {/* Duplicate label: parked below and rolls into view on hover */}
      <span
        aria-hidden="true"
        className={`roll-text-duplicate pointer-events-none absolute left-0 top-0 inline-block transition-transform duration-[380ms] [transition-timing-function:var(--ease-hover)] translate-y-full group-hover:translate-y-0 group-hover/roll:translate-y-0 will-change-transform ${duplicateClassName}`.trim()}
      >
        {content}
      </span>
    </Component>
  );
}
