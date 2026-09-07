# Dulipudi Subhash — AI Engineer Portfolio

A premium, modern, highly interactive personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## ✨ Features

- **Premium Dark Theme** with futuristic AI aesthetic
- **Interactive Neural Network Background** using HTML5 Canvas
- **13+ Animated Sections** powered by Framer Motion
- **Glassmorphism UI** with gradient accents
- **Typing Animation** with role cycling
- **Animated Statistics** with scroll-triggered counters
- **Interactive AI Journey** pathway with hover tooltips
- **Responsive Design** — works on all devices
- **Back-to-Top Button** with smooth scrolling
- **Loading Screen** with animated spinner
- **Contact Form** with form state management
- **SEO Optimized** with meta tags and semantic HTML

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Vite | Build Tool |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd subhash-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx            # Sticky glassmorphism navbar
│   ├── Hero.tsx              # Hero with typing animation & profile
│   ├── About.tsx             # About section with animated stats
│   ├── AIJourney.tsx         # Interactive AI pathway timeline
│   ├── Skills.tsx            # 5-category skill cards
│   ├── Experience.tsx        # Professional timeline
│   ├── Projects.tsx          # Featured project cards
│   ├── Achievements.tsx      # Achievement cards
│   ├── Education.tsx         # Education timeline
│   ├── Certifications.tsx    # Certificate cards
│   ├── Resume.tsx            # Resume CTA section
│   ├── Contact.tsx           # Contact form & info
│   ├── Footer.tsx            # Site footer
│   ├── BackToTop.tsx         # Scroll-to-top button
│   ├── LoadingScreen.tsx     # Loading animation
│   └── ParticleBackground.tsx # Neural network canvas
├── data/
│   └── portfolioData.ts      # All portfolio content & types
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles & Tailwind
```

## 🖼 Personalization

### Profile Photo
Place your professional photo at:
```
public/profile-photo.jpg
```

### Resume
Place your resume PDF at:
```
public/resume.pdf
```

### Social Links
Edit `src/data/portfolioData.ts` and update:
```typescript
export const personalInfo = {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-profile',
  // ...other fields
};
```

## 🌐 Deployment on Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Vite — click **"Deploy"**
6. Your site will be live at `your-project.vercel.app`

### Vercel Configuration (optional)

Create `vercel.json` in root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 📝 License

© 2026 Dulipudi Subhash. All rights reserved.

---

Built with ❤️ and AI
