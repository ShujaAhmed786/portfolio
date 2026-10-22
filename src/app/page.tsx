import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  title: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
  description:
    "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
    url: "https://shujaahmed.dev",
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
};

export default function HomePage() {
  return <HomeView />;
}
