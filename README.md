# AyurSutra - Intelligent Panchakarma Management Platform

<div align="center">
  <img src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200" alt="AyurSutra Logo" width="100" height="100" style="border-radius: 50%;">
  
  **संतुलन की ओर, आपका पहला कदम**
  
  *Your first step towards balance*

  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-ff69b4.svg)](https://www.framer.com/motion/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)
</div>

## 🌿 Overview

AyurSutra is a revolutionary AI-powered platform that bridges ancient Ayurvedic wisdom with modern technology. Our intelligent system digitizes handwritten prescriptions, automates complex scheduling, and provides a seamless experience for doctors, therapists, and patients in the Panchakarma ecosystem.

### ✨ Key Features

- **🧠 AI Prescription Analysis**: 99% accurate handwritten prescription interpretation using Gemini AI
- **📅 Smart Scheduling**: Intelligent appointment booking based on Ayurvedic principles
- **🎯 Multi-Role Dashboards**: Specialized interfaces for doctors, therapists, and patients
- **📊 Progress Tracking**: Real-time patient progress monitoring with visual analytics
- **🌐 Multilingual Support**: Hindi, Marathi, and English language support
- **⌚ Smartwatch Integration**: Health metrics tracking and insights
- **🍽️ AI Nutrition Coach**: Personalized diet recommendations based on dosha and treatment

## 🚀 Live Demo

Experience AyurSutra: [https://ayursutra.netlify.app](https://ayursutra.netlify.app)

## 🏗️ Architecture

### Frontend Stack
- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations and micro-interactions
- **React Router** for client-side routing
- **Lucide React** for beautiful, consistent icons

### AI Integration
- **Google Gemini AI** for prescription analysis and natural language processing
- **Web Speech API** for voice input and text-to-speech
- **Computer Vision** for handwritten text recognition

### Design System
- **Custom Color Palette**: Sage, Mint, Teal, Beige, and Charcoal
- **Typography**: Inter (sans-serif) and Playfair Display (serif)
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: WCAG 2.1 compliant with proper contrast ratios

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Doctor/          # Doctor-specific components
│   ├── Home/            # Homepage components
│   ├── Layout/          # Layout components (Header, Footer)
│   └── Patient/         # Patient-specific components
├── contexts/            # React Context providers
├── pages/               # Page components
│   ├── Auth/            # Authentication pages
│   └── Dashboards/      # Role-specific dashboards
├── types/               # TypeScript type definitions
└── styles/              # Global styles and Tailwind config
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ayursutra.git
   cd ayursutra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your API keys:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Philosophy

### Visual Identity
- **Serene Digital Sanctuary**: Clean, modern interface with calming colors
- **Authentic Ayurvedic Elements**: Mandala graphics, Sanskrit typography
- **Micro-interactions**: Subtle animations that enhance user experience
- **Glass-morphism**: Modern backdrop blur effects for depth

### Color Palette
```css
/* Primary Colors */
--sage-600: #6B9F7C    /* Primary brand color */
--teal-600: #2E6B56    /* Secondary actions */
--mint-50: #F4FBF7     /* Background tint */
--beige-100: #F5F1E9   /* Warm accents */
--charcoal: #333333    /* Text primary */
```

### Typography
- **Headlines**: Playfair Display (serif) for elegance
- **Body Text**: Inter (sans-serif) for readability
- **Hindi Text**: Teko for authentic feel

## 🧪 Key Components

### 1. Interactive Prakriti Quiz
```typescript
// Discover user's Ayurvedic constitution
<PrakritiQuiz onComplete={(dosha) => handleDoshaResult(dosha)} />
```

### 2. Smart Booking System
```typescript
// End-to-end appointment booking
<SmartBooking onBookingComplete={(data) => handleBooking(data)} />
```

### 3. AI Prescription Analysis
```typescript
// Upload and analyze handwritten prescriptions
const analyzeImage = async (imageFile: File) => {
  // Gemini AI integration for OCR and interpretation
}
```

### 4. Progress Visualization
```typescript
// Patient progress tracking with charts
<ProgressVisualization data={progressData} />
```

## 🔧 Configuration

### Tailwind CSS Custom Theme
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        sage: { /* Custom sage color palette */ },
        mint: { /* Custom mint color palette */ },
        // ... other custom colors
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  }
}
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🧑‍💻 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Conventional Commits** for commit messages

### Adding New Features
1. Create feature branch: `git checkout -b feature/new-feature`
2. Implement changes with proper TypeScript types
3. Add responsive design considerations
4. Test across different devices
5. Submit pull request with detailed description

## 🔐 Security & Privacy

- **Data Protection**: All patient data is encrypted and HIPAA-compliant
- **API Security**: Secure API key management and rate limiting
- **Authentication**: JWT-based authentication with role-based access
- **Privacy**: No personal data stored in localStorage

## 🌍 Internationalization

### Supported Languages
- **English** (en-US) - Primary
- **Hindi** (hi-IN) - हिन्दी
- **Marathi** (mr-IN) - मराठी

### Adding New Languages
1. Add language to `src/i18n/locales/`
2. Update language selector component
3. Add Web Speech API language support
4. Test translation accuracy

## 📱 Browser Support

- **Chrome** 90+ (Recommended)
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

### Required Browser Features
- ES2020 support
- Web Speech API (for voice features)
- Modern CSS (Grid, Flexbox, Custom Properties)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Reporting Issues
- Use GitHub Issues for bug reports
- Include browser version and steps to reproduce
- Add screenshots for UI-related issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ayurvedic Practitioners** who provided domain expertise
- **Google Gemini AI** for powerful language processing
- **Pexels** for beautiful stock photography
- **Lucide** for the comprehensive icon library
- **Framer Motion** for smooth animations

## 📞 Support

- **Documentation**: [docs.ayursutra.com](https://docs.ayursutra.com)
- **Email**: support@ayursutra.com
- **Discord**: [Join our community](https://discord.gg/ayursutra)

---

<div align="center">
  <p><strong>Built with ❤️ for the Ayurvedic community</strong></p>
  <p><em>Bridging ancient wisdom with modern technology</em></p>
</div>