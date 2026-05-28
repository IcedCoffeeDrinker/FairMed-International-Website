---
description: Deploy to production via Vercel
---

# Deploy to Production

## Pre-Deploy Checks

```bash
# Ensure clean working directory
git status --short

# Ensure on main branch
git branch --show-current

# Ensure build passes
npm run build
```

## Deploy Process

Vercel auto-deploys on push to main:

```bash
git push origin main
```

## Post-Deploy Verification

1. Wait 1-2 minutes for Vercel build
2. Check https://fairmedinternational.com
3. Verify key pages load correctly
4. Test contact form (if applicable)

## Rollback (if needed)

Use Vercel dashboard to rollback to previous deployment, or:

```bash
git revert HEAD
git push origin main
```

## Output

Report:
- Deployment triggered
- URL to check
- Any issues found
