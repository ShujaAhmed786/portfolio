"use client";

import React from "react";
import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary Teal Ambient Orb */}
      <motion.div
        className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full blur-[120px] opacity-25"
        style={{
          background: "radial-gradient(circle, #14B8A6 0%, rgba(20, 184, 166, 0.2) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Cyan / Deep Navy Orb */}
      <motion.div
        className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full blur-[130px] opacity-20"
        style={{
          background: "radial-gradient(circle, #2DD4BF 0%, #1E3A5F 50%, transparent 75%)",
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Tertiary Subtle Navy Blue Orb */}
      <motion.div
        className="absolute -bottom-40 left-10 h-[600px] w-[600px] rounded-full blur-[140px] opacity-30"
        style={{
          background: "radial-gradient(circle, #1E3C66 0%, #0E1E36 60%, transparent 80%)",
        }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.05, 0.92, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}
