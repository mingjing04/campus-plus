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

## ✨ Features

###  CORE FEATURES 

#### 1. Basic Account & Onboarding
- Simple email/username/password sign-up 

- User chooses:
  - Faculty
  - Major
  - Current classes
  - Past classes

- Auto-assign to corresponding communities based on selections

---

#### 2. Pre-Created Communities 
- Load public data of all UBC classes

- Load faculties

- Load majors

- Automatically generate:
  - Class communities
  - Faculty communities
  - Major communities
  - Year-level communities

- Store them empty until users join

---

#### 3. Community Pages 
Each community should have:
- Community page layout

- Members auto-populate when they select that class/major/faculty

- Posts feed (Reddit-like)

- Comments + replies

- Ability to post normally or anonymously

---

#### 4. Community Chat 
Each community has its own live chat:
- Real-time messaging

- Member list

- Basic moderation tools (delete their own messages)

- Like reaction

- Channels for:
  - General chat
  - Course chat 

---

#### 5. UI
- Sidebar or tabs for:
  - Classes
  - Majors
  - Faculties

- Home feed (posts from all joined communities)

- Community search bar

- Profile page with:
  - Classes selected
  - Faculty + major
  - Communities joined

---



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
