# Vitae

A resume viewer, overengineered — now built with modern React tooling.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **React 19** (functional components, server components)
- **TypeScript**
- **Tailwind CSS 4**
- **date-fns** for date formatting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to the default resume.

## Building

```bash
npm run build
```

Produces a fully static export in the `out/` directory.

## Adding a Resume

Add a JSON file to `data/` following the resume schema (see `docs/resume-schema.md`). The filename (without `.json`) becomes the URL slug: `/resume/<filename>`.

## Project Structure

```
app/                  → Next.js App Router pages
components/           → React components
data/                 → Resume JSON data files
docs/                 → Documentation
lib/                  → Data loading utilities
types/                → TypeScript type definitions
```
