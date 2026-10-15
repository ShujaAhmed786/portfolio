export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  highlight: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experienceTimeline: TimelineItem[] = [
  {
    period: "2024 — Present",
    role: "DevOps Engineer",
    company: "Independent Freelance Practice",
    location: "Remote (Global Clients)",
    highlight: "Kubernetes, Jenkins 14-Stage Pipelines, and Cloud Automation",
    description:
      "Partnering directly with founders, CTOs, and engineering teams to design reliable Kubernetes architectures, build comprehensive Jenkins and GitHub Actions pipelines, and establish zero-trust service meshes.",
    achievements: [
      "Architected and deployed Kubernetes environments including lightweight K3s clusters for lean budgets, Amazon EKS for scale, and Kind for local development.",
      "Engineered automated Jenkins multi-stage pipelines (14 stages) integrating SonarQube quality gates, OWASP dependency validation, Docker builds, and Trivy security scans.",
      "Implemented Istio service mesh with zero-trust mutual TLS (mTLS), canary traffic management, and distributed request observability.",
      "Authored custom production Helm charts for microservice application packaging, configuration templating, and automated releases.",
      "Audited cloud environments to identify and eliminate idle compute, unattached storage volumes, and over-provisioned databases.",
    ],
    skills: ["Kubernetes (EKS/K3s/Kind)", "Jenkins (14 Stages)", "Istio Service Mesh", "Helm", "Prometheus", "Terraform", "Docker"],
  },
  {
    period: "2022 — 2024",
    role: "DevOps Engineer",
    company: "Freelance Client Engagements",
    location: "Remote",
    highlight: "Containerization, Helm Stacks, and Observability",
    description:
      "Contracted with digital product agencies and scaling startups to modernize legacy application servers into automated container runtimes and resilient observability stacks.",
    achievements: [
      "Deployed and configured Prometheus and Grafana monitoring stacks via Helm, configuring Alertmanager for granular alert routing.",
      "Migrated monolithic server applications to automated container workloads with reproducible Docker multi-stage builds.",
      "Spearheaded mobile backend infrastructure for FitLyfe (Flutter + AWS), cutting ingestion latency by 78% with asynchronous SQS queues and RDS connection pooling.",
      "Implemented GitOps workflows with ArgoCD for automated declarative cluster synchronization and instant rollbacks.",
    ],
    skills: ["Kubernetes", "Prometheus & Grafana", "Alertmanager", "Helm", "ArgoCD", "Docker", "AWS ECS"],
  },
  {
    period: "2021 — 2022",
    role: "DevOps Engineer",
    company: "Freelance & Technical Contracting",
    location: "Remote",
    highlight: "Pipeline Automation, Security Scanning, and Infrastructure as Code",
    description:
      "Assisted engineering teams in eliminating error-prone manual deployment rituals by building automated CI/CD pipelines with comprehensive security scanning.",
    achievements: [
      "Built standardized CI/CD pipelines incorporating SonarQube static code analysis and Trivy vulnerability scanners.",
      "Engineered automated staging environments with ephemeral preview deployments for rapid feature validation.",
      "Automated infrastructure provisioning using Terraform modules for VPC networking, compute clusters, and database tiers.",
      "Configured automated SSL/TLS certificate renewals and DNS management via Route 53 and Let's Encrypt.",
    ],
    skills: ["Jenkins", "GitHub Actions", "Terraform", "Trivy", "SonarQube", "Docker Compose", "Linux"],
  },
  {
    period: "2020 — 2021",
    role: "DevOps Engineer",
    company: "Freelance Technical Specialist",
    location: "Remote",
    highlight: "Systems Automation, Shell Scripting, and Linux Administration",
    description:
      "Transitioned a deep background in structured analytical writing and scripting into automated server administration, shell scripting, and infrastructure automation for early clients.",
    achievements: [
      "Authored custom Python and Bash automation toolsets for database backup synchronization, log rotation, and server health checks.",
      "Managed and maintained Linux server fleets (Ubuntu/Debian), hardening firewall rules (UFW/iptables) and SSH security policies.",
      "Assisted small businesses with website migrations, DNS routing, and automated SSL configurations.",
      "Built the foundational automation mindset: treating every manual task as a bug to be scripted away.",
    ],
    skills: ["Python Automation", "Bash Scripting", "Linux Administration", "Networking & DNS", "SSH Hardening", "Git"],
  },
];

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Expert" | "Proficient";
    highlight?: boolean;
  }[];
}

export const skillsMatrix: SkillCategory[] = [
  {
    title: "Kubernetes & Cloud Native",
    iconName: "Boxes",
    description: "Production container orchestration across bare-metal, lightweight, and cloud clusters.",
    skills: [
      { name: "Kubernetes (K3s, EKS, Kind)", level: "Expert", highlight: true },
      { name: "Helm Chart Development", level: "Expert", highlight: true },
      { name: "Istio Service Mesh (mTLS & Traffic)", level: "Advanced", highlight: true },
      { name: "ArgoCD (GitOps & Sync)", level: "Advanced", highlight: true },
      { name: "Docker & Container Optimization", level: "Expert", highlight: true },
      { name: "Docker Compose", level: "Expert" },
      { name: "RBAC, Ingress & Namespaces", level: "Expert" },
    ],
  },
  {
    title: "CI/CD & Delivery Engineering",
    iconName: "GitMerge",
    description: "End-to-end automated pipelines with rigorous quality and security gates.",
    skills: [
      { name: "Jenkins (14-Stage Pipelines)", level: "Expert", highlight: true },
      { name: "SonarQube & Quality Gates", level: "Expert", highlight: true },
      { name: "Trivy & OWASP Security Scanning", level: "Expert", highlight: true },
      { name: "GitHub Actions", level: "Expert", highlight: true },
      { name: "GitLab CI", level: "Advanced" },
      { name: "Canary & Blue/Green Deployments", level: "Advanced" },
    ],
  },
  {
    title: "Observability & Telemetry",
    iconName: "Activity",
    description: "Comprehensive cluster metrics, logging, and alert routing.",
    skills: [
      { name: "Prometheus (Helm Deployed)", level: "Expert", highlight: true },
      { name: "Grafana Dashboards", level: "Expert", highlight: true },
      { name: "Alertmanager & Notification Routing", level: "Expert", highlight: true },
      { name: "Loki Log Aggregation", level: "Advanced" },
      { name: "AWS CloudWatch & Alarms", level: "Expert" },
      { name: "Health Checks & SLA Probing", level: "Expert" },
    ],
  },
  {
    title: "Cloud Platforms & Infrastructure as Code",
    iconName: "Cloud",
    description: "Declarative, version-controlled cloud infrastructure.",
    skills: [
      { name: "Terraform & OpenTofu", level: "Expert", highlight: true },
      { name: "AWS ECS & Fargate", level: "Expert" },
      { name: "AWS Lambda / Serverless", level: "Expert" },
      { name: "Amazon RDS & Aurora", level: "Expert" },
      { name: "VPC Networking & Subnets", level: "Advanced" },
      { name: "Cloud Cost Optimization (FinOps)", level: "Advanced", highlight: true },
    ],
  },
  {
    title: "Scripting, Databases & Storage",
    iconName: "Terminal",
    description: "Automation scripting and data tier reliability.",
    skills: [
      { name: "Bash / Shell Scripting", level: "Expert", highlight: true },
      { name: "Python Automation", level: "Advanced", highlight: true },
      { name: "PostgreSQL & MySQL", level: "Advanced" },
      { name: "Redis Caching", level: "Advanced" },
      { name: "Node.js / TypeScript", level: "Advanced" },
      { name: "Amazon DynamoDB", level: "Advanced" },
    ],
  },
  {
    title: "Security, Networking & Secrets",
    iconName: "ShieldCheck",
    description: "Zero-trust mindset with least-privilege access and encryption.",
    skills: [
      { name: "Mutual TLS (mTLS) Encryption", level: "Expert", highlight: true },
      { name: "AWS IAM & Least Privilege", level: "Expert", highlight: true },
      { name: "AWS Secrets Manager / SSM", level: "Expert" },
      { name: "SSL / TLS Certificate Automation", level: "Expert" },
      { name: "VPN & Bastion Host Setup", level: "Advanced" },
      { name: "WAF & DDoS Mitigation", level: "Proficient" },
    ],
  },
];
