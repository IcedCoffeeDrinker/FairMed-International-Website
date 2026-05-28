---
description: Load project context and understand current state
---

# Prime: Load Project Context

## Objective

Build understanding of the FairMed International website — a business site for a medical device trade company.

## Process

### 1. Analyze Project Structure

Use Glob to show the project's directory structure:
- Pages in `app/`
- Components in `components/`
- Static assets in `public/`
- Config files (package.json, tailwind.config.ts, next.config.js)

### 2. Read Core Documentation

**MUST READ:**
- `CLAUDE.md` — Project overview, business context, conventions
- `README.md` — Setup instructions (if exists)
- `package.json` — Dependencies and scripts

### 3. Check Current State

```bash
# See what pages exist
ls -la app/

# Check if dependencies are installed
ls node_modules 2>/dev/null && echo "Dependencies installed" || echo "Run npm install"

# Check git status
git status --short
```

### 4. Understand Business Context

Key points to keep in mind:
- **Company:** FairMed International
- **Domain:** fairmedinternational.com
- **Business:** Refurbished medical devices for Nigerian healthcare market
- **Target:** Private hospitals, clinics, NGOs
- **Initial products:** Neonatal equipment (phototherapy, warmers)
- **Tone:** Professional, trustworthy, specific

## Output Report

### 1. Project Status
- **Initialized:** Yes/No (package.json exists?)
- **Dependencies:** Installed/Missing
- **Pages implemented:** List existing pages

### 2. Current Features
- [ ] Homepage
- [ ] About page
- [ ] Products catalog
- [ ] Contact form
- [ ] Responsive design
- [ ] SEO metadata

### 3. Immediate Next Steps
Based on current state, suggest 3-5 concrete next actions.

**Keep it brief — this is a simple website project.**
