import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/posts";
import { BlogPostContent } from "@/components/BlogPostContent";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | DevOps Engineer | Shuja Ahmed",
    };
  }

  // Ensure title has primary keyword in first 60 characters
  const baseTitle = `${post.title} | DevOps Blog`;
  const metaTitle = baseTitle.length > 60 ? `${post.title.slice(0, 44)}... | DevOps` : baseTitle;

  // Max 155 chars description
  const metaDescription =
    post.excerpt.length > 155 ? `${post.excerpt.slice(0, 151)}...` : post.excerpt;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.shujaahmed.dev/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Shuja Ahmed"],
      tags: post.tags,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLdBlogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://shujaahmed.dev/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Shuja Ahmed",
      jobTitle: "DevOps Engineer",
      url: "https://shujaahmed.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Shuja Ahmed",
      url: "https://shujaahmed.dev",
    },
    keywords: post.tags.join(", "),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shujaahmed.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://shujaahmed.dev/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://shujaahmed.dev/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Article Header */}
      <AnimatedGridBackground className="py-14 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-4xl px-[clamp(16px,4vw,60px)]">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-devops-border bg-navy-850 px-3.5 py-2 font-mono text-xs text-slate-300 hover:border-teal-accent hover:text-white transition-colors mb-6 min-h-[48px]"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-teal-accent" />
            <span>Back to All Articles</span>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3 py-1 text-xs font-mono text-teal-accent"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          {/* Metadata Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 border-t border-b border-devops-border/60 py-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-teal-accent" />
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-teal-accent" />
              <span>{post.readTime}</span>
            </span>
            <span>•</span>
            <span className="text-slate-300">By Shuja Ahmed (DevOps Engineer)</span>
          </div>

          {/* Excerpt Lead */}
          <p className="mt-6 text-base sm:text-lg text-teal-accent/90 font-medium leading-relaxed italic border-l-2 border-teal-accent pl-4">
            {post.excerpt}
          </p>
        </div>
      </AnimatedGridBackground>

      {/* Article Body */}
      <section className="relative py-12 px-[clamp(16px,4vw,60px)] max-w-4xl mx-auto w-full z-20">
        <div className="rounded-3xl border border-devops-border bg-navy-850/80 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl">
          <BlogPostContent content={post.content} />

          {/* Author Sign-off */}
          <div className="mt-14 pt-8 border-t border-devops-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent font-mono font-bold text-sm">
                SA
              </div>
              <div>
                <span className="block text-sm font-bold text-white">Shuja Ahmed</span>
                <span className="block text-xs font-mono text-teal-accent/80">DevOps Engineer</span>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-xs font-mono text-teal-accent hover:underline flex items-center gap-1.5 min-h-[48px]"
            >
              <span>More Articles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Mandatory CTA: Book a Free Consultation at end of every post */}
        <div className="mt-12 rounded-3xl border border-teal-accent/40 bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div
            className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "#14B8A6" }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3.5 py-1 text-xs font-mono text-teal-accent mb-4">
              <ShieldCheck className="h-4 w-4" />
              Direct Engineering Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Need help implementing this in your own stack?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Book a complimentary 30-minute discovery call. We will audit your current bottlenecks, evaluate your cloud architecture, and give you concrete recommendations with zero sales pressure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/shujaahmed198/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-8 py-3.5 text-sm font-bold text-navy-950 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:bg-teal-glow transition-all min-h-[48px]"
              >
                <span>Book a free consultation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-devops-border bg-navy-900 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-teal-accent/50 transition-colors min-h-[48px]"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
