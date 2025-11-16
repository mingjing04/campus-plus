# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Campus+ is a Hackcamp 2025 hackathon project - a Reddit-like forum platform for university students. Each university operates as an isolated community where students connect through courses, events, and shared experiences using university email verification.

**Current Status**: Fresh Next.js starter template. Core features are planned but not yet implemented.

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Create production build
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Tech Stack & Architecture

### Framework Architecture
- **Next.js 16** with **App Router** (not Pages Router)
- Server Components by default (no `'use client'` unless needed)
- File-based routing in `src/app/` directory
- **React 19** with latest features
- **JavaScript** (not TypeScript - uses `jsconfig.json`)

### Styling System
- **Tailwind CSS v4** (beta) via PostCSS
- Utility-first approach - no component libraries
- Theme via CSS variables in `src/app/globals.css`:
  - `--background`, `--foreground` (light/dark mode support)
  - `--font-sans`, `--font-mono` (Geist fonts from Google)
- Use `dark:` prefix for dark mode styles

### Import Path Aliases
**Critical**: Use `@/*` for all src imports (configured in `jsconfig.json`)

```javascript
// Good
import { Component } from '@/components/Button'
import { utils } from '@/lib/utils'

// Bad
import { Component } from '../../components/Button'
```

## Planned Architecture (Not Yet Implemented)

### Authentication & Backend
- **Supabase** for auth and backend services
- Environment variables needed (create `.env.local`):
  ```env
  NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
  ```
- University email domain validation for user verification
- Multi-university access (users can join multiple universities with verified emails)

### Data Model (To Be Built)
Key entities for the Reddit-like platform:
- **Universities** - Isolated communities per institution
- **Communities/Subreddits** - Course-based or topic-based (public/private)
- **Posts** - Text and media content (including short reels)
- **Comments** - Threaded discussions with upvote/downvote
- **Events** - Campus events with card/reel format
- **Assignments** - Reminder system for deadlines
- **Users** - Profiles with university affiliations

### Future Directory Structure
When implementing features, follow this pattern:
```
src/
├── app/
│   ├── api/              # Backend API routes
│   ├── (auth)/           # Auth-related pages
│   ├── (dashboard)/      # Protected routes
│   └── ...
├── components/           # Reusable UI components
├── lib/                  # Utilities and helpers
│   ├── supabase.js      # Supabase client
│   └── utils.js         # Common utilities
└── hooks/               # Custom React hooks
```

## Key Development Patterns

### Next.js App Router
- Routes are folders in `src/app/`
- `page.js` = route component
- `layout.js` = shared layout (wraps children)
- `loading.js` = loading states (Suspense boundaries)
- `error.js` = error boundaries

### Component Patterns
- Server Components by default (better performance)
- Add `'use client'` only when using hooks, event handlers, or browser APIs
- Use Next.js `<Image>` for optimized images
- Responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`, etc.)

### Code Style
- ESLint config extends `next/core-web-vitals`
- Focus on Core Web Vitals compliance
- No TypeScript - plain JavaScript with JSDoc if needed

## Hackcamp 2025 Roadmap

### Phase 1 - Core Features (Current Sprint)
- [x] Project setup
- [ ] Supabase auth with email verification
- [ ] University email domain validation
- [ ] Community creation and management
- [ ] Post creation (text/media)
- [ ] Course sections
- [ ] Event cards/reels feed

### Phase 2 - Enhanced Features
- [ ] Private communities
- [ ] Assignment reminder system
- [ ] Focus mode for study
- [ ] Comment threading
- [ ] Upvote/downvote system
- [ ] User profiles

### Phase 3 - Advanced Features
- [ ] Cross-platform sharing (Facebook, Instagram)
- [ ] Real-time notifications
- [ ] Direct messaging
- [ ] Search and filtering
- [ ] Moderation tools

## Important Notes

- This is a hackathon project - prioritize speed and MVP features
- Universities are **isolated** - each operates independently
- Students verify identity via university email (e.g., `.edu` domains)
- Users can join multiple universities if verified with multiple emails
- No existing auth, database, or API layer yet - start from scratch for backend
- Keep dependencies minimal unless absolutely necessary
