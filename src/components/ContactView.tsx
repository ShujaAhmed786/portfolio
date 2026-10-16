"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Send,
} from "lucide-react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function ContactView() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Kubernetes Cluster Setup (from $1,800)",
    cloudBudget: "$1,000 - $5,000/mo",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Contact Header */}
      <AnimatedGridBackground className="py-16 md:py-24" showOrbs={true}>
        <div className="mx-auto max-w-5xl px-[clamp(16px,4vw,60px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Direct Engineering Consultation
            </div>
            <h1 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold text-white tracking-tight leading-tight">
              Book a Free 30-Minute DevOps Consultation
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Schedule directly on the calendar below or reach out via email. No pushy sales pitch - just a practical, high-value conversation about your infrastructure.
            </p>
          </motion.div>
        </div>
      </AnimatedGridBackground>

      {/* Main Content: Channels & Calendar */}
      <section className="relative py-10 px-[clamp(16px,4vw,60px)] max-w-7xl mx-auto w-full -mt-6 z-20">
        <h2 className="sr-only">Direct Communication Channels</h2>
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-devops-border bg-navy-850/80 p-6 backdrop-blur-md hover:border-teal-accent/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Direct Inquiries
                </span>
                <h3 className="text-base font-bold text-white">Email Address</h3>
              </div>
            </div>
            <a
              href="mailto:shujaahmed198@gmail.com"
              className="font-mono text-sm text-teal-accent hover:underline block break-all mb-4"
            >
              shujaahmed198@gmail.com
            </a>
            <CopyEmailButton variant="button" className="w-full text-xs min-h-[48px]" />
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-devops-border bg-navy-850/80 p-6 backdrop-blur-md hover:border-teal-accent/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Professional Network
                  </span>
                  <h3 className="text-base font-bold text-white">LinkedIn</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Connect for ongoing DevOps insights, engineering updates, and direct messaging.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/shujaahmed-/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-devops-border bg-navy-900 px-4 py-3 text-xs font-semibold text-slate-200 hover:border-teal-accent hover:text-white transition-colors min-h-[48px]"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="h-3.5 w-3.5 text-teal-accent" />
            </a>
          </motion.div>

          {/* Response SLA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl border border-devops-border bg-navy-850/80 p-6 backdrop-blur-md hover:border-teal-accent/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 border border-teal-accent/40 text-teal-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Fast Turnaround
                  </span>
                  <h3 className="text-base font-bold text-white">&lt; 24h Response SLA</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every technical inquiry receives a thorough response directly from Shuja Ahmed within 24 business hours.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-devops-border/60 flex items-center gap-2 text-xs text-teal-accent font-mono min-h-[48px]">
              <ShieldCheck className="h-4 w-4" />
              <span>Strict Confidentiality & NDA</span>
            </div>
          </motion.div>
        </div>

        {/* Two-Column Grid: Calendly Embed on Left, Consultation Agenda / Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calendly Interactive Embed */}
          <div className="lg:col-span-7">
            <CalendlyEmbed url="https://calendly.com/shujaahmed198/30min" />
          </div>

          {/* Agenda & Direct Inquiry Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Consultation Agenda */}
            <div className="rounded-2xl border border-devops-border bg-navy-850/80 p-6 backdrop-blur-md">
              <span className="font-mono text-xs uppercase tracking-wider text-teal-accent font-bold mb-2 block">
                Session Agenda
              </span>
              <h2 className="text-xl font-bold text-white mb-4">
                What we cover in 30 minutes
              </h2>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-accent/20 text-teal-accent font-mono text-[11px] font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <span>
                    <strong>Architecture Audit:</strong> Review of your current cloud topology, hosting bottlenecks, and pain points.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-accent/20 text-teal-accent font-mono text-[11px] font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <span>
                    <strong>FinOps Quick-Check:</strong> Analysis of your current monthly AWS spend and immediate waste reduction opportunities.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-accent/20 text-teal-accent font-mono text-[11px] font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <span>
                    <strong>Delivery Pipeline Speed:</strong> Exploring automated zero-downtime CI/CD workflows with GitHub Actions & Jenkins.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-accent/20 text-teal-accent font-mono text-[11px] font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <span>
                    <strong>Custom Roadmap & Quote:</strong> Concrete deliverables, timelines, and flat-fee pricing options.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Message Form Option */}
            <div className="rounded-2xl border border-devops-border bg-navy-850/80 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="h-5 w-5 text-teal-accent" />
                <h3 className="text-lg font-bold text-white">Prefer to message first?</h3>
              </div>
              <p className="text-xs text-slate-300 mb-5">
                Leave your project requirements below, and I will reply to your email with a technical brief.
              </p>

              {formSubmitted ? (
                <div className="rounded-xl border border-teal-accent/40 bg-teal-950/20 p-5 text-center">
                  <CheckCircle2 className="h-8 w-8 text-teal-accent mx-auto mb-2" />
                  <h4 className="text-base font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Thank you. I have received your details and will get back to you within 24 hours at{" "}
                    <span className="text-teal-accent font-mono">{formData.email || "your email"}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-mono text-teal-accent hover:underline min-h-[48px] px-3"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-devops-border bg-navy-900 px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:border-teal-accent focus:outline-none min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1"
                    >
                      Work Email
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-devops-border bg-navy-900 px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:border-teal-accent focus:outline-none min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-devops-border bg-navy-900 px-3.5 py-3 text-xs text-white focus:border-teal-accent focus:outline-none min-h-[48px]"
                    >
                      <optgroup label="Core Kubernetes & Cloud Services">
                        <option value="Kubernetes Cluster Setup (from $1,800)">Kubernetes Cluster Setup (from $1,800)</option>
                        <option value="Jenkins CI/CD Setup (from $600)">Jenkins CI/CD Setup (from $600)</option>
                        <option value="Istio Service Mesh Setup (from $900)">Istio Service Mesh Setup (from $900)</option>
                        <option value="Helm Chart Development ($350)">Helm Chart Development ($350)</option>
                        <option value="Kubernetes Monitoring Stack ($400)">Kubernetes Monitoring Stack ($400)</option>
                        <option value="GitOps with ArgoCD ($500)">GitOps with ArgoCD ($500)</option>
                        <option value="CI/CD Pipeline Audit (from $800)">CI/CD Pipeline Audit (from $800)</option>
                        <option value="Cloud Cost Optimization Sprint (from $1,200)">Cloud Cost Optimization Sprint (from $1,200)</option>
                        <option value="Lean Infrastructure Setup (from $2,500)">Lean Infrastructure Setup (from $2,500)</option>
                        <option value="Ongoing DevOps Support (from $1,000/mo)">Ongoing DevOps Support (from $1,000/mo)</option>
                      </optgroup>
                      <optgroup label="Micro-Services (Quick Wins)">
                        <option value="AWS Bill Review ($99)">AWS Bill Review ($99)</option>
                        <option value="Security Scan ($120)">Security Scan ($120)</option>
                        <option value="Docker Setup ($150)">Docker Setup ($150)</option>
                        <option value="Monitoring Setup ($200)">Monitoring Setup ($200)</option>
                        <option value="GitHub Actions Pipeline ($250)">GitHub Actions Pipeline ($250)</option>
                        <option value="Terraform Starter ($300)">Terraform Starter ($300)</option>
                      </optgroup>
                      <optgroup label="Custom Engineering">
                        <option value="Other Custom Advisory">Other / Custom Advisory</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="project-notes"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1"
                    >
                      Brief Notes / Current Tech Stack
                    </label>
                    <textarea
                      id="project-notes"
                      rows={3}
                      required
                      placeholder="e.g. AWS ECS cluster, slow 30-min GitHub Actions builds, monthly AWS bill around $3,500..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-devops-border bg-navy-900 px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:border-teal-accent focus:outline-none min-h-[96px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal-accent py-3.5 text-xs font-bold text-navy-950 hover:bg-teal-glow shadow-[0_0_15px_rgba(20,184,166,0.25)] transition-all min-h-[48px]"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message Directly</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
