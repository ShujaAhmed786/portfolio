"use client";

import React from "react";
import { Hero } from "@/components/Hero";
import { MarqueeDivider } from "@/components/MarqueeDivider";
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
      {/* 1. Full-Viewport Deployment Hero */}
      <Hero />

      {/* 2. Marquee Divider below the hero */}
      <MarqueeDivider />

      {/* 3. Stats Band: Real Verified Metrics with Animated rAF Count-Up */}
      <StatsSection />

      {/* 4. Selected Work Cards: 24px Radius, Clip-Path Wipe & Counter */}
      <SelectedWorkSection />

      {/* 5. Manifesto: Word-by-Word Scroll Illumination */}
      <ManifestoSection />

      {/* 6. Services Accordion: Numbered Rows 01-06 with Hairline Dividers & Teal Hover */}
      <ServicesAccordion />

      {/* 7. Experience Timeline: Pinned Left Rail & Scrolling Role Cards */}
      <ExperienceTimelineSection />

      {/* 8. Blog Teaser: 3 Cards with READ Cursor Morph */}
      <BlogTeaserSection />

      {/* 9. CTA Panel: Big Rounded Teal Panel */}
      <CtaPanel />
    </div>
  );
}
