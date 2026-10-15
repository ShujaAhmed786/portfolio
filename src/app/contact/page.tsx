import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Book DevOps Consultation & Contact | Shuja Ahmed",
  description:
    "Book a free 30-minute DevOps discovery consultation with Shuja Ahmed. Audit your cloud infrastructure, bottlenecks, and cloud bills.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book DevOps Consultation & Contact | Shuja Ahmed",
    description:
      "Book a free 30-minute DevOps discovery consultation with Shuja Ahmed. Audit your cloud infrastructure, bottlenecks, and cloud bills.",
    url: "https://shujaahmed.dev/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book DevOps Consultation & Contact | Shuja Ahmed",
    description:
      "Book a free 30-minute DevOps discovery consultation with Shuja Ahmed. Audit your cloud infrastructure, bottlenecks, and cloud bills.",
  },
};

export default function ContactPage() {
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
        name: "Contact & Consultation",
        item: "https://shujaahmed.dev/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <ContactView />
    </>
  );
}
