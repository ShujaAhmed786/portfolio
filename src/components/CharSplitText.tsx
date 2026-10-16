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

  // Split line into words and preserve character indexes for staggered rise
  const renderLineWords = (line: string, baseOffsetIndex: number) => {
    const words = line.split(" ");
    let runningCharIndex = baseOffsetIndex;

    return words.map((word, wordIndex) => {
      const chars = Array.from(word);
      const isLastWord = wordIndex === words.length - 1;

      const renderedWord = (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {chars.map((char, charIdx) => {
            const currentIndex = runningCharIndex++;
            return (
              <span
                key={charIdx}
                className="inline-block overflow-hidden align-bottom py-1"
              >
                <span
                  style={{
                    transitionDelay: `${currentIndex * 35}ms`,
                  }}
                  className={`inline-block transition-transform duration-[850ms] [transition-timing-function:var(--ease-out-expo)] will-change-transform ${
                    isRevealed ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {char}
                </span>
              </span>
            );
          })}
          {!isLastWord && (
            <span className="inline-block w-[0.28em]">&nbsp;</span>
          )}
        </span>
      );

      return renderedWord;
    });
  };

  return (
    <h1
      aria-label={`${line1} ${line2}`}
      className={`font-display font-extrabold tracking-tight leading-[0.98] select-none ${className}`}
    >
      {/* Line 1 */}
      <span className={`block overflow-hidden ${line1ClassName}`}>
        <span className="inline-flex flex-wrap" aria-hidden="true">
          {renderLineWords(line1, 0)}
        </span>
      </span>

      {/* Line 2 with Teal-to-Cyan Gradient Accent */}
      <span
        className={`block overflow-hidden bg-gradient-to-r from-teal-accent via-teal-glow to-cyan-400 bg-clip-text text-transparent pb-2 ${line2ClassName}`}
      >
        <span className="inline-flex flex-wrap" aria-hidden="true">
          {renderLineWords(line2, line1.length)}
        </span>
      </span>
    </h1>
  );
}
