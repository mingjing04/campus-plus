# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Campus+ is a Hackcamp 2025 hackathon project - a Reddit-like forum platform for university students. Each university operates as an isolated community where students connect through courses, events, and shared experiences using university email verification.

**Current Status**: Landing page complete with component-based architecture and UBC branding. Auth and main feed are next priorities.

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
- **UBC Brand Colors** defined in `src/app/globals.css`:
  - `--ubc-blue`: #002145 (primary)
  - `--ubc-secondary`: #0055B7
  - Use via Tailwind: `bg-ubc-blue`, `bg-ubc-secondary`, `text-ubc-secondary`
  - Opacity variants: `bg-ubc-secondary/10`
- Theme variables: `--background`, `--foreground` (light/dark mode)
- Fonts: `--font-sans`, `--font-mono` (Geist from Google)
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

### Current Directory Structure
```
src/
├── app/
│   ├── layout.js         # Root layout
│   ├── page.js           # Landing page (composes components)
│   └── globals.css       # Global styles + UBC colors
├── components/
│   └── landing/          # Landing page components
│       ├── Navbar.js
│       ├── Hero.js
│       ├── FeatureCard.js (uses react-icons)
│       ├── FeaturesSection.js
│       ├── CTASection.js
│       └── Footer.js
├── data/
│   └── features.js       # Features data array
└── lib/                  # (To be created for Supabase, utils)
```

### Future Structure (As Features Are Built)
```
src/app/
├── api/                  # Backend API routes
├── (auth)/               # Auth pages (signup, login)
├── feed/                 # Main feed page
└── post/[id]/            # Single post view
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
- **Component organization**: Group by feature in subdirectories (e.g., `components/landing/`)
- **Data-driven components**: Use data files (e.g., `data/features.js`) + `.map()` for lists
- **React Icons**: Import from `react-icons/hi2` (Heroicons 2)
- Use Next.js `<Image>` for optimized images
- Responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`, etc.)
- **UBC Colors**: Use `bg-ubc-secondary`, `bg-ubc-blue`, `text-ubc-secondary` classes

### Code Style
- ESLint config extends `next/core-web-vitals`
- Focus on Core Web Vitals compliance
- No TypeScript - plain JavaScript with JSDoc if needed

## Hackcamp 2025 Roadmap

### Phase 1 - Core Features (Current Sprint)
- [x] Project setup
- [x] Landing page with component architecture
- [x] UBC color system integration
- [x] React Icons integration
- [ ] Basic auth (signup/login - no email verification for MVP)
- [ ] Main feed page (Reddit-style)
- [ ] Post creation (text/media)
- [ ] Upvote/downvote functionality
- [ ] Comment system

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

---

## Feature Plans

### Sidebar Improvements (Current Task)

#### Issues to Fix:
1. Sidebar doesn't extend to bottom of screen
2. Sidebar not responsive - needs to collapse on mobile

#### Implementation Plan:

**1. Full Height Sidebar**
- Change sidebar container to use `min-h-screen` or fixed height with scrollable content
- Ensure sidebar extends to bottom on all screen sizes
- Make sidebar content scrollable if taller than viewport

**2. Mobile Responsiveness**
- Hide sidebar by default on mobile (< md breakpoint, 768px)
- Add hamburger menu button in navbar for mobile
- Implement slide-in drawer animation for mobile sidebar
- Add overlay/backdrop when sidebar is open on mobile
- Click outside or close button to dismiss sidebar

**3. Technical Approach:**
- Add state management for mobile sidebar open/close (useState)
- Use Tailwind responsive classes: `hidden md:block` for sidebar
- Add transition animations for smooth drawer open/close
- Lift state to parent component or use React Context if needed

**4. Files to Modify:**
- `src/components/feed/FeedSidebar.js` - make full height, add responsive classes
- `src/components/feed/FeedNavbar.js` - add hamburger menu button
- Parent pages (feed, community, post detail) - manage mobile sidebar state

**5. Responsive Behavior:**
- **Mobile** (< 768px): Hidden by default, opens as drawer overlay
- **Tablet/Desktop** (>= 768px): Always visible, full height sticky sidebar

---

### DM Feature Implementation Plan (Future)

#### 1. Database Schema (Supabase)
**conversations table:**
- id (uuid, primary key)
- participant1_id (uuid, user reference)
- participant2_id (uuid, user reference)
- last_message_at (timestamp)
- created_at (timestamp)

**messages table:**
- id (uuid, primary key)
- conversation_id (uuid, foreign key)
- sender_id (uuid, user reference)
- content (text)
- created_at (timestamp)
- read (boolean, default false)

#### 2. UI Components Structure
- **Inbox Page** (`/app/messages/page.js`): List of conversations with last message preview, unread indicators
- **Conversation Page** (`/app/messages/[conversationId]/page.js`): Chat interface with message thread
- **New Message Modal**: Search users and start new conversation

#### 3. Mock Data (for demo)
- `mockConversations.js` - conversation list with participants
- `mockMessages.js` - message history for each conversation
- Use localStorage for demo message sending

#### 4. Implementation Order
1. Create mock data for conversations and messages
2. Build Messages inbox page with conversation list
3. Build individual conversation page with chat interface
4. Add message input and send functionality (localStorage)
5. Add "New Message" button and user search
6. Integrate into navbar with messaging icon
7. Add unread count badge

#### 5. Future Enhancements
- Supabase Realtime for instant updates
- Image/file attachments
- Message reactions
- Typing indicators
