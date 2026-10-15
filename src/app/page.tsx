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
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Engineer | AWS, Kubernetes & CI/CD | Shuja Ahmed",
    description:
      "DevOps Engineer specializing in Kubernetes, AWS architectures, Terraform IaC, Jenkins CI/CD pipelines, and cloud cost reduction.",
  },
};

export default function HomePage() {
  return <HomeView />;
}
