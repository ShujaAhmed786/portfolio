"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export const COOKIE_CONSENT_KEY = "portfolio_cookie_consent";

export function CookieConsent() {
  const [consentState, setConsentState] = useState<"pending" | "accepted" | "rejected">("pending");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsentState(stored);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setConsentState(choice);
    // Notify analytics listeners immediately
    window.dispatchEvent(new CustomEvent("cookie_consent_changed", { detail: choice }));
  };

  if (!mounted || consentState !== "pending") {
    return null;
  }

  return (
    <aside
      aria-label="Cookie and Privacy Consent"
      role="region"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="rounded-2xl border border-teal-accent/40 bg-navy-850/95 p-5 shadow-2xl backdrop-blur-xl text-slate-200">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-accent/10 border border-teal-accent/30 text-teal-accent">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Privacy & Cookie Preferences</span>
            </h3>
            <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
              This portfolio uses privacy-friendly, cookieless analytics (Plausible) to understand general traffic volume. No cross-site tracking or advertising cookies are ever used.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleConsent("rejected")}
            aria-label="Close and reject cookies"
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -mr-1 -mt-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-devops-border/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <Link
            href="/privacy"
            className="text-[11px] font-mono text-teal-accent hover:underline self-center sm:self-auto min-h-[44px] flex items-center"
          >
            Read Privacy Policy
          </Link>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
            {/* Equal prominence buttons: no dark patterns */}
            <button
              type="button"
              onClick={() => handleConsent("rejected")}
              className="inline-flex items-center justify-center rounded-xl border border-devops-border bg-navy-900 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition-all min-h-[48px]"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={() => handleConsent("accepted")}
              className="inline-flex items-center justify-center rounded-xl border border-teal-accent bg-teal-accent px-4 py-2.5 text-xs font-bold text-navy-950 hover:bg-teal-glow shadow-[0_0_12px_rgba(20,184,166,0.3)] transition-all min-h-[48px]"
            >
              Accept Analytics
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
