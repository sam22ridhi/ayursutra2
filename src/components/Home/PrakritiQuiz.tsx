import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, User, Heart, Zap } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    dosha: 'vata' | 'pitta' | 'kapha';
    icon: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    options: [
      { text: "Thin, light, delicate", dosha: 'vata', icon: '🌿' },
      { text: "Medium, muscular, athletic", dosha: 'pitta', icon: '🔥' },
      { text: "Large, solid, sturdy", dosha: 'kapha', icon: '🌍' }
    ]
  },
  {
    id: 2,
    question: "How is your appetite typically?",
    options: [
      { text: "Variable, sometimes forget to eat", dosha: 'vata', icon: '🦋' },
      { text: "Strong, get irritable when hungry", dosha: 'pitta', icon: '⚡' },
      { text: "Steady, can skip meals easily", dosha: 'kapha', icon: '🌊' }
    ]
  },
  {
    id: 3,
    question: "How do you handle stress?",
    options: [
      { text: "Get anxious, mind races", dosha: 'vata', icon: '💨' },
      { text: "Get angry, need to take action", dosha: 'pitta', icon: '🌋' },
      { text: "Withdraw, need time to process", dosha: 'kapha', icon: '🏔️' }
    ]
  },
  {
    id: 4,
    question: "What's your sleep pattern like?",
    options: [
      { text: "Light sleeper, mind active at night", dosha: 'vata', icon: '🌙' },
      { text: "Sound sleep, wake up refreshed", dosha: 'pitta', icon: '☀️' },
      { text: "Deep sleeper, hard to wake up", dosha: 'kapha', icon: '😴' }
    ]
  },
  {
    id: 5,
    question: "How do you prefer to learn?",
    options: [
      { text: "Quickly grasp concepts, forget details", dosha: 'vata', icon: '💡' },
      { text: "Focused, methodical, good memory", dosha: 'pitta', icon: '🎯' },
      { text: "Slow but steady, retain well", dosha: 'kapha', icon: '📚' }
    ]
  }
];

const doshaResults = {
  vata: {
    name: 'Vata',
    title: 'The Creative Mover',
    description: 'You are naturally creative, energetic, and adaptable. Your mind is quick and imaginative, but you may need grounding practices to maintain balance.',
    color: 'from-blue-400 to-purple-500',
    icon: <Zap className="w-8 h-8" />,
    traits: ['Creative', 'Energetic', 'Quick-thinking', 'Adaptable']
  },
  pitta: {
    name: 'Pitta',
    title: 'The Focused Achiever',
    description: 'You are naturally driven, intelligent, and goal-oriented. Your strong digestive fire gives you energy, but you need cooling practices for balance.',
    color: 'from-red-400 to-orange-500',
    icon: <Heart className="w-8 h-8" />,
    traits: ['Focused', 'Intelligent', 'Leadership', 'Determined']
  },
  kapha: {
    name: 'Kapha',
    title: 'The Steady Nurturer',
    description: 'You are naturally calm, stable, and nurturing. Your strong constitution provides endurance, but you benefit from energizing practices.',
    color: 'from-green-400 to-teal-500',
    icon: <User className="w-8 h-8" />,
    traits: ['Stable', 'Nurturing', 'Patient', 'Loyal']
  }
};

interface PrakritiQuizProps {
  onComplete?: (result: string) => void;
}

const PrakritiQuiz: React.FC<PrakritiQuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (dosha: string) => {
    setSelectedAnswer(dosha);
    setTimeout(() => {
      const newAnswers = [...answers, dosha];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Calculate result
        const doshaCount = { vata: 0, pitta: 0, kapha: 0 };
        newAnswers.forEach(answer => {
          doshaCount[answer as keyof typeof doshaCount]++;
        });
        
        const dominantDosha = Object.entries(doshaCount).reduce((a, b) => 
          doshaCount[a[0] as keyof typeof doshaCount] > doshaCount[b[0] as keyof typeof doshaCount] ? a : b
        )[0];
        
        setShowResult(true);
        onComplete?.(dominantDosha);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const getDominantDosha = () => {
    const doshaCount = { vata: 0, pitta: 0, kapha: 0 };
    answers.forEach(answer => {
      doshaCount[answer as keyof typeof doshaCount]++;
    });
    
    return Object.entries(doshaCount).reduce((a, b) => 
      doshaCount[a[0] as keyof typeof doshaCount] > doshaCount[b[0] as keyof typeof doshaCount] ? a : b
    )[0] as keyof typeof doshaResults;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm text-sage-600 font-medium">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-sage-500 to-teal-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.dosha)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-center space-x-4 ${
                      selectedAnswer === option.dosha
                        ? 'border-sage-500 bg-sage-50 scale-105'
                        : 'border-gray-200 hover:border-sage-300 hover:bg-sage-50'
                    }`}
                    whileHover={{ scale: selectedAnswer ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="text-charcoal font-medium">{option.text}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Back button */}
            {currentQuestion > 0 && (
              <motion.button
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1);
                  setAnswers(answers.slice(0, -1));
                }}
                className="mt-6 flex items-center space-x-2 text-gray-600 hover:text-sage-600 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous question</span>
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            {(() => {
              const dosha = getDominantDosha();
              const result = doshaResults[dosha];
              
              return (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${result.color} flex items-center justify-center text-white`}
                  >
                    {result.icon}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-3xl font-serif font-bold text-charcoal mb-2">
                      You are {result.name}
                    </h3>
                    <p className="text-xl text-sage-600 mb-4">{result.title}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {result.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {result.traits.map((trait, index) => (
                        <motion.span
                          key={trait}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${result.color}`}
                        >
                          {trait}
                        </motion.span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="w-full bg-gradient-to-r from-sage-600 to-teal-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-sage-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
                        onClick={() => {
                          const bookingSection = document.getElementById('booking');
                          bookingSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <Sparkles className="w-5 h-5" />
                        <span>Get Personalized Consultation</span>
                      </motion.button>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        onClick={resetQuiz}
                        className="w-full border-2 border-gray-300 text-gray-600 font-medium py-3 px-6 rounded-lg hover:border-sage-300 hover:text-sage-600 transition-colors"
                      >
                        Take Quiz Again
                      </motion.button>
                    </div>
                  </motion.div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrakritiQuiz;