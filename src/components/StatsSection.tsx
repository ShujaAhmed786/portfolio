"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { ShieldCheck, TrendingDown, Clock, Server, Terminal } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      id: "uptime",
      icon: ShieldCheck,
      end: 99.98,
      decimals: 2,
      suffix: "%",
      label: "Production Uptime SLA",
      detail: "Across multi-tenant AWS ECS & EKS workloads",
    },
    {
      id: "pipeline-stages",
      icon: Terminal,
      end: 14,
      suffix: " stages",
      label: "Automated Pipeline Gates",
      detail: "Multi-stage CI/CD with SonarQube, Docker & Trivy",
    },
    {
      id: "deploy-time",
      icon: Clock,
      prefix: "<",
      end: 4,
      suffix: " min",
      label: "Average Deploy Cycle",
      detail: "Fully automated, zero-downtime CI/CD pipelines",
    },
    {
      id: "tenants",
      icon: Server,
      end: 45,
      suffix: "+",
      label: "Enterprise Tenants Scaled",
      detail: "Multi-tenant containerized architectures across AWS",
    },
  ];

  return (
    <section id="stats-section" className="relative py-14 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full">
      <h2 className="sr-only">Production Metrics & Performance Benchmarks</h2>
      <div className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div
          className="absolute -top-32 right-1/4 h-64 w-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "#14B8A6" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-devops-border/70 bg-navy-900/50 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-accent/40 active:scale-[0.99] active:border-teal-accent/50"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 border border-teal-accent/30 text-teal-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      Metric
                    </span>
                  </div>

                  <div className="font-mono text-4xl sm:text-5xl font-extrabold text-teal-accent tracking-tight">
                    <CountUp
                      prefix={stat.prefix}
                      end={stat.end}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                      duration={2.2}
                    />
                  </div>

                  <h3 className="mt-2 text-base font-semibold text-slate-200">
                    {stat.label}
                  </h3>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed border-t border-devops-border/40 pt-3">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
