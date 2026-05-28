# CLAUDE.md

## Project Overview

**FairMed International** — Business website for a medical device trade company that imports refurbished medical equipment from Western countries and supplies to healthcare facilities in developing markets (primarily Nigeria).

**Domain:** fairmedinternational.com

## Business Context

### What We Do
- Source professionally refurbished medical devices from certified European/US refurbishers
- Supply directly to hospitals and clinics in Nigeria at competitive prices
- Cut out middlemen (brokers, local distributors) to offer 20-40% lower prices
- Provide comprehensive support: NAFDAC registration assistance, warranties, training

### Target Customers
| Priority | Customer Type | Decision Speed |
|----------|---------------|----------------|
| 1 | Private maternity hospitals & clinics (Lagos, Abuja) | 2-4 weeks |
| 2 | Church hospital networks (CMA, Catholic Health Network) | 1-2 months |
| 3 | NGOs focused on maternal/child health | 1-3 months |
| 4 | State health ministry procurement | 3-6 months |

### Initial Product Focus
1. **Neonatal Equipment** — LED phototherapy units, radiant warmers, resuscitation kits
2. **Diagnostic Equipment** — Patient monitors, ECG machines, ultrasound
3. **Price Range** — $200–$5,000 per unit (sell at 2-3x)

### Key Differentiators (for website messaging)
- LED + battery backup (addresses Nigeria's power instability)
- 1-year warranty + 3-year lamp replacement
- WhatsApp support (24h response)
- NAFDAC registration assistance included
- Training materials in English + local languages

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Deployment | Vercel |
| Forms | Formspree or similar |
| Analytics | Vercel Analytics / Plausible |

## Project Structure

```
/
├── app/
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About us
│   ├── products/page.tsx     # Product catalog
│   ├── contact/page.tsx      # Contact form
│   └── layout.tsx            # Root layout
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/
│   └── products.ts           # Product data
├── public/
│   ├── images/
│   └── favicon.ico
├── tailwind.config.ts
└── package.json
```

**Keep this structure updated** when adding new pages or significant components.

## Coding Conventions

### TypeScript/React

**Naming:**
- Files: `kebab-case.tsx` for pages, `PascalCase.tsx` for components
- Components: `PascalCase`
- Functions/variables: `camelCase`

**Component structure:**
```tsx
interface ProductCardProps {
  product: Product;
  onInquire: (id: string) => void;
}

export function ProductCard({ product, onInquire }: ProductCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <button onClick={() => onInquire(product.id)}>
        Request Quote
      </button>
    </div>
  );
}
```

### Tailwind CSS

- Use semantic class groupings: layout → spacing → typography → colors → effects
- Extract repeated patterns into components, not utility classes
- Mobile-first: base styles for mobile, `md:` and `lg:` for larger screens

## Writing Style (Website Copy)

All website copy must be **professional, trustworthy, and clear**.

**Rules:**
1. **No hype** — Avoid "best", "revolutionary", "cutting-edge"
2. **Specific over vague** — "$1,500" beats "affordable", "1-year warranty" beats "long warranty"
3. **Benefits over features** — "Works during power outages" not "Built-in battery"
4. **Short sentences** — Max 20 words per sentence
5. **Professional tone** — We're selling to hospitals, not consumers

**Bad:**
> We are the best medical device company offering revolutionary products at unbeatable prices!

**Good:**
> Quality refurbished medical equipment. Certified. Warrantied. Delivered to your facility.

## Commands

```bash
# Development
npm install
npm run dev          # Start dev server at localhost:3000

# Build & Deploy
npm run build        # Production build
npm run start        # Start production server

# Lint & Format
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix lint issues
```

## Deployment

- **Platform:** Vercel (connected to GitHub/GitLab repo)
- **Domain:** fairmedinternational.com (configure in Vercel dashboard)
- **Deploy:** Push to `main` triggers automatic deployment
- **Preview:** PRs get automatic preview deployments

## Content Guidelines

### Product Listings

Each product should include:
- Clear product name
- High-quality image (white background preferred)
- Key specifications table
- Price range (or "Request Quote")
- Certifications (CE, ISO)
- Warranty terms

### Trust Signals (display prominently)
- "CE Certified Equipment"
- "ISO 13485 Compliant Suppliers"
- "1-Year Warranty Included"
- "NAFDAC Registration Support"
