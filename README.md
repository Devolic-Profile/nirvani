<div align="center">

# Nirvani

### Find Your Inner Stillness

A sanctuary for yoga, sound bowl therapy, and mindful energy alignment.

[Instagram](https://instagram.com/nirvaniyogaandsound) · [TikTok](https://tiktok.com/@nirvanisoundandvibration)

</div>

---

## About

Nirvani is a wellness and mindfulness brand offering holistic healing through yoga, sound resonance therapy, and vibrational energy alignment. This repository contains the source code for the Nirvani website — a modern, animated landing page built with Next.js and React.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (strict mode) |
| **UI** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Fonts** | Belle (serif headings), Gabarito (sans-serif body) |
| **Linting** | ESLint with Next.js Core Web Vitals |

## Features

- **Video Hero** — Full-viewport background video with staggered text animations
- **Infinite Brand Strip** — Smooth scrolling banner showcasing core values
- **Service Cards** — Hover-interactive cards with image zoom and sliding descriptions
- **The Nirvani Method** — Animated 4-step journey (Align → Release → Resonate → Transform)
- **Contact Form** — Clean, minimal form with custom-styled inputs
- **Sticky Navigation** — Scroll-aware navbar with mobile hamburger menu
- **Scroll Animations** — Intersection Observer–driven reveals with staggered timing
- **Fully Responsive** — Mobile-first design across all sections

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nirvani.git
cd nirvani

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout & metadata
│   ├── page.tsx                # Homepage
│   └── globals.css             # Theme variables & global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Hero navigation bar
│   │   ├── StickyNav.tsx       # Scroll-triggered sticky nav
│   │   └── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx     # Video hero banner
│   │   ├── BrandEssenceStrip.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── MethodsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx          # Reusable button
│       └── SectionHeading.tsx  # Section title component
├── hooks/
│   └── useScrollVisibility.ts  # Sticky nav visibility hook
└── lib/
    ├── constants.ts            # Nav links, services, methods data
    └── fonts.ts                # Font configuration
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#778773` | Primary — headings, accents, borders |
| Warm Beige | `#EBDFCC` | Secondary — buttons, backgrounds |
| Light Cream | `#FCFAEF` | Page background |
| Charcoal | `#2B2B2B` | Body text, overlays |
| Sage Neutral | `#9D9A83` | Subtle accents |

## Deployment

```bash
npm run build
npm start
```

### Dokploy

Deployed via Dokploy's **Railpack** builder (same setup as the tivitime admin panel): it auto-detects the Next.js app, runs `npm run build`, then serves it with `npm start` (`next start`) on **port 3000** internally. No Dockerfile needed — just point the Application at this repo with Build Type set to Railpack, and set Container Port to `3000`.

## License

All rights reserved. © Nirvani
