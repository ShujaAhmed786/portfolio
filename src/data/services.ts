export type ServiceCategory = "core" | "micro";

export interface ServiceOffer {
  id: string;
  name: string;
  category: ServiceCategory;
  price: string;
  description: string;
  timeline: string;
  badge?: string;
  highlighted?: boolean;
}

export const coreServices: ServiceOffer[] = [
  {
    id: "kubernetes-cluster-setup",
    name: "Kubernetes Cluster Setup",
    category: "core",
    price: "from $1,800",
    description:
      "Production-ready K8s cluster (EKS, GKE, or K3s for lean budgets). Networking, storage, ingress, RBAC, namespaces.",
    timeline: "1-2 weeks",
    badge: "Cluster Architecture",
    highlighted: true,
  },
  {
    id: "jenkins-cicd-setup",
    name: "Jenkins CI/CD Setup",
    category: "core",
    price: "from $600",
    description:
      "Jenkins with multi-stage pipelines, SonarQube quality gates, Docker builds, Trivy scans, deployment automation.",
    timeline: "1 week",
    badge: "14-Stage Pipelines",
  },
  {
    id: "istio-service-mesh",
    name: "Istio Service Mesh Setup",
    category: "core",
    price: "from $900",
    description:
      "Istio install with mTLS, traffic management, canary deployments, observability.",
    timeline: "1 week",
    badge: "mTLS & Traffic",
  },
  {
    id: "helm-chart-development",
    name: "Helm Chart Development",
    category: "core",
    price: "$350",
    description:
      "Production Helm charts for your apps: templating, values management, releases.",
    timeline: "3-day delivery",
    badge: "App Packaging",
  },
  {
    id: "kubernetes-monitoring-stack",
    name: "Kubernetes Monitoring Stack",
    category: "core",
    price: "$400",
    description:
      "Prometheus, Grafana, Alertmanager, Loki for logs. Dashboards and alert rules included.",
    timeline: "1-week delivery",
    badge: "Full Observability",
  },
  {
    id: "gitops-argocd",
    name: "GitOps with ArgoCD",
    category: "core",
    price: "$500",
    description:
      "ArgoCD setup with app-of-apps pattern, automated sync, rollback.",
    timeline: "1-week delivery",
    badge: "GitOps Automation",
  },
  {
    id: "pipeline-audit",
    name: "CI/CD Pipeline Audit",
    category: "core",
    price: "from $800",
    description:
      "Full review of your pipeline, bottleneck analysis, security scan, prioritized fix list with estimates.",
    timeline: "3-5 days",
    badge: "Speed & Reliability",
  },
  {
    id: "cost-optimization-sprint",
    name: "Cloud Cost Optimization Sprint",
    category: "core",
    price: "from $1,200",
    description:
      "AWS bill audit, waste identification, right-sizing recommendations, implementation of quick wins.",
    timeline: "1-2 weeks",
    badge: "Waste Reduction",
  },
  {
    id: "lean-infrastructure-setup",
    name: "Lean Infrastructure Setup",
    category: "core",
    price: "from $2,500",
    description:
      "ECS or K8s from scratch, Terraform IaC, CI/CD pipeline, monitoring (Prometheus/Grafana), docs.",
    timeline: "2-4 weeks",
    badge: "Production Turnkey",
  },
  {
    id: "ongoing-devops-support",
    name: "Ongoing DevOps Support (Retainer)",
    category: "core",
    price: "from $1,000/month",
    description:
      "Monitoring, incident response, pipeline maintenance, monthly optimization.",
    timeline: "Monthly rolling",
    badge: "Continuous Retainer",
  },
];

export const microServices: ServiceOffer[] = [
  {
    id: "docker-setup",
    name: "Docker Setup",
    category: "micro",
    price: "$150",
    description:
      "Containerize your app with production-ready Dockerfile + compose.",
    timeline: "48hr delivery",
    badge: "Containerization",
  },
  {
    id: "github-actions-pipeline",
    name: "GitHub Actions Pipeline",
    category: "micro",
    price: "$250",
    description:
      "CI/CD from zero: build, test, deploy to your cloud.",
    timeline: "3-day delivery",
    badge: "Automated Deploy",
  },
  {
    id: "aws-bill-review",
    name: "AWS Bill Review",
    category: "micro",
    price: "$99",
    description:
      "I find your waste in 48 hours or it's free. Written report with savings estimate.",
    timeline: "48hr delivery",
    badge: "Risk-Free Guarantee",
    highlighted: true,
  },
  {
    id: "terraform-starter",
    name: "Terraform Starter",
    category: "micro",
    price: "$300",
    description:
      "Your infra as code: VPC, EC2/ECS, RDS, basics.",
    timeline: "1-week delivery",
    badge: "Infrastructure as Code",
  },
  {
    id: "monitoring-setup",
    name: "Monitoring Setup",
    category: "micro",
    price: "$200",
    description:
      "Prometheus + Grafana with alerts for your stack.",
    timeline: "3-day delivery",
    badge: "Observability",
  },
  {
    id: "security-scan",
    name: "Security Scan",
    category: "micro",
    price: "$120",
    description:
      "Trivy + Semgrep on your repo and containers. Report with fixes in 48hrs.",
    timeline: "48hr delivery",
    badge: "Repo & Containers",
  },
];

export const servicesData: ServiceOffer[] = [...coreServices, ...microServices];
