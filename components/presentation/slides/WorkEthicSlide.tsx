import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Clock, Battery, Zap, Target, TrendingUp } from 'lucide-react';

export function WorkEthicSlide({ isActive, deviceInfo }: SlideProps) {
  const workStats = [
    { value: "80-100", unit: "Hours/Week", icon: Clock, color: "#DC2626" },
    { value: "365", unit: "Days/Year", icon: Battery, color: "#F59E0B" },
    { value: "24/7", unit: "Dedication", icon: Zap, color: "#10B981" },
    { value: "100%", unit: "Passion", icon: Target, color: "#8B5CF6" }
  ];

  const principles = [
    "First principles thinking",
    "Relentless iteration", 
    "High standards for excellence",
    "Learning from failures",
    "Long-term vision focus"
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-gray-950 via-dark-gray-900 to-dark-gray-800"
      />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-accent-red rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isActive ? {
              y: [0, -100, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.5, 1, 0.5],
            } : {}}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
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
            Work Ethic & <span className="text-gradient-red">Discipline</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Relentless Dedication to Excellence
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Clock & Stats Animation */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Central Clock */}
            <div className="relative flex items-center justify-center h-96">
              {/* Clock Face */}
              <motion.div
                className="relative w-64 h-64 dark-glass rounded-full flex items-center justify-center perspective-1000"
                initial={{ scale: 0, rotate: -180 }}
                animate={isActive ? { 
                  scale: 1, 
                  rotate: 0,
                  boxShadow: [
                    "0 0 0 rgba(220, 38, 38, 0)",
                    "0 0 40px rgba(220, 38, 38, 0.5)",
                    "0 0 0 rgba(220, 38, 38, 0)"
                  ]
                } : {}}
                transition={{ 
                  scale: { duration: 1.5, delay: 1 },
                  rotate: { duration: 1.5, delay: 1 },
                  boxShadow: { duration: 3, repeat: Infinity, delay: 2 }
                }}
              >
                {/* Clock Numbers */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30) - 90; // Start from top (12 o'clock)
                  const radius = 100;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 flex items-center justify-center text-accent-red font-bold"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                    >
                      {i === 0 ? 12 : i}
                    </motion.div>
                  );
                })}

                {/* Clock Hands */}
                <motion.div
                  className="absolute w-1 bg-accent-red rounded-full origin-bottom"
                  style={{ height: '80px', bottom: '50%', left: '50%', transformOrigin: 'bottom center' }}
                  initial={{ rotate: 0, scale: 0 }}
                  animate={isActive ? { 
                    rotate: 360,
                    scale: 1
                  } : {}}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.8, delay: 2 }
                  }}
                />
                
                <motion.div
                  className="absolute w-0.5 bg-white rounded-full origin-bottom"
                  style={{ height: '60px', bottom: '50%', left: '50%', transformOrigin: 'bottom center' }}
                  initial={{ rotate: 0, scale: 0 }}
                  animate={isActive ? { 
                    rotate: 30,
                    scale: 1
                  } : {}}
                  transition={{ 
                    rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.8, delay: 2.2 }
                  }}
                />

                {/* Center Dot */}
                <motion.div
                  className="absolute w-4 h-4 bg-accent-red rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={isActive ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.5 }}
                />
              </motion.div>

              {/* Surrounding Stats */}
              {workStats.map((stat, index) => {
                const angle = (index * 90) - 45; // Position around clock
                const radius = 180;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;

                return (
                  <motion.div
                    key={stat.unit}
                    className="absolute dark-card p-4 rounded-lg interactive-3d"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                    initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                    animate={isActive ? { 
                      scale: 1, 
                      opacity: 1,
                      rotateY: 0,
                      y: [0, -5, 0]
                    } : {}}
                    transition={{ 
                      scale: { duration: 0.8, delay: 3 + index * 0.2 },
                      opacity: { duration: 0.8, delay: 3 + index * 0.2 },
                      rotateY: { duration: 0.8, delay: 3 + index * 0.2 },
                      y: { 
                        duration: 2 + index * 0.3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 3.5 + index * 0.2
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 10px 25px ${stat.color}40`
                    }}
                  >
                    <stat.icon 
                      className="w-8 h-8 mx-auto mb-2" 
                      style={{ color: stat.color }}
                    />
                    <div 
                      className="responsive-text-2xl font-bold text-center mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="responsive-text-xs text-dark-gray-400 text-center">
                      {stat.unit}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Content & Principles */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Description */}
            <motion.div
              className="dark-glass p-8 rounded-xl"
              initial={{ rotateY: 10, opacity: 0 }}
              animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.p
                className="responsive-text-lg text-dark-gray-300 leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Elon Musk's legendary work ethic is the foundation of his success. 
                Working 80-100 hours per week, he leads by example, pushing the 
                boundaries of what's humanly possible while maintaining an 
                unwavering commitment to his vision.
              </motion.p>

              <motion.blockquote
                className="italic text-accent-red border-l-4 border-accent-red pl-4"
                initial={{ x: -20, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                "Work like hell. I mean you just have to put in 80 to 100 hour weeks 
                every week. This improves the odds of success."
              </motion.blockquote>
            </motion.div>

            {/* Work Principles */}
            <motion.div
              className="dark-card p-6 rounded-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h3 className="responsive-text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-accent-red" />
                Core Principles
              </h3>
              
              <div className="space-y-3">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle}
                    className="flex items-center gap-3 group"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isActive ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-accent-red rounded-full"
                      animate={isActive ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                      } : {}}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: 2 + index * 0.2
                      }}
                    />
                    <span className="text-dark-gray-300 group-hover:text-white transition-colors">
                      {principle}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Energy Bars Visualization */}
            <motion.div
              className="dark-glass p-6 rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isActive ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.6 }}
            >
              <h3 className="responsive-text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Battery className="w-5 h-5 text-accent-red" />
                Energy Distribution
              </h3>
              
              {[
                { label: "Work", percentage: 85, color: "#DC2626" },
                { label: "Innovation", percentage: 95, color: "#F59E0B" },
                { label: "Vision", percentage: 100, color: "#10B981" }
              ].map((bar, index) => (
                <motion.div
                  key={bar.label}
                  className="mb-4 last:mb-0"
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-dark-gray-300 responsive-text-sm">{bar.label}</span>
                    <span 
                      className="responsive-text-sm font-semibold"
                      style={{ color: bar.color }}
                    >
                      {bar.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-dark-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: bar.color }}
                      initial={{ width: 0 }}
                      animate={isActive ? { width: `${bar.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 2 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Energy Particles */}
      {isActive && Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-red rounded-full opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.5, 1, 0.5],
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