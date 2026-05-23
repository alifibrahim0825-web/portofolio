# Minimalist Portfolio

A clean, modern, and minimalist portfolio website built with React.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Smooth Animations** - Powered by Framer Motion with scroll-triggered reveals
- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Minimalist Design** - Clean aesthetic with thoughtful typography
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds
- 🧭 **Client-Side Routing** - Smooth page transitions with React Router
- 🎯 **Interactive Components** - Hover effects, loading states, and micro-interactions

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Extract the ZIP file
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
minimalist-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── AnimatedSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillBar.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Personal Information

Update the content in the page components:
- `src/pages/Home.tsx` - Hero section, services
- `src/pages/About.tsx` - Bio, skills, experience
- `src/pages/Projects.tsx` - Project listings
- `src/pages/Contact.tsx` - Contact information

### Styling

- Colors: Edit `tailwind.config.js` under the `colors` section
- Fonts: The project uses Inter from Google Fonts (configured in `index.html`)
- Spacing: Modify Tailwind classes in components

### Images

Replace the placeholder images in the components with your own. Images are loaded from Unsplash for demo purposes.

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using React + TypeScript + Tailwind CSS
