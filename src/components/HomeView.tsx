"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { StatsSection } from "@/components/StatsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function HomeView() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <AnimatedGridBackground className="min-h-[85dvh] flex items-center justify-center py-16 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-7xl px-[clamp(16px,4vw,60px)] py-8 md:py-16 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-accent"></span>
                </span>
                <span>Available for Q2/Q3 DevOps Engagements</span>
                <span className="text-teal-accent/50 hidden sm:inline">•</span>
                <span className="hidden sm:inline text-slate-300">DevOps Engineer</span>
              </div>
            </motion.div>

            {/* Main Headline with Fluid Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.1rem,5vw,4.5rem)] font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Scalable Cloud Infrastructure.{" "}
              <span className="bg-gradient-to-r from-teal-accent via-teal-glow to-cyan-400 bg-clip-text text-transparent">
                Zero Downtime.
              </span>{" "}
              Lean AWS Bills.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal"
            >
              I help founders and software engineering teams replace manual deploys with rock-solid{" "}
              <span className="text-white font-medium">Terraform</span> automation, containerized cloud architectures, and slashed cloud overhead.
            </motion.p>

            {/* Action Buttons with 48px tap targets */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14"
            >
              <a
                href="https://calendly.com/shujaahmed198/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-teal-accent px-8 py-4 text-base font-bold text-navy-950 shadow-[0_0_25px_rgba(20,184,166,0.35)] hover:bg-teal-glow hover:shadow-[0_0_35px_rgba(45,212,191,0.55)] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
              >
                <span>Book a free consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-devops-border bg-navy-850/80 px-7 py-4 text-base font-semibold text-slate-200 hover:border-teal-accent/60 hover:text-white hover:bg-navy-800 transition-all focus-visible:ring-2 focus-visible:ring-teal-accent min-h-[48px]"
              >
                <span>View Case Studies</span>
                <ChevronRight className="h-4 w-4 text-teal-accent" />
              </Link>
            </motion.div>

            {/* Interactive DevOps Terminal Card */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-2xl rounded-2xl border border-devops-border bg-devops-terminal/95 p-4 sm:p-5 shadow-2xl text-left font-mono text-xs sm:text-sm backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-devops-border/60 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-slate-400">deploy@shuja-cloud: ~/infrastructure</span>
                </div>
                <span className="text-[11px] text-teal-accent/70">Terraform v1.8.5</span>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <p className="text-slate-400">
                  <span className="text-teal-accent">$</span> terraform plan -out=tfplan.binary
                </p>
                <p className="text-slate-400">
                  <span className="text-teal-accent">$</span> terraform apply tfplan.binary
                </p>
                <p className="text-emerald-400">
                  ✔ aws_ecs_service.production: 0 downtime rolling deployment successful
                </p>
                <p className="text-emerald-400">
                  ✔ aws_alb_target_group.health_check: 200 OK (latency: 18ms)
                </p>
                <p className="text-teal-accent">
                  Apply complete! Resources: 14 added, 0 changed, 0 destroyed.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedGridBackground>

      {/* Stats Section with Count-Up */}
      <StatsSection />

      {/* Three Pillars Section: Deploy / Automate / Monitor */}
      <PillarsSection />

      {/* Featured Projects Section */}
      <section className="relative py-20 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Proven Production Work
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Real systems engineered for high availability, sub-second latency, and ruthless cloud cost discipline.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-teal-glow transition-colors self-start md:self-auto min-h-[48px]"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} featured={true} />
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="relative py-20 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl border border-teal-accent/40 bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 p-8 md:p-16 text-center shadow-2xl">
          <div
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "#14B8A6" }}
          />
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "#2DD4BF" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Direct Video Call
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to eliminate bottlenecks and cut your AWS bills?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a 30-minute discovery consultation. We will audit your current bottlenecks, review your architecture, and provide clear, actionable next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/shujaahmed198/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-teal-accent px-9 py-4 text-base font-bold text-navy-950 shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:bg-teal-glow transition-all active:scale-95 min-h-[48px]"
              >
                <span>Book a free consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-devops-border bg-navy-900/90 px-8 py-4 text-base font-semibold text-slate-200 hover:border-teal-accent/60 hover:text-white transition-all min-h-[48px]"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
