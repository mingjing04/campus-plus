<div align="center">
  <h1>🎓 Campus+</h1>
  <p><strong>Turn your academic journey into meaningful communities</strong></p>
  <p>A university-focused social platform that unites students and fosters connections beyond the classroom</p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#roadmap">Roadmap</a> •
    <a href="#contributing">Contributing</a>
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

## ✨ Features

### 🏛️ University Communities
- **Isolated University Spaces** - Each university has its own separate community
- **Multi-University Access** - Verify with student email to join multiple universities
- **Email Verification** - Secure authentication using university email domains

### 💬 Reddit-Style Forums
- **Communities (Subreddits)** - Create and join topic-based communities
- **Public & Private Communities** - Control who can see and join your communities
- **Course Sections** - Dedicated discussion spaces for each course
- **Posts & Short Reels** - Share content in various formats

### 📚 Academic Tools
- **Assignment Reminders** - Never miss a deadline with built-in reminder system
- **Course Organization** - Keep track of all your courses in one place
- **Focus Mode** - Optional distraction-free mode for intense study periods

### 🎉 Events & Engagement
- **Event Sections** - Discover and share campus events
- **Event Cards/Reels** - Visual event announcements in feed format
- **Cross-Platform Sharing** - Cross-post from Facebook and Instagram

### 🎯 Community Engagement
- **Upvoting & Discussions** - Reddit-style voting and threaded comments
- **Community Moderation** - Tools to keep communities safe and relevant
- **Real-time Updates** - Stay connected with instant notifications

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling

### Backend & Services
- **[Supabase](https://supabase.com/)** - Authentication and backend services
  - User authentication with university email verification
  - Database (planned)
  - Real-time subscriptions (planned)

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Geist Font** - Modern typography
- **React Icons** - Icon library for UI components

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**
- **Supabase Account** (free tier works great)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mingjing04/campus-plus.git
   cd campus-plus
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   > Get these from your [Supabase Dashboard](https://app.supabase.com/) → Project Settings → API

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
campus-plus/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Landing page
│   │   └── globals.css        # Global styles with UBC colors
│   ├── components/
│   │   └── landing/           # Landing page components
│   │       ├── Navbar.js
│   │       ├── Hero.js
│   │       ├── FeatureCard.js
│   │       ├── FeaturesSection.js
│   │       ├── CTASection.js
│   │       └── Footer.js
│   └── data/
│       └── features.js        # Feature data
├── public/                    # Static assets
├── .env.local                 # Environment variables (create this)
├── CLAUDE.md                  # AI development guide
├── next.config.mjs            # Next.js configuration
└── package.json               # Dependencies
```

## 🗺️ Roadmap

### Phase 1 - Core Features (Hackcamp 2025)
- [x] Project setup with Next.js and Tailwind
- [x] Component-based landing page with UBC branding
- [x] UBC color system integration
- [ ] Basic authentication (sign up/login)
- [ ] Main feed page (Reddit-style)
- [ ] Post creation (text and media)
- [ ] Upvote/downvote functionality
- [ ] Comment system

### Phase 2 - Enhanced Features
- [ ] Private communities/subreddits
- [ ] Assignment reminder system
- [ ] Focus mode for study periods
- [ ] Comment system with threading
- [ ] Upvote/downvote functionality
- [ ] User profiles

### Phase 3 - Advanced Features
- [ ] Cross-platform post sharing (Facebook, Instagram)
- [ ] Real-time notifications
- [ ] Direct messaging
- [ ] Advanced search and filtering
- [ ] Community moderation tools
- [ ] Analytics dashboard

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
