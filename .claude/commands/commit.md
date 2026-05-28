---
description: Validate and commit changes
---

# Commit Changes

## Pre-Commit Checks

### Step 1: Validate

```bash
# Lint check
npm run lint

# Build check (catches TypeScript errors)
npm run build
```

**If any fail:** Fix before committing.

### Step 2: Review Changes

```bash
git status --short
git diff --stat
```

### Step 3: Stage and Commit

```bash
# Stage specific files (preferred)
git add <files>

# Or stage all
git add .

# Commit with descriptive message
git commit -m "<type>: <description>

Co-Authored-By: Claude <noreply@anthropic.com>"
```

## Commit Message Format

```
<type>: <short description>

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:**
- `feat` — New page or feature
- `fix` — Bug fix
- `style` — Styling changes
- `content` — Content updates
- `chore` — Config, dependencies

**Examples:**
- `feat: add products catalog page`
- `style: improve mobile navigation`
- `content: update hero section copy`
- `fix: contact form validation`

## Output

Report:
- Commit hash
- Files committed
- Reminder to push when ready
