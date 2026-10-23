# Sumanth V U — Portfolio

A custom React + TypeScript portfolio with Motion scroll reveals, Lucide icons, responsive layouts, interactive engineering previews, project details, a keyboard command menu, and persistent light/dark themes.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to Vercel, Netlify, or any static host. No API keys or backend are required.

## Content

Edit the project records and portfolio sections in `src/main.tsx`. Detailed case studies live in `src/caseStudies.ts`. Styles are in `src/style.css`. The downloadable resume is `public/Sumanth-VU-Resume.pdf`.

Content is based on the supplied resume and the RENZO, Yaatra-AI, Orca, and RepuFi READMEs. Competitive programming values are resume snapshots, not live statistics. The project workbenches are illustrative interactive explanations, not embedded product screenshots. Orca intentionally links only to source because no live demo was supplied. Contact uses direct email links.

## Accessibility

Includes semantic sections, keyboard focus styles, a native command dialog, interactive architecture maps, keyboard-operable workflow tabs, a skip link, reduced-motion support, accessible icon buttons, and a responsive navigation menu. Command menu: Ctrl/Cmd + K.

## Project pages

Project names, arrows and exploration links open dedicated `/projects/renzo/`, `/projects/yaatra-ai/`, `/projects/orca/` and `/projects/repufi/` pages. The build generates an index file and page metadata for each route, so direct navigation and refresh work on static hosts without rewrite rules.

Each study includes an overview, selectable architecture components, a stepped user journey, engineering notes, an illustrative demo, technology details and a link to its source documentation. The diagrams explain component responsibilities; they are not production telemetry.

The landing restores the original editorial layout, restrained orbital illustration, and alternating full-width project rows. Dedicated project studies remain available through each project title, arrow, and exploration link.

## Deploy on Vercel

Import `Sumanthvu/myportfolio` as a new Vercel project.

- Framework preset: **Vite**
- Root directory: **./** (the repository root)
- Build command: **npm run build**
- Output directory: **dist**
- Install command: **npm ci**
- Environment variables: **none**

These build settings are also saved in `vercel.json`. The build emits standalone HTML entry files for all four project routes, so no catch-all rewrite is required. After deployment, check a project URL directly and refresh it. Future pushes to the connected production branch trigger Vercel deployments.
