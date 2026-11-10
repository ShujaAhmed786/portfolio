"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experienceTimeline } from "@/data/experience";

export function ExperienceTimelineSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and Track Record"
      className="relative w-full py-16 sm:py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 border-b border-devops-border/70 pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold mb-2">
            {"// [05] PRODUCTION TRACK RECORD"}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Background
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
            From multi-stage CI/CD pipelines and production Kubernetes to cloud cost optimization and high-availability container workloads.
          </p>
        </div>

        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 border border-devops-border bg-transparent hover:border-teal-accent hover:bg-navy-850 text-slate-200 hover:text-white px-5 py-2.5 font-mono text-xs font-semibold transition-colors self-start md:self-auto min-h-[44px]"
        >
          <span>View Full Technical History</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-teal-accent" />
        </Link>
      </div>

      {/* Ledger Style List */}
      <div className="w-full border-t border-b border-devops-border/70 divide-y divide-devops-border/60">
        {experienceTimeline.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 sm:py-10 px-2 sm:px-4 hover:bg-navy-850/40 transition-colors"
          >
            {/* Left Column: Years in Mono, Company & Location */}
            <div className="md:col-span-3 font-mono space-y-1">
              <div className="text-xs sm:text-sm font-bold text-teal-accent">
                {item.period}
              </div>
              <div className="text-xs text-white font-semibold">
                {item.company}
              </div>
              <div className="text-xs text-slate-400">
                {item.location}
              </div>
            </div>

            {/* Right Column: Role, Highlight, Description, Achievements as Plain Ruled Lines */}
            <div className="md:col-span-9">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                {item.role}
              </h3>

              <div className="font-mono text-xs sm:text-sm text-teal-accent/90 mt-1 mb-3">
                {item.highlight}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-sans">
                {item.description}
              </p>

              {/* Achievements as Plain Ruled Lines */}
              <div className="border-t border-devops-border/60 divide-y divide-devops-border/40 font-sans text-xs sm:text-sm text-slate-300">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="py-2.5 flex items-start gap-2.5">
                    <span className="font-mono text-teal-accent shrink-0 text-xs mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{ach}</span>
                  </div>
                ))}
              </div>

              {/* Skills in Mono */}
              <div className="pt-4 font-mono text-[11px] text-slate-400 flex flex-wrap gap-x-2.5 gap-y-1">
                {item.skills.map((skill) => (
                  <span key={skill} className="text-slate-400">
                    [{skill}]
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
