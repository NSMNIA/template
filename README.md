# NSMNIA Template

My personal Turborepo template for building scalable Next.js apps. It's a monorepo with shared tooling, a design system, and built-in code consistency.

## Apps created with this template

- [Tune Tracker](https://tune-tracker.com/): A web app that helps you stay up to date with new music releases from your favorite artists on Spotify.


## Included Tools & Frameworks

- [Next.js](https://nextjs.org/) – React framework for web apps

- [Storybook](https://storybook.js.org/) – Isolated UI development and testing

- [Ultracite](https://ultracite.dev/) – Preconfigured Biome-based formatting and linting

- [Turborepo](https://turborepo.com) – Monorepo management

## Features

- ⚡ Monorepo powered by [Turborepo](https://turborepo.com)

- 🧱 Shared design system for consistent UI

- 🧪 Component development with Storybook

- 🛠️ Biome-based formatting, linting, and type-checking with [Ultracite](https://ultracite.dev/)

- 🌐 Centralized environment config

- 💡 Shared TypeScript configuration

## Monorepo Structure

```bash
├── apps
│   ├── app          # Main Next.js application
│   └── storybook    # Storybook instance for UI development
│
├── packages
│   ├── design-system      # Reusable UI components and theme
│   ├── next-config        # Shared Next.js configuration
│   │   └── keys           # Shared environment variable helpers
│   ├── seo                # SEO utility functions and config
│   └── typescript-config  # Shared tsconfig base
```

## Getting Started

Install dependencies

```bash
pnpm install
```

Run the apps

```bash
pnpm dev
```


## Scripts

Commonly used scripts across the monorepo:
```bash
pnpm dev           # Start all dev servers
pnpm lint          # Run Biome lint checks
pnpm format        # Format code using Biome
pnpm build         # Build all apps and packages
```