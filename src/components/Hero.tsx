"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";

interface DeployLogRow {
  time: string;
  event: string;
  status: string;
  detail?: string;
}

const DEPLOY_LOGS: DeployLogRow[] = [
  {
    time: "14:02:18 UTC",
    event: "DRILL: pod eviction drill -> replaced and healthy in ~50s",
    status: "[PASS] RECOVERED ~50s",
  },
  {
    time: "14:02:44 UTC",
    event: "WORKLOAD: Amazon EKS 1.36 on Spot ARM (t4g.medium) -> measured $4.82/day",
    status: "[PASS] $4.82/DAY",
  },
  {
    time: "14:03:02 UTC",
    event: "WORKLOAD: FitLyfe production backend on K3s -> measured $0.64/day",
    status: "[PASS] $0.64/DAY",
  },
  {
    time: "14:03:15 UTC",
    event: "PIPELINE: 14-stage automated gate (SonarQube, Docker, Trivy, Argo CD)",
    status: "[PASS] 14 GATES",
  },
];

export function Hero() {
  return (
    <section
      aria-label="DevOps Engineer Production Logbook"
      className="relative w-full bg-navy-900 pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-devops-border/70 select-none"
    >
      <div className="mx-auto w-full max-w-7xl px-[clamp(16px,4vw,60px)]">
        {/* Top Annotation Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-devops-border/70 pb-3 mb-8 sm:mb-12 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-teal-accent font-bold">{"// [00] OPS_LOGBOOK"}</span>
            <span className="text-devops-border">::</span>
            <span>PROD_RUNBOOK_ACTIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span>SYS_LOC: AWS us-east-1</span>
            <span className="text-devops-border">::</span>
            <span className="text-emerald-400 font-semibold">99.98% SLA</span>
          </div>
        </div>

        {/* Typographic Asymmetric Hero Body (Left-aligned) */}
        <div className="max-w-4xl text-left">
          <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold text-white tracking-tight leading-[0.94]">
            Shuja Ahmed
          </h1>

          <div className="mt-3 sm:mt-4 font-mono text-lg sm:text-2xl md:text-3xl font-semibold text-teal-accent tracking-tight flex items-center gap-2">
            <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-teal-accent shrink-0 inline-block" />
            <span>DevOps &amp; Cloud Engineer</span>
          </div>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl">
            Architecting automated cloud infrastructure, zero-downtime container rollouts, and ruthless AWS cost reduction.
          </p>

          {/* Action CTAs: Plain bordered link buttons, no fills, no glow */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 border border-teal-accent/70 bg-transparent hover:border-teal-accent hover:bg-teal-accent/10 px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold text-teal-accent transition-colors min-h-[48px]"
            >
              <span>View Selected Work</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-teal-accent" />
            </Link>

            <a
              href="https://calendly.com/shujaahmed198/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-devops-border bg-transparent hover:border-slate-400 hover:bg-navy-850 px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold text-slate-200 hover:text-white transition-colors min-h-[48px]"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Full-Width Ruled Deploy-Log Strip */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-devops-border/70">
          <div className="flex items-center justify-between mb-3 text-[11px] font-mono uppercase tracking-wider text-slate-400">
            <span className="text-teal-accent font-semibold">{"// LIVE DEPLOY & BENCHMARK LOG"}</span>
            <span className="hidden sm:inline">VERIFIED TELEMETRY</span>
          </div>

          <div className="w-full border-t border-b border-devops-border/70 divide-y divide-devops-border/60">
            {/* Desktop Table Header */}
            <div className="hidden sm:grid sm:grid-cols-[140px_1fr_160px] py-2 px-3 text-[11px] font-mono text-slate-400 uppercase tracking-wider bg-navy-850/40">
              <span>Timestamp</span>
              <span>Event / System Benchmark</span>
              <span className="text-right">Measured Status</span>
            </div>

            {/* Log Rows */}
            {DEPLOY_LOGS.map((log, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr_160px] gap-1.5 sm:gap-4 py-3 px-3 font-mono text-xs hover:bg-navy-850/60 transition-colors"
              >
                {/* Mobile: Time & Status line */}
                <div className="flex sm:block justify-between items-center text-slate-400">
                  <span className="text-slate-400 text-[11px] sm:text-xs">{log.time}</span>
                  <span className="sm:hidden text-teal-accent font-bold text-[11px]">{log.status}</span>
                </div>

                {/* Event description */}
                <div className="text-slate-200 text-xs sm:text-sm">
                  {log.event}
                </div>

                {/* Desktop Status */}
                <div className="hidden sm:block text-right text-teal-accent font-semibold whitespace-nowrap">
                  {log.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
