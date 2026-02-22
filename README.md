# Aether — Crypto Landing Page with Visual CMS

An ultra-premium crypto analytics landing page built with **Svelte**, **TypeScript**, **Vite**, and **Tailwind CSS v4**, featuring an **Inline Visual Editor** powered by a custom Vite API.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the landing page.

---

## Visual Content Editor

This project includes a built-in Visual CMS. You can edit page content directly on the landing page — no separate admin panel needed.

### How to Use

1. Start the dev server: `npm run dev`
2. Open: [http://localhost:5173/?edit=true](http://localhost:5173/?edit=true)
3. **Click any text** (headlines, subtitles, stats, feature descriptions) to edit it inline.
4. Click **"Publish Changes"** in the floating bottom toolbar.
5. Your changes are saved directly to `public/content.json`.

### How It Works

| Component | Purpose |
|---|---|
| `src/components/Editable.svelte` | Inline editing wrapper using `contentEditable` |
| `src/App.svelte` | Orchestrates global `content` state and `?edit=true` mode |
| `vite.config.ts` | Custom Vite middleware exposing `POST /api/save-content` |
| `public/content.json` | Single source of truth for all page content |

```
?edit=true  →  Admin toolbar appears  →  Click to edit  →  Publish  →  content.json updated on disk
```

> **Note**: The save API (`/api/save-content`) is only active during development (`npm run dev`). In production, the page loads content from the static `public/content.json`.

---

## Content Structure

`public/content.json` contains all editable content:

```json
{
  "hero": {
    "badge": "...",
    "title": "...",
    "subtitle": "...",
    "primaryCTA": "...",
    "secondaryCTA": "..."
  },
  "stats": [
    { "label": "...", "value": "...", "change": "..." }
  ],
  "features": [
    { "title": "...", "desc": "...", "icon": "...", "color": "..." }
  ]
}
```

---

## Design System

The "Aether" design system uses:
- **Glassmorphism** cards and nav
- **Mesh gradient** backgrounds with animated drifting
- **Google Fonts**: Inter (UI), Outfit (headings)
- **Colors**: Aether Blue, Teal, Violet, Cyan on deep navy/black backgrounds
- **Tailwind CSS v4** with custom `@utility` and `@theme` tokens

## Tech Stack

- [Svelte 5](https://svelte.dev)
- [Vite 7](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
