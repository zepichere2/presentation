import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Car, Rocket, Brain, Satellite, MessageCircle } from 'lucide-react';

export function AchievementsSlide({ isActive }: SlideProps) {
  const achievements = [
    { 
      icon: Car, 
      name: "Tesla", 
      desc: "Electric vehicles & clean energy",
      color: "#10B981",
      year: "2003"
    },
    { 
      icon: Rocket, 
      name: "SpaceX", 
      desc: "Mars exploration & space travel",
      color: "#3B82F6",
      year: "2002"
    },
    { 
      icon: Brain, 
      name: "Neuralink", 
      desc: "Brain-computer interfaces",
      color: "#8B5CF6",
      year: "2016"
    },
    { 
      icon: Satellite, 
      name: "Starlink", 
      desc: "Global satellite internet",
      color: "#06B6D4",
      year: "2015"
    },
    { 
      icon: MessageCircle, 
      name: "X (Twitter)", 
      desc: "Social media revolution",
      color: "#EC4899",
      year: "2022"
    }
  ];

  return (
    <div className="relative w-full min-h-full flex items-center justify-center overflow-hidden py-8">
      {/* Dynamic Wave Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #262626 100%)"
        }}
      />
      
      {/* Animated Wave Patterns */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${30 + i * 20}% ${50 + i * 10}%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)`
            }}
            animate={isActive ? {
              background: [
                `radial-gradient(circle at ${30 + i * 20}% ${50 + i * 10}%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)`,
                `radial-gradient(circle at ${70 - i * 20}% ${30 - i * 10}%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)`,
                `radial-gradient(circle at ${30 + i * 20}% ${50 + i * 10}%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)`
              ]
            } : {}}
            transition={{ duration: 8 + i * 2, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
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
            Major <span className="text-gradient-red">Achievements</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Building the Future, One Company at a Time
          </motion.p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              className="relative group perspective-1000"
              initial={{ y: 100, opacity: 0, rotateY: -30 }}
              animate={isActive ? { y: 0, opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
            >
              {/* Company Card */}
              <motion.div
                className="relative h-64 dark-glass rounded-xl p-6 interactive-3d cursor-pointer overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: `0 20px 40px ${achievement.color}40`
                }}
                animate={isActive ? {
                  y: [0, -5, 0],
                } : {}}
                transition={{ 
                  y: { 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1 + index * 0.3
                  }
                }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ 
                    background: `radial-gradient(circle at center, ${achievement.color} 0%, transparent 70%)`
                  }}
                />

                {/* Year Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-dark-gray-800 px-2 py-1 rounded text-xs text-dark-gray-400"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isActive ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  {achievement.year}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="relative z-10 flex justify-center mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isActive ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 1, delay: 1 + index * 0.15 }}
                >
                  <motion.div
                    className="relative"
                    animate={isActive ? {
                      rotateZ: [0, 5, -5, 0],
                    } : {}}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2 + index * 0.2
                    }}
                  >
                    <achievement.icon 
                      className="w-16 h-16" 
                      style={{ color: achievement.color }}
                    />
                    
                    {/* Icon Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={isActive ? {
                        boxShadow: [
                          `0 0 0 ${achievement.color}00`,
                          `0 0 30px ${achievement.color}60`,
                          `0 0 0 ${achievement.color}00`
                        ]
                      } : {}}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: 2.5 + index * 0.3
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Company Name */}
                <motion.h3
                  className="responsive-text-2xl font-bold text-center mb-3"
                  style={{ color: achievement.color }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                >
                  {achievement.name}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-center text-dark-gray-300 responsive-text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                >
                  {achievement.desc}
                </motion.p>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-0.5 opacity-50"
                      style={{ 
                        background: `linear-gradient(90deg, transparent 0%, ${achievement.color} 50%, transparent 100%)`,
                        top: `${25 + i * 25}%`,
                        left: 0
                      }}
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            className="dark-glass p-8 rounded-xl max-w-4xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)"
            }}
          >
            <motion.p
              className="responsive-text-lg text-dark-gray-300 leading-relaxed mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 3 }}
            >
              Each venture represents a bold step toward solving humanity&apos;s greatest challenges. 
              From sustainable transport to space exploration, from neural interfaces to global 
              connectivity – Elon Musk doesn&apos;t just build companies, he builds the future.
            </motion.p>

            {/* Impact Stats */}
            <motion.div
              className="flex justify-center gap-8 flex-wrap"
              initial={{ y: 20, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 3.2 }}
            >
              {[
                { value: "5+", label: "Revolutionary Companies" },
                { value: "∞", label: "Global Impact" },
                { value: "100%", label: "Innovation Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 3.5 + index * 0.3
                  }}
                >
                  <div className="responsive-text-3xl font-bold text-accent-red mb-1">
                    {stat.value}
                  </div>
                  <div className="responsive-text-sm text-dark-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {isActive && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: achievements[i % achievements.length].color
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}