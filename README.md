# Vitae

A resume viewer, overengineered — now built with Astro.

## Tech Stack

- **Astro 5** (static site generation, zero JS by default)
- **TypeScript**
- **Tailwind CSS 4**
- **date-fns** for date formatting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) — it redirects to the default resume.

## Building

```bash
npm run build
```

Produces a fully static site in the `dist/` directory.

## Adding a Resume

Add a JSON file to `src/data/` following the resume schema (see `docs/resume-schema.md`). The filename (without `.json`) becomes the URL slug: `/resume/<filename>`.

## Project Structure

```
src/
  components/       → Astro components
  data/             → Resume JSON data files
  layouts/          → Page layouts
  lib/              → Data loading utilities
  pages/            → File-based routing
  types/            → TypeScript type definitions
docs/               → Documentation
public/             → Static assets
```
