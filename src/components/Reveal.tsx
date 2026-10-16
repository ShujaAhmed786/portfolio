"use client";

import React, { useEffect, useRef, useState } from "react";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  staggerIndex?: number;
  delayMs?: number;
  durationMs?: number;
  as?: React.ElementType;
  scaleDown?: boolean;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  staggerIndex = 0,
  delayMs,
  durationMs,
  as: Component = "div",
  scaleDown = false,
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If reduced motion is requested by the operating system, show immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsRevealed(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const computedDelay = delayMs !== undefined ? delayMs : staggerIndex * 110;

  const style: React.CSSProperties = {
    "--reveal-delay": `${computedDelay}ms`,
    ...(durationMs ? { "--duration-reveal": `${durationMs}ms` } : {}),
  } as React.CSSProperties;

  const baseClass = scaleDown ? "reveal-clip-scale" : "reveal-clip";
  const stateClass = isRevealed ? "is-revealed" : "";

  return (
    <Component
      ref={ref}
      style={style}
      className={`${baseClass} ${stateClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
