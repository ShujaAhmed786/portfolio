"use client";

import React, { useEffect, useState } from "react";

interface CharSplitTextProps {
  line1: string;
  line2: string;
  className?: string;
  line1ClassName?: string;
  line2ClassName?: string;
  delayOffsetMs?: number;
}

export function CharSplitText({
  line1,
  line2,
  className = "",
  line1ClassName = "",
  line2ClassName = "",
  delayOffsetMs = 120,
}: CharSplitTextProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, reveal immediately without animation
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    // Small delay on mount to sync with preloader lift
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, delayOffsetMs);

    return () => clearTimeout(timer);
  }, [delayOffsetMs]);

  const chars1 = Array.from(line1);
  const chars2 = Array.from(line2);

  return (
    <h1
      aria-label={`${line1} ${line2}`}
      className={`font-display font-extrabold tracking-tight leading-[0.98] select-none ${className}`}
    >
      {/* Line 1 */}
      <span className={`block overflow-hidden ${line1ClassName}`}>
        <span className="inline-flex flex-wrap" aria-hidden="true">
          {chars1.map((char, index) => {
            const isSpace = char === " ";
            return (
              <span
                key={index}
                className="inline-block overflow-hidden align-bottom py-1"
              >
                <span
                  style={{
                    transitionDelay: `${index * 35}ms`,
                  }}
                  className={`inline-block transition-transform duration-[850ms] [transition-timing-function:var(--ease-out-expo)] will-change-transform ${
                    isRevealed ? "translate-y-0" : "translate-y-full"
                  } ${isSpace ? "w-[0.28em]" : ""}`}
                >
                  {isSpace ? "\u00A0" : char}
                </span>
              </span>
            );
          })}
        </span>
      </span>

      {/* Line 2 with Teal-to-Cyan Gradient Accent */}
      <span
        className={`block overflow-hidden bg-gradient-to-r from-teal-accent via-teal-glow to-cyan-400 bg-clip-text text-transparent pb-2 ${line2ClassName}`}
      >
        <span className="inline-flex flex-wrap" aria-hidden="true">
          {chars2.map((char, index) => {
            const isSpace = char === " ";
            const totalIndex = chars1.length + index;
            return (
              <span
                key={index}
                className="inline-block overflow-hidden align-bottom py-1"
              >
                <span
                  style={{
                    transitionDelay: `${totalIndex * 35}ms`,
                  }}
                  className={`inline-block transition-transform duration-[850ms] [transition-timing-function:var(--ease-out-expo)] will-change-transform ${
                    isRevealed ? "translate-y-0" : "translate-y-full"
                  } ${isSpace ? "w-[0.28em]" : ""}`}
                >
                  {isSpace ? "\u00A0" : char}
                </span>
              </span>
            );
          })}
        </span>
      </span>
    </h1>
  );
}
