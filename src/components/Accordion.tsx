"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faq";

interface AccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export function Accordion({ items, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `faq-trigger-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-teal-accent/50 bg-navy-800/80 shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                : "border-devops-border/70 bg-navy-850/60 hover:border-devops-borderLight"
            }`}
          >
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left transition-colors focus-visible:ring-2 focus-visible:ring-teal-accent"
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="font-mono text-xs text-teal-accent/70 font-semibold tracking-wider">
                  0{index + 1}
                </span>
                <span className="text-base md:text-lg font-semibold text-white tracking-tight">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`flex-shrink-0 rounded-full p-1.5 transition-colors ${
                  isOpen ? "bg-teal-accent/20 text-teal-accent" : "text-slate-400 bg-navy-900"
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.25, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.15 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-devops-border/40 px-5 pb-6 pt-4 md:px-6 md:pb-6 text-slate-300 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
