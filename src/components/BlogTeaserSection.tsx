"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/posts";
import { Reveal } from "./Reveal";
import { RollText } from "./RollText";

export function BlogTeaserSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section
      aria-label="Recent Technical Articles"
      className="relative w-full py-20 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 font-mono text-xs text-teal-accent mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Field Notes & Architecture Guides</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Blog & Writeups
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-base sm:text-lg">
            Honest architectural breakdowns, cost optimization playbooks, and production incident debriefs.
          </p>
        </div>

        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-teal-glow transition-colors self-start md:self-auto min-h-[48px]"
        >
          <RollText text="View All Articles" />
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3-Column Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredPosts.map((post, idx) => (
          <Reveal key={post.slug} staggerIndex={idx} className="h-full">
            <article
              data-cursor="READ"
              data-cursor-type="blog"
              className="group relative flex h-full flex-col justify-between rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-teal-accent/50 hover:shadow-[0_15px_35px_-5px_rgba(20,184,166,0.2)] active:scale-[0.985] active:border-teal-accent/50"
            >
              <div>
                {/* Metadata Row */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-devops-border/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-teal-accent" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-teal-accent" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-teal-accent transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer: Tags & Read Link */}
              <div className="mt-6 pt-4 border-t border-devops-border/60 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-devops-border bg-navy-900 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-accent group-hover:text-teal-glow transition-colors whitespace-nowrap">
                  <RollText text="Read Guide" />
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
