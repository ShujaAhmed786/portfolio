"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Terminal,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

export function PortfolioView() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = ["All", "Multi-Tenant Cloud", "Ultra-Lean Serverless", "Mobile Cloud & Microservices"];

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((p) => p.tag === selectedTag);

  return (
    <div className="flex flex-col w-full">
      {/* Portfolio Header */}
      <AnimatedGridBackground className="py-16 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-5xl px-[clamp(16px,4vw,60px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <Cpu className="h-3.5 w-3.5" />
              Production Engineering & Case Studies
            </div>
            <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-tight">
              DevOps Architecture & Case Studies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Detailed breakdowns of real production infrastructures: problems faced, architectural solutions deployed, technical stacks leveraged, and verified business outcomes.
            </p>
          </motion.div>

          {/* Quick Metrics Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto"
          >
            <div className="rounded-xl border border-devops-border bg-navy-850/80 p-4 text-center backdrop-blur-sm">
              <span className="block font-mono text-2xl font-bold text-teal-accent">99.98%</span>
              <span className="text-xs text-slate-400 mt-1 block">Production System SLA</span>
            </div>
            <div className="rounded-xl border border-devops-border bg-navy-850/80 p-4 text-center backdrop-blur-sm">
              <span className="block font-mono text-2xl font-bold text-teal-accent">Multi-AZ</span>
              <span className="text-xs text-slate-400 mt-1 block">ECS & RDS Availability</span>
            </div>
            <div className="rounded-xl border border-devops-border bg-navy-850/80 p-4 text-center backdrop-blur-sm">
              <span className="block font-mono text-2xl font-bold text-teal-accent">$0.64 / day</span>
              <span className="text-xs text-slate-400 mt-1 block">RateStack Daily AWS Cost</span>
            </div>
            <div className="rounded-xl border border-devops-border bg-navy-850/80 p-4 text-center backdrop-blur-sm">
              <span className="block font-mono text-2xl font-bold text-teal-accent">-78%</span>
              <span className="text-xs text-slate-400 mt-1 block">FitLyfe Ingestion Latency</span>
            </div>
          </motion.div>
        </div>
      </AnimatedGridBackground>

      {/* Case Studies Container */}
      <section className="relative py-10 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full -mt-6 z-20">
        <h2 className="sr-only">Detailed Technical Case Studies</h2>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-4 py-2.5 text-xs font-mono transition-all min-h-[48px] flex items-center justify-center ${
                selectedTag === tag
                  ? "bg-teal-accent text-navy-950 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                  : "bg-navy-850 border border-devops-border text-slate-300 hover:border-teal-accent/50 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 3D Tilt Cards Grid (3 Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Deep-Dive Callout */}
      <section className="relative py-12 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-devops-border bg-navy-850/70 p-6 sm:p-10 md:p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3 py-1 text-xs font-mono text-teal-accent mb-3">
                <Terminal className="h-3.5 w-3.5" />
                Production Architecture Standards
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Battle-Tested Cloud Engineering
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                From ultra-lean serverless microservices executing at sub-dollar daily budgets to high-throughput mobile ingestion pipelines with asynchronous SQS queues and RDS connection pooling, every system is built for zero downtime and ruthless cost efficiency.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/shujaahmed198/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-5 py-3 text-xs font-bold text-navy-950 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:bg-teal-glow transition-all min-h-[48px]"
                >
                  <span>Discuss Your Project Architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-devops-border bg-navy-900 px-5 py-3 text-xs font-semibold text-slate-200 hover:border-teal-accent/50 transition-colors min-h-[48px]"
                >
                  <span>Explore Engineering Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-devops-border bg-navy-900/90 p-5 font-mono text-xs text-slate-300 space-y-2">
              <span className="text-teal-accent font-bold">{"// STANDARD CLOUD STACK"}</span>
              <p>• AWS ECS (Fargate) & Graviton ARM64</p>
              <p>• Terraform Modular Infrastructure as Code</p>
              <p>• Amazon RDS & Connection Pooling Proxy</p>
              <p>• Amazon CloudFront CDN & Route 53</p>
              <p>• Redis Caching & In-Memory Acceleration</p>
              <p>• GitHub Actions Automated CI/CD</p>
              <div className="pt-2 border-t border-devops-border/60 text-emerald-400">
                STATUS: PRODUCTION_READY_200_OK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Banner */}
      <section className="relative py-12 px-[clamp(16px,4vw,60px)] max-w-5xl mx-auto w-full text-center">
        <h2 className="text-2xl font-bold text-white">Have a similar infrastructure challenge?</h2>
        <p className="mt-2 text-slate-300 text-sm max-w-xl mx-auto">
          Whether you need ultra-low-cost serverless like RateStack, high-throughput mobile queues like FitLyfe, or turnkey container infrastructure like LearnStack.
        </p>
        <div className="mt-6">
          <a
            href="https://calendly.com/shujaahmed198/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-7 py-3.5 text-sm font-bold text-navy-950 hover:bg-teal-glow shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all min-h-[48px]"
          >
            <span>Book a free consultation</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
