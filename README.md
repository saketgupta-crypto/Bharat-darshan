# Bharat Darshan (React + Vite)

Converted from Next.js 15 (App Router) to React 19 + Vite + React Router. Same Tailwind v4 theme, shadcn/ui components, framer-motion animations and mock data.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview
```

## Routes
/, /destinations, /hotels, /guides, /itinerary, /contact, /dashboard, /profile, /auth/login, /auth/signup

## Deploying
Uses BrowserRouter, so the host must serve index.html for unknown paths (Netlify `_redirects`: `/* /index.html 200`; Vercel rewrite to `/index.html`).
