"use client";

import React from "react";

interface StatItem {
  id: string;
  index: string;
  label: string;
  detail: string;
  value: string;
}

const STATS: StatItem[] = [
  {
    id: "uptime",
    index: "01",
    label: "Production Uptime SLA",
    detail: "Across multi-tenant AWS ECS & EKS workloads",
    value: "99.98%",
  },
  {
    id: "pipeline-stages",
    index: "02",
    label: "Automated Pipeline Gates",
    detail: "Multi-stage CI/CD with SonarQube, Docker & Trivy",
    value: "14 stages",
  },
  {
    id: "deploy-time",
    index: "03",
    label: "Average Deploy Cycle",
    detail: "Fully automated, zero-downtime CI/CD pipelines",
    value: "< 4 min",
  },
  {
    id: "tenants",
    index: "04",
    label: "Enterprise Tenants Scaled",
    detail: "Multi-tenant containerized architectures across AWS",
    value: "45+",
  },
];

export function StatsSection() {
  return (
    <section
      id="stats-section"
      aria-label="Production Metrics & Performance Benchmarks"
      className="relative w-full py-16 sm:py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Kicker */}
      <div className="flex items-center justify-between border-b border-devops-border/70 pb-3 mb-6 text-xs font-mono text-slate-400">
        <span className="text-teal-accent font-bold">{"// [01] SYSTEM PERFORMANCE BENCHMARKS"}</span>
        <span className="hidden sm:inline">MEASURED PRODUCTION METRICS</span>
      </div>

      <h2 className="sr-only">Production Metrics &amp; Performance Benchmarks</h2>

      {/* Full-Width Ruled Table */}
      <div className="w-full border-t border-b border-devops-border/70 divide-y divide-devops-border/60">
        {STATS.map((stat) => (
          <div
            key={stat.id}
            className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 px-2 sm:px-4 hover:bg-navy-850/50 transition-colors gap-3 sm:gap-6"
          >
            {/* Label on the Left in Mono */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300">
                <span className="text-teal-accent font-bold">[{stat.index}]</span>
                <span>{stat.label}</span>
              </div>
              <p className="font-mono text-xs text-slate-400">
                {stat.detail}
              </p>
            </div>

            {/* Huge Real Number on the Right */}
            <div className="font-display sm:font-mono text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-accent tracking-tight self-start sm:self-auto shrink-0">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
