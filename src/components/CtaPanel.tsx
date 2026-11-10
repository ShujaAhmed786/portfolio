"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaPanel() {
  return (
    <section
      aria-label="Call to Action"
      className="relative w-full py-16 sm:py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Ruled Section (No Big Teal Panel, No Fills, No Glow) */}
      <div className="border-t border-b border-devops-border/70 py-14 sm:py-20 text-left sm:text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold">
            {"// [07] INITIATE DEPLOYMENT"}
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1]">
            Let&apos;s ship something.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            Have a deployment bottleneck, skyrocketing AWS bills, or need bulletproof Kubernetes infrastructure? Let&apos;s review your architecture on a free 30-minute call.
          </p>

          {/* Plain Bordered Link Buttons (No fills, no glow) */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href="https://calendly.com/shujaahmed198/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-teal-accent/80 bg-transparent hover:border-teal-accent hover:bg-teal-accent/10 px-8 py-4 font-mono text-sm font-semibold text-teal-accent transition-colors min-h-[48px]"
            >
              <span>Book a free consultation</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-teal-accent" />
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-devops-border bg-transparent hover:border-slate-400 hover:bg-navy-850 px-8 py-4 font-mono text-sm font-semibold text-slate-300 hover:text-white transition-colors min-h-[48px]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
