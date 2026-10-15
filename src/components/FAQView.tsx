"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HelpCircle,
  MessageSquare,
  ArrowRight,
  Search,
} from "lucide-react";
import { faqData } from "@/data/faq";
import { Accordion } from "@/components/Accordion";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function FAQView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Engagements & Process",
    "Security & Access",
    "FinOps & Cost",
    "Collaboration",
    "Support & Retainers",
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* FAQ Header */}
      <AnimatedGridBackground className="py-16 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-5xl px-[clamp(16px,4vw,60px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              Transparent Working Relationships
            </div>
            <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Clear answers regarding security access protocols, project timelines, flat-fee pricing models, and how we collaborate seamlessly with your existing team.
            </p>
          </motion.div>
        </div>
      </AnimatedGridBackground>

      {/* Main FAQ Container */}
      <section className="relative py-10 px-[clamp(16px,4vw,60px)] max-w-4xl mx-auto w-full -mt-6 z-20">
        <h2 className="sr-only">Search & Filter FAQs</h2>
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions by keyword (e.g. AWS, NDA, timeline, pricing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-devops-border bg-navy-850/90 py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-400 backdrop-blur-md focus:border-teal-accent focus:outline-none min-h-[48px]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2.5 text-xs font-mono transition-all min-h-[48px] flex items-center justify-center ${
                selectedCategory === cat
                  ? "bg-teal-accent text-navy-950 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                  : "bg-navy-850 border border-devops-border text-slate-300 hover:border-teal-accent/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            <Accordion items={filteredFaqs} />
          </div>
        ) : (
          <div className="rounded-2xl border border-devops-border bg-navy-850/80 p-12 text-center">
            <p className="text-slate-400 text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-xs font-mono text-teal-accent hover:underline min-h-[48px] px-3"
            >
              Reset search & filters
            </button>
          </div>
        )}

        {/* Still have questions card */}
        <div className="mt-16 rounded-3xl border border-devops-border bg-navy-850/90 p-8 sm:p-10 backdrop-blur-md text-center">
          <MessageSquare className="h-8 w-8 text-teal-accent mx-auto mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">Have a specific or custom question?</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            I reply personally to all inquiries within 24 hours. Send a direct email or schedule a discovery consultation call.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/shujaahmed198/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-6 py-3.5 text-sm font-bold text-navy-950 hover:bg-teal-glow shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all min-h-[48px]"
            >
              <span>Book a free consultation</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </section>
    </div>
  );
}
