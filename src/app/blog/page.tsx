import type { Metadata } from "next";
import { BlogListingView } from "@/components/BlogListingView";

export const metadata: Metadata = {
  title: "DevOps Engineering Blog & AWS Field Notes | Shuja Ahmed",
  description:
    "Practical DevOps guides on AWS architecture, Kubernetes vs ECS, Terraform best practices, CI/CD pipelines, and cloud cost reduction.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "DevOps Engineering Blog & AWS Field Notes | Shuja Ahmed",
    description:
      "Practical DevOps guides on AWS architecture, Kubernetes vs ECS, Terraform best practices, CI/CD pipelines, and cloud cost reduction.",
    url: "https://shujaahmed.dev/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Engineering Blog & AWS Field Notes | Shuja Ahmed",
    description:
      "Practical DevOps guides on AWS architecture, Kubernetes vs ECS, Terraform best practices, CI/CD pipelines, and cloud cost reduction.",
  },
};

export default function BlogPage() {
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
        name: "Engineering Blog",
        item: "https://shujaahmed.dev/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <BlogListingView />
    </>
  );
}
