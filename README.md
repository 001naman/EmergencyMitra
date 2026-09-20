# EmergencyMitra — Aapka Emergency Saathi

A clean, minimal healthcare emergency platform website. Connect with verified local doctors in under 2 minutes — available 24/7 for voice, video, or in-person consultations.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (pure white theme — no blue anywhere)
- **Animations:** Framer Motion (scroll reveals, counters, demo transitions)
- **Icons:** Lucide (outline style)
- **Font:** Inter via `next/font`

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve production build
npm run typecheck  # tsc --noEmit
```

## Highlights

- Interactive SOS demo: tap SOS → GPS locate → skeleton search → doctor cards → connect
- Validated doctor registration form with file upload chips
- Animated stat counters, scroll progress bar, active-section nav
- Mobile-first responsive with hamburger menu and touch-friendly targets
