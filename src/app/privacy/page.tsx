import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, Server, ArrowLeft, Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookie Usage | Shuja Ahmed DevOps",
  description:
    "Privacy policy and cookie handling practices for Shuja Ahmed's DevOps engineering portfolio website. Zero tracking without explicit consent.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy & Cookie Usage | Shuja Ahmed DevOps",
    description:
      "Privacy policy and cookie handling practices for Shuja Ahmed's DevOps engineering portfolio website. Zero tracking without explicit consent.",
    url: "https://shujaahmed.dev/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy & Cookie Usage | Shuja Ahmed DevOps",
    description:
      "Privacy policy and cookie handling practices for Shuja Ahmed's DevOps engineering portfolio website. Zero tracking without explicit consent.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20 px-[clamp(16px,4vw,60px)] max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-teal-accent hover:text-teal-glow mb-8 transition-colors min-h-[48px]"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Home</span>
      </Link>

      <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-mono text-teal-accent mb-4 w-fit">
        <ShieldCheck className="h-4 w-4" />
        <span>Privacy & Data Protection</span>
      </div>

      <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-white tracking-tight leading-tight">
        Privacy Policy & Cookie Usage
      </h1>
      <p className="mt-3 text-sm font-mono text-slate-400">
        Last updated: October 2026 • Effective immediately
      </p>

      <div className="mt-10 space-y-10 text-slate-300 text-base leading-relaxed">
        {/* Core Philosophy Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Lock className="h-5 w-5 text-teal-accent" />
            <span>1. Core Privacy Philosophy</span>
          </h2>
          <p>
            As a DevOps engineer who designs secure, minimal, and least-privilege cloud architectures, I treat website privacy with the exact same rigor. This website is built to provide information about my engineering services and case studies without surreptitiously harvesting personal information or tracking you across the internet.
          </p>
        </section>

        {/* Cookies & Storage Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Cookie className="h-5 w-5 text-teal-accent" />
            <span>2. Cookies & Local Storage</span>
          </h2>
          <p>
            This website does not use tracking cookies, advertising cookies, or cross-site tracking beacons. The only storage utilized by this site consists of:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">Cookie Consent Preference (`localStorage`):</strong> Saves your choice when you click &quot;Accept&quot; or &quot;Reject&quot; on the cookie notice banner so we do not prompt you repeatedly on subsequent page visits.
            </li>
          </ul>
        </section>

        {/* Analytics Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <EyeOff className="h-5 w-5 text-teal-accent" />
            <span>3. Privacy-Friendly Analytics</span>
          </h2>
          <p>
            We respect user privacy and do <strong className="text-white">not</strong> use Google Analytics or any invasive tracking suites.
          </p>
          <p>
            If you explicitly grant consent through our cookie banner, we load <strong className="text-white">Plausible Analytics</strong>, an open-source, privacy-first analytics tool. Plausible operates without collecting Personally Identifiable Information (PII) or setting persistent tracking cookies. It tracks aggregate metrics (such as page views, referral sources, and device types) to help improve site performance.
          </p>
          <p>
            If you click &quot;Reject All&quot;, zero analytics scripts are requested or executed.
          </p>
        </section>

        {/* Data Collection Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Server className="h-5 w-5 text-teal-accent" />
            <span>4. Direct Inquiries & Calendly Scheduling</span>
          </h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Direct Email & Message Inquiries</h3>
            <p>
              When you send an inquiry via the contact form or email, your name, email address, and project notes are used solely to review your technical requirements and respond to your inquiry. Your details are never sold, rented, or added to automated marketing lists.
            </p>

            <h3 className="text-lg font-semibold text-white">Calendly Consultation Scheduling</h3>
            <p>
              When booking a consultation via the embedded Calendly scheduling widget, any information you provide (name, email, scheduling timezone) is processed in accordance with Calendly&apos;s privacy policy to coordinate the video call invitation and calendar invite.
            </p>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            5. Your Data Rights
          </h2>
          <p>
            You have the right to request access to any personal correspondence you have submitted, or to request that your messages be permanently erased from my records. To make a request, contact me directly at:
          </p>
          <p className="font-mono text-teal-accent font-semibold">
            shujaahmed198@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
