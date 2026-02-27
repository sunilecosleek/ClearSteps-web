# Clear Steps — Next.js 14 App

India's most complete CBSE learning platform, built as a production-ready **Next.js 14 App Router** site.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom config with brand colors, fonts, animations
- **Framer Motion** — scroll-linked parallax, scroll reveals, micro-interactions
- **Google Fonts** — Syne (headings), DM Sans (body), Playfair Display (italic accents)

## Brand Color

Primary: `#4E4BE5` (deep indigo/violet)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
clearsteps/
├── app/
│   ├── layout.tsx          # Root layout (fonts, cursor, progress bar)
│   ├── page.tsx            # Main page — composes all sections
│   └── globals.css         # Tailwind base + custom CSS
├── components/
│   ├── ClientShell.tsx     # Custom cursor + scroll progress bar (client)
│   └── sections/
│       ├── Nav.tsx         # Fixed nav with mobile menu (AnimatePresence)
│       ├── Hero.tsx        # Parallax hero with scroll-linked motion
│       ├── Marquee.tsx     # CSS marquee ticker
│       ├── What.tsx        # Platform preview with auto-rotating tabs
│       ├── Problem.tsx     # Dark section, 3-card grid
│       ├── How.tsx         # 6-step alternating layout with timeline
│       ├── Features.tsx    # Grid + wide AI eval card
│       ├── Parents.tsx     # Dashboard preview with animated bars
│       ├── Testimonials.tsx
│       ├── Pricing.tsx     # 3-tier pricing
│       ├── FAQ.tsx         # Animated accordion
│       ├── CTA.tsx         # Dark closer section
│       └── Footer.tsx      # Multi-column footer
├── lib/
│   ├── data.ts             # All content/copy data
│   ├── hooks.ts            # useReveal + use3DTilt hooks
│   └── utils.ts            # cn() utility
├── tailwind.config.ts      # Custom tokens, fonts, animations
└── package.json
```

## Key Features

- **Custom cursor** with hover state changes (desktop only)
- **Scroll progress bar** gradient at top of viewport
- **Multi-layer parallax** in hero (shapes, floating words at different rates)
- **Staggered text reveal** for hero headline
- **Auto-rotating** journey steps + platform tabs
- **Scroll-triggered** reveals (IntersectionObserver based)
- **Animated bars** in dashboard + eval sections (whileInView)
- **Smooth FAQ accordion** with Framer Motion AnimatePresence
- **3D tilt effect** on cards (desktop, via mouse event)
- **Mobile-first** — all grids collapse cleanly, touch-optimized
- **Dark/light sections** alternated throughout
