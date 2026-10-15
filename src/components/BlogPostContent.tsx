"use client";

import React from "react";
import { CodeBlock } from "./CodeBlock";

interface BlogPostContentProps {
  content: string;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  // Split markdown content by code blocks and text segments
  const renderFormattedText = (text: string) => {
    // Process bold, inline code, and clean formatting
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

    return parts.map((part, i) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={i}
            className="rounded bg-navy-950 border border-devops-border/80 px-1.5 py-0.5 font-mono text-xs text-teal-accent font-medium"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  // Parse lines into blocks
  const blocks: React.ReactNode[] = [];
  const lines = content.split("\n");

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Check for fenced code block start
    if (line.trim().startsWith("```")) {
      const language = line.trim().slice(3).trim() || "bash";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      // advance past closing ```
      i++;
      const codeString = codeLines.join("\n");
      blocks.push(
        <CodeBlock
          key={`code-${blocks.length}`}
          code={codeString}
          language={language}
        />
      );
      continue;
    }

    // Check for H2
    if (line.startsWith("## ")) {
      const headingText = line.slice(3).trim();
      const headingId = headingText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      blocks.push(
        <h2
          key={`h2-${blocks.length}`}
          id={headingId}
          className="mt-12 mb-4 scroll-mt-24 text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-devops-border/50 pb-3 flex items-center gap-2"
        >
          <span className="text-teal-accent font-mono text-lg select-none">#</span>
          <span>{headingText}</span>
        </h2>
      );
      i++;
      continue;
    }

    // Check for H3
    if (line.startsWith("### ")) {
      const headingText = line.slice(4).trim();
      blocks.push(
        <h3
          key={`h3-${blocks.length}`}
          className="mt-8 mb-3 text-xl sm:text-2xl font-bold text-white tracking-tight"
        >
          {headingText}
        </h3>
      );
      i++;
      continue;
    }

    // Check for bullet list item
    if (line.trim().startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push(
        <ul key={`ul-${blocks.length}`} className="my-5 space-y-2.5 pl-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
              <span className="h-2 w-2 rounded-full bg-teal-accent mt-2 flex-shrink-0" />
              <span>{renderFormattedText(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Check for numbered list item
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol-${blocks.length}`} className="my-5 space-y-3 pl-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-accent/20 font-mono text-xs font-bold text-teal-accent flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{renderFormattedText(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Check for blockquote
    if (line.trim().startsWith("> ")) {
      const quoteText = line.trim().slice(2);
      blocks.push(
        <blockquote
          key={`quote-${blocks.length}`}
          className="my-6 border-l-4 border-teal-accent bg-navy-850/70 py-3 px-5 rounded-r-xl text-slate-200 italic text-sm sm:text-base"
        >
          {renderFormattedText(quoteText)}
        </blockquote>
      );
      i++;
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Regular paragraph
    blocks.push(
      <p
        key={`p-${blocks.length}`}
        className="my-4 text-sm sm:text-base text-slate-300 leading-relaxed"
      >
        {renderFormattedText(line)}
      </p>
    );
    i++;
  }

  return <div className="blog-article-content prose prose-invert max-w-none">{blocks}</div>;
}
