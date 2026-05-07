# 📘 CODEWAVE AI. — AI drevien Code Editor

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Rive](https://img.shields.io/badge/Rive-FF4C4C?style=for-the-badge&logo=rive&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white)
![Status](https://img.shields.io/badge/Status-Mostly%20Done-yellowgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> A modern, Code editor with Editor features and AI features (with "coming soon" note so it's honest)

---

## 📸 Preview
![Preview](./Screenshots/Intro.png)
![Preview](./Screenshots/Home.png)
![Preview](./Screenshots/IntroMobile.png)
![Preview](./Screenshots/HomeMobile.png)
![Preview](./Screenshots/HomeMobile1.png)
![Preview](./Screenshots/HomeMobile2.png)
![Preview](./Screenshots/intro.gif)
![Preview](./Screenshots/Home.gif)


---

## ✨ Features

### 🖥️ Code Editor
- 🌐 **Multi-Language Support** — Write and run code in JavaScript, Python, C++, Java.
- ⚡ **Instant Code Runner** — Execute code and see output in real time without leaving the browser
- 🎨 **Syntax Highlighting** — Clean, readable code with language-aware color highlighting
- 🔢 **Line Numbers** — Always know exactly where you are in your code
- ↩️ **Auto Indentation** — Smart indentation that follows your code structure automatically
- 📋 **Copy Code** — One-click copy your entire code to clipboard
- 🔄 **Reset Editor** — Clear and start fresh instantly with one click
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile

### 🤖 AI Features *(UI ready — coming soon)*
- 🧠 **AI Code Explainer** — Get plain-English explanations of any code, beginner-friendly or advanced
- 🔧 **AI Fix & Improve** — Auto-detect bugs, optimize performance, and clean up messy code
- 📊 **Code Visualizer** — Generate flowcharts, memory models, and call stack diagrams from your code
- 💬 **Ask AI Anything** — Chat with an AI assistant about errors, concepts, or best practices
- ⏱️ **Time & Space Complexity** — Instantly analyze the Big O complexity of your code

### 🎬 Animations & UI/UX
- ⚡ **GSAP Powered Transitions** — Smooth, high-performance animations throughout the UI
- 🎭 **Rive Interactive Graphics** — Real-time animated illustrations and loaders
- 🌊 **Micro-interactions** — Subtle hover, click feedback, and loading states
- 🎯 **Minimal & Clean UI** — Distraction-free editor experience built for focus
- 🌙 **Consistent Design Language** — Reusable components with CSS Modules and Tailwind

---
## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [React.js](https://reactjs.org/) | UI Component Library | 18+ |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server | 5+ |
| [Node.js](https://nodejs.org/) | Backend Runtime | 18+ |
| [Express.js](https://expressjs.com/) | REST API & Code Execution Server | 4+ |
| [Judge0 API](https://judge0.com/) | Code Execution Engine (multi-language) | Latest |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-First Styling | 3+ |
| [GSAP](https://greensock.com/gsap/) | High-Performance Animations | 3+ |
| [Rive](https://rive.app/) | Interactive Animated Graphics | Latest |
| [CSS Modules](https://github.com/css-modules/css-modules) | Scoped Component Styling | — |
| [React Router](https://reactrouter.com/) | Client-Side Routing | 6+ |
| [Git](https://git-scm.com/) | Version Control | — |
| [GitHub](https://github.com/) | Code Hosting & Collaboration | — |
---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MAYURESHWAR-SHIVAPUR/AI-Code-Editor.git
   cd AI-Code-Editor
   ```


2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```


3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---
## 📁 Project Structure

```
codewave-ai/
├── Client/                        # React frontend
│   ├── public/                    # Static assets
│   ├── ScreenShots/               # README screenshots
│   ├── src/
│   │   ├── animtion/              # GSAP & Rive animation logic
│   │   ├── assets/                # Images, icons, SVGs
│   │   ├── components_2/          # Reusable React components
│   │   ├── context/               # React Context (global state)
│   │   ├── Data/                  # Static data & constants
│   │   ├── features/              # Feature-based modules
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── pages/                 # App pages / route components
│   │   ├── redux/                 # Redux state management
│   │   ├── routes/                # React Router route definitions
│   │   ├── services/              # API calls & external services
│   │   ├── style/                 # Global & module CSS files
│   │   ├── App.css                # App-level styles
│   │   ├── App.jsx                # Root component
│   │   ├── index.css              # Base styles
│   │   └── main.jsx               # App entry point
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html                 # HTML entry point
│   ├── package.json
│   └── vite.config.js             # Vite configuration
│
├── Server/                        # Node.js + Express backend
│   ├── config/                    # DB & app configuration
│   ├── controller/                # Route business logic
│   ├── middleware/                 # Auth & error middleware
│   ├── model/                     # Data models / schemas
│   ├── public/                    # Static server assets
│   ├── routes/                    # API route definitions
│   ├── services/                  # External service logic
│   ├── utils/                     # Helper functions
│   ├── .env                       # Environment variables
│   ├── package.json
│   └── Server.js                  # Server entry point
│
└── README.md
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development Client |
| `npm run build` | Build for production |
| `npm run start` | Start production Client |
| `npm run lint` | Run ESLint |
| `node Server.js` | Strat development Server |

---

## 🌱 Roadmap

- [x] Multi-language code editor UI
- [x] Code runner (JavaScript, Python, C++, Java)
- [x] Real-time output panel
- [x] Syntax highlighting
- [x] Redux state management
- [x] Custom React hooks
- [x] REST API with Express
- [x] GSAP & Rive animations
- [x] Responsive design
- [ ] AI code explainer (OpenAI / Claude API integration)
- [ ] AI bug finder & optimizer
- [ ] Code visualizer (flowchart, call stack, memory model)
- [ ] Ask AI chat assistant

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---
## 👤 Author

**MAYURESHWAR S**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MAYURESHWAR-SHIVAPUR)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayureshwar-shivapur-a34b25313/)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://animate-with-mayur.netlify.app/)
> 🔐 Portfolio is password protected — password: `4002`

---

<p align="center">Made with ❤️ and lots of 🌿</p>