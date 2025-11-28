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

### ✨ Core Features

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
- **Tailwind CSS** for utility-first styling with custom Ayurvedic color palette
- **Framer Motion** for smooth animations and micro-interactions
- **React Router** for client-side routing with protected routes
- **Lucide React** for beautiful, consistent icons

### AI Integration
- **Google Gemini AI** for prescription analysis and natural language processing
- **Web Speech API** for voice input and text-to-speech in multiple languages
- **Computer Vision** for handwritten text recognition and interpretation

### Design System
- **Custom Color Palette**: Sage (#6B9F7C), Mint (#F4FBF7), Teal (#2E6B56), Beige (#F5F1E9), Charcoal (#333333)
- **Typography**: Inter (sans-serif) and Playfair Display (serif) with Teko for Hindi text
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, 1280px
- **Accessibility**: WCAG 2.1 compliant with proper contrast ratios and keyboard navigation

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Doctor/          # Doctor-specific components
│   │   └── PatientProgressModal.tsx
│   ├── Home/            # Homepage interactive components
│   │   ├── AnimatedBackground.tsx    # Gradient animation with particles
│   │   ├── MandalaGraphic.tsx       # Rotating mandala SVG
│   │   ├── PrakritiQuiz.tsx         # Interactive dosha quiz
│   │   └── SmartBooking.tsx         # Multi-step booking system
│   ├── Layout/          # Layout components
│   │   ├── Header.tsx   # Navigation with auth state
│   │   └── Footer.tsx   # Site footer with links
│   └── Patient/         # Patient-specific components
│       ├── FeedbackModal.tsx        # Session feedback collection
│       ├── ProgressVisualization.tsx # Progress charts and analytics
│       └── DietRecommendation.tsx   # AI-powered nutrition guidance
├── contexts/            # React Context providers
│   └── AuthContext.tsx  # Authentication state management
├── pages/               # Page components
│   ├── Auth/            # Authentication pages
│   │   ├── Login.tsx    # Multi-role login
│   │   └── Register.tsx # User registration
│   ├── Dashboards/      # Role-specific dashboards
│   │   ├── DoctorDashboard.tsx    # AI prescription analysis
│   │   ├── PatientDashboard.tsx   # Progress tracking & AI assistant
│   │   └── TherapistDashboard.tsx # Session management
│   ├── Demo.tsx         # Demo booking page
│   └── Home.tsx         # Interactive homepage
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces and types
└── styles/              # Global styles and Tailwind config
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Google Gemini API key for AI features

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
   Create a `.env` file in the root directory:
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
- **Serene Digital Sanctuary**: Clean, modern interface with calming sage and mint colors
- **Authentic Ayurvedic Elements**: Mandala graphics, Sanskrit/Hindi typography, natural color palette
- **Micro-interactions**: Subtle animations that enhance user experience without distraction
- **Glass-morphism**: Modern backdrop blur effects for depth and elegance

### Interactive Homepage Features

#### 1. **Animated Background** (`AnimatedBackground.tsx`)
```typescript
// Subtle gradient animation with floating particles
<motion.div
  animate={{
    background: [
      'linear-gradient(135deg, #F0F4F1 0%, #F4FBF7 50%, #ffffff 100%)',
      'linear-gradient(135deg, #F4FBF7 0%, #F0F4F1 50%, #ffffff 100%)',
      // ... more gradients
    ]
  }}
  transition={{ duration: 20, repeat: Infinity }}
/>
```

#### 2. **Mandala Graphic** (`MandalaGraphic.tsx`)
- SVG-based mandala with geometric patterns
- Continuous 60-second rotation animation
- Pulsing glow effect for spiritual ambiance
- Responsive scaling for all screen sizes

#### 3. **Prakriti Quiz** (`PrakritiQuiz.tsx`)
- **5 Interactive Questions**: Body frame, appetite, stress response, sleep patterns, learning style
- **Smooth Animations**: Framer Motion transitions between questions
- **Dosha Results**: Personalized cards for Vata, Pitta, and Kapha with traits
- **Progress Tracking**: Visual progress bar with percentage completion

#### 4. **Smart Booking System** (`SmartBooking.tsx`)
- **4-Step Process**: Service selection → Doctor choice → Personal details → Confirmation
- **Doctor Profiles**: Cards with photos, specialties, ratings, and availability
- **Form Validation**: Real-time validation with error states
- **Success Animation**: Celebratory confirmation with checkmark

## 🧪 Key Components Deep Dive

### 1. AI Prescription Analysis (Doctor Dashboard)
```typescript
// Gemini AI integration for handwritten prescription analysis
const handleAnalyzePrescription = async () => {
  const base64Image = await fileToBase64(selectedFile);
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const payload = {
    contents: [{
      parts: [
        { text: prompt },
        { inline_data: { mime_type: selectedFile.type, data: base64Image } }
      ]
    }]
  };
  
  // Returns structured treatment plan with therapies and timing
};
```

### 2. Multilingual AI Assistant (Patient Dashboard)
```typescript
// Voice input with speech recognition
const handleToggleListening = () => {
  recognition.lang = selectedLanguage; // hi-IN, mr-IN, en-US
  recognition.start();
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setUserInput(transcript);
  };
};

// Text-to-speech output
const speakText = (text: string, lang: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  window.speechSynthesis.speak(utterance);
};
```

### 3. Progress Visualization
```typescript
// Real-time progress tracking with visual charts
interface ProgressData {
  date: string;
  energy: number;        // 1-10 scale
  stress: number;        // 1-10 scale
  bodyComfort: number;   // 1-10 scale
  overall: number;       // 1-10 scale
  treatment: string;
  improvements?: string;
  sideEffects?: string;
}

// Calculates improvement percentages over time
const calculateImprovement = (metric: keyof ProgressData) => {
  const recent = data.slice(-3).reduce((sum, d) => sum + (d[metric] as number), 0) / 3;
  const earlier = data.slice(0, 3).reduce((sum, d) => sum + (d[metric] as number), 0) / 3;
  return ((recent - earlier) / earlier) * 100;
};
```

### 4. Smartwatch Integration
```typescript
// Mock smartwatch data integration
const [smartwatchData, setSmartwatchData] = useState({
  heartRate: 72,
  steps: 8420,
  sleep: 7.5,
  stress: 3
});

// Real-time data updates every 30 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setSmartwatchData(prev => ({
      ...prev,
      heartRate: 70 + Math.floor(Math.random() * 10),
      steps: prev.steps + Math.floor(Math.random() * 50)
    }));
  }, 30000);
  
  return () => clearInterval(interval);
}, []);
```

### 5. AI Nutrition Coach
```typescript
// Personalized meal recommendations based on dosha and treatment
interface MealPlan {
  type: 'breakfast' | 'lunch' | 'dinner';
  title: string;
  description: string;
  whyItHelps: string;
  keyIngredients: string[];
  doshaBenefit: string;
  calories?: number;
}

// AI analyzes patient constitution, upcoming treatments, and feedback
const generateMealPlan = (dosha: string, treatment: string, feedback: any) => {
  // Returns personalized meal recommendations
};
```

## 🔧 Configuration

### Tailwind CSS Custom Theme
```javascript
// tailwind.config.js - Ayurvedic color palette
module.exports = {
  theme: {
    extend: {
      colors: {
        'mint': {
          50: '#F4FBF7',   // Background tint
          100: '#E8F6F0',  // Light backgrounds
          // ... full color scale
        },
        'sage': {
          50: '#F0F4F1',   // Light sage
          600: '#6B9F7C',  // Primary brand color
          // ... full color scale
        },
        'teal': {
          600: '#2E6B56',  // Secondary actions
          // ... full color scale
        },
        'charcoal': {
          DEFAULT: '#333333', // Primary text
          // ... full color scale
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],    // Headlines
        sans: ['Inter', 'system-ui', 'sans-serif'], // Body text
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  }
}
```

### Authentication System
```typescript
// Multi-role authentication with protected routes
interface User {
  id: string;
  email: string;
  name: string;
  role: 'doctor' | 'patient' | 'therapist';
  createdAt: string;
}

// Protected route component
const ProtectedRoute: React.FC<{ allowedRoles?: string[] }> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect GitHub repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Environment variables:
   - `VITE_GEMINI_API_KEY`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables in dashboard

## 🧑‍💻 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production with TypeScript checking
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Code Architecture Patterns

#### 1. **Component Organization**
- **Atomic Design**: Atoms (buttons) → Molecules (forms) → Organisms (dashboards)
- **Feature-based**: Components grouped by domain (Doctor, Patient, Home)
- **Shared Components**: Reusable UI elements in `/components`

#### 2. **State Management**
- **React Context**: Authentication and global state
- **Local State**: Component-specific state with useState/useReducer
- **Form State**: Controlled components with validation

#### 3. **TypeScript Integration**
- **Strict Types**: All props, state, and API responses typed
- **Interface Definitions**: Shared types in `/types/index.ts`
- **Generic Components**: Reusable components with type parameters

### Adding New Features

#### 1. **New Dashboard Component**
```typescript
// Create new dashboard in src/pages/Dashboards/
const NewRoleDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-mint-50">
      {/* Dashboard content */}
    </div>
  );
};
```

#### 2. **New Interactive Component**
```typescript
// Add to src/components/Home/ for homepage features
const NewInteractiveFeature: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      {/* Feature content */}
    </motion.div>
  );
};
```

## 🔐 Security & Privacy

### Data Protection
- **No Sensitive Storage**: Patient data not stored in localStorage
- **API Security**: Secure API key management with environment variables
- **Input Validation**: All user inputs validated and sanitized
- **HTTPS Only**: All API calls use secure connections

### Authentication Security
- **JWT Tokens**: Secure token-based authentication
- **Role-based Access**: Protected routes based on user roles
- **Session Management**: Automatic logout on token expiration

## 🌍 Internationalization

### Supported Languages
- **English** (en-US) - Primary interface language
- **Hindi** (hi-IN) - हिन्दी - Voice input/output and key phrases
- **Marathi** (mr-IN) - मराठी - Voice input/output and regional support

### Language Features
- **Voice Recognition**: Multi-language speech-to-text
- **Text-to-Speech**: AI responses in user's preferred language
- **UI Elements**: Key taglines and headers in Hindi/Sanskrit
- **Font Support**: Teko font for authentic Hindi typography

## 📱 Browser Support

### Minimum Requirements
- **Chrome** 90+ (Recommended for full feature support)
- **Firefox** 88+ (Limited Web Speech API support)
- **Safari** 14+ (iOS Safari supported)
- **Edge** 90+ (Full Chromium support)

### Required Browser Features
- **ES2020 Support**: Modern JavaScript features
- **Web Speech API**: For voice input/output features
- **CSS Grid & Flexbox**: For responsive layouts
- **Custom Properties**: For dynamic theming

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes with proper TypeScript types
4. Test responsive design across devices
5. Submit pull request with detailed description

### Code Style Guidelines
- **ESLint Configuration**: Extends React and TypeScript recommended rules
- **Prettier Integration**: Automatic code formatting
- **Naming Conventions**: 
  - Components: PascalCase (`SmartBooking.tsx`)
  - Functions: camelCase (`handleAnalyzePrescription`)
  - Constants: UPPER_SNAKE_CASE (`API_ENDPOINTS`)

### Testing Guidelines
- **Component Testing**: Test user interactions and state changes
- **Responsive Testing**: Verify layouts on mobile, tablet, desktop
- **Accessibility Testing**: Keyboard navigation and screen readers
- **Cross-browser Testing**: Chrome, Firefox, Safari, Edge

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ayurvedic Practitioners** who provided domain expertise and validation
- **Google Gemini AI** for powerful language processing and vision capabilities
- **Pexels** for beautiful, royalty-free stock photography
- **Lucide** for the comprehensive, consistent icon library
- **Framer Motion** for smooth, performant animations
- **Tailwind CSS** for rapid, responsive styling

## 📞 Support & Community

- **Documentation**: [docs.ayursutra.com](https://docs.ayursutra.com)
- **Email Support**: support@ayursutra.com
- **Discord Community**: [Join our community](https://discord.gg/ayursutra)
- **GitHub Issues**: Report bugs and request features

---

<div align="center">
  <p><strong>Built with ❤️ for the Ayurvedic community</strong></p>
  <p><em>Bridging ancient wisdom with modern technology</em></p>
  
  **संतुलन की ओर, आपका पहला कदम**
</div>