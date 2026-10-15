"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { Clock, Video, ShieldCheck, ExternalLink } from "lucide-react";

interface CalendlyEmbedProps {
  url?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/shujaahmed198/30min",
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Re-initialize widget if Calendly is already loaded on the client window
    interface WindowWithCalendly extends Window {
      Calendly?: {
        initInlineWidgets?: () => void;
      };
    }
    const win = window as unknown as WindowWithCalendly;
    if (typeof win !== "undefined" && win.Calendly?.initInlineWidgets) {
      win.Calendly.initInlineWidgets();
    }
  }, [url]);

  return (
    <div
      id="booking"
      className="w-full rounded-2xl border border-devops-border bg-navy-850/80 p-4 sm:p-6 shadow-2xl backdrop-blur-sm"
    >
      {/* Session briefing header */}
      <div className="mb-6 border-b border-devops-border/60 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3 py-1 text-xs font-mono text-teal-accent mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-accent"></span>
              </span>
              Direct Video Call
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Free 30-Minute DevOps Discovery Consultation
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              No pitch, no fluff. Just a direct technical discussion about your infrastructure bottlenecks and ROI roadmap.
            </p>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-800 px-4 py-2.5 text-xs font-medium text-slate-200 border border-devops-border hover:border-teal-accent/50 hover:text-white transition-colors min-h-[48px]"
          >
            <span>Open in New Window</span>
            <ExternalLink className="h-3.5 w-3.5 text-teal-accent" />
          </a>
        </div>

        {/* Benefits bar */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Clock className="h-4 w-4 text-teal-accent flex-shrink-0" />
            <span>30 minutes duration</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Video className="h-4 w-4 text-teal-accent flex-shrink-0" />
            <span>Google Meet / Zoom link</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="h-4 w-4 text-teal-accent flex-shrink-0" />
            <span>Strict NDA & zero sales pressure</span>
          </div>
        </div>
      </div>

      {/* Calendly Inline Widget Embed */}
      <div className="relative min-h-[700px] w-full rounded-xl overflow-hidden bg-navy-950 border border-devops-border/40">
        {/* Calendly inline widget begin */}
        <div
          className="calendly-inline-widget w-full"
          data-url={url}
          style={{ minWidth: "320px", height: "700px" }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        {/* Calendly inline widget end */}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-devops-border/40">
        <span className="font-mono text-slate-400">Timezone automatically detected</span>
        <span>
          Need a custom time? Email{" "}
          <a
            href="mailto:shujaahmed198@gmail.com"
            className="text-teal-accent font-mono hover:underline"
          >
            shujaahmed198@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
