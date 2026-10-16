"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { RollText } from "./RollText";

export function SelectedWorkSection() {
  const totalCount = String(projectsData.length).padStart(2, "0");

  return (
    <section
      aria-label="Selected Production Case Studies"
      className="relative w-full py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 font-mono text-xs text-teal-accent mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Proven Production Architectures</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected Work & Case Studies
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-base sm:text-lg">
            Multi-tenant containers, sub-dollar serverless architectures, and high-throughput mobile ingestion pipelines.
          </p>
        </div>

        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-teal-glow transition-colors self-start md:self-auto min-h-[48px]"
        >
          <RollText text="Explore All Architectural Breakdowns" />
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3-Column Responsive Grid of 24px Rounded Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => {
          const counterStr = `${String(idx + 1).padStart(2, "0")}/${totalCount}`;
          return (
            <Reveal key={project.id} staggerIndex={idx} scaleDown={true} className="h-full">
              <ProjectCard project={project} featured={true} counter={counterStr} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
