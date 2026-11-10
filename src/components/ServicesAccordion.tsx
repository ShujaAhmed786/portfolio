"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { coreServices } from "@/data/services";

export function ServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const featuredServices = coreServices.slice(0, 6);

  const toggleRow = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      aria-label="DevOps and Cloud Engineering Services"
      className="relative w-full py-16 sm:py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 border-b border-devops-border/70 pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold mb-2">
            {"// [04] SERVICES & DELIVERABLES"}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized DevOps Solutions
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
            Fixed-scope sprints and turnkey architectural setups engineered for fast delivery and zero downtime.
          </p>
        </div>

        <Link
          href="/services"
          className="group inline-flex items-center gap-2 border border-devops-border bg-transparent hover:border-teal-accent hover:bg-navy-850 text-slate-200 hover:text-white px-5 py-2.5 font-mono text-xs font-semibold transition-colors self-start md:self-auto min-h-[44px]"
        >
          <span>View All Services &amp; Pricing</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-teal-accent" />
        </Link>
      </div>

      {/* Accordion List with Hairline Dividers (Flat: no boxes, no badges, no icons in circles) */}
      <div className="w-full border-t border-b border-devops-border/70 divide-y divide-devops-border/60">
        {featuredServices.map((service, idx) => {
          const isExpanded = expandedIndex === idx;
          const num = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={service.id}
              className={`transition-colors duration-200 ${
                isExpanded ? "bg-navy-850/40" : "hover:bg-navy-850/30"
              }`}
            >
              {/* Row Header Button */}
              <button
                type="button"
                onClick={() => toggleRow(idx)}
                aria-expanded={isExpanded}
                className="w-full py-5 sm:py-7 px-2 sm:px-4 flex items-center justify-between text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent min-h-[64px]"
              >
                {/* Left Side: Number + Title */}
                <div className="flex items-center gap-4 sm:gap-6 flex-1 pr-3 min-w-0">
                  <span className="font-mono text-xs sm:text-sm font-bold text-teal-accent shrink-0">
                    {num}
                  </span>

                  <h3
                    className={`font-display text-base sm:text-2xl font-bold tracking-tight transition-colors leading-snug ${
                      isExpanded ? "text-teal-accent" : "text-white"
                    }`}
                  >
                    {service.name}
                  </h3>
                </div>

                {/* Right Side: Price + Plain Arrow (no circle) */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-mono text-xs sm:text-sm text-slate-300 font-medium">
                    {service.price}
                  </span>

                  <ArrowUpRight
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-90 text-teal-accent" : "text-slate-400"
                    }`}
                  />
                </div>
              </button>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-2 sm:px-4 pb-6 sm:pb-8 pt-1">
                  <div className="sm:pl-10 max-w-3xl space-y-4">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400 pt-1">
                      <div>
                        <span className="text-teal-accent font-semibold">TIMELINE:</span> {service.timeline}
                      </div>
                      <div>
                        <span className="text-teal-accent font-semibold">INFRASTRUCTURE:</span> 100% reproducible code
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://calendly.com/shujaahmed198/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border border-teal-accent/70 bg-transparent hover:border-teal-accent hover:bg-teal-accent/10 px-5 py-2.5 text-xs font-mono font-semibold text-teal-accent transition-colors min-h-[44px]"
                      >
                        <span>Book Strategy Call</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-teal-accent" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
