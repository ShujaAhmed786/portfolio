"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Calendar, CheckCircle2, Terminal } from "lucide-react";
import { NetworkTopologyCanvas } from "./NetworkTopologyCanvas";
import { CharSplitText } from "./CharSplitText";
import { TypewriterText } from "./TypewriterText";
import { RollText } from "./RollText";
import { Reveal } from "./Reveal";

export function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsReducedMotion(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax normalized from center (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("stats-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100dvh] -mt-20 w-full flex-col justify-between overflow-hidden bg-navy-900 pt-28 pb-8 select-none"
    >
      {/* 1. Ambient 2D Canvas: Network Topology drift */}
      <NetworkTopologyCanvas />

      {/* 2. Parallax Background Layers: Tech Grid + Diagonal Brand Beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Tech Grid Layer with subtle parallax */}
        <div
          className="absolute inset-0 bg-grid-tech opacity-35 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] transition-transform duration-700 ease-out will-change-transform"
          style={
            !isReducedMotion
              ? {
                  transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
                }
              : undefined
          }
        />

        {/* Diagonal Brand Beam cutting subtly behind headlines (mkvision pattern) */}
        <div
          className="absolute -top-32 left-1/2 h-96 w-[130%] -translate-x-1/2 -rotate-12 bg-gradient-to-r from-transparent via-teal-accent/[0.08] to-transparent blur-3xl transition-transform duration-700 ease-out will-change-transform"
          style={
            !isReducedMotion
              ? {
                  transform: `translate3d(calc(-50% + ${mouseOffset.x * 1.2}px), ${mouseOffset.y * 1.2}px, 0) rotate(-12deg)`,
                }
              : undefined
          }
        />

        {/* Top-center radial wash to frame content */}
        <div className="absolute inset-0 bg-radial-gradient" />
      </div>

      {/* Live Status Pill in Hero Corner */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-[clamp(16px,4vw,60px)]">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-navy-950/80 px-4 py-1.5 font-mono text-xs text-emerald-400 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wide">All systems operational</span>
            <span className="hidden sm:inline text-emerald-500/40">•</span>
            <span className="hidden sm:inline text-slate-400 font-normal">99.98% uptime SLA</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-teal-accent/70 tracking-widest uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-accent" />
            <span>Region: AWS us-east-1 (Multi-AZ)</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 mx-auto my-auto flex w-full max-w-5xl flex-col items-center px-[clamp(16px,4vw,60px)] text-center py-6 sm:py-10">
        {/* Giant Two-Line Headline with Char-Split Rise on Load */}
        <CharSplitText
          line1="Ship it."
          line2="Run it."
          className="text-[clamp(2.75rem,8.5vw,7.8rem)] mb-4"
          delayOffsetMs={100}
        />

        {/* Mono Subline with Typewriter Effect */}
        <Reveal delayMs={450} className="mb-6">
          <TypewriterText
            text="$ whoami → DevOps Engineer"
            className="text-base sm:text-xl md:text-2xl text-slate-300 font-medium"
          />
        </Reveal>

        {/* Value Proposition Microcopy */}
        <Reveal delayMs={600} className="mb-10 max-w-2xl">
          <p className="text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed font-sans">
            Architecting automated cloud infrastructure, zero-downtime container rollouts, and ruthless AWS cost reduction.
          </p>
        </Reveal>

        {/* Two Pill CTAs with RollText */}
        <Reveal delayMs={750} className="mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Solid Teal Pill: View Work */}
            <Link
              href="/portfolio"
              className="group/cta w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-teal-accent px-9 py-4 text-sm sm:text-base font-bold text-navy-950 shadow-[0_0_28px_rgba(20,184,166,0.4)] hover:bg-teal-glow hover:shadow-[0_0_35px_rgba(45,212,191,0.6)] active:scale-95 active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            >
              <RollText text="View Work" />
              <ArrowRight className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
            </Link>

            {/* Outlined Pill: Get in Touch */}
            <a
              href="https://calendly.com/shujaahmed198/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-devops-border bg-navy-850/80 px-8 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:border-teal-accent/70 hover:text-white hover:bg-navy-800 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-teal-accent min-h-[48px]"
            >
              <RollText text="Get in Touch" />
              <Calendar className="h-4 w-4 text-teal-accent" />
            </a>
          </div>
        </Reveal>

        {/* Live DevOps Deployment Feed Card (Concept: The site 'ships itself') */}
        <Reveal delayMs={900} className="w-full max-w-xl">
          <div className="rounded-2xl border border-devops-border/80 bg-devops-terminal/90 p-4 sm:p-5 text-left font-mono text-xs shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-devops-border/60 pb-2.5 mb-2.5 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500/80" />
                <span className="ml-1 text-[11px] text-slate-400 truncate max-w-[150px] xs:max-w-[220px] sm:max-w-none">
                  deploy@shuja-cloud: ~/infrastructure
                </span>
              </div>
              <span className="text-[10px] text-teal-accent/80 shrink-0">pipeline #482</span>
            </div>
            <div className="space-y-1 text-slate-300">
              <p className="text-slate-400 truncate">
                <span className="text-teal-accent font-bold">$</span> terraform apply -auto-approve
              </p>
              <p className="text-emerald-400 flex items-center gap-1.5 truncate">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-400" />
                <span>aws_ecs_service.production: 0 downtime rolling deployment successful</span>
              </p>
              <p className="text-teal-accent font-semibold pt-0.5 truncate">
                Apply complete: 14 resources deployed, 0 destroyed. Latency: 18ms
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* 6. Scroll Indicator: Mono 'scroll' with animated chevron */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to content"
          className="group flex flex-col items-center justify-center gap-1 p-2 min-h-[44px] min-w-[44px] text-slate-400 hover:text-teal-accent active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent rounded-lg"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 group-hover:text-teal-accent transition-colors">
            scroll
          </span>
          <ChevronDown className="h-4 w-4 text-teal-accent animate-bounce" />
        </button>
      </div>
    </section>
  );
}
