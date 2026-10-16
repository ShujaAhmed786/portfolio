"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";
import { getAllPosts } from "@/data/posts";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { RollText } from "@/components/RollText";

export function BlogListingView() {
  const posts = getAllPosts();
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allTags = ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  const filteredPosts = posts.filter((post) => {
    const matchesTag =
      selectedTag === "All" || post.tags.includes(selectedTag);
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTag && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Blog Hero Header */}
      <AnimatedGridBackground className="py-16 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-5xl px-[clamp(16px,4vw,60px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              DevOps & Cloud Engineering Insights
            </div>
            <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-tight">
              Engineering Blog & Field Notes
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Practical, honest guides on AWS architecture, Terraform automation, cloud cost reduction, and continuous deployment from four years in the trenches.
            </p>

            {/* Search Input Bar */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles by topic, tool, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-devops-border bg-navy-850/90 py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-400 backdrop-blur-md focus:border-teal-accent focus:outline-none min-h-[48px]"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedGridBackground>

      {/* Main Listing Section */}
      <section className="relative py-10 px-[clamp(16px,4vw,60px)] max-w-5xl mx-auto w-full -mt-6 z-20">
        <h2 className="sr-only">Technical Articles List</h2>
        {/* Tag Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-4 py-2.5 text-xs font-mono transition-all active:scale-95 min-h-[48px] flex items-center justify-center ${
                selectedTag === tag
                  ? "bg-teal-accent text-navy-950 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                  : "bg-navy-850 border border-devops-border text-slate-300 hover:border-teal-accent/50 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-8 backdrop-blur-md hover:border-teal-accent/50 hover:shadow-[0_10px_35px_-5px_rgba(20,184,166,0.2)] active:scale-[0.985] active:border-teal-accent/50 transition-all duration-300"
                data-cursor="READ"
                data-cursor-type="blog"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-teal-accent" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-teal-accent" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-accent transition-colors leading-snug">
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

                {/* Footer with Tags and Read Link */}
                <div className="mt-6 pt-5 border-t border-devops-border/60 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-devops-border bg-navy-900 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-accent group-hover:text-teal-glow transition-colors whitespace-nowrap min-h-[48px] items-center">
                    <RollText text="Read Guide" />
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-devops-border bg-navy-850/80 p-12 text-center">
            <p className="text-slate-400 text-sm">
              No matching articles found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("All");
              }}
              className="mt-4 text-xs font-mono text-teal-accent hover:underline min-h-[48px] px-3"
            >
              Reset search & filters
            </button>
          </div>
        )}

        {/* Blog Consultation Banner */}
        <div className="mt-16 rounded-3xl border border-teal-accent/30 bg-gradient-to-r from-navy-850 to-navy-800 p-8 sm:p-12 text-center backdrop-blur-md shadow-xl">
          <Sparkles className="h-8 w-8 text-teal-accent mx-auto mb-3" />
          <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            Have a question about implementing these architectures?
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute consultation call. We can discuss your infrastructure setup, pipeline bottlenecks, or cloud bills directly.
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
