import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, Home } from "lucide-react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

export default function NotFound() {
  return (
    <AnimatedGridBackground className="min-h-[80vh] flex items-center justify-center">
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/20 px-3.5 py-1 text-xs font-mono text-red-400 mb-6">
          <Terminal className="h-3.5 w-3.5" />
          HTTP 404: RESOURCE_NOT_FOUND
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
          Route Not Deployed
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
          The requested endpoint does not exist on this cluster or was terminated during an automated rolling update.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-accent px-6 py-3 text-xs font-bold text-navy-950 hover:bg-teal-glow shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all"
          >
            <Home className="h-4 w-4" />
            <span>Return to Safe Ground</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-devops-border bg-navy-850 px-5 py-3 text-xs font-semibold text-slate-200 hover:border-teal-accent/50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Browse Services</span>
          </Link>
        </div>
      </div>
    </AnimatedGridBackground>
  );
}
