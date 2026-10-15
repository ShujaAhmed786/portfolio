"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowRight, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/85 backdrop-blur-md border-b border-devops-border/70 shadow-lg shadow-black/20 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-[clamp(16px,4vw,60px)]">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-teal-accent rounded-lg p-1 min-h-[48px]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-850 border border-teal-accent/40 shadow-[0_0_15px_rgba(20,184,166,0.2)] group-hover:border-teal-accent transition-colors">
              <Terminal className="h-5 w-5 text-teal-accent group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold text-white tracking-tight group-hover:text-teal-accent transition-colors">
                Shuja Ahmed
              </span>
              <span className="text-[11px] font-mono text-teal-accent/80 tracking-wider">
                {"devops.engineer"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 bg-navy-850/60 border border-devops-border/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs font-medium transition-colors rounded-full focus-visible:ring-2 focus-visible:ring-teal-accent min-h-[40px] flex items-center ${
                    isActive
                      ? "text-teal-accent font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-navy-750/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-teal-accent/10 border border-teal-accent/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://calendly.com/shujaahmed198/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent px-4 py-2.5 text-xs font-bold text-navy-950 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:bg-teal-glow hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button (48x48 tap target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-12 w-12 items-center justify-center rounded-xl bg-navy-850 border border-devops-border text-slate-300 hover:text-white hover:border-teal-accent focus-visible:ring-2 focus-visible:ring-teal-accent transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-devops-border bg-navy-950/95 backdrop-blur-xl px-4 pt-3 pb-6 max-h-[calc(100dvh-75px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors min-h-[48px] ${
                      isActive
                        ? "bg-teal-accent/15 text-teal-accent border border-teal-accent/30 font-semibold"
                        : "text-slate-200 hover:bg-navy-850 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <ShieldCheck className="h-4 w-4 text-teal-accent" />}
                  </Link>
                );
              })}
              <div className="pt-3">
                <a
                  href="https://calendly.com/shujaahmed198/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-accent px-5 py-3 text-sm font-bold text-navy-950 shadow-lg hover:bg-teal-glow transition-all min-h-[48px]"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
