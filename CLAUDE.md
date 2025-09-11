# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `yarn dev` - Start development server (runs on port 3000)
- `yarn build` - Create production build
- `yarn serve` - Start production server
- `yarn lint` - Run ESLint and fix issues
- `yarn analyze` - Analyze bundle size

## Architecture

This is a Next.js 14 static blog built with the App Router pattern and Contentlayer for MDX content management.

### Key Technologies

- **Next.js 14.2.5** with App Router
- **TypeScript** with path aliases (@/components, @/data, etc.)
- **Tailwind CSS** with custom typography plugin
- **Contentlayer2** for MDX processing and type generation
- **MDX** for blog content with frontmatter metadata

### Directory Structure

#### `/app` - App Router pages and layouts

- Routes map directly to URL paths
- `layout.tsx` is the root layout with fonts and providers
- Blog posts use dynamic routes: `/blog/[...slug]/page.tsx`

#### `/components` - Reusable React components

- UI components extend standard HTML elements with custom styling
- Social icons in `/components/social-icons/`
- Theme switching and navigation components

#### `/data` - Content and configuration

- `/data/blog/` - MDX blog posts with frontmatter
- `/data/authors/` - Author profile MDX files
- `siteMetadata.js` - Global site configuration
- `projectsData.ts` - Projects showcase data

#### `/layouts` - Page templates for different content types

- `PostLayout.tsx` - Default blog post template
- `ListLayout.tsx` - Blog listing with search
- `AuthorLayout.tsx` - Author profile template

### Content Management

Blog posts are MDX files in `/data/blog/` with required frontmatter:

```yaml
---
title: string
date: YYYY-MM-DD
tags: [array, of, tags]
summary: string
draft: boolean (optional)
---
```

Contentlayer automatically:

- Generates TypeScript types for content
- Creates routes from file paths
- Builds search index
- Computes reading time and tag counts

### Styling Conventions

- Use Tailwind utility classes
- Dark mode support via `dark:` variants
- Typography uses prose classes from @tailwindcss/typography
- Custom fonts: Raleway (headings), Open Sans (body)

### Important Configuration Files

- `contentlayer.config.ts` - Content schema and MDX plugin configuration
- `next.config.js` - CSP headers, image optimization, environment variables
- `tailwind.config.js` - Theme customization and typography settings
