import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { PageTransitionOverlay } from "@/components/PageTransitionOverlay";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shujaahmed.dev"),
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
  authors: [{ name: "Shuja Ahmed", url: "https://www.shujaahmed.dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
    url: "https://www.shujaahmed.dev",
    siteName: "Shuja Ahmed Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shuja Ahmed - DevOps & Cloud Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
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
    name: "Shuja Ahmed | DevOps Engineer",
    url: "https://www.shujaahmed.dev",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS, Terraform, Jenkins CI/CD, and lean cloud architectures.",
    author: {
      "@type": "Person",
      name: "Shuja Ahmed",
      jobTitle: "DevOps Engineer",
      url: "https://www.shujaahmed.dev",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="bg-navy-900 text-slate-100 min-h-dvh flex flex-col font-sans antialiased selection:bg-teal-accent selection:text-navy-950 overflow-x-hidden text-[16px]">
        <Preloader />
        <ScrollProgressBar />
        <PageTransitionOverlay />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
