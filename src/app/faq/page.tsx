import type { Metadata } from "next";
import { FAQView } from "@/components/FAQView";

export const metadata: Metadata = {
  title: "DevOps FAQ & Consulting Questions | Shuja Ahmed",
  description:
    "Common questions on hiring a freelance DevOps Engineer, AWS IAM security, onboarding timeline, fixed pricing, and cost savings.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "DevOps FAQ & Consulting Questions | Shuja Ahmed",
    description:
      "Common questions on hiring a freelance DevOps Engineer, AWS IAM security, onboarding timeline, fixed pricing, and cost savings.",
    url: "https://shujaahmed.dev/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps FAQ & Consulting Questions | Shuja Ahmed",
    description:
      "Common questions on hiring a freelance DevOps Engineer, AWS IAM security, onboarding timeline, fixed pricing, and cost savings.",
  },
};

export default function FAQPage() {
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
        name: "Frequently Asked Questions",
        item: "https://shujaahmed.dev/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <FAQView />
    </>
  );
}
