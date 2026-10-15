"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Briefcase,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Cloud,
  Boxes,
  GitMerge,
  Activity,
} from "lucide-react";
import { experienceTimeline, skillsMatrix } from "@/data/experience";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

export function ExperienceView() {
  const [activeTab, setActiveTab] = useState<"timeline" | "skills">("timeline");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud":
        return Cloud;
      case "Boxes":
        return Boxes;
      case "GitMerge":
        return GitMerge;
      case "Activity":
        return Activity;
      case "ShieldCheck":
        return ShieldCheck;
      default:
        return Terminal;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Experience Header */}
      <AnimatedGridBackground className="py-16 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-5xl px-[clamp(16px,4vw,60px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <Cpu className="h-3.5 w-3.5" />
              Verified Engineering History
            </div>
            <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-tight">
              DevOps Engineering Experience & Skills
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Four years of freelance and contracting experience architecting reliable cloud environments, automating multi-stage CI/CD pipelines, and driving down infrastructure waste.
            </p>
          </motion.div>

          {/* Tab Controls */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-2xl border border-devops-border bg-navy-850 p-1.5 shadow-xl">
              <button
                type="button"
                onClick={() => setActiveTab("timeline")}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-mono transition-all min-h-[48px] ${
                  activeTab === "timeline"
                    ? "bg-teal-accent text-navy-950 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span>Career Timeline (2020 — Present)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("skills")}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-mono transition-all min-h-[48px] ${
                  activeTab === "skills"
                    ? "bg-teal-accent text-navy-950 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Layers className="h-4 w-4" />
                <span>Skills Matrix & Tools</span>
              </button>
            </div>
          </div>
        </div>
      </AnimatedGridBackground>

      {/* Main Content Area */}
      <section className="relative py-10 px-[clamp(16px,4vw,60px)] max-w-5xl mx-auto w-full -mt-6 z-20">
        <h2 className="sr-only">Detailed Experience Breakdown</h2>
        {activeTab === "timeline" ? (
          /* Timeline Tab Content */
          <div className="relative border-l-2 border-devops-border/70 ml-4 md:ml-32 space-y-12 py-4">
            {experienceTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 md:pl-10"
              >
                {/* Node marker on the line */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-teal-accent bg-navy-900 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />

                {/* Period Badge - floating on left in desktop */}
                <div className="md:absolute md:-left-36 md:top-0 md:w-28 text-left md:text-right mb-2 md:mb-0">
                  <span className="inline-block rounded-md bg-navy-850 px-2.5 py-1 text-xs font-mono text-teal-accent border border-devops-border">
                    {item.period}
                  </span>
                </div>

                {/* Card Container */}
                <div className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-8 backdrop-blur-md hover:border-teal-accent/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {item.company} • {item.location}
                    </span>
                  </div>

                  <div className="inline-block rounded-lg bg-teal-accent/10 px-3 py-1 text-xs font-mono text-teal-accent font-medium mb-4 border border-teal-accent/20">
                    {item.highlight}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
                      Key Engineering Outcomes:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-teal-accent flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-devops-border/60 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-devops-border bg-navy-900 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Skills Matrix Tab Content */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsMatrix.map((cat, idx) => {
              const CategoryIcon = getCategoryIcon(cat.iconName);
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent">
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {cat.title}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          {cat.skills.length} Core Competencies
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between rounded-xl border border-devops-border/60 bg-navy-900/60 p-2.5 px-3.5 text-xs font-mono"
                        >
                          <span className="text-slate-200 font-medium">
                            {skill.name}
                          </span>
                          <span className="rounded-full bg-teal-accent/10 border border-teal-accent/20 px-2 py-0.5 text-[10px] text-teal-accent">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-devops-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Proficiency Standard</span>
                    <span className="text-teal-accent font-semibold">
                      Production Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* Experience Footer CTA */}
      <section className="relative py-14 px-[clamp(16px,4vw,60px)] max-w-5xl mx-auto w-full text-center">
        <div className="rounded-3xl border border-teal-accent/30 bg-gradient-to-r from-navy-850 to-navy-800 p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Put 4+ years of specialized freelance DevOps experience to work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Avoid costly infrastructure mistakes, fragile shell scripts, and runaway cloud budgets.
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
        </div>
      </section>
    </div>
  );
}
