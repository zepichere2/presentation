import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Quote, Star, Sparkles, Heart } from 'lucide-react';

export function ConclusionSlide({ isActive, deviceInfo }: SlideProps) {
  const quoteWords = [
    "When", "something", "is", "important", "enough,", "you", "do", "it", 
    "even", "if", "the", "odds", "are", "not", "in", "your", "favor."
  ];

  const sparklePositions = [
    { x: 10, y: 20, delay: 0 },
    { x: 85, y: 15, delay: 0.5 },
    { x: 15, y: 80, delay: 1 },
    { x: 90, y: 75, delay: 1.5 },
    { x: 50, y: 10, delay: 2 },
    { x: 30, y: 90, delay: 2.5 },
    { x: 70, y: 85, delay: 3 },
    { x: 5, y: 50, delay: 3.5 }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Starfield Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-dark-gray-900 via-dark-gray-950 to-black"
      />
      
      {/* Dense Star Field */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isActive ? {
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            } : {}}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Cosmic Dust Clouds */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)`
            }}
            animate={isActive ? {
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            } : {}}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Title */}
        <motion.div
          className="mb-16"
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
            <span className="text-gradient-red">Conclusion</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The Power of Perseverance
          </motion.p>
        </motion.div>

        {/* Main Quote Container */}
        <motion.div
          className="relative mb-16 perspective-2000"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          {/* Quote Background */}
          <motion.div
            className="absolute inset-0 dark-glass rounded-2xl"
            animate={isActive ? {
              boxShadow: [
                "0 0 0 rgba(220, 38, 38, 0)",
                "0 0 60px rgba(220, 38, 38, 0.3)",
                "0 0 0 rgba(220, 38, 38, 0)"
              ]
            } : {}}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />

          {/* Quote Icon */}
          <motion.div
            className="relative z-10 pt-12 pb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <Quote className="w-16 h-16 text-accent-red mx-auto mb-8" />
          </motion.div>

          {/* Animated Quote Text */}
          <motion.div
            className="relative z-10 px-12 pb-12"
          >
            <div className="responsive-text-3xl font-light text-white leading-relaxed">
              {quoteWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3"
                  initial={{ y: 50, opacity: 0, rotateX: -90 }}
                  animate={isActive ? { 
                    y: 0, 
                    opacity: 1, 
                    rotateX: 0,
                    color: index === quoteWords.length - 1 ? "#DC2626" : "#FFFFFF"
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.5 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Quote Attribution */}
            <motion.div
              className="mt-8 text-right"
              initial={{ x: 50, opacity: 0 }}
              animate={isActive ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <div className="responsive-text-xl text-accent-red font-semibold">
                — Elon Musk
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Sparkles */}
          {isActive && sparklePositions.map((pos, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 4 + pos.delay,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 5 }}
        >
          {[
            { 
              icon: Star, 
              title: "Dream Beyond Limits", 
              desc: "Vision creates possibilities",
              color: "#8B5CF6"
            },
            { 
              icon: Heart, 
              title: "Persist Through Failure", 
              desc: "Resilience builds success",
              color: "#10B981"
            },
            { 
              icon: Sparkles, 
              title: "Inspire Others", 
              desc: "Legacy through leadership",
              color: "#F59E0B"
            }
          ].map((takeaway, index) => (
            <motion.div
              key={takeaway.title}
              className="dark-card p-6 rounded-xl interactive-3d text-center"
              initial={{ rotateY: -30, opacity: 0 }}
              animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 5.5 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 20px 40px ${takeaway.color}40`
              }}
            >
              <motion.div
                animate={isActive ? {
                  rotateZ: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: 6 + index * 0.5
                }}
              >
                <takeaway.icon 
                  className="w-12 h-12 mx-auto mb-4" 
                  style={{ color: takeaway.color }}
                />
              </motion.div>
              
              <h3 
                className="responsive-text-xl font-bold mb-2"
                style={{ color: takeaway.color }}
              >
                {takeaway.title}
              </h3>
              <p className="text-dark-gray-300">
                {takeaway.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="dark-glass p-8 rounded-xl max-w-4xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 6.5 }}
        >
          <motion.p
            className="responsive-text-xl text-dark-gray-300 leading-relaxed italic"
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 7 }}
          >
            Elon Musk's journey teaches us that greatness isn't about perfection—
            it's about persistence, vision, and the courage to pursue the impossible. 
            His story continues to inspire millions to dream bigger, work harder, 
            and never give up on changing the world.
          </motion.p>

          <motion.div
            className="mt-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 7.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 text-accent-red font-semibold responsive-text-lg"
              animate={isActive ? {
                scale: [1, 1.05, 1],
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 8
              }}
            >
              <Star className="w-5 h-5" />
              Thank You
              <Star className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Finale Particle Explosion */}
      {isActive && Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: "50%",
            top: "50%",
            backgroundColor: i % 3 === 0 ? '#DC2626' : i % 3 === 1 ? '#FBBF24' : '#8B5CF6'
          }}
          animate={{
            x: (Math.random() - 0.5) * 1000,
            y: (Math.random() - 0.5) * 800,
            opacity: [1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: 8 + Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}