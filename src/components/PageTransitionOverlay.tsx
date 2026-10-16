"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_LABELS: Record<string, string> = {
  "/": "HOME",
  "/services": "SERVICES",
  "/portfolio": "PORTFOLIO",
  "/experience": "EXPERIENCE",
  "/blog": "BLOG",
  "/about": "ABOUT",
  "/faq": "FAQ",
  "/contact": "CONTACT",
  "/privacy": "PRIVACY",
};

export function PageTransitionOverlay() {
  const router = useRouter();
  const currentPath = usePathname();
  const [phase, setPhase] = useState<"idle" | "wiping-in" | "wiping-out">("idle");
  const [destinationLabel, setDestinationLabel] = useState("");
  const pendingPathRef = useRef<string | null>(null);

  // When pathname changes after router.push, wipe curtain out
  useEffect(() => {
    if (phase === "wiping-in") {
      // Small pause to let page mount, then wipe out
      const timer = setTimeout(() => {
        setPhase("wiping-out");
        const outTimer = setTimeout(() => {
          setPhase("idle");
          pendingPathRef.current = null;
        }, 400);
        return () => clearTimeout(outTimer);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [currentPath, phase]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip non-navigational links
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      try {
        const targetUrl = new URL(href, window.location.href);
        if (targetUrl.origin !== window.location.origin) return; // External link
        if (targetUrl.pathname === window.location.pathname) return; // Same page

        e.preventDefault();

        const destPath = targetUrl.pathname;
        const label =
          ROUTE_LABELS[destPath] ||
          destPath.replace(/^\//, "").replace(/\//g, " / ").toUpperCase();

        setDestinationLabel(label);
        setPhase("wiping-in");
        pendingPathRef.current = destPath;

        // At 400ms (curtain fully covering), execute route change
        setTimeout(() => {
          router.push(destPath);
        }, 400);

        // Safety fallback timer to prevent curtain from ever being stuck
        setTimeout(() => {
          setPhase("wiping-out");
          setTimeout(() => setPhase("idle"), 400);
        }, 1200);
      } catch {}
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => document.removeEventListener("click", handleAnchorClick, { capture: true });
  }, [router]);

  if (phase === "idle") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9998] pointer-events-auto overflow-hidden select-none"
    >
      {/* Full-screen Teal Curtain */}
      <div
        className={`h-full w-full bg-teal-accent flex flex-col items-center justify-center transition-transform duration-[400ms] [transition-timing-function:var(--ease-out-expo)] ${
          phase === "wiping-in"
            ? "translate-y-0"
            : phase === "wiping-out"
            ? "-translate-y-full"
            : "translate-y-full"
        }`}
      >
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold tracking-widest text-navy-900/70 uppercase block">
            {"[ROUTE_TRANSITION]"}
          </span>
          <h2 className="font-mono text-4xl sm:text-6xl md:text-7xl font-black text-navy-950 uppercase tracking-widest">
            {destinationLabel}
          </h2>
        </div>
      </div>
    </div>
  );
}
