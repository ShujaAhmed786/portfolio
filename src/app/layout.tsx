import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shujaahmed.dev"),
  title: {
    default: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
    template: "%s | Shuja Ahmed",
  },
  description:
    "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
  keywords: [
    "DevOps Engineer",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "AWS",
    "CI/CD Pipeline",
    "Cloud Cost Optimization",
    "Docker",
    "Istio Service Mesh",
    "Shuja Ahmed",
  ],
  authors: [{ name: "Shuja Ahmed", url: "https://shujaahmed.dev" }],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  openGraph: {
    title: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
    url: "https://shujaahmed.dev",
    siteName: "Shuja Ahmed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shuja Ahmed — DevOps Engineer",
    url: "https://shujaahmed.dev",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS, Terraform, Jenkins CI/CD, and lean cloud architectures.",
    author: {
      "@type": "Person",
      name: "Shuja Ahmed",
      jobTitle: "DevOps Engineer",
      url: "https://shujaahmed.dev",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="bg-navy-900 text-slate-100 min-h-dvh flex flex-col font-sans antialiased selection:bg-teal-accent/30 selection:text-white overflow-x-hidden text-[16px]">
        <CursorGlow />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
