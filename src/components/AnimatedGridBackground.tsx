"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingOrbs } from "./FloatingOrbs";

interface AnimatedGridBackgroundProps {
  children?: React.ReactNode;
  showOrbs?: boolean;
  className?: string;
}

export function AnimatedGridBackground({
  children,
  showOrbs = true,
  className = "",
}: AnimatedGridBackgroundProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background base navy color */}
      <div className="absolute inset-0 bg-navy-900 pointer-events-none" />

      {/* Grid Pattern with subtle opacity */}
      <div
        className="absolute inset-0 bg-grid-tech pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        aria-hidden="true"
      />

      {/* Radial overlay to blend edges */}
      <div
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating orbs */}
      {showOrbs && <FloatingOrbs />}

      {/* Decorative DevOps coordinate nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-12 text-[10px] font-mono text-teal-accent/40 hidden md:block"
        >
          {"// REGION: us-east-1 // CLUSTER: ecs-prod-01"}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-28 left-8 text-[10px] font-mono text-teal-accent/30 hidden md:block"
        >
          {"// TERRAFORM: v1.8.5 // GIT_SHA: 9f41b2c"}
        </motion.div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
