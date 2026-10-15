import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "DevOps Engineer Background & Philosophy | Shuja Ahmed",
  description:
    "The story of Shuja Ahmed: from analytical scriptwriter to DevOps Engineer building resilient Kubernetes and AWS cloud systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "DevOps Engineer Background & Philosophy | Shuja Ahmed",
    description:
      "The story of Shuja Ahmed: from analytical scriptwriter to DevOps Engineer building resilient Kubernetes and AWS cloud systems.",
    url: "https://shujaahmed.dev/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Engineer Background & Philosophy | Shuja Ahmed",
    description:
      "The story of Shuja Ahmed: from analytical scriptwriter to DevOps Engineer building resilient Kubernetes and AWS cloud systems.",
  },
};

export default function AboutPage() {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shuja Ahmed",
    jobTitle: "DevOps Engineer",
    url: "https://shujaahmed.dev",
    image: "https://shujaahmed.dev/images/profile.png",
    sameAs: [
      "https://github.com/ShujaAhmed786",
      "https://www.linkedin.com/in/shujaahmed/",
    ],
    knowsAbout: [
      "Kubernetes",
      "AWS",
      "Terraform",
      "Jenkins",
      "Docker",
      "CI/CD Pipelines",
      "Istio Service Mesh",
      "Cloud Cost Optimization",
      "Observability (Prometheus & Grafana)",
    ],
    description:
      "DevOps Engineer specializing in Kubernetes, AWS cloud architectures, Terraform IaC, Jenkins CI/CD, and cost reduction.",
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
        name: "About Me",
        item: "https://shujaahmed.dev/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <AboutView />
    </>
  );
}
