# Golden Bites - Vegan Food Delivery 🌱

**Author:** ABU AHAD ANTON (3a7anton)

A modern, responsive vegan food delivery website built with React, TypeScript, and Vite. Featuring smooth scrolling animations powered by GSAP and Lenis.

🌐 **Live Demo:** [https://delve-golden-bites.netlify.app/](https://delve-golden-bites.netlify.app/)

## ✨ Features

- 🌱 **Vegan Food Focus** - Carefully curated selection of delicious vegan meals
- 📱 **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- 🌟 **Smooth Animations** - GSAP-powered scroll animations and micro-interactions
- 🛍️ **Product Showcase** - Interactive product cards with hover effects and filtering
- 📝 **Contact Form** - Functional contact form with validation
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 🎨 **Modern UI** - Clean design with Tailwind CSS and shadcn/ui components
- 🚀 **Smooth Scrolling** - Lenis integration for buttery smooth navigation

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Animations:** GSAP, Lenis (smooth scrolling)
- **UI Components:** shadcn/ui
- **Package Manager:** Bun
- **Deployment:** Netlify

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── ProductCard.tsx # Product display component with animations
│   ├── BlogPostCard.tsx# Blog post component
│   ├── ContactForm.tsx # Contact form component
│   └── SmoothScrollProvider.tsx # Smooth scroll wrapper
├── pages/              # Page components
│   ├── Index.tsx       # Home page with hero section
│   ├── Shop.tsx        # Products page with filtering
│   ├── Blog.tsx        # Blog page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── useGSAPAnimation.ts # GSAP animation hooks
│   ├── useSmoothScroll.ts  # Smooth scrolling hook
│   └── use-mobile.tsx      # Mobile detection hook
├── lib/                # Utility functions
│   ├── utils.ts        # General utilities
│   └── animations.ts   # GSAP animation helpers
└── App.tsx             # Main application component
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/3a7anton/delve-golden-bites.git
   cd delve-golden-bites
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start development server:**
   ```bash
   bun run dev
   ```

4. **Build for production:**
   ```bash
   bun run build
   ```

5. **Preview production build:**
   ```bash
   bun run preview
   ```

## 🎨 Design Highlights

- **Brand Colors:** Warm golden tones (#F59E0B, #FCD34D) representing quality and natural ingredients
- **Typography:** Clean, modern fonts with excellent readability
- **Animations:** Subtle, performance-optimized GSAP animations that enhance UX
- **Mobile-First:** Responsive design ensuring great experience across all devices
- **Accessibility:** Built with semantic HTML and ARIA labels for screen readers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

**ABU AHAD ANTON**
- GitHub: [@3a7anton](https://github.com/3a7anton)
- Website: [https://delve-golden-bites.netlify.app/](https://delve-golden-bites.netlify.app/)
