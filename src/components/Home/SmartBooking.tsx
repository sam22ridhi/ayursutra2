import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  nextAvailable: string;
}

const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Maya Sharma',
    specialty: 'Panchakarma & Stress Management',
    experience: 15,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150',
    nextAvailable: '10:30 AM'
  },
  {
    id: '2',
    name: 'Dr. Rajesh Patel',
    specialty: 'Digestive Disorders & Detox',
    experience: 12,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6749753/pexels-photo-6749753.jpeg?auto=compress&cs=tinysrgb&w=150',
    nextAvailable: '2:00 PM'
  },
  {
    id: '3',
    name: 'Dr. Priya Nair',
    specialty: 'Women\'s Health & Fertility',
    experience: 18,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5327654/pexels-photo-5327654.jpeg?auto=compress&cs=tinysrgb&w=150',
    nextAvailable: '11:15 AM'
  }
];

const services = [
  'Initial Consultation',
  'Abhyanga Massage',
  'Shirodhara Therapy',
  'Panchakarma Detox',
  'Herbal Steam Bath',
  'Nasya Therapy'
];

const timeSlots = ['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 5 PM)', 'Evening (5 PM - 8 PM)'];

interface SmartBookingProps {
  onBookingComplete?: (bookingData: any) => void;
}

const SmartBooking: React.FC<SmartBookingProps> = ({ onBookingComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    timeSlot: '',
    doctor: null as Doctor | null,
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const handleServiceSelect = (service: string) => {
    setBookingData(prev => ({ ...prev, service }));
  };

  const handleDateSelect = (date: string) => {
    setBookingData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (timeSlot: string) => {
    setBookingData(prev => ({ ...prev, timeSlot }));
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setBookingData(prev => ({ ...prev, doctor }));
    setCurrentStep(3);
  };

  const handlePersonalInfoChange = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const handleConfirmBooking = () => {
    setCurrentStep(4);
    onBookingComplete?.(bookingData);
  };

  const canProceedToStep2 = bookingData.service && bookingData.date && bookingData.timeSlot;
  const canConfirmBooking = bookingData.personalInfo.name && bookingData.personalInfo.email && bookingData.personalInfo.phone;

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Progress indicator */}
        <div className="bg-gradient-to-r from-sage-50 to-beige-50 px-8 py-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentStep >= step 
                    ? 'bg-sage-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 transition-colors ${
                    currentStep > step ? 'bg-sage-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Select Service</span>
            <span>Choose Doctor</span>
            <span>Your Details</span>
            <span>Confirmed</span>
          </div>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                    What brings you here today?
                  </h3>
                  <p className="text-gray-600">Select your preferred service and timing</p>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Choose Your Service
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <motion.button
                        key={service}
                        onClick={() => handleServiceSelect(service)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          bookingData.service === service
                            ? 'border-sage-500 bg-sage-50'
                            : 'border-gray-200 hover:border-sage-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="font-medium text-charcoal">{service}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleDateSelect(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                  />
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Time of Day
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <motion.button
                        key={slot}
                        onClick={() => handleTimeSelect(slot)}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          bookingData.timeSlot === slot
                            ? 'border-sage-500 bg-sage-50'
                            : 'border-gray-200 hover:border-sage-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Clock className="w-5 h-5 mx-auto mb-1 text-sage-600" />
                        <span className="text-sm font-medium text-charcoal">{slot}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedToStep2}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                    canProceedToStep2
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  whileHover={canProceedToStep2 ? { scale: 1.02 } : {}}
                  whileTap={canProceedToStep2 ? { scale: 0.98 } : {}}
                >
                  <span>Find Available Doctors</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Doctor Selection */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                    Choose Your Vaidya
                  </h3>
                  <p className="text-gray-600">
                    Available for {bookingData.service} on {new Date(bookingData.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockDoctors.map((doctor) => (
                    <motion.div
                      key={doctor.id}
                      className="bg-gradient-to-br from-sage-50 to-beige-50 rounded-xl p-6 border border-sage-100 cursor-pointer hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDoctorSelect(doctor)}
                    >
                      <div className="text-center">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h4 className="font-semibold text-charcoal mb-1">{doctor.name}</h4>
                        <p className="text-sm text-sage-600 mb-2">{doctor.specialty}</p>
                        
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                          <span className="text-xs text-gray-500">({doctor.experience}+ years)</span>
                        </div>
                        
                        <div className="bg-white rounded-lg p-2 mb-4">
                          <div className="flex items-center justify-center space-x-1 text-green-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">Next: {doctor.nextAvailable}</span>
                          </div>
                        </div>
                        
                        <button className="w-full bg-sage-600 text-white py-2 px-4 rounded-lg hover:bg-sage-700 transition-colors">
                          Book with {doctor.name.split(' ')[1]}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <motion.button
                    onClick={() => setCurrentStep(1)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-sage-600 transition-colors"
                    whileHover={{ x: -5 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back to Service Selection</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Information */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                    Almost There!
                  </h3>
                  <p className="text-gray-600">Just a few details to confirm your booking</p>
                </div>

                {/* Booking Summary */}
                <div className="bg-gradient-to-br from-sage-50 to-beige-50 rounded-xl p-6 border border-sage-100">
                  <h4 className="font-semibold text-charcoal mb-4">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{bookingData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Doctor:</span>
                      <span className="font-medium">{bookingData.doctor?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{new Date(bookingData.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{bookingData.doctor?.nextAvailable}</span>
                    </div>
                  </div>
                </div>

                {/* Personal Information Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={bookingData.personalInfo.name}
                        onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        value={bookingData.personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        value={bookingData.personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between space-x-4">
                  <motion.button
                    onClick={() => setCurrentStep(2)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-sage-600 transition-colors"
                    whileHover={{ x: -5 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back to Doctor Selection</span>
                  </motion.button>

                  <motion.button
                    onClick={handleConfirmBooking}
                    disabled={!canConfirmBooking}
                    className={`py-3 px-8 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                      canConfirmBooking
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={canConfirmBooking ? { scale: 1.02 } : {}}
                    whileTap={canConfirmBooking ? { scale: 0.98 } : {}}
                  >
                    <span>Confirm Your Booking</span>
                    <CheckCircle className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Success */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">
                    Booking Confirmed! 🎉
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Your session with {bookingData.doctor?.name} is confirmed for{' '}
                    {new Date(bookingData.date).toLocaleDateString()} at {bookingData.doctor?.nextAvailable}
                  </p>

                  <div className="bg-gradient-to-br from-sage-50 to-beige-50 rounded-xl p-6 border border-sage-100 mb-6">
                    <h4 className="font-semibold text-charcoal mb-3">What's Next?</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-sage-600" />
                        <span>Calendar invite sent to {bookingData.personalInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-sage-600" />
                        <span>Location details and preparation guide included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-sage-600" />
                        <span>SMS reminder will be sent 24 hours before</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => {
                      setCurrentStep(1);
                      setBookingData({
                        service: '',
                        date: '',
                        timeSlot: '',
                        doctor: null,
                        personalInfo: { name: '', email: '', phone: '' }
                      });
                    }}
                    className="bg-sage-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-sage-700 transition-colors"
                  >
                    Book Another Session
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default SmartBooking;