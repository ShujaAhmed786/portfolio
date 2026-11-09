---
title: "Retail Analytics on EKS: Production Kubernetes Deployment"
description: "Production deployment of a retail subscription propensity app on Amazon EKS. Terraform VPC across 2 availability zones, Spot ARM nodes, GitHub Actions CI with OIDC to ECR, Argo CD GitOps, shared ALB with HTTPS, and kube-prometheus-stack monitoring."
stack:
  - Terraform
  - Amazon EKS
  - Kubernetes
  - Helm
  - Argo CD
  - GitHub Actions
  - Docker
  - Prometheus
  - Grafana
results: "Ran at $4.82/day measured in the AWS console. Self-healing drill: deleted pods replaced in about 50 seconds. Zero-downtime deploys with maxUnavailable 0, and no static AWS keys (OIDC only)."
image: ""
github_url: "https://github.com/ShujaAhmed786/retail-propensity-eks"
live_url: ""
---
