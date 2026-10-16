"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { coreServices } from "@/data/services";
import { RollText } from "./RollText";

export function ServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const featuredServices = coreServices.slice(0, 6);

  const toggleRow = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-label="DevOps and Cloud Engineering Services"
      className="relative w-full py-20 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 font-mono text-xs text-teal-accent mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Core Engineering Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized DevOps Solutions
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-base sm:text-lg">
            Fixed-scope sprints and turnkey architectural setups engineered for fast delivery and zero downtime.
          </p>
        </div>

        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-teal-glow transition-colors self-start md:self-auto min-h-[48px]"
        >
          <RollText text="View All Services & Pricing" />
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Accordion List with Hairline Dividers */}
      <div className="border-t border-devops-border/70 divide-y divide-devops-border/70">
        {featuredServices.map((service, idx) => {
          const isExpanded = expandedIndex === idx;
          const num = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={service.id}
              className={`group transition-colors duration-300 ${
                isExpanded
                  ? "bg-navy-850/60"
                  : "hover:bg-teal-accent hover:text-navy-950"
              }`}
            >
              {/* Row Header Button */}
              <button
                type="button"
                onClick={() => toggleRow(idx)}
                aria-expanded={isExpanded}
                className="w-full py-6 sm:py-8 flex items-center justify-between text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent px-4 sm:px-6 min-h-[72px]"
              >
                <div className="flex items-center gap-4 sm:gap-8 flex-1 pr-4">
                  {/* Row Number 01-06 */}
                  <span
                    className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                      isExpanded
                        ? "text-teal-accent"
                        : "text-teal-accent/60 group-hover:text-navy-950"
                    }`}
                  >
                    {num}
                  </span>

                  {/* Service Title */}
                  <h3
                    className={`font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                      isExpanded
                        ? "text-white"
                        : "text-slate-100 group-hover:text-navy-950"
                    }`}
                  >
                    {service.name}
                  </h3>

                  {/* Badge */}
                  {service.badge && (
                    <span
                      className={`hidden md:inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium transition-colors ${
                        isExpanded
                          ? "border border-teal-accent/30 bg-teal-accent/10 text-teal-accent"
                          : "border border-devops-border/60 bg-navy-900/60 text-slate-300 group-hover:border-navy-950/30 group-hover:bg-navy-950/10 group-hover:text-navy-950 font-bold"
                      }`}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Right price + Arrow icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <span
                    className={`font-mono text-xs sm:text-sm font-semibold transition-colors ${
                      isExpanded
                        ? "text-teal-accent"
                        : "text-slate-300 group-hover:text-navy-950 font-bold"
                    }`}
                  >
                    {service.price}
                  </span>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      isExpanded
                        ? "border-teal-accent bg-teal-accent text-navy-950 rotate-45"
                        : "border-devops-border text-slate-400 group-hover:border-navy-950 group-hover:text-navy-950 group-hover:rotate-45"
                    }`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                className={`grid transition-[grid-template-rows] duration-400 ease-out overflow-hidden px-4 sm:px-6 ${
                  isExpanded ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-2 sm:pl-16 max-w-4xl space-y-4">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-2">
                      <div className="flex items-center gap-1.5 text-teal-accent">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Timeline: {service.timeline}</span>
                      </div>
                      <span className="text-devops-border">•</span>
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>100% reproducible Infrastructure as Code</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a
                        href="https://calendly.com/shujaahmed198/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-2 rounded-xl bg-teal-accent px-5 py-2.5 text-xs font-bold text-navy-950 hover:bg-teal-glow shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all min-h-[44px]"
                      >
                        <RollText text="Book Free Strategy Call" />
                        <ArrowRight className="h-3.5 w-3.5 group-hover/cta:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
