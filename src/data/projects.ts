export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  highlight: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  stack: string[];
  results: string[];
  metrics: {
    value: string;
    label: string;
  }[];
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "learnstack",
    title: "LearnStack",
    subtitle: "White-Label Cloud Learning Management System",
    tag: "Multi-Tenant Cloud",
    highlight: "AWS ECS with RDS Multi-AZ Architecture",
    githubUrl: "https://github.com/ShujaAhmed786/LearnStack",
    problem:
      "Organizations required a dedicated white-label learning platform featuring course authoring, timed quizzes, student certification, interactive sessions, and tenant administration. The challenge was building an architecture supporting isolated multi-tenant routing and high database availability without crippling operational overhead.",
    solution:
      "Architected and deployed a multi-tenant cloud platform using React, TypeScript, Fastify, and PostgreSQL with Prisma. Packaged services into optimized Docker containers running on AWS ECS Fargate across multiple availability zones. Provisioned Amazon RDS PostgreSQL Multi-AZ replication, Route 53 routing, and modular Terraform infrastructure-as-code with automated GitHub Actions CI/CD workflows.",
    stack: [
      "React",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "GitHub Actions",
      "AWS ECS",
      "Terraform",
    ],
    results: [
      "Built and deployed a resilient multi-tenant platform with sub-second response times across all tenant domains",
      "Zero-downtime rolling container updates achieved via automated ECS task health drain cycles",
      "High-availability database tier with automated multi-AZ failover and continuous automated snapshots",
      "100% reproducible Infrastructure as Code managed through version-controlled Terraform modules",
    ],
    metrics: [
      { value: "99.98%", label: "Uptime SLA" },
      { value: "<4 min", label: "Deploy Time" },
      { value: "45+", label: "Tenants Supported" },
    ],
  },
  {
    id: "ratestack",
    title: "RateStack",
    subtitle: "High-Throughput Freelance Contract Engine",
    tag: "Ultra-Lean Serverless",
    highlight: "Running at $0.64/day infrastructure cost",
    githubUrl: "https://github.com/ShujaAhmed786",
    problem:
      "An automated freelance contract indexing and market rate valuation platform needed to parse, evaluate, and index fluctuating developer market rates in near real-time. With seed funding constraints, the engineering team had a strict requirement: keep production infrastructure costs strictly under $1.00/day while remaining resilient to viral spikes.",
    solution:
      "Architected a radical serverless micro-architecture utilizing AWS Lambda (ARM64 Graviton2) triggered by API Gateway, backed by Amazon DynamoDB with on-demand capacity and S3 static web delivery through CloudFront edge nodes. Established fine-grained CloudWatch billing alarms, payload compression, and edge caching to eliminate idle compute overhead entirely.",
    stack: [
      "AWS Lambda (Graviton2)",
      "Amazon DynamoDB",
      "CloudFront CDN",
      "Amazon S3",
      "AWS API Gateway",
      "Serverless Framework",
      "CloudWatch Budgets",
    ],
    results: [
      "Delivered a rock-solid production environment at exactly $0.64/day average cloud expenditure",
      "Sub-180ms global API response time achieved through edge caching and Graviton execution",
      "Over 85,000 contract calculations processed with zero server maintenance overhead",
      "Autonomous scaling from 0 to 10,000 concurrent requests without manual intervention",
    ],
    metrics: [
      { value: "$0.64", label: "Daily Cloud Cost" },
      { value: "<180ms", label: "Edge Latency" },
      { value: "85K+", label: "Contracts Evaluated" },
    ],
  },
  {
    id: "fitlyfe",
    title: "FitLyfe",
    subtitle: "Real-Time Mobile Calorie & Health Tracker",
    tag: "Mobile Cloud & Microservices",
    highlight: "Flutter + AWS Asynchronous Architecture",
    githubUrl: "https://github.com/ShujaAhmed786",
    problem:
      "A fast-growing mobile nutrition and biometric tracking application built with Flutter was experiencing severe database connection spikes and synchronization bottlenecks during breakfast and dinner peak hours. Meal photo uploads clogged API threads, causing timeout errors and frustrated app store reviews.",
    solution:
      "De-coupled the heavy image analysis and calorie intake pipeline using an asynchronous event-driven architecture on AWS. Client uploads stream directly to signed S3 buckets, firing SQS message queues consumed by ECS worker tasks. Integrated AWS RDS Proxy to manage pooled PostgreSQL connections seamlessly alongside a high-speed Redis caching tier for instant nutritional item lookups.",
    stack: [
      "Flutter",
      "AWS ECS",
      "Amazon RDS Proxy",
      "AWS SQS / SNS",
      "Amazon S3 + CloudFront",
      "Redis Caching",
      "Docker",
      "GitHub Actions CI/CD",
    ],
    results: [
      "78% reduction in image upload ingestion latency and meal logging latency",
      "Zero connection dropouts or RDS exhaustion under 12,000+ concurrent active mobile users",
      "Automated multi-platform CI/CD pipeline building, testing, and distributing Flutter builds",
      "99.95% API service availability sustained across international mealtime peak surges",
    ],
    metrics: [
      { value: "78%", label: "Faster Sync" },
      { value: "12,000+", label: "Peak Concurrent Users" },
      { value: "99.95%", label: "API Availability" },
    ],
  },
];
