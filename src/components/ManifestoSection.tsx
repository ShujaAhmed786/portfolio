"use client";

import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";

const WORDS = [
  { text: "I", highlight: false },
  { text: "keep", highlight: false },
  { text: "deploys", highlight: false },
  { text: "boring", highlight: true },
  { text: "and", highlight: false },
  { text: "bills", highlight: false },
  { text: "small.", highlight: true },
];

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsReducedMotion(true);
      setScrollProgress(1);
      return;
    }

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Illumination starts when section top is at 80% of viewport, finishes near 25%
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.25;

      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Engineering Manifesto"
      className="relative w-full py-28 sm:py-36 px-[clamp(16px,4vw,60px)] max-w-6xl mx-auto text-center overflow-hidden"
    >
      {/* Decorative Mono Kicker */}
      <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 font-mono text-xs text-teal-accent mb-8 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
        <Terminal className="h-3.5 w-3.5" />
        <span>cat ~/manifesto.txt</span>
      </div>

      {/* Main Manifesto Headline with Word-by-Word Scroll Illumination */}
      <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08] select-none">
        {WORDS.map((word, index) => {
          const wordThreshold = (index + 0.3) / WORDS.length;
          const isIlluminated = isReducedMotion || scrollProgress >= wordThreshold;

          return (
            <span
              key={index}
              className={`inline-block mr-[0.3em] transition-all duration-500 ease-out ${
                isIlluminated
                  ? word.highlight
                    ? "text-teal-accent drop-shadow-[0_0_25px_rgba(20,184,166,0.65)] scale-100"
                    : "text-white scale-100"
                  : "text-slate-700/60 scale-[0.98]"
              }`}
            >
              {word.text}
            </span>
          );
        })}
      </h2>

      {/* Supporting Subtext */}
      <p className="mt-8 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
        Deterministic infrastructure as code, automated rollouts with zero downtime, and cloud bills that never give your CFO a surprise.
      </p>
    </section>
  );
}
