"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

function getProjectOutcome(id: string): string {
  switch (id) {
    case "retail-propensity-eks":
      return "Self-healing drill in ~50s · EKS measured at $4.82/day · Zero-downtime GitOps";
    case "learnstack":
      return "99.98% uptime SLA · < 4 min deploy cycle · 45+ enterprise tenants scaled";
    case "ratestack":
      return "Measured $0.64/day cloud cost · < 180ms edge latency · 85K+ contracts evaluated";
    case "fitlyfe":
      return "78% ingestion latency reduction · 12,000+ concurrent users · 99.95% availability";
    default:
      return "Production-ready Infrastructure as Code · Zero downtime rollouts";
  }
}

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      aria-label="Selected Production Case Studies"
      className="relative w-full py-16 sm:py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 border-b border-devops-border/70 pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold mb-2">
            {"// [02] SELECTED WORK & CASE STUDIES"}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production Architectures
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
            Multi-tenant containers, sub-dollar serverless architectures, and high-throughput mobile ingestion pipelines.
          </p>
        </div>

        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 border border-devops-border bg-transparent hover:border-teal-accent hover:bg-navy-850 text-slate-200 hover:text-white px-5 py-2.5 font-mono text-xs font-semibold transition-colors self-start md:self-auto min-h-[44px]"
        >
          <span>Explore All Case Studies</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-teal-accent" />
        </Link>
      </div>

      {/* Numbered Index: Hairline Dividers Between Rows */}
      <div className="w-full border-t border-b border-devops-border/70 divide-y divide-devops-border/60">
        {projectsData.map((project, idx) => {
          const num = String(idx + 1).padStart(2, "0");
          const outcome = getProjectOutcome(project.id);
          const targetUrl = project.githubUrl || "/portfolio";

          return (
            <a
              key={project.id}
              href={targetUrl}
              target={project.githubUrl ? "_blank" : undefined}
              rel={project.githubUrl ? "noopener noreferrer" : undefined}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 px-2 sm:px-4 hover:bg-navy-850/60 transition-colors gap-4"
            >
              {/* Left Column: Number, Title, Stack, Outcome */}
              <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                {/* Index Number in Mono */}
                <span className="font-mono text-sm sm:text-base font-bold text-teal-accent shrink-0 pt-1">
                  {num}
                </span>

                <div className="min-w-0 space-y-1.5">
                  {/* Big Project Title */}
                  <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-teal-accent transition-colors tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  {/* Stack in Mono */}
                  <div className="font-mono text-xs sm:text-sm text-slate-400 truncate max-w-2xl">
                    {project.stack.join(" · ")}
                  </div>

                  {/* One-Line Outcome Carrying the Real Number */}
                  <div className="font-mono text-xs sm:text-sm text-teal-accent/90 font-medium">
                    {outcome}
                  </div>
                </div>
              </div>

              {/* Right Arrow: flat hover only */}
              <div className="shrink-0 self-end md:self-center text-slate-400 group-hover:text-teal-accent group-hover:translate-x-1 sm:group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
