import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, ArrowUpRight, GitBranch, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-devops-border/70 bg-navy-950/90 text-slate-400 relative z-10">
      <div className="mx-auto max-w-7xl px-[clamp(16px,4vw,60px)] py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <Image
                src="/images/logo/logo.png"
                alt="Shuja Ahmed - DevOps Engineer"
                width={56}
                height={56}
                className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(20,184,166,0.3)]"
              />
              <div>
                <span className="font-mono text-base font-bold text-white">Shuja Ahmed</span>
                <span className="block text-xs font-mono text-teal-accent/80">DevOps Engineer</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Helping high-growth SaaS, startups, and engineering teams build scalable, resilient, and ultra-cost-efficient cloud infrastructure on AWS.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3.5 py-1.5 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems Operational</span>
              <span className="text-emerald-500/60 font-semibold">•</span>
              <span>99.98% Uptime SLA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-teal-accent">
              Navigation
            </span>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center">
                  Experience & Skills
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center">
                  About Journey
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors py-1.5 min-h-[44px] flex items-center text-slate-400">
                  Privacy Policy & Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Links */}
          <div className="space-y-3">
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-teal-accent">
              Get in Touch
            </span>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a
                  href="https://calendly.com/shujaahmed198/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-teal-accent transition-colors font-medium min-h-[44px]"
                >
                  <span>Book Free 30-min Call</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-teal-accent" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:shujaahmed198@gmail.com"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-teal-accent transition-colors min-h-[44px]"
                >
                  <Mail className="h-3.5 w-3.5 text-teal-accent" />
                  <span className="font-mono text-xs">shujaahmed198@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shujaahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-teal-accent transition-colors min-h-[44px]"
                >
                  <Linkedin className="h-3.5 w-3.5 text-teal-accent" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ShujaAhmed786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-teal-accent transition-colors min-h-[44px]"
                >
                  <GitBranch className="h-3.5 w-3.5 text-teal-accent" />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-devops-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-teal-accent" />
            <span>&copy; {currentYear} Shuja Ahmed. All rights reserved. Zero-downtime guaranteed.</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-teal-accent transition-colors">
              Privacy & Cookies
            </Link>
            <span>•</span>
            <span>Next.js 14 • Tailwind CSS • Vercel Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
