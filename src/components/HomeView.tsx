"use client";

import React from "react";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { ExperienceTimelineSection } from "@/components/ExperienceTimelineSection";
import { BlogTeaserSection } from "@/components/BlogTeaserSection";
import { CtaPanel } from "@/components/CtaPanel";

export function HomeView() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Typographic Ops Hero with Full-Width Ruled Deploy-Log Strip */}
      <Hero />

      {/* 2. System Performance Benchmarks Ruled Table */}
      <StatsSection />

      {/* 3. Selected Work: Numbered Index 01-04 */}
      <SelectedWorkSection />

      {/* 4. Manifesto: Editorial Text with Left Rule Column */}
      <ManifestoSection />

      {/* 5. Services Accordion: Flat Hairline Rows */}
      <ServicesAccordion />

      {/* 6. Experience: Ledger Style */}
      <ExperienceTimelineSection />

      {/* 7. Blog Teaser: Numbered Rows */}
      <BlogTeaserSection />

      {/* 8. CTA: Ruled Section */}
      <CtaPanel />
    </div>
  );
}
