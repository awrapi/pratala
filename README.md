# Pratala Rerupa

Premium studio website for Pratala Rerupa, a landing page service for local businesses that need to look more trusted online.

Main positioning:

```text
Website yang bikin bisnis lokal terlihat lebih dipercaya.
```

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS production setup
- `motion/react` for component animation
- GSAP ScrollTrigger for the Rerupa transformation section
- Supabase for request leads and legacy admin access

## Main Files

- `src/app/page.tsx` - main Next.js homepage
- `src/components/` - homepage sections and request modal
- `src/data/` - preview works, workshop, FAQ, and process content
- `src/lib/supabase.ts` - public Supabase client helper
- `src/lib/whatsapp.ts` - WhatsApp link and Indonesian phone normalization helpers
- `public/code.html` - legacy static landing page compatibility route
- `public/admin.html` - legacy Supabase Auth admin panel
- `public/assets/` - legacy JS and preview image assets

## Run Locally

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Routes

- Main website: `http://127.0.0.1:3000/`
- Legacy landing page: `http://127.0.0.1:3000/code.html`
- Legacy admin panel: `http://127.0.0.1:3000/admin.html`
- Preview assets: `http://127.0.0.1:3000/assets/preview/bentokopiweb.jpg`

## Supabase Setup

The Next.js request modal reads:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

If these are missing, the homepage still loads and the request form shows a clear configuration error on submit.

For the legacy admin/static pages, `public/assets/js/supabase-config.js` still supports:

```js
window.PRATALA_SUPABASE_CONFIG = {
  url: "https://your-project-ref.supabase.co",
  anonKey: "your-public-anon-key"
};
```

Use only the public anon key. Never expose a Supabase service role key in frontend code.

## Test Checklist

- `npm run build` passes.
- `/`, `/code.html`, `/admin.html`, and `/assets/preview/...` load.
- Navbar anchors, active state, mobile menu, FAQ, workshop selector, estimator, modal open/close, Escape close, form validation, and WhatsApp links work.
- Mobile has no horizontal overflow and remains polished for WhatsApp-first visitors.
