import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Camera, 
  Calendar, 
  TrendingUp,
  Leaf,
  Brain,
  Clock,
  Users,
  Heart,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AnimatedBackground from '../components/Home/AnimatedBackground';
import MandalaGraphic from '../components/Home/MandalaGraphic';
import PrakritiQuiz from '../components/Home/PrakritiQuiz';
import SmartBooking from '../components/Home/SmartBooking';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "1. Arogya → AI Pathway Builder",
      description: "AI interprets handwritten notes and auto-builds a personalized, rule-compliant therapy plan."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "2. Samay → Smart Scheduling", 
      description: "Optimizes sessions based on therapist availability, room occupancy, and Ayurveda's body clock."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "3. Setu → Multi-Role Ecosystem",
      description: "Seamless, connected dashboards for doctors, therapists, and patients."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "4. Pragati → Tracking & Feedback",
      description: "Visualize patient progress with real-time logs, feedback, and optional smartwatch integration."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5. Suchna → Guided Engagement",
      description: "Automated pre/post-therapy guidance and a multilingual doubt-resolution assistant."
    }
  ];

  const steps = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Digitize & Understand",
      description: "Scan handwritten prescriptions and let AI interpret treatment plans"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Schedule & Optimize", 
      description: "Auto-schedule therapy sessions based on Ayurvedic principles and availability"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Track & Heal",
      description: "Monitor patient progress and adjust treatments in real-time"
    }
  ];

  const testimonials = [
    {
      quote: "AyurSutra has revolutionized our Panchakarma center. The AI prescription interpretation is incredibly accurate.",
      author: "Dr. Rajesh Sharma",
      clinic: "Vedic Wellness Center, Mumbai",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The smart scheduling feature has improved our efficiency by 60%. Patients love the seamless experience.",
      author: "Dr. Priya Nair", 
      clinic: "Ayur Healing Institute, Kerala",
      image: "https://images.pexels.com/photos/5327654/pexels-photo-5327654.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As a patient, I appreciate the clear guidance and progress tracking. It makes me feel more involved in my healing.",
      author: "Amit Patel",
      clinic: "Patient at Holistic Ayurveda, Pune",
      image: "https://images.pexels.com/photos/6749753/pexels-photo-6749753.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Icon */}
            <div className="flex justify-center mb-8">
              <MandalaGraphic />
            </div>

            {/* Headlines */}
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-charcoal mb-2">
              AyurSutra
            </h1>
            
            {/* Hindi Tagline */}
            <div className="mb-4">
              <h2 className="text-2xl lg:text-4xl text-sage-600 mb-2" style={{ fontFamily: 'Teko, sans-serif', fontWeight: 600 }}>
                संतुलन की ओर, आपका पहला कदम
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 italic">
                Your first step towards balance
              </p>
            </div>
            
            <h3 className="text-xl lg:text-2xl font-serif text-charcoal mb-6">
              Intelligent Ayurveda for Modern Well-being
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the perfect harmony of ancient Ayurvedic wisdom and cutting-edge AI technology. 
              Discover your unique constitution, receive personalized guidance, and embark on a transformative healing journey.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Link
                to="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => {
                  document.getElementById('prakriti-quiz')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 border-2 border-sage-600 text-sage-600 font-semibold rounded-lg hover:bg-sage-600 hover:text-white hover:scale-105 transition-all duration-300 group"
              >
                Discover Your Dosha
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Social Proof */}
            <p className="text-sm text-gray-500">
              Trusted by 500+ practitioners • 10,000+ healing journeys • Ancient wisdom, modern precision
            </p>
          </div>
        </div>
      </section>

      {/* Prakriti Quiz Section */}
      <section id="prakriti-quiz" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Who Are You? Uncover Your Ayurvedic Blueprint
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take our scientifically-designed Prakriti assessment to discover your unique constitution 
              and receive personalized wellness recommendations.
            </p>
          </div>
          
          <PrakritiQuiz onComplete={(result) => {
            console.log('Quiz completed with result:', result);
          }} />
        </div>
      </section>

      {/* Smart Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-sage-50/50 to-beige-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Begin Your Healing Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book your personalized consultation with our experienced Vaidyas. 
              Choose your preferred service, timing, and practitioner in just a few clicks.
            </p>
          </div>
          
          <SmartBooking onBookingComplete={(bookingData) => {
            console.log('Booking completed:', bookingData);
          }} />
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              The Complete Ayurvedic Wellness Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five integrated pillars that work together to create your personalized healing experience
            </p>
            <div className="w-24 h-1 bg-sage-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="h-full p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sage-100 group-hover:border-sage-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sage-600 to-teal-600 text-white rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-mint-50/50 to-sage-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Your Journey in Three Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From discovery to healing, we guide you through every step of your Ayurvedic wellness journey
            </p>
            <div className="w-24 h-1 bg-sage-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-sage-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Doctors & Patients Sections */}
      <section id="for-doctors" className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                Empowering Ayurvedic Practitioners
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal">AI-Powered Prescription Analysis</h4>
                    <p className="text-gray-600">Convert handwritten notes into structured treatment plans instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal">Intelligent Scheduling</h4>
                    <p className="text-gray-600">Optimize therapy sessions based on Ayurvedic timing principles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal">Progress Monitoring</h4>
                    <p className="text-gray-600">Track patient outcomes with comprehensive analytics</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/register" 
                className="inline-flex items-center px-6 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 transition-colors"
              >
                Join as Doctor
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sage-100/80 to-beige-100/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Ayurvedic Doctor" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="for-patients" className="py-20 bg-gradient-to-br from-mint-50/50 to-beige-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-beige-100/80 to-sage-100/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6749753/pexels-photo-6749753.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Patient receiving treatment" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                A Healing Journey Made Simple
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal">Personalized Care Plans</h4>
                    <p className="text-gray-600">Receive treatments tailored to your unique constitution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal">Real-time Progress Tracking</h4>
                    <p className="text-gray-600">Monitor your healing journey with detailed insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal">24/7 Guidance</h4>
                    <p className="text-gray-600">Get multilingual support and therapy instructions anytime</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/register" 
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Trusted by Healing Communities
            </h2>
            <div className="w-24 h-1 bg-sage-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-sage-50/80 to-beige-50/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-charcoal">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.clinic}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sage-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the perfect blend of ancient wisdom and modern technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Start Your Healing Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 hover:scale-105 transition-all duration-300 group"
            >
              Book a Demo for Clinics
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

          >
            Schedule Your Personalized Demo Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;