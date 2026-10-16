"use client";

import React, { useEffect, useState } from "react";

const STORAGE_KEY = "shuja_portfolio_preloader_seen";

const TERMINAL_LOGS = [
  { progress: 12, text: "[init] reading terraform infrastructure state..." },
  { progress: 38, text: "[sync] establishing edge network & cloudfront cache..." },
  { progress: 68, text: "[build] verified multi-az cluster health: 200 OK" },
  { progress: 92, text: "[apply] production containers healthy and operational" },
  { progress: 100, text: "[ready] deployment complete -> launching portfolio" },
];

export function Preloader() {
  const [shouldRender, setShouldRender] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    );
    // 1. Check if already seen in this browser session
    try {
      const hasSeen = sessionStorage.getItem(STORAGE_KEY);
      if (hasSeen === "true") {
        setIsDone(true);
        return;
      }
    } catch {
      // In case sessionStorage is restricted (e.g. strict privacy mode)
    }

    // 2. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {}
      setIsDone(true);
      return;
    }

    // Otherwise render the preloader
    setShouldRender(true);

    // Lock body scrolling while preloader runs
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // On touch devices the full deploy sequence feels sluggish: run the
    // counter ~2.5x faster and lift away quicker.
    const touchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    const tickMs = touchDevice ? 15 : 38;
    const liftMs = touchDevice ? 450 : 850;

    // Counter timer
    let currentVal = 0;
    const interval = setInterval(() => {
      // Non-linear acceleration for realistic deploy feel
      const increment = currentVal < 40 ? 3 : currentVal < 80 ? 4 : 2;
      currentVal = Math.min(100, currentVal + increment);
      setProgress(currentVal);

      if (currentVal >= 100) {
        clearInterval(interval);

        // Pause briefly on 100% then lift away
        setTimeout(() => {
          setIsLifting(true);

          // Mark session so repeat visits are instant
          try {
            sessionStorage.setItem(STORAGE_KEY, "true");
          } catch {}

          // Remove after lift animation completes
          setTimeout(() => {
            document.body.style.overflow = originalOverflow;
            setIsDone(true);
          }, liftMs);
        }, 220);
      }
    }, tickMs);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!shouldRender || isDone) {
    return null;
  }

  const formattedCounter = String(progress).padStart(3, "0");
  const activeLog = [...TERMINAL_LOGS].reverse().find((log) => progress >= log.progress) || TERMINAL_LOGS[0];

  return (
    <div
      aria-live="polite"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950 px-6 transition-transform [transition-timing-function:var(--ease-out-expo)] ${
        isTouchDevice ? "duration-[450ms]" : "duration-[850ms]"
      } ${
        isLifting ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="w-full max-w-xl rounded-2xl border border-devops-border bg-devops-terminal/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        {/* Terminal Window Header */}
        <div className="flex items-center justify-between border-b border-devops-border/70 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-400">
              deploy@shujaahmed.dev: ~/production
            </span>
          </div>
          <span className="font-mono text-[11px] text-teal-accent/80 tracking-wider">
            AWS us-east-1
          </span>
        </div>

        {/* Terminal Command Line */}
        <div className="font-mono text-sm sm:text-base text-slate-200 mb-8 flex items-center gap-2">
          <span className="text-teal-accent font-bold">$</span>
          <span>deploying portfolio...</span>
          <span className="inline-block h-4 w-2 bg-teal-accent animate-pulse" />
        </div>

        {/* 000 -> 100 Counter */}
        <div className="flex items-baseline justify-between mb-4">
          <span className="font-mono text-5xl sm:text-7xl font-bold tracking-tighter text-white">
            {formattedCounter}
            <span className="text-teal-accent text-3xl sm:text-4xl ml-1">%</span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-teal-accent font-semibold">
            {progress < 100 ? "PROVISIONING" : "OPERATIONAL"}
          </span>
        </div>

        {/* Teal Progress Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-800 border border-devops-border/60 mb-6">
          <div
            className="h-full bg-teal-accent shadow-[0_0_16px_rgba(20,184,166,0.8)] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Active Log Line */}
        <div className="h-6 overflow-hidden">
          <p className="font-mono text-xs text-slate-400 truncate">
            <span className="text-teal-accent mr-2">{">"}</span>
            {activeLog.text}
          </p>
        </div>
      </div>
    </div>
  );
}
