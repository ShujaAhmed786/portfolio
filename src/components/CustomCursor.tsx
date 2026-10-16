"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorMode, setCursorMode] = useState<"default" | "pointer" | "view" | "read">("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  // Raw position coordinates and lerped coordinates
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Check if device is a fine pointer (desktop/mouse) and not touch
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isTouchDevice || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    // 2. Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check element under cursor for contextual morphs
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Project card detection -> VIEW
      const projectTarget = target.closest(
        '[data-cursor="VIEW"], [data-cursor-type="project"], .project-card'
      );
      if (projectTarget) {
        setCursorMode("view");
        setCursorLabel("VIEW");
        return;
      }

      // Blog card detection -> READ
      const blogTarget = target.closest(
        '[data-cursor="READ"], [data-cursor-type="blog"], article'
      );
      if (blogTarget) {
        setCursorMode("read");
        setCursorLabel("READ");
        return;
      }

      // Explicit custom data-cursor
      const customTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (customTarget && customTarget.dataset.cursor) {
        const customValue = customTarget.dataset.cursor.toUpperCase();
        if (customValue === "VIEW") {
          setCursorMode("view");
          setCursorLabel("VIEW");
          return;
        } else if (customValue === "READ") {
          setCursorMode("read");
          setCursorLabel("READ");
          return;
        } else if (customValue) {
          setCursorMode("pointer");
          setCursorLabel(customValue);
          return;
        }
      }

      // Interactive link or button detection -> POINTER
      const interactiveTarget = target.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      if (interactiveTarget) {
        setCursorMode("pointer");
        setCursorLabel("");
        return;
      }

      // Default state
      setCursorMode("default");
      setCursorLabel("");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // 3. Lerp loop at 60/120fps using requestAnimationFrame
    let animationFrameId: number;
    const lerpFactor = 0.15;

    const render = () => {
      // Lerp math: pos += (target - pos) * 0.15
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      const transformStr = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;

      if (cursorRef.current) {
        cursorRef.current.style.transform = transformStr;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = transformStr;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  // Compute cursor size and styles based on mode
  const isMorphActive = cursorMode === "view" || cursorMode === "read" || Boolean(cursorLabel);

  return (
    <>
      {/* Ambient subtle background glow follower */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          width: 440,
          height: 440,
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, rgba(20, 184, 166, 0.02) 40%, rgba(10, 22, 40, 0) 70%)",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />

      {/* Main lerped interactive cursor & morph badge */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9990] flex items-center justify-center transition-opacity duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
        }}
      >
        <div
          className={`flex items-center justify-center font-mono font-bold uppercase transition-all duration-[260ms] [transition-timing-function:var(--ease-out-expo)] ${
            isMorphActive
              ? "h-20 w-20 rounded-full bg-teal-accent text-navy-950 shadow-[0_0_28px_rgba(20,184,166,0.55)] scale-100"
              : cursorMode === "pointer"
              ? "h-4 w-4 rounded-full border-2 border-teal-accent bg-teal-accent/20 scale-100"
              : "h-2.5 w-2.5 rounded-full bg-teal-accent shadow-[0_0_10px_rgba(20,184,166,0.8)] scale-100"
          }`}
        >
          {isMorphActive && (
            <span className="text-[11px] tracking-widest text-navy-950 font-extrabold select-none animate-in fade-in zoom-in-90 duration-150">
              {cursorLabel}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
