"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "bash", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-devops-border bg-devops-terminal shadow-xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-devops-border/70 bg-navy-950/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          </div>
          {filename ? (
            <span className="font-mono text-xs text-slate-300 font-medium">
              {filename}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
              <Terminal className="h-3.5 w-3.5 text-teal-accent" />
              <span>{language}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-accent/70 bg-teal-accent/10 px-2 py-0.5 rounded">
              {language}
            </span>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-lg border border-devops-border/80 bg-navy-900 px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:border-teal-accent hover:text-white transition-colors"
            title="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-teal-accent" />
                <span className="text-teal-accent">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto p-4 text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
        <pre className="m-0">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
