"use client";

import React, { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

interface CopyEmailButtonProps {
  email?: string;
  variant?: "button" | "pill" | "icon";
  className?: string;
}

export function CopyEmailButton({
  email = "shujaahmed198@gmail.com",
  variant = "button",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  if (variant === "pill") {
    return (
      <button
        onClick={handleCopy}
        type="button"
        title="Click to copy email address"
        className={`inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-2 font-mono text-sm text-teal-accent transition-all hover:bg-teal-accent/20 hover:border-teal-accent/60 focus-visible:ring-2 focus-visible:ring-teal-accent ${className}`}
      >
        <Mail className="h-4 w-4" />
        <span>{email}</span>
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4 opacity-70" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`relative inline-flex items-center justify-center gap-2.5 rounded-xl border border-devops-border bg-navy-850 px-5 py-3 text-sm font-medium text-white transition-all hover:border-teal-accent/60 hover:bg-navy-800 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] active:scale-95 focus-visible:ring-2 focus-visible:ring-teal-accent min-h-[48px] ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-teal-accent animate-bounce" />
          <span className="text-teal-accent font-semibold">Email Copied to Clipboard!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 text-slate-400" />
          <span>Copy Email Address</span>
        </>
      )}
    </button>
  );
}
