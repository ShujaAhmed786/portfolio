"use client";

import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  text?: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
}

export function TypewriterText({
  text = "$ whoami → DevOps Engineer",
  speedMs = 45,
  startDelayMs = 400,
  className = "",
}: TypewriterTextProps) {
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayedCount(text.length);
      return;
    }

    let intervalId: NodeJS.Timeout;
    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayedCount((prev) => {
          if (prev >= text.length) {
            clearInterval(intervalId);
            return prev;
          }
          return prev + 1;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimer);
      clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs]);

  const visibleText = text.slice(0, displayedCount);
  const isTypingComplete = displayedCount >= text.length;

  return (
    <div className={`font-mono inline-flex items-center text-slate-300 ${className}`}>
      <span>{visibleText}</span>
      <span
        aria-hidden="true"
        className={`ml-1.5 inline-block h-4 w-2 bg-teal-accent ${
          isTypingComplete ? "animate-pulse" : "opacity-100"
        }`}
      />
    </div>
  );
}
