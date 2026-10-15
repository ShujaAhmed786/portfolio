import type { Metadata } from "next";
import { PortfolioView } from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: "DevOps Case Studies & Cloud Architecture | Shuja Ahmed",
  description:
    "Explore production DevOps case studies: LearnStack (AWS ECS/RDS), RateStack ($0.64/day AWS serverless), and FitLyfe (Flutter + AWS).",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "DevOps Case Studies & Cloud Architecture | Shuja Ahmed",
    description:
      "Explore production DevOps case studies: LearnStack (AWS ECS/RDS), RateStack ($0.64/day AWS serverless), and FitLyfe (Flutter + AWS).",
    url: "https://shujaahmed.dev/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Case Studies & Cloud Architecture | Shuja Ahmed",
    description:
      "Explore production DevOps case studies: LearnStack (AWS ECS/RDS), RateStack ($0.64/day AWS serverless), and FitLyfe (Flutter + AWS).",
  },
};

export default function PortfolioPage() {
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
        name: "Portfolio Case Studies",
        item: "https://shujaahmed.dev/portfolio",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <PortfolioView />
    </>
  );
}
