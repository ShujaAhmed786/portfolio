import type { Metadata } from "next";
import { ServicesView } from "@/components/ServicesView";

export const metadata: Metadata = {
  title: "DevOps Consulting & Kubernetes Services | Shuja Ahmed",
  description:
    "Production Kubernetes setup, Jenkins CI/CD pipelines, Istio service mesh, Terraform IaC, and cloud cost optimization sprints.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "DevOps Consulting & Kubernetes Services | Shuja Ahmed",
    description:
      "Production Kubernetes setup, Jenkins CI/CD pipelines, Istio service mesh, Terraform IaC, and cloud cost optimization sprints.",
    url: "https://shujaahmed.dev/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Consulting & Kubernetes Services | Shuja Ahmed",
    description:
      "Production Kubernetes setup, Jenkins CI/CD pipelines, Istio service mesh, Terraform IaC, and cloud cost optimization sprints.",
  },
};

export default function ServicesPage() {
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
        name: "Services",
        item: "https://shujaahmed.dev/services",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <ServicesView />
    </>
  );
}
