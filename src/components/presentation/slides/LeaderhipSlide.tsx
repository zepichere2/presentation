import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Users, Eye, ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';

export function LeadershipSlide({ isActive }: SlideProps) {
  const leadershipTraits = [
    {
      icon: Eye,
      title: "Visionary Thinking",
      description: "Sees possibilities where others see impossibilities",
      example: "Mars colonization by 2024",
      color: "#8B5CF6"
    },
    {
      icon: Users,
      title: "Team Inspiration",
      description: "Motivates teams to achieve extraordinary goals",
      example: "SpaceX's rapid innovation cycles",
      color: "#10B981"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Sets ambitious targets and relentlessly pursues them",
      example: "Tesla's production milestones",
      color: "#F59E0B"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driver",
      description: "Challenges conventional thinking and methods",
      example: "Reusable rocket technology",
      color: "#06B6D4"
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #262626 100%)"
        }}
        animate={isActive ? {
          background: [
            "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #262626 100%)",
            "linear-gradient(135deg, #171717 0%, #0A0A0A 50%, #DC2626 100%)",
            "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #262626 100%)"
          ]
        } : {}}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
            Leadership & <span className="text-gradient-red">Vision</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Inspiring Tomorrow&apos;s Possibilities
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Leadership Visualization */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Central Leader Figure */}
            <div className="relative flex items-center justify-center h-96 perspective-2000">
              {/* Leader Silhouette */}
              <motion.div
                className="relative w-32 h-40 dark-glass rounded-t-full flex items-end justify-center perspective-1000"
                initial={{ scale: 0, rotateY: -90 }}
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
                {/* Leader Icon */}
                <motion.div
                  className="relative"
                  animate={isActive ? {
                    boxShadow: [
                      "0 0 0 rgba(220, 38, 38, 0)",
                      "0 0 30px rgba(220, 38, 38, 0.5)",
                      "0 0 0 rgba(220, 38, 38, 0)"
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  <Users className="w-16 h-16 text-accent-red" />
                </motion.div>
              </motion.div>

              {/* Vision Beam */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 2 }}
              >
                <motion.div
                  className="w-2 bg-gradient-to-r from-accent-red to-transparent rounded-full"
                  style={{ height: '200px', transformOrigin: 'left center' }}
                  initial={{ scaleX: 0, rotate: 0 }}
                  animate={isActive ? { 
                    scaleX: 1,
                    rotate: [0, 15, -15, 0]
                  } : {}}
                  transition={{ 
                    scaleX: { duration: 1.5, delay: 2.5 },
                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </motion.div>

              {/* Surrounding Team Members */}
              {Array.from({ length: 6 }).map((_, index) => {
                const angle = (index * 60) - 90; // Start from top
                const radius = 120;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-8 h-8 dark-glass rounded-full flex items-center justify-center"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isActive ? { 
                      scale: 1, 
                      opacity: 1,
                      y: [0, -3, 0]
                    } : {}}
                    transition={{ 
                      scale: { duration: 0.6, delay: 3 + index * 0.1 },
                      opacity: { duration: 0.6, delay: 3 + index * 0.1 },
                      y: { 
                        duration: 2 + index * 0.2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 3.5 + index * 0.1
                      }
                    }}
                  >
                    <div className="w-4 h-4 bg-accent-red rounded-full" />
                  </motion.div>
                );
              })}

              {/* Connecting Lines */}
              {isActive && Array.from({ length: 6 }).map((_, index) => {
                const angle = (index * 60) - 90;
                
                return (
                  <motion.div
                    key={`line-${index}`}
                    className="absolute w-0.5 bg-gradient-to-r from-accent-red to-transparent opacity-30"
                    style={{
                      left: '50%',
                      top: '50%',
                      height: '120px',
                      transformOrigin: 'top center',
                      transform: `translate(-50%, 0) rotate(${angle}deg)`
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: 3.5 + index * 0.1 }}
                  />
                );
              })}

              {/* Forward Arrow */}
              <motion.div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8"
                initial={{ x: -20, opacity: 0 }}
                animate={isActive ? { 
                  x: 0, 
                  opacity: 1,
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{ 
                  x: { duration: 1, delay: 4 },
                  opacity: { duration: 1, delay: 4 },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <ArrowRight className="w-12 h-12 text-accent-red" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Leadership Traits */}
          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {leadershipTraits.map((trait, index) => (
              <motion.div
                key={trait.title}
                className="dark-glass p-6 rounded-xl interactive-3d group"
                initial={{ rotateY: 10, opacity: 0 }}
                animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -2,
                  boxShadow: `0 15px 30px ${trait.color}40`
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className="relative flex-shrink-0"
                    animate={isActive ? {
                      rotateZ: [0, 5, -5, 0],
                    } : {}}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: 1 + index * 0.5
                    }}
                  >
                    <trait.icon 
                      className="w-10 h-10" 
                      style={{ color: trait.color }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={isActive ? {
                        boxShadow: [
                          `0 0 0 ${trait.color}00`,
                          `0 0 20px ${trait.color}50`,
                          `0 0 0 ${trait.color}00`
                        ]
                      } : {}}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: 1.5 + index * 0.5
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      className="responsive-text-xl font-bold mb-2"
                      style={{ color: trait.color }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    >
                      {trait.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-dark-gray-300 mb-3"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    >
                      {trait.description}
                    </motion.p>
                    
                    <motion.div
                      className="flex items-center gap-2 text-accent-red responsive-text-sm"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>{trait.example}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${trait.color}10, transparent)`
                  }}
                />
              </motion.div>
            ))}

            {/* Leadership Quote */}
            <motion.div
              className="dark-card p-8 rounded-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 3 }}
              >
                <div className="absolute top-0 left-0 text-6xl text-accent-red opacity-20">&quot;</div>
                <motion.blockquote
                  className="responsive-text-lg text-dark-gray-300 italic pl-8 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 3.2 }}
                >
                  Great companies are built on great products. But great products 
                  are built by great teams, and great teams are led by great leaders 
                  who inspire others to achieve the impossible.
                </motion.blockquote>
                <motion.cite
                  className="block text-right text-accent-red mt-4 font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 3.4 }}
                >
                  - Leadership Philosophy
                </motion.cite>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      {isActive && Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-red rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.5, 1.2, 0.5],
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