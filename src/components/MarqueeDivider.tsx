"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "TERRAFORM",
  "DOCKER",
  "KUBERNETES",
  "AWS",
  "CI/CD",
  "GITOPS",
  "HELM",
  "ISTIO",
];

export function MarqueeDivider() {
  const content = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {MARQUEE_ITEMS.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-widest text-transparent transition-all duration-300 select-none [-webkit-text-stroke:1px_rgba(20,184,166,0.3)] hover:[-webkit-text-stroke:1px_rgba(45,212,191,0.9)] hover:text-teal-accent/10">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="text-teal-accent/40 text-2xl sm:text-4xl"
          >
            •
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Core Technical Competencies Ticker"
      className="relative w-full overflow-hidden border-y border-devops-border/50 bg-navy-950/80 py-6 sm:py-8 backdrop-blur-md"
    >
      {/* Edge gradient masks to fade the text in and out smoothly */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent"
      />

      {/* Marquee Track (Duplicated for seamless -50% loop) */}
      <div className="animate-marquee-track">
        {content}
        {content}
      </div>
    </section>
  );
}
