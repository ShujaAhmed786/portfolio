"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Shield, Terminal, Clock } from "lucide-react";
import { RollText } from "./RollText";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [karachiTime, setKarachiTime] = useState("KARACHI --:--:-- PKT");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setKarachiTime(`KARACHI ${formatter.format(now)} PKT`);
      } catch {
        setKarachiTime("KARACHI 00:00:00 PKT");
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-devops-border/70 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-[clamp(16px,4vw,60px)] py-16">
        {/* Top Bar: Brand, Live Karachi Clock & Back to Top Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-devops-border/60 gap-6">
          <div className="flex items-center gap-3.5">
            <Image
              src="/images/logo/logo.png"
              alt="Shuja Ahmed - DevOps Engineer"
              width={52}
              height={52}
              className="h-13 w-13 object-contain drop-shadow-[0_0_12px_rgba(20,184,166,0.35)]"
            />
            <div>
              <span className="font-mono text-base font-bold text-white tracking-tight">Shuja Ahmed</span>
              <span className="block text-xs font-mono text-teal-accent/80">DevOps Engineer</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            {/* Live Karachi World-Clock Ticker */}
            <div className="inline-flex items-center gap-2 rounded-full border border-devops-border/80 bg-navy-900/90 px-4 py-2 font-mono text-xs text-teal-accent backdrop-blur-md">
              <Clock className="h-3.5 w-3.5 animate-pulse text-teal-accent" />
              <span className="tracking-widest">{karachiTime}</span>
            </div>

            {/* Circular Back-to-Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-devops-border bg-navy-900 text-slate-300 hover:border-teal-accent hover:bg-teal-accent hover:text-navy-950 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Col 1: Navigation */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-accent flex items-center gap-1.5">
              <span>{"//"}</span>
              <span>Navigation</span>
            </span>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services & Pricing" },
                { href: "/portfolio", label: "Portfolio & Case Studies" },
                { href: "/experience", label: "Experience & Timeline" },
                { href: "/blog", label: "Engineering Blog" },
                { href: "/about", label: "About Journey" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors inline-block py-1">
                    <RollText text={link.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-accent flex items-center gap-1.5">
              <span>{"//"}</span>
              <span>Services</span>
            </span>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-teal-accent transition-colors py-1 inline-block">
                  Kubernetes Cluster Setup
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-accent transition-colors py-1 inline-block">
                  14-Stage Jenkins CI/CD
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-accent transition-colors py-1 inline-block">
                  Cloud Cost Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-accent transition-colors py-1 inline-block">
                  Istio Service Mesh & mTLS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-accent transition-colors py-1 inline-block">
                  GitOps Delivery with ArgoCD
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-accent transition-colors py-1 inline-block">
                  Terraform Infrastructure as Code
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-accent flex items-center gap-1.5">
              <span>{"//"}</span>
              <span>Direct Contact</span>
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://calendly.com/shujaahmed198/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white hover:text-teal-accent font-semibold transition-colors py-1"
                >
                  <RollText text="Schedule 30-min Strategy Call" />
                  <ArrowUpRight className="h-3.5 w-3.5 text-teal-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:shujaahmed198@gmail.com"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-accent transition-colors py-1 font-mono text-xs"
                >
                  <Mail className="h-3.5 w-3.5 text-teal-accent" />
                  <span>shujaahmed198@gmail.com</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Q2/Q3 Projects</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Socials & Verified Profiles */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-accent flex items-center gap-1.5">
              <span>{"//"}</span>
              <span>Socials & Code</span>
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/ShujaAhmed786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors py-1"
                >
                  <Github className="h-4 w-4 text-teal-accent" />
                  <RollText text="GitHub (@ShujaAhmed786)" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shujaahmed-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors py-1"
                >
                  <Linkedin className="h-4 w-4 text-teal-accent" />
                  <RollText text="LinkedIn Profile" />
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors py-1 text-xs"
                >
                  <span>Privacy Policy & Data Terms</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Microcopy & Copyright */}
        <div className="border-t border-devops-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-teal-accent" />
            <span>&copy; {currentYear} Shuja Ahmed. Zero downtime guaranteed.</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span>SYS: PRODUCTION</span>
            <span>•</span>
            <span>REGION: us-east-1</span>
            <span>•</span>
            <span className="text-teal-accent/70">UPTIME: 99.98%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
