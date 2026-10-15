"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  Shield,
  Sparkles,
  Zap,
  Terminal,
  TrendingDown,
  Server,
  Activity,
  Boxes,
  GitBranch,
  Receipt,
  FileCode2,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { coreServices, microServices, ServiceOffer } from "@/data/services";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

function getServiceIcon(id: string) {
  switch (id) {
    case "kubernetes-cluster-setup":
      return Server;
    case "jenkins-cicd-setup":
      return Terminal;
    case "istio-service-mesh":
      return Shield;
    case "helm-chart-development":
      return Boxes;
    case "kubernetes-monitoring-stack":
      return Activity;
    case "gitops-argocd":
      return GitBranch;
    case "pipeline-audit":
      return Terminal;
    case "cost-optimization-sprint":
      return TrendingDown;
    case "lean-infrastructure-setup":
      return Server;
    case "ongoing-devops-support":
      return Activity;
    case "docker-setup":
      return Boxes;
    case "github-actions-pipeline":
      return GitBranch;
    case "aws-bill-review":
      return Receipt;
    case "terraform-starter":
      return FileCode2;
    case "monitoring-setup":
      return Activity;
    case "security-scan":
      return ShieldAlert;
    default:
      return Terminal;
  }
}

function ServiceCard({ service, index }: { service: ServiceOffer; index: number }) {
  const IconComponent = getServiceIcon(service.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${
        service.highlighted
          ? "border-teal-accent/60 bg-navy-850/95 shadow-[0_10px_35px_-5px_rgba(20,184,166,0.22)]"
          : "border-devops-border bg-navy-850/80 hover:border-teal-accent/50 hover:shadow-[0_10px_30px_-5px_rgba(20,184,166,0.15)]"
      }`}
    >
      <div>
        {/* Top Badges & Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent group-hover:scale-105 transition-transform">
            <IconComponent className="h-5 w-5" />
          </div>

          <div className="flex items-center gap-2">
            {service.badge && (
              <span className="rounded-full border border-teal-accent/30 bg-teal-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-teal-accent">
                {service.badge}
              </span>
            )}
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider ${
                service.category === "core"
                  ? "border border-cyan-400/30 bg-cyan-950/40 text-cyan-300"
                  : "border border-amber-400/30 bg-amber-950/40 text-amber-300"
              }`}
            >
              {service.category === "core" ? "Core" : "Micro"}
            </span>
          </div>
        </div>

        {/* Service Name */}
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-teal-accent transition-colors">
          {service.name}
        </h3>

        {/* Price Display */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-teal-accent">
            {service.price}
          </span>
        </div>

        {/* Timeline Badge */}
        <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md border border-devops-border/70 bg-navy-900/80 px-2.5 py-1 font-mono text-xs text-slate-300">
          <Clock className="h-3.5 w-3.5 text-teal-accent" />
          <span>{service.timeline}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* CTA Button linked directly to Calendly */}
      <div className="mt-6 pt-5 border-t border-devops-border/60">
        <a
          href="https://calendly.com/shujaahmed198/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-accent px-4 py-3 text-xs sm:text-sm font-bold text-navy-950 shadow-[0_0_15px_rgba(20,184,166,0.25)] hover:bg-teal-glow hover:shadow-[0_0_25px_rgba(45,212,191,0.45)] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
        >
          <span>Book free consultation</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

export function ServicesView() {
  return (
    <div className="flex flex-col w-full">
      {/* Services Header */}
      <AnimatedGridBackground className="py-16 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-5xl px-[clamp(16px,4vw,60px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Transparent, High-ROI Engagements
            </div>
            <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-tight">
              DevOps Engineering Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transparent fixed-scope sprints, quick-win micro services, and ongoing retainers designed to eliminate bottlenecks, secure containers, and slash cloud waste.
            </p>
          </motion.div>
        </div>
      </AnimatedGridBackground>

      {/* Main Services Container */}
      <div className="relative px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full -mt-6 z-20 space-y-16 pb-20">
        {/* =================================================================== */}
        {/* SECTION 1: CORE SERVICES */}
        {/* =================================================================== */}
        <section>
          <div className="mb-8 border-b border-devops-border/70 pb-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-teal-accent uppercase tracking-wider mb-1">
              <Zap className="h-3.5 w-3.5" />
              <span>Full-Scope Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Core Services
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-2xl">
              Production Kubernetes architectures, Jenkins multi-stage pipelines, turnkey cloud infrastructure builds, and dedicated retainers.
            </p>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          {/* Consultation CTA Banner After Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 rounded-2xl border border-teal-accent/30 bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-teal-accent font-semibold">
                Need a Custom Cloud Scope?
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Discuss Your Core Infrastructure Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Book a free 30-minute consultation call. We will review your current infrastructure, bottlenecks, and timeline with zero sales pressure.
              </p>
            </div>
            <a
              href="https://calendly.com/shujaahmed198/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-6 py-3.5 text-xs sm:text-sm font-bold text-navy-950 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:bg-teal-glow transition-all whitespace-nowrap flex-shrink-0 min-h-[48px]"
            >
              <span>Book free consultation</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

        {/* =================================================================== */}
        {/* SECTION 2: MICRO-SERVICES (QUICK WINS) */}
        {/* =================================================================== */}
        <section>
          <div className="mb-8 border-b border-devops-border/70 pb-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-wider mb-1">
              <Zap className="h-3.5 w-3.5" />
              <span>Fast Turnaround • 48hr to 1-Week Delivery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Micro-Services (Quick Wins)
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-2xl">
              Targeted, fixed-price solutions for quick wins: containerize an app, configure CI/CD, audit your AWS bill, or harden container security.
            </p>
          </div>

          {/* Micro-Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          {/* Consultation CTA Banner After Micro-Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Have a Quick Win in Mind?
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Start with a 48-Hour Micro-Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Ready to containerize your app, automate your pipeline, or audit your cloud bill? Book a discovery call to kick off within 24 hours.
              </p>
            </div>
            <a
              href="https://calendly.com/shujaahmed198/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-6 py-3.5 text-xs sm:text-sm font-bold text-navy-950 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:bg-teal-glow transition-all whitespace-nowrap flex-shrink-0 min-h-[48px]"
            >
              <span>Book free consultation</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

        {/* Working Together FAQ Strip */}
        <section className="rounded-3xl border border-devops-border bg-navy-850/60 p-6 sm:p-10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-teal-accent font-mono text-xs font-bold mb-2">
                <HelpCircle className="h-4 w-4" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                How does an engagement typically start?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                We start with a complimentary 30-minute discovery call to evaluate your architecture, confirm requirements, and outline a fixed-fee quote. No surprise hourly overages.
              </p>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-devops-border bg-navy-900 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:border-teal-accent hover:text-white transition-colors flex-shrink-0 min-h-[48px]"
            >
              <span>Read Full FAQ</span>
              <ArrowRight className="h-4 w-4 text-teal-accent" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
