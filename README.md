# Shuja Ahmed — DevOps Engineer Portfolio

A modern, high-performance personal portfolio website engineered with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Built with a premium DevOps-consultant aesthetic in Deep Navy (`#0A1628`), vibrant Teal accents (`#14B8A6`), and crisp white typography. Vercel-ready with zero custom server configuration.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14.2 (App Router, Server Components & Client Islands)
- **Language:** TypeScript 5.7 (Strict Mode)
- **Styling:** Tailwind CSS 3.4 with custom DevOps color palette and animations
- **Animation Engine:** Framer Motion 11 (3D tilt cards, scroll-triggered reveals, count-up numbers, expanding accordions, smooth cursor glow)
- **Iconography:** Lucide React
- **Deployment Target:** Vercel (zero custom server config, pure edge/static optimization)

---

## 🎨 Brand Design System

| Token | Hex / Value | Description |
|---|---|---|
| Page Background | `#0A1628` | Deep Tech Navy (`navy-900`) |
| Surface / Cards | `#0E1E36` / `#132744` | High-contrast card surfaces (`navy-850` / `navy-800`) |
| Primary Accent | `#14B8A6` | Electric Teal (`teal-accent`) |
| Accent Glow | `#2DD4BF` | Luminous Cyan (`teal-glow`) |
| Borders | `#1E3A5F` | Clean infrastructure border line |
| Typography | Inter & JetBrains Mono | Sans-serif body with monospaced code elements |

---

## 📁 Pages & Architecture

1. **Home (`/`)**:
   - Hero with staggered text reveal animation, floating gradient orbs, and animated grid background.
   - Three pillars section: **Deploy / Automate / Monitor**.
   - Featured projects: LearnStack, RateStack, FitLyfe.
   - Live metrics with count-up animation (99.98% Uptime, 14-Stage Pipeline Gates, <4 min Deploys, 45+ Tenants).
   - "Book a free consultation" CTA linking to `/contact`.

2. **Services (`/services`)**:
   - 16 tailored technical services organized across two categories:
     - **Core Services:**
       1. **Kubernetes Cluster Setup** (from $1,800, 1–2 weeks)
       2. **Jenkins CI/CD Setup** (from $600, 1 week)
       3. **Istio Service Mesh Setup** (from $900, 1 week)
       4. **Helm Chart Development** ($350, 3-day delivery)
       5. **Kubernetes Monitoring Stack** ($400, 1-week delivery)
       6. **GitOps with ArgoCD** ($500, 1-week delivery)
       7. **CI/CD Pipeline Audit** (from $800, 3–5 days)
       8. **Cloud Cost Optimization Sprint** (from $1,200, 1–2 weeks)
       9. **Lean Infrastructure Setup** (from $2,500, 2–4 weeks)
       10. **Ongoing DevOps Support (Retainer)** (from $1,000/month, monthly rolling)
     - **Micro-Services (Quick Wins):**
       11. **Docker Setup** ($150, 48hr delivery)
       12. **GitHub Actions Pipeline** ($250, 3-day delivery)
       13. **AWS Bill Review** ($99, 48hr delivery)
       14. **Terraform Starter** ($300, 1-week delivery)
       15. **Monitoring Setup** ($200, 3-day delivery)
       16. **Security Scan** ($120, 48hr delivery)
   - Prominently displayed pricing, delivery badges, and a "Book free consultation" CTA on every card plus free consultation banners after each group.

3. **Portfolio (`/portfolio`)**:
   - Production case studies with **Problem / Solution / Stack / Results**:
     - **LearnStack**: White-label learning platform on AWS ECS with RDS Multi-AZ failover and GitHub Actions CI/CD.
     - **RateStack**: Freelance contract engine running at an ultra-lean **$0.64/day** AWS bill.
     - **FitLyfe**: Mobile calorie tracker, Flutter + AWS asynchronous SQS queues and ECS workers (78% faster sync).
   - 3D interactive tilt cards with mouse perspective and light reflection glare.

4. **Experience (`/experience`)**:
   - Timeline of freelance DevOps work from 2020 to present:
     - 2024–Present: DevOps Engineer (Kubernetes, Jenkins 14-Stage Pipelines, Istio Service Mesh, Helm)
     - 2022–2024: DevOps Engineer (Containerization, Prometheus & Grafana via Helm, ArgoCD GitOps)
     - 2021–2022: DevOps Engineer (Automated CI/CD Pipelines, SonarQube & Trivy Gates, Terraform)
     - 2020–2021: DevOps Engineer (Systems Automation, Shell Scripting, Linux Hardening)
   - Comprehensive Skills Matrix covering Cloud (AWS/GCP), IaC (Terraform/Docker/K8s), CI/CD (Jenkins/GitHub Actions), Service Mesh (Istio), Observability, Scripting, and Security.

5. **Blog (`/blog` and `/blog/[slug]`)**:
   - Technical engineering field notes written in Shuja's friendly, honest, no-fluff DevOps voice (800-1200 words each, zero em dashes):
     1. *"How I Run Production on $0.64/Day"* (K3s on single EC2, ZRAM memory safeguards, S3 backups)
     2. *"ECS vs Kubernetes: Pick the Boring Option"* (Operational tax of EKS, Fargate Spot 70% discount)
     3. *"Your Cloud Bill Is Lying to You"* (NAT gateways, orphaned EBS volumes, CloudWatch log retention)
     4. *"CI/CD Is Not Optional Anymore"* (2026 pipeline gates, OIDC AWS authentication, Docker caching)
     5. *"Terraform: Stop Clicking Around in the Console"* (Remote S3 backends, state lifecycle separation, secrets)
     6. *"Developers Should Pack Up Their Bags"* (Autonomous AI coding agents, building platforms in 5 hours)
   - Interactive syntax-highlighted code blocks with copy-to-clipboard functionality and a free consultation CTA after every post.

6. **About (`/about`)**:
   - The personal story: Transitioning from writing scripts and screenplays to writing shell scripts, automation workflows, and production cloud systems.
   - Guiding philosophies: Infrastructure as Code clarity, zero click-ops, and lean cloud efficiency.

6. **FAQ (`/faq`)**:
   - Expandable accordion answers with search bar and category filters.
   - Covers onboarding, IAM security access, project turnaround, FinOps savings guarantees, and team collaboration.

7. **Contact / Booking (`/contact`)**:
   - Calendly 30-minute discovery consultation embed.
   - One-click copy email button for `shujaahmed198@gmail.com`.
   - Verified LinkedIn profile link.
   - Consultation agenda preview and interactive direct message inquiry form.

8. **Content Management & Admin (`/admin`)**:
   - Decap CMS (Netlify CMS) Git-based content management portal.
   - Custom Navy (`#0A1628`) and Teal (`#14B8A6`) themed administration dashboard.
   - Manages Blog Posts, Services, Portfolio Case Studies, and Experience history.
   - Direct GitHub commits triggering automated Vercel CI/CD production rebuilds.
   - Full setup and configuration guide documented in [ADMIN_GUIDE.md](file:///c:/Users/shuja/portfolio/ADMIN_GUIDE.md).

---

## 🏃 Local Development

To run the site locally:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## 🏗️ Production Build & Verification

```bash
# Typecheck and production build
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```

---

## 🌐 Deploying to Vercel

The project is structured according to official Vercel Next.js standards without custom server configurations:
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into your [Vercel Dashboard](https://vercel.com).
3. Vercel automatically detects Next.js 14 and configures the build command (`next build`) and output directory (`.next`).
4. Click **Deploy**.
