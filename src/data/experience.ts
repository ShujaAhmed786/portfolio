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
    period: "2024 - Present",
    role: "DevOps Engineer",
    company: "Independent Practice",
    location: "Remote (Global Clients)",
    highlight: "14-Stage CI/CD Pipelines, Kubernetes, GitOps & Observability",
    description:
      "Architecting high-reliability container orchestration environments, automated CI/CD pipelines, and cloud native infrastructure. Engineering 14-stage Jenkins pipelines with integrated static code quality gates and vulnerability scans, declarative infrastructure as code with Terraform, GitOps delivery with ArgoCD, and comprehensive observability stacks using Prometheus, Grafana, Alertmanager, and Loki.",
    achievements: [
      "Engineered 14-stage automated Jenkins and GitHub Actions pipelines integrating SonarQube quality gates, Docker builds, and Trivy security scans.",
      "Deployed and managed production Kubernetes clusters across Amazon EKS, lightweight K3s for lean budgets, and Kind for reproducible local development.",
      "Implemented GitOps deployment workflows using ArgoCD and zero-trust service mesh networking with Istio and mutual TLS (mTLS).",
      "Configured full-stack cluster observability and alert routing using Prometheus, Grafana dashboards, Alertmanager, and Loki log aggregation.",
      "Automated cloud infrastructure provisioning using modular, reusable Terraform modules with automated validation.",
    ],
    skills: [
      "Jenkins",
      "Docker",
      "Kubernetes (K3s, EKS, Kind)",
      "Istio",
      "Helm",
      "ArgoCD",
      "Terraform",
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Loki",
      "SonarQube",
      "Trivy",
      "GitHub Actions",
    ],
  },
  {
    period: "2024 - 2025",
    role: "Cloud Engineer",
    company: "Cloud Architecture & Consulting",
    location: "Remote",
    highlight: "AWS Cloud Architecture, Lean Infrastructure & Cost Optimization",
    description:
      "Designing resilient, cost-optimized cloud architectures on AWS and orchestrating smooth production deployments. Focused on lean infrastructure patterns, right-sizing compute instances, eliminating cloud waste, and structuring automated deployments across containerized services (ECS, EKS) and serverless architectures.",
    achievements: [
      "Architected production AWS environments with multi-tier VPC networking, subnets, NAT gateways, and least-privilege IAM policies.",
      "Executed cloud cost optimization reviews, identifying idle compute, unattached storage, and right-sizing databases to slash monthly cloud spend.",
      "Deployed containerized application workloads utilizing AWS ECS, ECR, and RDS PostgreSQL with automated Multi-AZ failover.",
      "Configured scalable serverless and event-driven architectures utilizing AWS Lambda, DynamoDB, S3, and Elastic Load Balancing.",
    ],
    skills: [
      "AWS (EC2, ECR, EKS, ELB, VPC, S3, IAM, Lambda, DynamoDB, RDS, ECS)",
      "Cost Optimization",
      "Docker",
      "Terraform",
      "CloudWatch",
      "Linux",
    ],
  },
  {
    period: "2022 - 2025",
    role: "Video Production",
    company: "Fiverr",
    location: "Remote (Global Clients)",
    highlight: "Video Editing, Animation & Motion Graphics",
    description:
      "Delivered professional video editing, animation, and dynamic motion graphics for international businesses, digital content creators, and brand campaigns on Fiverr. Managed the entire media production pipeline from footage assembly and narrative pacing to color grading, sound design, and custom kinetic typography.",
    achievements: [
      "Completed client video projects with a focus on visual storytelling, audience retention, and high-quality motion design.",
      "Designed custom 2D animations, title sequences, and kinetic typography utilizing Adobe After Effects and Premiere Pro.",
      "Maintained a top-tier client rating on Fiverr through rigorous delivery discipline, fast iteration turnarounds, and clear technical communication.",
    ],
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "Motion Graphics",
      "Video Editing",
      "Animation",
      "Sound Design",
      "Visual Storytelling",
      "Fiverr",
    ],
  },
  {
    period: "2022 - 2025",
    role: "WordPress / Shopify Developer",
    company: "Freelance Web Development",
    location: "Remote",
    highlight: "Custom E-Commerce Stores, CMS Development & Technical SEO",
    description:
      "Built, customized, and maintained high-converting Shopify e-commerce stores and bespoke WordPress websites for small businesses and brands. Focused on responsive design, custom theme development, payment processor integrations, speed optimization, and on-page technical SEO to maximize search visibility and organic conversions.",
    achievements: [
      "Developed custom WordPress sites and high-converting Shopify stores tailored to client brand requirements and e-commerce workflows.",
      "Optimized website performance and Core Web Vitals, achieving fast load times and clean mobile responsive layouts.",
      "Implemented technical SEO best practices, structured schema markup, and metadata optimization to drive qualified organic traffic.",
      "Configured secure payment gateways, inventory synchronization, and automated client email notifications.",
    ],
    skills: [
      "WordPress",
      "Shopify",
      "Technical SEO",
      "PHP",
      "Liquid",
      "WooCommerce",
      "HTML5 & CSS3",
      "JavaScript",
      "Speed Optimization",
    ],
  },
  {
    period: "2020 - 2022",
    role: "Script Writer",
    company: "Content & Narrative Consulting",
    location: "Remote",
    highlight: "Content Writing, Video Scripting & Narrative Pacing",
    description:
      "Authored narrative scripts, educational video frameworks, and analytical written content for digital media creators and commercial video productions. Applied rigorous narrative pacing, tight structure, and logical progression, cutting out superfluous fluff to keep audiences engaged. This structural discipline and obsession with eliminating waste directly paved the way for modern software architecture and DevOps automation.",
    achievements: [
      "Researched and scripted educational, documentary, and marketing videos with engaging hooks and clear structural progression.",
      "Mastered the art of structural economy: eliminating conversational filler and ensuring every scene served a concrete objective.",
      "Developed the systems-thinking foundation that inspired the transition into shell scripting, deterministic systems, and infrastructure automation.",
    ],
    skills: [
      "Script Writing",
      "Content Writing",
      "Narrative Structuring",
      "Research & Synthesis",
      "Story Pacing",
      "Creative Direction",
    ],
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
      { name: "AWS (EC2, ECR, EKS, ELB, VPC, S3, IAM, Lambda, RDS, ECS)", level: "Expert", highlight: true },
      { name: "Terraform & OpenTofu", level: "Expert", highlight: true },
      { name: "Cloud Cost Optimization (FinOps)", level: "Advanced", highlight: true },
      { name: "AWS ECS & Fargate", level: "Expert" },
      { name: "AWS Lambda / Serverless", level: "Expert" },
      { name: "Amazon RDS & Aurora", level: "Expert" },
      { name: "VPC Networking & Subnets", level: "Advanced" },
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
