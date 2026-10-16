"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { experienceTimeline } from "@/data/experience";
import { Reveal } from "./Reveal";
import { RollText } from "./RollText";

export function ExperienceTimelineSection() {
  return (
    <section
      aria-label="Professional Experience and Track Record"
      className="relative w-full py-20 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Pinned Left Rail (Sticky top-28) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 font-mono text-xs text-teal-accent">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Progression</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Work Experience & Background
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From multi-stage CI/CD pipelines and production Kubernetes to cloud cost optimization and high-availability container workloads.
          </p>

          <div className="pt-2">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-teal-glow transition-colors min-h-[44px]"
            >
              <RollText text="View Full Technical History" />
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick SLA Status Card */}
          <div className="hidden lg:block rounded-2xl border border-devops-border/70 bg-navy-850/80 p-4 font-mono text-xs text-slate-300 backdrop-blur-md">
            <span className="text-teal-accent font-bold">{"// PRODUCTION STANDARD"}</span>
            <p className="mt-2 text-slate-400">
              100% reproducible Infrastructure as Code with zero manual click-ops.
            </p>
          </div>
        </div>

        {/* Right Scrolling Role Cards */}
        <div className="lg:col-span-8 space-y-8">
          {experienceTimeline.map((item, idx) => (
            <Reveal key={idx} staggerIndex={idx} className="w-full">
              <div className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-8 backdrop-blur-md hover:border-teal-accent/50 hover:shadow-[0_15px_35px_-5px_rgba(20,184,166,0.18)] transition-all duration-300">
                {/* Header: Period, Company, Location */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-devops-border/60 pb-4 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-accent bg-teal-accent/10 border border-teal-accent/30 rounded-md px-2.5 py-1">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-teal-accent" />
                      {item.location}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-semibold text-slate-300">
                    {item.company}
                  </span>
                </div>

                {/* Role Title and Highlight */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  {item.role}
                </h3>
                <p className="text-sm font-mono text-teal-accent/90 mb-4 font-medium">
                  {item.highlight}
                </p>

                {/* Role Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Achievements Bullets */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-accent mt-0.5" />
                        <span className="leading-snug">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Row */}
                <div className="pt-4 border-t border-devops-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-md border border-devops-border bg-navy-900 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
