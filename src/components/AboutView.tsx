"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  Terminal,
  Cpu,
  ArrowRight,
  Shield,
  Lightbulb,
  CheckCircle2,
  Quote,
  Sparkles,
} from "lucide-react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

export function AboutView() {
  return (
    <div className="flex flex-col w-full">
      {/* About Hero */}
      <AnimatedGridBackground className="py-14 md:py-20" showOrbs={true}>
        <div className="mx-auto max-w-5xl px-[clamp(16px,4vw,60px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              The Engineering Journey
            </div>

            {/* Profile Picture with Teal Ring and Glow */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                {/* Brand Teal Glow Effect */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-accent via-teal-glow to-cyan-400 opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-500" />

                {/* Circular frame */}
                <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full overflow-hidden border-2 border-teal-accent shadow-[0_0_35px_rgba(20,184,166,0.35)] bg-navy-950">
                  <Image
                    src="/images/profile.png"
                    alt="Shuja Ahmed, DevOps and Cloud Engineer"
                    width={288}
                    height={288}
                    priority
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Live Status Pill */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-navy-950/95 border border-teal-accent/60 px-3 py-1 shadow-lg backdrop-blur-md text-[11px] font-mono text-teal-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>DevOps & Cloud</span>
                </div>
              </div>
            </div>

            <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-tight">
              From Script Writer to DevOps Engineer
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              How an obsession with narrative pacing, structural clarity, and cutting out the fluff transformed into orchestrating resilient, automated cloud infrastructure.
            </p>
          </motion.div>
        </div>
      </AnimatedGridBackground>

      {/* Main Narrative Content */}
      <section className="relative py-12 px-[clamp(16px,4vw,60px)] max-w-4xl mx-auto w-full -mt-6 z-20">
        <div className="space-y-10">
          {/* Chapter 1: The Writer's Room */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold">
                  Act I: The Structure
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">The Writer&apos;s Room</h2>
              </div>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Before I wrote a single line of Terraform or orchestrated a Kubernetes cluster, I wrote screenplays, scripts, and analytical technical narratives. In screenwriting, you learn an unforgiving lesson very early:
              </p>
              <div className="rounded-xl border border-teal-accent/20 bg-navy-900/80 p-4 border-l-4 border-l-teal-accent italic text-slate-200">
                &ldquo;If a scene does not advance the plot or reveal character, it is waste. Cut it.&rdquo;
              </div>
              <p>
                Every beat must connect logically to the next. If a character acts inconsistently in Act III, the entire story collapses under its own weight. You spend hundreds of hours ruthlessly eliminating bloated dialogue, tightening scene transitions, and refining structure until nothing superfluous remains.
              </p>
              <p>
                Little did I know, this mindset was the purest possible training ground for modern software architecture.
              </p>
            </div>
          </motion.div>

          {/* Chapter 2: The Automation Awakening */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold">
                  Act II: The Pivot
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">The Automation Awakening</h2>
              </div>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                In 2020, I started automating repetitive research tasks and file management routines with Bash shell scripts and Python. What began as simple automation scripts quickly became an obsession with systems and infrastructure.
              </p>
              <p>
                I realized that writing a shell script, a Dockerfile, or a GitHub Actions pipeline required the exact same discipline as drafting a screenplay:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="rounded-xl border border-devops-border bg-navy-900/60 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-teal-accent font-bold mb-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Deterministic Flow</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    A pipeline step must either succeed cleanly or fail immediately with an informative error trace. No ambiguous states.
                  </p>
                </div>
                <div className="rounded-xl border border-devops-border bg-navy-900/60 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-teal-accent font-bold mb-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Ruthless Economy</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Why run an idling $200/mo server when a scheduled event-driven task completes the same job for $0.64 a day?
                  </p>
                </div>
              </div>
              <p>
                I started treating every manual operational ritual as a bug in the plot. If a developer had to SSH into a server to deploy code, that was bad writing. If a deployment took 45 minutes because of manual verification checklists, that was a pacing failure.
              </p>
            </div>
          </motion.div>

          {/* Chapter 3: The DevOps Engineer Today */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold">
                  Act III: The Present
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">The DevOps Engineer of Today</h2>
              </div>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Over the last four years, that foundational rigor has evolved into orchestrating production architectures:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-accent font-bold">•</span>
                  <span>Building multi-tenant containerized architectures running reliably at 99.98% uptime.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-accent font-bold">•</span>
                  <span>Architecting lean serverless infrastructures that slash idle hosting expenses by up to 86%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-accent font-bold">•</span>
                  <span>Building automated CI/CD pipelines that transition software teams from monthly panic releases to ten effortless daily deployments.</span>
                </li>
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="rounded-xl border border-devops-border/70 bg-navy-900/60 p-4">
                  <span className="font-mono text-xs text-teal-accent font-bold">Zero Click-Ops</span>
                  <p className="text-xs text-slate-300 mt-1">
                    Codifying every server, VPC, database, and DNS record into readable, reproducible IaC.
                  </p>
                </div>
                <div className="rounded-xl border border-devops-border/70 bg-navy-900/60 p-4">
                  <span className="font-mono text-xs text-teal-accent font-bold">Zero-Downtime CI/CD</span>
                  <p className="text-xs text-slate-300 mt-1">
                    Replacing 45-minute manual deployments with under-4-minute automated GitHub Actions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Callout Quote */}
          <div className="relative rounded-3xl border border-teal-accent/40 bg-teal-950/20 p-6 sm:p-10 text-center">
            <Quote className="h-8 w-8 text-teal-accent mx-auto mb-3 opacity-60" />
            <p className="text-base sm:text-lg md:text-xl font-medium text-white italic max-w-2xl mx-auto leading-relaxed">
              &ldquo;Great infrastructure, like great writing, is completely invisible when done right. Your developers deploy fearlessly, your servers scale quietly, and your cloud bill never gives your CFO a heart attack.&rdquo;
            </p>
            <span className="block mt-4 font-mono text-xs text-teal-accent uppercase tracking-wider font-semibold">
              - Shuja Ahmed
            </span>
          </div>

          {/* About CTA */}
          <div className="text-center pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Let&apos;s build something resilient together</h2>
            <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto">
              Ready to bring clarity, automation, and speed to your software delivery pipeline?
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/shujaahmed198/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-7 py-3.5 text-sm font-bold text-navy-950 hover:bg-teal-glow shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all min-h-[48px]"
              >
                <span>Book a free consultation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-devops-border bg-navy-850 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-teal-accent/50 transition-colors min-h-[48px]"
              >
                <span>Explore Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
