import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Rocket, Zap, Star } from 'lucide-react';

export function TitleSlide({ isActive, deviceInfo }: SlideProps) {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden perspective-2000 px-8 py-16">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-gray-950 via-dark-gray-900 to-dark-gray-800"
        animate={{
          background: isActive 
            ? "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #DC2626 100%)"
            : "linear-gradient(135deg, #0A0A0A 0%, #171717 100%)"
        }}
        transition={{ duration: 2 }}
      />

      {/* Starfield Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 3D Rocket Animation */}
      <motion.div
        className="absolute right-10 top-1/4 transform-3d"
        initial={{ y: 100, rotateY: -45, opacity: 0 }}
        animate={isActive ? { 
          y: [100, -20, 0], 
          rotateY: [0, 10, 0],
          opacity: 1 
        } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="relative">
          <motion.div
            animate={isActive ? { rotateZ: [0, 5, -5, 0] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-24 h-24 text-accent-red drop-shadow-lg" />
          </motion.div>
          
          {/* Rocket Trail */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            animate={isActive ? {
              height: [0, 60, 40],
              opacity: [0, 0.8, 0.6]
            } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="w-2 bg-gradient-to-b from-accent-red to-transparent rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title with 3D Effect */}
        <motion.h1
          className="responsive-text-6xl font-bold mb-6 title-3d"
          initial={{ y: 50, rotateX: -20, opacity: 0 }}
          animate={isActive ? { 
            y: 0, 
            rotateX: 0, 
            opacity: 1,
            textShadow: [
              "0 0 0 transparent",
              "0 5px 10px rgba(220, 38, 38, 0.3)",
              "0 10px 20px rgba(220, 38, 38, 0.5)"
            ]
          } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gradient-red">ELON MUSK</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Zap className="w-6 h-6 text-accent-red" />
          <span className="responsive-text-2xl text-dark-gray-300">My Ideal & Inspiration</span>
          <Zap className="w-6 h-6 text-accent-red" />
        </motion.div>

        {/* Animated Subtitle Text */}
        <motion.p
          className="responsive-text-xl text-dark-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A Journey of Struggles, Innovation, and Inspiration
        </motion.p>

        {/* Interactive Stats */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { icon: Star, label: "Visionary", value: "∞" },
            { icon: Rocket, label: "Innovation", value: "100%" },
            { icon: Zap, label: "Impact", value: "Global" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center dark-glass p-4 rounded-lg interactive-3d"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)" 
              }}
              initial={{ rotateY: -30, opacity: 0 }}
              animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-accent-red mx-auto mb-2" />
              <div className="responsive-text-2xl font-bold text-white">{stat.value}</div>
              <div className="responsive-text-sm text-dark-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button
            className="dark-button px-8 py-3 rounded-lg responsive-text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Journey
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {isActive && Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent-red rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}