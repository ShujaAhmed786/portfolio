"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Cpu, Activity, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    id: "deploy",
    icon: Rocket,
    title: "Deploy",
    subtitle: "Zero-Downtime Releases",
    accent: "from-teal-500/20 to-teal-accent/5",
    description:
      "Modernize manual, fragile deployments into immutable, automated pipelines. Roll out features to production with zero customer downtime using blue/green and canary strategies on AWS ECS & EKS.",
    capabilities: [
      "Zero-downtime Blue/Green & Canary rollouts",
      "Containerized microservices with Docker & AWS ECS",
      "Automated staging & ephemeral preview environments",
      "Instant automated rollbacks on health check failure",
    ],
  },
  {
    id: "automate",
    icon: Cpu,
    title: "Automate",
    subtitle: "Declarative Infrastructure as Code",
    accent: "from-cyan-500/20 to-teal-500/5",
    description:
      "Eliminate click-ops and configuration drift once and for all. Turn your entire cloud footprint into reproducible, peer-reviewed Terraform code that your team can inspect, test, and spin up in minutes.",
    capabilities: [
      "Turnkey Terraform & OpenTofu architectures",
      "GitHub Actions & GitLab CI workflow engineering",
      "Least-privilege AWS IAM security governance",
      "Automated test suites & container security scanning",
    ],
  },
  {
    id: "monitor",
    icon: Activity,
    title: "Monitor",
    subtitle: "Proactive Observability & FinOps",
    accent: "from-emerald-500/20 to-teal-accent/5",
    description:
      "Detect anomalies before your users do. Combine high-resolution metrics, distributed tracing, and automated cost optimization alarms to maintain 99.98%+ uptime while keeping cloud spend lean.",
    capabilities: [
      "Prometheus, Grafana & AWS CloudWatch telemetry",
      "Continuous FinOps cloud bill audits (-25% to -60%)",
      "SLI / SLO dashboards & multi-tier alerting",
      "Automated backup validation & disaster recovery drills",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="relative py-16 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-accent" />
          The DevOps Foundation
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Three Pillars of Modern Cloud Reliability
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
          Every architecture I design is engineered around three non-negotiable fundamentals: frictionless deployments, bulletproof automation, and relentless observability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col justify-between rounded-2xl border border-devops-border bg-navy-850/70 p-8 backdrop-blur-md hover:border-teal-accent/60 hover:shadow-[0_10px_35px_-5px_rgba(20,184,166,0.2)] transition-all duration-300 group"
            >
              {/* Pillar Accent Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 border border-teal-accent/40 text-teal-accent shadow-[0_0_20px_rgba(20,184,166,0.25)] group-hover:scale-105 transition-transform mb-6">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-teal-accent">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-teal-accent transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs font-mono font-medium text-teal-accent/80 mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="border-t border-devops-border/60 pt-5">
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {pillar.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-accent flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-devops-border/40">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-accent group-hover:text-white transition-colors"
                >
                  <span>Explore {pillar.title} Services</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
