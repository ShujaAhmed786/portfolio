# Decap CMS Admin & Content Management Guide

Welcome to the content administration guide for the **Shuja Ahmed — DevOps Engineer Portfolio**.

This site uses **Decap CMS** (formerly Netlify CMS) for Git-based content management. Content is stored directly in your GitHub repository as markdown and JSON files, giving you full version control, automated Git backups, and automated continuous deployment via Vercel.

---

## 📑 Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Setting Up GitHub OAuth Authentication](#2-setting-up-github-oauth-authentication)
3. [Logging into the CMS](#3-logging-into-the-cms)
4. [Managing Content Collections](#4-managing-content-collections)
   - [Blog Posts](#blog-posts)
   - [Services](#services)
   - [Portfolio Case Studies](#portfolio-case-studies)
   - [Experience History](#experience-history)
5. [Media & Image Uploads](#5-media--image-uploads)
6. [How Vercel Auto-Redeploys on Every Save](#6-how-vercel-auto-redeploys-on-every-save)
7. [Testing Locally with Decap Local Backend](#7-testing-locally-with-decap-local-backend)

---

## 1. Architecture Overview

```
                      ┌──────────────────────┐
                      │  Admin at /admin     │
                      │  (Decap CMS UI)      │
                      └──────────┬───────────┘
                                 │
                    GitHub OAuth │ Authenticates
                                 ▼
                      ┌──────────────────────┐
                      │  GitHub Repository   │
                      │  (ShujaAhmed786/...) │
                      └──────────┬───────────┘
                                 │ Git Push Webhook
                                 ▼
                      ┌──────────────────────┐
                      │  Vercel CI/CD Build  │
                      │  (Auto-Deploy Site)  │
                      └──────────────────────┘
```

- **No Database Required:** Every article, service, and case study is committed as a structured markdown file with frontmatter or a JSON file directly into your repository.
- **Vercel-Ready:** Because the site is hosted on Vercel (not Netlify), the CMS uses the native `github` backend rather than Netlify Identity / Git Gateway.
- **Zero Lock-in:** All content is plain text markdown/JSON in the `content/` folder.

---

## 2. Setting Up GitHub OAuth Authentication

Decap CMS requires a GitHub OAuth App to authenticate you and push content commits to your repository on your behalf.

### Step 1: Register a GitHub OAuth Application

1. Go to your GitHub account: **[GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers)**.
2. Click **New OAuth App** (or "Register a new application").
3. Fill in the fields:
   - **Application name:** `Shuja Ahmed Portfolio CMS`
   - **Homepage URL:** `https://shujaahmed.dev` (or your Vercel deployment URL)
   - **Application description:** `Decap CMS administration portal`
   - **Authorization callback URL:** `https://<your-oauth-proxy>.vercel.app/callback` (see Step 2 below)
4. Click **Register application**.
5. Save your **Client ID** and generate a **Client Secret**.

### Step 2: Set Up a Free OAuth Proxy for Vercel

GitHub's OAuth web flow requires a server-side exchange of the temporary authorization code for an access token (which cannot be done purely in the browser for security reasons).

You can deploy a free 1-click serverless OAuth proxy to Vercel:
- **Option A (Recommended):** Deploy [`decap-cms-oauth`](https://github.com/vencax/decap-cms-oauth) or [`netlify-cms-oauth-provider-node`](https://github.com/vencax/netlify-cms-github-oauth-provider) to Vercel. Set two environment variables:
  - `GITHUB_CLIENT_ID`: Your OAuth App Client ID
  - `GITHUB_CLIENT_SECRET`: Your OAuth App Client Secret
- **Option B (Spathodea / Gatekeeper):** Any standard OAuth proxy compatible with Decap/Netlify CMS.

### Step 3: Update `public/admin/config.yml`

In `public/admin/config.yml`, configure your repository and OAuth proxy:

```yaml
backend:
  name: github
  repo: ShujaAhmed786/portfolio    # Your GitHub username/repo
  branch: main
  base_url: https://your-oauth-proxy.vercel.app  # Your deployed OAuth proxy
  auth_endpoint: api/auth
```

---

## 3. Logging into the CMS

1. In your browser, navigate to:
   ```
   https://shujaahmed.dev/admin
   ```
   *(or `http://localhost:3000/admin` during development)*
2. Click the **"Login with GitHub"** button.
3. A popup will prompt you to authorize the application on GitHub.
4. Once authorized, the popup will close and you will be redirected to the Decap CMS Dashboard styled in your custom Tech Navy (`#0A1628`) and Teal (`#14B8A6`) brand colors.

---

## 4. Managing Content Collections

The dashboard displays four organized content collections in the left sidebar:

### Blog Posts (`content/blog`)
- **To create a post:** Click **Blog Posts** → **New Blog Post**.
- **Fields:**
  - `Title`: Headline of the post.
  - `Slug`: URL identifier (e.g., `modern-devops-in-2026`).
  - `Publish Date`: Date selector.
  - `Excerpt`: 1-2 sentence preview for the `/blog` index card.
  - `Tags`: Add tags such as `AWS`, `Kubernetes`, `CI/CD`, `Terraform`.
  - `Cover Image`: Upload an image (stored automatically in `/images/uploads`).
  - `Body`: Full markdown text editor with rich preview, headers, code blocks, and formatting.
- Click **Publish** to commit the post to your repository.

### Services (`content/services`)
- **To create or edit a service:** Click **Services** → select an existing service or click **New Service**.
- **Fields:**
  - `Service Name`: e.g. `Kubernetes Cluster Setup` or `Docker Setup`.
  - `Price`: Prominently displayed rate (e.g., `from $1,800` or `$350`).
  - `Description`: Concrete deliverables and scope.
  - `Timeline / Delivery`: e.g. `1-2 weeks` or `48hr delivery`.
  - `Category`: Choose between **Core Service** or **Micro-Service (Quick Win)**.
- Click **Publish** to commit.

### Portfolio Case Studies (`content/portfolio`)
- **To add a case study:** Click **Portfolio Case Studies** → **New Case Study**.
- **Fields:**
  - `Project Title`: Name of client or platform.
  - `Description`: The engineering problem and solution.
  - `Tech Stack`: List of technologies used (e.g. AWS, K3s, Docker, Terraform).
  - `Results & Business Impact`: Verifiable outcomes (e.g., 99.98% uptime, 78% latency reduction).
  - `Project Cover Image`: Showcase screenshot.
  - `GitHub URL`: Source code link (optional).
  - `Live Demo URL`: Live site link (optional).

### Experience History (`content/experience.json`)
- **To update experience:** Click **Experience** → **Experience History**.
- Update your active role, company, active years, and primary achievements.
- Click **Save** to update the JSON file.

---

## 5. Media & Image Uploads

- All images uploaded through the CMS editor are placed directly into:
  ```
  public/images/uploads/
  ```
- The CMS automatically generates public web paths such as `/images/uploads/my-image.webp`.
- Next.js serves these images statically with built-in edge caching on Vercel.

---

## 6. How Vercel Auto-Redeploys on Every Save

1. When you click **Publish** or **Save** inside Decap CMS, Decap CMS makes an authenticated GitHub API commit to your `main` branch.
2. The commit message indicates the CMS action (e.g., `Create Blog Posts "Modern DevOps in 2026"`).
3. GitHub sends a webhook event to **Vercel**.
4. Vercel automatically runs:
   ```bash
   npm run build
   ```
5. Next.js statically renders the pages, optimizes any newly added images, and deploys the new build to Vercel's global CDN in **~1 to 2 minutes**.
6. Your live site is updated with **zero downtime**. You can inspect build progress and deployment status at any time in your [Vercel Dashboard](https://vercel.com).

---

## 7. Testing Locally with Decap Local Backend

To test the CMS locally without setting up GitHub OAuth:

1. Install the Decap local proxy if not already installed:
   ```bash
   npx decap-server
   ```
2. In `public/admin/config.yml`, temporarily enable local backend:
   ```yaml
   local_backend: true
   ```
3. Start your Next.js development server:
   ```bash
   npm run dev
   ```
4. Navigate to `http://localhost:3000/admin`. The local proxy allows you to create and edit content locally without GitHub authentication.
5. Remember to set `local_backend: false` (or comment it out) before deploying to production.
