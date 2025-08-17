import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Globe, Car, Rocket, Satellite, Zap, Wifi } from 'lucide-react';

export function ContributionsSlide({ isActive, deviceInfo }: SlideProps) {
  const contributions = [
    {
      icon: Car,
      title: "Tesla",
      subtitle: "Clean Energy Revolution",
      description: "Accelerating sustainable transport and energy",
      impact: "Millions of EVs worldwide",
      color: "#10B981"
    },
    {
      icon: Rocket,
      title: "SpaceX",
      subtitle: "Mars Exploration",
      description: "Making life multiplanetary",
      impact: "First reusable rockets",
      color: "#3B82F6"
    },
    {
      icon: Satellite,
      title: "Starlink",
      subtitle: "Global Internet",
      description: "High-speed internet for everyone",
      impact: "4000+ satellites deployed",
      color: "#06B6D4"
    }
  ];

  return (
    <div className="relative w-full min-h-full flex items-center justify-center overflow-hidden py-8">
      {/* Starfield Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-dark-gray-900 via-dark-gray-950 to-black"
      />
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 150 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isActive ? {
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            } : {}}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
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
            Contributions to <span className="text-gradient-red">Nation & World</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Transforming Industries, Changing the World
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Globe Animation */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Central Globe */}
            <div className="relative flex items-center justify-center h-96 perspective-2000">
              {/* Globe Container */}
              <motion.div
                className="relative w-80 h-80"
                initial={{ scale: 0, rotateY: -180 }}
                animate={isActive ? { 
                  scale: 1, 
                  rotateY: 0,
                  rotateX: [0, 5, -5, 0]
                } : {}}
                transition={{ 
                  scale: { duration: 1.5, delay: 1 },
                  rotateY: { duration: 1.5, delay: 1 },
                  rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Globe Base */}
                <motion.div
                  className="absolute inset-0 rounded-full dark-glass overflow-hidden"
                  animate={isActive ? {
                    boxShadow: [
                      "0 0 0 rgba(220, 38, 38, 0)",
                      "0 0 50px rgba(220, 38, 38, 0.4)",
                      "0 0 0 rgba(220, 38, 38, 0)"
                    ]
                  } : {}}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  {/* Globe Grid Lines */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `
                        conic-gradient(from 0deg, 
                          transparent 0deg, rgba(220, 38, 38, 0.3) 1deg, transparent 2deg,
                          transparent 18deg, rgba(220, 38, 38, 0.3) 19deg, transparent 20deg,
                          transparent 38deg, rgba(220, 38, 38, 0.3) 39deg, transparent 40deg,
                          transparent 58deg, rgba(220, 38, 38, 0.3) 59deg, transparent 60deg,
                          transparent 78deg, rgba(220, 38, 38, 0.3) 79deg, transparent 80deg,
                          transparent 98deg, rgba(220, 38, 38, 0.3) 99deg, transparent 100deg,
                          transparent 118deg, rgba(220, 38, 38, 0.3) 119deg, transparent 120deg,
                          transparent 138deg, rgba(220, 38, 38, 0.3) 139deg, transparent 140deg,
                          transparent 158deg, rgba(220, 38, 38, 0.3) 159deg, transparent 160deg,
                          transparent 178deg, rgba(220, 38, 38, 0.3) 179deg, transparent 180deg,
                          transparent 198deg, rgba(220, 38, 38, 0.3) 199deg, transparent 200deg,
                          transparent 218deg, rgba(220, 38, 38, 0.3) 219deg, transparent 220deg,
                          transparent 238deg, rgba(220, 38, 38, 0.3) 239deg, transparent 240deg,
                          transparent 258deg, rgba(220, 38, 38, 0.3) 259deg, transparent 260deg,
                          transparent 278deg, rgba(220, 38, 38, 0.3) 279deg, transparent 280deg,
                          transparent 298deg, rgba(220, 38, 38, 0.3) 299deg, transparent 300deg,
                          transparent 318deg, rgba(220, 38, 38, 0.3) 319deg, transparent 320deg,
                          transparent 338deg, rgba(220, 38, 38, 0.3) 339deg, transparent 340deg,
                          transparent 358deg, rgba(220, 38, 38, 0.3) 359deg, transparent 360deg
                        )`
                    }}
                    animate={isActive ? { rotate: 360 } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Central Globe Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-32 h-32 text-accent-red opacity-80" />
                  </div>
                </motion.div>

                {/* Orbiting Satellites */}
                {isActive && Array.from({ length: 8 }).map((_, index) => {
                  const orbitRadius = 180 + (index % 2) * 25; // Alternate between two orbit levels
                  const speed = 12 + (index * 1.5);
                  const delay = index * 0.8;
                  const startAngle = (index * 45); // Evenly space them at 45-degree intervals

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-8 h-8 flex items-center justify-center pointer-events-none"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        rotate: [startAngle, startAngle + 360],
                      }}
                      transition={{
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                        delay: delay
                      }}
                    >
                      <motion.div
                        className="dark-glass p-2 rounded-full shadow-lg"
                        style={{
                          transform: `translateX(${orbitRadius}px)`,
                          zIndex: 10 + index
                        }}
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          boxShadow: [
                            "0 4px 15px rgba(6, 182, 212, 0.3)",
                            "0 8px 25px rgba(6, 182, 212, 0.5)",
                            "0 4px 15px rgba(6, 182, 212, 0.3)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: delay 
                        }}
                        whileHover={{
                          scale: 1.5,
                          boxShadow: "0 12px 30px rgba(6, 182, 212, 0.6)"
                        }}
                      >
                        <Satellite className="w-4 h-4 text-cyan-400" />
                      </motion.div>
                      
                      {/* Satellite Trail */}
                      <motion.div
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                        style={{
                          transform: `translateX(${orbitRadius - 15}px)`,
                          zIndex: 5
                        }}
                        animate={{
                          opacity: [0, 0.6, 0],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          delay: delay + 0.2
                        }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Impact Rings */}
              {isActive && Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-full border border-accent-red opacity-20"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 2, 3], 
                    opacity: [0.3, 0.1, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 1
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Contributions List */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {contributions.map((contribution, index) => (
              <motion.div
                key={contribution.title}
                className="dark-glass p-6 rounded-xl interactive-3d group"
                initial={{ rotateY: 15, opacity: 0 }}
                animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -2,
                  boxShadow: `0 20px 40px ${contribution.color}40`
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className="relative"
                    animate={isActive ? {
                      rotateZ: [0, 5, -5, 0],
                    } : {}}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: 1 + index * 0.5
                    }}
                  >
                    <contribution.icon 
                      className="w-12 h-12" 
                      style={{ color: contribution.color }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={isActive ? {
                        boxShadow: [
                          `0 0 0 ${contribution.color}00`,
                          `0 0 20px ${contribution.color}60`,
                          `0 0 0 ${contribution.color}00`
                        ]
                      } : {}}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: 1.5 + index * 0.7
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      className="responsive-text-2xl font-bold mb-2"
                      style={{ color: contribution.color }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    >
                      {contribution.title}
                    </motion.h3>
                    
                    <motion.p
                      className="responsive-text-lg text-white mb-2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    >
                      {contribution.subtitle}
                    </motion.p>
                    
                    <motion.p
                      className="text-dark-gray-300 mb-3"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                    >
                      {contribution.description}
                    </motion.p>
                    
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                    >
                      <Zap className="w-4 h-4 text-accent-red" />
                      <span className="responsive-text-sm text-accent-red font-semibold">
                        {contribution.impact}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Progress Bar */}
                <motion.div
                  className="mt-4 w-full bg-dark-gray-700 rounded-full h-1"
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
                >
                  <motion.div
                    className="h-1 rounded-full"
                    style={{ backgroundColor: contribution.color }}
                    initial={{ width: 0 }}
                    animate={isActive ? { width: "100%" } : {}}
                    transition={{ duration: 2, delay: 2 + index * 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* Summary */}
            <motion.div
              className="dark-card p-6 rounded-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.p
                className="responsive-text-lg text-dark-gray-300 leading-relaxed text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 3 }}
              >
                Through revolutionary technologies and bold visions, Elon Musk continues 
                to shape a sustainable future for humanity while expanding our presence 
                beyond Earth.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      {isActive && Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-red rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}