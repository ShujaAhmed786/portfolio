import type { Metadata } from "next";
import { ExperienceView } from "@/components/ExperienceView";

export const metadata: Metadata = {
  title: "DevOps Experience & Skills Matrix | Shuja Ahmed",
  description:
    "Four-year DevOps engineering track record across Kubernetes (EKS/K3s), Jenkins 14-stage CI/CD pipelines, Istio, and Terraform.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "DevOps Experience & Skills Matrix | Shuja Ahmed",
    description:
      "Four-year DevOps engineering track record across Kubernetes (EKS/K3s), Jenkins 14-stage CI/CD pipelines, Istio, and Terraform.",
    url: "https://shujaahmed.dev/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Experience & Skills Matrix | Shuja Ahmed",
    description:
      "Four-year DevOps engineering track record across Kubernetes (EKS/K3s), Jenkins 14-stage CI/CD pipelines, Istio, and Terraform.",
  },
};

export default function ExperiencePage() {
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
        name: "Experience & Skills",
        item: "https://shujaahmed.dev/experience",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <ExperienceView />
    </>
  );
}
