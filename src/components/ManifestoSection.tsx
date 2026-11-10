"use client";

import React from "react";

export function ManifestoSection() {
  return (
    <section
      aria-label="Engineering Manifesto"
      className="relative w-full py-16 sm:py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      <div className="border-t border-b border-devops-border/70 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Rule Column: Mono Section Label */}
          <div className="md:col-span-3 border-l-2 md:border-l-0 md:border-r border-devops-border/70 pl-4 md:pl-0 md:pr-8 font-mono space-y-2">
            <div className="text-xs uppercase tracking-widest text-teal-accent font-bold">
              {"// [03] MANIFESTO"}
            </div>
            <div className="text-xs text-slate-400">
              cat ~/manifesto.txt
            </div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider pt-4 hidden md:block">
              ENGINEERING DIRECTIVE: RELIABILITY OVER COMPLEXITY
            </div>
          </div>

          {/* Right Column: Large Editorial Text */}
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              I keep deploys <span className="text-teal-accent">boring</span> and bills <span className="text-teal-accent">small.</span>
            </h2>

            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl">
              Deterministic infrastructure as code, automated rollouts with zero downtime, and cloud bills that never give your CFO a surprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
