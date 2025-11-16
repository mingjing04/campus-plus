<div align="center">
  <h1>🎓 Campus+</h1>
  <p><strong>Turn your academic journey into meaningful communities</strong></p>
  <p>A university-focused social platform that unites students and fosters connections beyond the classroom</p>

  <p>
    <a href="#-about">About</a> •
    <a href="#️-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-features">Features</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#️-roadmap">Roadmap</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Supabase-Auth-green?style=for-the-badge&logo=supabase" alt="Supabase" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  </p>

  <p>
    <em>Built for Hackcamp 2025</em>
  </p>
</div>

---

## 📖 About

Campus+ is a Reddit-like forum platform designed exclusively for university students. Each university operates as its own isolated community, creating a safe and relevant space for students to connect, collaborate, and engage with their peers.

Unlike traditional social media, Campus+ transforms your academic history into meaningful communities organized by courses, events, and shared experiences. Whether you're looking for study partners, event announcements, or just want to connect with classmates, Campus+ brings your campus online.

## 🏛️ Community Structure

Campus+ uses a hierarchical community system to organize content and discussions:

### Main Community
- **UBC General**: The main community where all students can post and engage
  - Open to all UBC students
  - General campus discussions, events, lost & found, etc.

### Faculty Communities
- Organized by academic faculties (e.g., Science, Arts, Engineering, Commerce)
- Auto-assigned based on user's faculty during onboarding
- Faculty-specific events, discussions, and announcements

### Course Communities
- Individual communities for each course (e.g., CPSC 210, MATH 200, CHEM 121)
- Auto-assigned when users select their current/past classes
- Course-specific study groups, exam tips, assignment help

### Hashtag Tags
- **Not communities**, but topical labels users can add to posts
- Examples: `#food`, `#social`, `#sports`, `#wellness`, `#jobs`
- Color-coded and styled differently from community labels
- Help users find content across all communities by topic

**Post Flow Example:**
```
Community: CPSC 210 (Course Community)
Tags: #study-tips #midterm
Title: "Best resources for design patterns?"
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **React**: Version 19.2 with Server Components
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (beta)
- **Authentication**: [Supabase Auth](https://supabase.com/auth) with Google OAuth
- **Backend**: Supabase (configured, currently using mock data)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Heroicons 2)
- **Language**: JavaScript (ES6+)
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mingjing04/campus-plus.git
   cd campus-plus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Mode
You can use **Guest Mode** on the login/signup pages to explore the app without creating an account!

## ✨ Features

### 🎯 IMPLEMENTED FEATURES

#### ✅ Authentication & Onboarding
- Email/password signup and login
- Google OAuth integration
- Guest/demo mode for testing
- User session management

#### ✅ Main Feed
- Reddit-style post feed
- Community filtering (UBC General, faculties, courses)
- Hierarchical community structure
- Post cards with author info, timestamps, and engagement metrics
- Responsive design with mobile sidebar

#### ✅ Posts & Engagement
- Create posts (text content)
- Like/unlike functionality
- View individual post details
- Community labels and tags
- Anonymous posting support

#### ✅ Comments System
- Threaded comments with replies
- Nested comment display
- Like comments
- Reply to any comment
- Real-time comment count updates

#### ✅ Direct Messaging
- Private conversations between users
- Real-time message interface
- Conversation list with previews
- Start new conversations
- Message timestamps

#### ✅ Community Pages
- Dynamic routing per community
- Course-level communities (e.g., CPSC 210, MATH 200)
- Faculty-level communities
- Department filtering
- Member count display

#### ✅ UI/UX Components
- Reusable Logo component with flexible sizing
- Sticky navigation bar
- Collapsible sidebar with mobile hamburger menu
- Active navigation state indicators
- Dark mode support (theme-aware)
- UBC brand colors throughout

### 📋 PLANNED FEATURES (Next Steps)

#### Image & Media Support
- Image uploads for posts
- File attachments (PDFs, documents)
- Media gallery view
- Image compression and optimization

#### Community Chat Rooms
- Real-time chat for each community
- Member list and online status
- Message reactions and threading
- Moderation tools (delete, pin messages)

#### User Profiles & Reputation
- Public user profiles
- Post/comment history
- Karma/reputation system
- Achievement badges
- Customizable avatars

#### Enhanced Onboarding
- Multi-step onboarding flow
- Select current/past classes
- Choose faculty and major
- Auto-join relevant communities
- Import schedule from university systems

#### Moderation Tools
- Report posts/comments/users
- Community moderator roles
- Content filtering
- Ban/mute functionality
- Moderation queue



## 📁 Project Structure

```
campus-plus/
├── src/
│   ├── app/
│   │   ├── layout.js                      # Root layout with font config
│   │   ├── page.js                        # Landing page
│   │   ├── globals.css                    # Global styles + UBC colors
│   │   ├── feed/page.js                   # Main feed page
│   │   ├── post/[id]/page.js              # Individual post view
│   │   ├── comment/[id]/page.js           # Comment detail view
│   │   ├── community/[id]/page.js         # Community pages
│   │   ├── login/page.js                  # Login page
│   │   ├── signup/page.js                 # Signup page
│   │   └── messages/
│   │       ├── page.js                    # Messages inbox
│   │       ├── [conversationId]/page.js   # Conversation view
│   │       └── new/page.js                # Start new conversation
│   ├── components/
│   │   ├── Logo.js                        # Reusable logo component
│   │   ├── landing/                       # Landing page components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── FeatureCard.js
│   │   │   ├── FeaturesSection.js
│   │   │   ├── CTASection.js
│   │   │   └── Footer.js
│   │   ├── feed/                          # Feed-related components
│   │   │   ├── FeedNavbar.js              # Main navigation
│   │   │   ├── FeedSidebar.js             # Community sidebar
│   │   │   ├── PostCard.js                # Post display
│   │   │   ├── CommentCard.js             # Comment display
│   │   │   └── CommentForm.js             # Comment input
│   │   └── messages/                      # Messaging components
│   │       ├── ConversationListItem.js
│   │       ├── MessageBubble.js
│   │       └── MessageInput.js
│   ├── data/                              # Mock data (temporary)
│   │   ├── features.js                    # Landing features
│   │   ├── communities.js                 # Community hierarchy
│   │   ├── mockPosts.js                   # Sample posts
│   │   ├── mockComments.js                # Sample comments
│   │   ├── mockUsers.js                   # Sample users
│   │   ├── mockConversations.js           # Sample conversations
│   │   └── mockMessages.js                # Sample messages
│   └── lib/
│       └── supabase.js                    # Supabase client config
├── public/
│   └── CampusPlus_chonky.svg              # Brand logo
├── .env.local                             # Environment variables
├── CLAUDE.md                              # AI development guide
├── next.config.mjs                        # Next.js configuration
└── package.json                           # Dependencies
```

> **Note**: Currently using mock data for development. Database integration in progress.

## 🗺️ Roadmap

### Phase 1 - Core Features ✅ **COMPLETED**
- [x] Project setup with Next.js 16 and Tailwind CSS v4
- [x] Component-based landing page with UBC branding
- [x] UBC color system integration
- [x] Reusable Logo component with flexible sizing
- [x] Authentication (email/password + Google OAuth + guest mode)
- [x] Main feed page (Reddit-style with filtering)
- [x] Post creation (text content)
- [x] Like/unlike functionality (upvote/downvote)
- [x] Comment system with threading and replies
- [x] Community pages (faculties, departments, courses)
- [x] Direct messaging system
- [x] Mobile-responsive sidebar with hamburger menu

### Phase 2 - Database & Backend 🚧 **IN PROGRESS**
- [x] Supabase client configuration
- [ ] Replace mock data with Supabase database
- [ ] User profile storage and retrieval
- [ ] Post persistence to database
- [ ] Comment persistence to database
- [ ] Message persistence with real-time updates
- [ ] Image upload for posts
- [ ] Community membership tracking

### Phase 3 - Enhanced Features 📋 **PLANNED**
- [ ] User onboarding flow (select classes/faculty/major)
- [ ] Private communities
- [ ] Assignment reminder system
- [ ] Focus mode for study periods
- [ ] Advanced search and filtering
- [ ] Real-time notifications
- [ ] Community moderation tools
- [ ] User karma/reputation system
- [ ] Post scheduling
- [ ] Media attachments (images, files)

### Phase 4 - Advanced Features 🔮 **FUTURE**
- [ ] Cross-platform post sharing (Facebook, Instagram)
- [ ] Analytics dashboard
- [ ] Community chat rooms
- [ ] Live events/streaming
- [ ] Mobile app (React Native)
- [ ] Multi-university support
- [ ] Email verification for university domains

## 🤝 Contributing

This is a hackathon project built for Hackcamp 2025. Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Team

Team members will be added here.

<!--
Add your team members:
- **[Your Name](https://github.com/yourusername)** - Role
- **[Team Member](https://github.com/username)** - Role
-->

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for **Hackcamp 2025**
- Inspired by Reddit's community-driven approach
- Thanks to all contributors and testers

## 📞 Contact

- **Project Link**: [https://github.com/mingjing04/campus-plus](https://github.com/mingjing04/campus-plus)
- **Demo**: Coming soon!

---

<div align="center">
  <p>Made with ❤️ by the Campus+ team for Hackcamp 2025</p>
  <p>⭐ Star us on GitHub if you find this project interesting!</p>
</div>
