import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Lightbulb, Heart, BookOpen, Target, TrendingUp, Star } from 'lucide-react';

export function InspirationSlide({ isActive }: SlideProps) {
  const inspirations = [
    {
      icon: Target,
      title: "Dream Big",
      description: "Set audacious goals that seem impossible",
      personal: "Mars missions inspire my space fascination",
      color: "#8B5CF6"
    },
    {
      icon: TrendingUp,
      title: "Stay Disciplined",
      description: "Maintain unwavering focus and work ethic",
      personal: "80-hour weeks teach dedication",
      color: "#10B981"
    },
    {
      icon: Heart,
      title: "Embrace Failure",
      description: "Turn setbacks into stepping stones",
      personal: "Rocket failures led to breakthroughs",
      color: "#F59E0B"
    },
    {
      icon: BookOpen,
      title: "Never Stop Learning",
      description: "Continuously expand knowledge and skills",
      personal: "Reading everything from rockets to AI",
      color: "#06B6D4"
    }
  ];

  const motivationalWords = [
    "INNOVATE", "PERSIST", "ACHIEVE", "INSPIRE", "CREATE", "LEAD"
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Galaxy Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-dark-gray-950 to-dark-gray-900"
        animate={isActive ? {
          background: [
            "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.2) 0%, #0A0A0A 50%)",
            "radial-gradient(circle at 60% 40%, rgba(220, 38, 38, 0.2) 0%, #0A0A0A 50%)",
            "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.2) 0%, #0A0A0A 50%)"
          ]
        } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isActive ? {
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            } : {}}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h2
            className="responsive-text-5xl font-bold mb-4 title-3d"
            animate={isActive ? {
              textShadow: [
                "0 5px 10px rgba(220, 38, 38, 0.3)",
                "0 10px 20px rgba(220, 38, 38, 0.5)",
                "0 5px 10px rgba(220, 38, 38, 0.3)"
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            How He <span className="text-gradient-red">Inspires Me</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Personal Motivation & Life Lessons
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Personal Inspiration Visual */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Central Student Silhouette with Idea Bulb */}
            <div className="relative flex items-center justify-center h-96 perspective-2000">
              {/* Student Figure */}
              <motion.div
                className="relative w-24 h-32 dark-glass rounded-t-full flex items-center justify-center"
                initial={{ scale: 0, rotateY: -45 }}
                animate={isActive ? { 
                  scale: 1, 
                  rotateY: 0,
                  y: [0, -5, 0]
                } : {}}
                transition={{ 
                  scale: { duration: 1.5, delay: 1 },
                  rotateY: { duration: 1.5, delay: 1 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Head */}
                <div className="w-8 h-8 bg-accent-red rounded-full opacity-80" />
              </motion.div>

              {/* Idea Bulb Above Head */}
              <motion.div
                className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-full"
                initial={{ scale: 0, y: 20, opacity: 0 }}
                animate={isActive ? { 
                  scale: 1, 
                  y: 0, 
                  opacity: 1,
                  rotateZ: [0, 5, -5, 0]
                } : {}}
                transition={{ 
                  scale: { duration: 1, delay: 2 },
                  y: { duration: 1, delay: 2 },
                  opacity: { duration: 1, delay: 2 },
                  rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <motion.div
                  className="relative"
                  animate={isActive ? {
                    boxShadow: [
                      "0 0 0 rgba(220, 38, 38, 0)",
                      "0 0 40px rgba(220, 38, 38, 0.6)",
                      "0 0 0 rgba(220, 38, 38, 0)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                >
                  <Lightbulb className="w-16 h-16 text-yellow-400" />
                  
                  {/* Sparkling Effect */}
                  {isActive && Array.from({ length: 8 }).map((_, index) => {
                    const angle = index * 45;
                    const radius = 30;
                    const x = Math.cos(angle * Math.PI / 180) * radius;
                    const y = Math.sin(angle * Math.PI / 180) * radius;

                    return (
                      <motion.div
                        key={index}
                        className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 3.5 + index * 0.1,
                        }}
                      />
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Floating Motivational Words */}
              {isActive && motivationalWords.map((word, index) => {
                const angle = (index * 60) - 30;
                const radius = 140 + (index % 2) * 20;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;

                return (
                  <motion.div
                    key={word}
                    className="absolute responsive-text-sm font-bold text-accent-red opacity-70"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                    initial={{ scale: 0, opacity: 0, rotateZ: -90 }}
                    animate={{
                      scale: 1,
                      opacity: 0.7,
                      rotateZ: 0,
                      y: [0, -10, 0],
                    }}
                    transition={{
                      scale: { duration: 0.8, delay: 4 + index * 0.2 },
                      opacity: { duration: 0.8, delay: 4 + index * 0.2 },
                      rotateZ: { duration: 0.8, delay: 4 + index * 0.2 },
                      y: { 
                        duration: 3 + index * 0.2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 4.5 + index * 0.1
                      }
                    }}
                  >
                    {word}
                  </motion.div>
                );
              })}

              {/* Inspiration Rays */}
              {isActive && Array.from({ length: 12 }).map((_, index) => {
                const angle = index * 30;
                
                return (
                  <motion.div
                    key={`ray-${index}`}
                    className="absolute w-0.5 bg-gradient-to-r from-accent-red to-transparent opacity-20"
                    style={{
                      left: '50%',
                      top: '50%',
                      height: '100px',
                      transformOrigin: 'top center',
                      transform: `translate(-50%, 0) rotate(${angle}deg)`
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                      scaleY: [0, 1, 0], 
                      opacity: [0, 0.3, 0] 
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 5 + index * 0.1,
                    }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Right - Inspiration Points */}
          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {inspirations.map((inspiration, index) => (
              <motion.div
                key={inspiration.title}
                className="dark-glass p-6 rounded-xl interactive-3d group"
                initial={{ rotateY: 15, opacity: 0 }}
                animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -3,
                  boxShadow: `0 20px 40px ${inspiration.color}40`
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className="relative flex-shrink-0"
                    animate={isActive ? {
                      rotateZ: [0, 10, -10, 0],
                    } : {}}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      delay: 1 + index * 0.7
                    }}
                  >
                    <inspiration.icon 
                      className="w-10 h-10" 
                      style={{ color: inspiration.color }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={isActive ? {
                        boxShadow: [
                          `0 0 0 ${inspiration.color}00`,
                          `0 0 25px ${inspiration.color}60`,
                          `0 0 0 ${inspiration.color}00`
                        ]
                      } : {}}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: 1.5 + index * 0.8
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      className="responsive-text-xl font-bold mb-2"
                      style={{ color: inspiration.color }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    >
                      {inspiration.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-dark-gray-300 mb-3 responsive-text-base"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    >
                      {inspiration.description}
                    </motion.p>
                    
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                    >
                      <Star className="w-4 h-4 text-accent-red" />
                      <span className="text-accent-red responsive-text-sm italic">
                        {inspiration.personal}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Personal Connection Line */}
                <motion.div
                  className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20"
                  initial={{ scaleX: 0 }}
                  animate={isActive ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.4 + index * 0.2 }}
                  style={{ color: inspiration.color }}
                />
              </motion.div>
            ))}

            {/* Personal Reflection */}
            <motion.div
              className="dark-card p-8 rounded-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 3 }}
              >
                <Heart className="w-8 h-8 text-accent-red mx-auto mb-4" />
                <motion.p
                  className="responsive-text-lg text-dark-gray-300 leading-relaxed italic"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 3.2 }}
                >
                  &quot;Elon Musk doesn&apos;t just build companies or products – he builds hope. 
                  He shows us that with enough determination, vision, and hard work, 
                  we can turn our wildest dreams into reality. His journey inspires 
                  me to push beyond my comfort zone and aim for the impossible.&quot;
                </motion.p>
                <motion.div
                  className="mt-6 text-accent-red font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 3.4 }}
                >
                  - My Personal Inspiration
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Inspiration Particles */}
      {isActive && Array.from({ length: 35 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? '#DC2626' : '#FBBF24'
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.5, 1, 0.5],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}