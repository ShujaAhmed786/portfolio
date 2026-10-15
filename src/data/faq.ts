export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "onboarding",
    category: "Engagements & Process",
    question: "What does the typical onboarding process look like?",
    answer:
      "We begin with a complimentary 30-minute discovery call to evaluate your infrastructure pain points, bottlenecks, and timeline. Within 24 hours of that call, you receive a scoped proposal with flat-fee pricing and defined deliverables. Once approved, we establish temporary least-privilege IAM roles or cross-account access, set up a dedicated private Slack or Discord channel, and initiate sprint work immediately.",
  },
  {
    id: "security-access",
    category: "Security & Access",
    question: "How do you access our cloud accounts and repositories securely?",
    answer:
      "Zero-trust security is non-negotiable. I never request root account credentials or long-lived shared passwords. We configure temporary IAM Role assumption with an External ID, scoped strictly to required infrastructure resources. All code changes and Terraform modifications are submitted as peer-reviewed Pull Requests into your GitHub/GitLab repository so your team maintains 100% visibility and ownership over every line changed.",
  },
  {
    id: "timeline-turnaround",
    category: "Engagements & Process",
    question: "What is the typical turnaround time for a project?",
    answer:
      "A CI/CD Pipeline Audit is delivered in 3 to 5 business days. Cloud Cost Optimization Sprints typically take 1 to 2 weeks, delivering immediate cost reductions in the current billing cycle. Turnkey Greenfield or Migration Infrastructure Setups take 2 to 3 weeks. Ongoing retainer engagements begin immediately upon onboarding.",
  },
  {
    id: "cost-savings-guarantee",
    category: "FinOps & Cost",
    question: "How do you reduce cloud costs without sacrificing application performance?",
    answer:
      "Cloud waste usually stems from three areas: unoptimized over-provisioning (e.g., running high-tier RDS databases 24/7 when read replicas or serverless scaling suffice), unattached or uncompressed storage assets (abandoned EBS volumes, unarchived S3 tiers), and running x86 processors instead of AWS Graviton2/3 (ARM64) which provide immediate 20% price-performance improvements. We audit every line item in AWS Cost Explorer and CloudWatch usage to trim fat while safeguarding latency and uptime SLAs.",
  },
  {
    id: "team-collaboration",
    category: "Collaboration",
    question: "Can you collaborate with our existing engineering team?",
    answer:
      "Absolutely. Most engagements are collaborative partnerships. I integrate directly into your development workflow, communicate asynchronously in Slack, attend key architectural sprint planning calls, and document every system thoroughly with interactive diagrams and runbooks so your internal developers feel confident maintaining and extending the platform.",
  },
  {
    id: "ongoing-support",
    category: "Support & Retainers",
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes. Every fixed-scope project includes 14 to 30 days of complimentary post-delivery warranty support to ensure smooth operation in production. For teams that want ongoing peace of mind, continuous security patching, and proactive scaling management, I offer monthly DevOps retainers with guaranteed SLA response times.",
  },
  {
    id: "tech-stack-flexibility",
    category: "Technical Stack",
    question: "Do you only work with AWS, or other cloud providers as well?",
    answer:
      "While 80% of my engagements focus on AWS (ECS, Lambda, RDS, S3, CloudFront, EKS), I also have extensive production experience with Google Cloud Platform (GCP), DigitalOcean, Hetzner, and hybrid setups. The core principles of Infrastructure as Code (Terraform), container orchestration (Docker/Kubernetes), and CI/CD pipelines apply universally.",
  },
  {
    id: "communication-cadence",
    category: "Collaboration",
    question: "How does communication and progress reporting work?",
    answer:
      "Transparent and high-signal communication is prioritized over endless meetings. You receive a private shared Slack channel for rapid daily asynchronous updates, Loom video walkthroughs for major architectural milestones, and a clear project dashboard tracking open deliverables, pull requests, and verified test results.",
  },
];
