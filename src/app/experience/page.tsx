import type { Metadata } from "next";
import { ExperienceView } from "@/components/ExperienceView";

export const metadata: Metadata = {
  title: "DevOps Experience & Skills Matrix | Shuja Ahmed",
  description:
    "Career experience of Shuja Ahmed: from script writer to cloud engineer and DevOps engineer specializing in Kubernetes, AWS, and CI/CD.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "DevOps Experience & Skills Matrix | Shuja Ahmed",
    description:
      "Career experience of Shuja Ahmed: from script writer to cloud engineer and DevOps engineer specializing in Kubernetes, AWS, and CI/CD.",
    url: "https://shujaahmed.dev/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Experience & Skills Matrix | Shuja Ahmed",
    description:
      "Career experience of Shuja Ahmed: from script writer to cloud engineer and DevOps engineer specializing in Kubernetes, AWS, and CI/CD.",
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
