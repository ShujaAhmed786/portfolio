"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/posts";

export function BlogTeaserSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      aria-label="Recent Technical Articles"
      className="relative w-full py-16 sm:py-24 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 border-b border-devops-border/70 pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold mb-2">
            {"// [06] FIELD NOTES & ARCHITECTURAL GUIDES"}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Blog &amp; Writeups
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
            Honest architectural breakdowns, cost optimization playbooks, and production incident debriefs.
          </p>
        </div>

        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 border border-devops-border bg-transparent hover:border-teal-accent hover:bg-navy-850 text-slate-200 hover:text-white px-5 py-2.5 font-mono text-xs font-semibold transition-colors self-start md:self-auto min-h-[44px]"
        >
          <span>View All Articles</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-teal-accent" />
        </Link>
      </div>

      {/* Rows Like Selected Work Index (Hairline Between Rows, No Cards) */}
      <div className="w-full border-t border-b border-devops-border/70 divide-y divide-devops-border/60">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col md:flex-row md:items-baseline justify-between py-6 sm:py-8 px-2 sm:px-4 hover:bg-navy-850/60 transition-colors gap-3 md:gap-6"
          >
            {/* Left / Date & ReadTime in Mono */}
            <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 font-mono text-xs text-slate-400 shrink-0 md:w-36">
              <time dateTime={post.date} className="text-teal-accent font-semibold">
                {post.date}
              </time>
              <span className="text-slate-400">
                {post.readTime}
              </span>
            </div>

            {/* Middle: Big Title, Excerpt, Tags in Mono */}
            <div className="flex-1 min-w-0 space-y-2">
              <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-white group-hover:text-teal-accent transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-2">
                {post.excerpt}
              </p>

              <div className="font-mono text-[11px] text-slate-400 flex flex-wrap gap-2 pt-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Plain Arrow */}
            <div className="hidden md:block shrink-0 text-slate-400 group-hover:text-teal-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform pt-1">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
