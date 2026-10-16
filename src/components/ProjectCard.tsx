"use client";

import React from "react";
import { ProjectCaseStudy } from "@/data/projects";
import { TiltCard } from "./TiltCard";
import { ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Layers, Github } from "lucide-react";

import { RollText } from "./RollText";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  featured?: boolean;
  counter?: string;
}

export function ProjectCard({ project, featured = false, counter }: ProjectCardProps) {
  return (
    <TiltCard className="h-full">
      <div
        data-cursor="VIEW"
        data-cursor-type="project"
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-devops-border bg-navy-850/90 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-teal-accent/50 hover:shadow-[0_20px_45px_-10px_rgba(20,184,166,0.22)] active:scale-[0.985] active:border-teal-accent/50"
      >
        {/* Top bar with counter, badge and links */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              {counter && (
                <span className="font-mono text-xs font-bold text-teal-accent bg-teal-accent/10 border border-teal-accent/30 rounded-md px-2 py-0.5 tracking-widest">
                  {counter}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3 py-1 font-mono text-xs font-medium text-teal-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
                {project.tag}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-lg border border-devops-border bg-navy-900/80 px-3 py-2 text-xs font-mono text-slate-300 hover:text-white hover:border-teal-accent active:scale-95 transition-all min-h-[44px] min-w-[48px]"
                  title={`View ${project.title} source code on GitHub`}
                >
                  <Github className="h-3.5 w-3.5 text-teal-accent" />
                  <RollText text="GitHub" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-lg border border-devops-border bg-navy-900/80 px-3 py-2 text-xs font-mono text-slate-300 hover:text-white hover:border-teal-accent active:scale-95 transition-all min-h-[44px] min-w-[48px]"
                  title={`Visit ${project.title} live deployment`}
                >
                  <RollText text="Live Demo" />
                  <ExternalLink className="h-3.5 w-3.5 text-teal-accent" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-teal-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-teal-accent/90 font-mono">
            {project.subtitle}
          </p>
          <div className="mt-2 inline-block rounded-md bg-navy-900/90 px-3 py-1 text-xs text-slate-300 border border-devops-border/60">
            {project.highlight}
          </div>

          {/* Metrics Row */}
          <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-devops-border/60 bg-navy-900/60 p-3 text-center">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-base md:text-lg font-bold text-teal-accent">
                  {metric.value}
                </span>
                <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Accordion-like blocks */}
          <div className="mt-6 space-y-4 text-sm leading-relaxed">
            <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-400 mb-1.5 uppercase tracking-wider">
                <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
                <span>The Challenge</span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm">
                {project.problem}
              </p>
            </div>

            <div className="rounded-xl border border-teal-accent/20 bg-teal-950/15 p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-teal-accent mb-1.5 uppercase tracking-wider">
                <Lightbulb className="h-3.5 w-3.5 text-teal-accent" />
                <span>DevOps Solution</span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Results */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal-accent" />
              <span>Measurable Business Results</span>
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-teal-accent mt-0.5">•</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stack Tags */}
        <div className="mt-8 pt-5 border-t border-devops-border/60">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <Layers className="h-3.5 w-3.5 text-teal-accent" />
            <span>Infrastructure Stack:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-devops-border bg-navy-900 px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors group-hover:border-teal-accent/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
