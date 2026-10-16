"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import { RollText } from "./RollText";
import { Reveal } from "./Reveal";

export function CtaPanel() {
  return (
    <section
      aria-label="Call to Action"
      className="relative w-full py-20 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      <Reveal className="w-full">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[32px] bg-gradient-to-br from-teal-accent via-teal-glow to-teal-muted p-6 sm:p-14 md:p-20 text-center shadow-[0_20px_50px_rgba(20,184,166,0.3)]">
          {/* Subtle background tech line / grid accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#0A1628_1px,transparent_1px)] [background-size:24px_24px]"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-950/15 border border-navy-950/20 px-4 py-1.5 font-mono text-xs font-bold text-navy-950 tracking-wider">
              <Terminal className="h-3.5 w-3.5" />
              <span>DIRECT ENGINEERING CONSULTATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-navy-950 leading-[1.05]">
              Let&apos;s ship something.
            </h2>

            <p className="text-base sm:text-xl text-navy-950/85 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
              Have a deployment bottleneck, skyrocketing AWS bills, or need bulletproof Kubernetes infrastructure? Let&apos;s review your architecture on a free 30-minute call.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Navy Pill Button */}
              <a
                href="https://calendly.com/shujaahmed198/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-navy-950 px-9 py-4 text-base font-bold text-white shadow-2xl hover:bg-navy-900 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
              >
                <RollText text="Book a free consultation" duplicateClassName="text-teal-accent" />
                <ArrowRight className="h-5 w-5 text-teal-accent group-hover/cta:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Inverted Pill */}
              <Link
                href="/services"
                className="group/srv w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-navy-950/30 bg-navy-950/10 px-8 py-4 text-base font-bold text-navy-950 hover:bg-navy-950/20 active:scale-95 transition-all min-h-[48px]"
              >
                <RollText text="Explore Services" duplicateClassName="text-navy-950 font-extrabold" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
