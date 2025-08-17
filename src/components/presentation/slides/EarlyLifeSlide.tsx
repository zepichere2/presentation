import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { BookOpen, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export function EarlyLifeSlide({ isActive, deviceInfo }: SlideProps) {
  const [selectedStruggleIndex, setSelectedStruggleIndex] = useState(0);
  
  const struggles = [
    { icon: Heart, title: "Struggle", desc: "Faced physical and emotional challenges at school, dealing with bullying and social isolation that tested his resilience" },
    { icon: BookOpen, title: "Learning", desc: "Found refuge in books and programming, diving deep into encyclopedias and computer manuals to expand his knowledge" },
    { icon: Lightbulb, title: "Innovation", desc: "Turned struggles into creative solutions, developing new ways to think about problems and overcome obstacles" },
    { icon: TrendingUp, title: "Growth", desc: "Never stopped dreaming and improving, using every setback as fuel for personal development and future success" }
  ];

  const handleStruggleClick = () => {
    setSelectedStruggleIndex((prev) => (prev + 1) % struggles.length);
  };

  return (
    <div className="relative w-full min-h-full flex items-center justify-center overflow-hidden py-8">
      {/* Animated Background with Particle System */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-gray-950 via-dark-gray-900 to-dark-gray-800"
        animate={isActive ? {
          background: [
            "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #262626 100%)",
            "linear-gradient(135deg, #171717 0%, #0A0A0A 50%, #DC2626 100%)",
            "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #262626 100%)"
          ]
        } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isActive ? {
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            } : {}}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        {/* Main Title */}
        <motion.div
          className="text-center mb-12"
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
            Early Life & <span className="text-gradient-red">Struggles</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            From Adversity to Ambition
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Story */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Story */}
            <motion.div
              className="dark-glass p-8 rounded-xl mb-8"
              initial={{ rotateY: -10, opacity: 0 }}
              animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.p
                className="responsive-text-lg text-dark-gray-300 leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Born in South Africa in 1971, Elon faced significant challenges during his 
                childhood. Bullied at school and struggling with social interactions, he 
                found solace in books and computers.
              </motion.p>
              
              <motion.p
                className="responsive-text-lg text-dark-gray-300 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.9 }}
              >
                But every setback became a setup for his comeback. He never stopped learning, 
                never stopped dreaming, and never stopped believing in a better future.
              </motion.p>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="relative dark-card p-6 rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isActive ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <div className="absolute top-4 left-4 text-6xl text-accent-red opacity-20">&quot;</div>
              <p className="responsive-text-lg text-dark-gray-300 italic pl-8">
                I was relentlessly bullied at school... But it made me who I am today. 
                It taught me resilience and gave me the drive to prove everyone wrong.
              </p>
              <cite className="block text-right text-accent-red mt-4">- Elon Musk</cite>
            </motion.blockquote>
          </motion.div>

          {/* Right Content - Visual Representation */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* 3D Puzzle Pieces Forming Light Bulb */}
            <div className="relative h-96 flex items-center justify-center perspective-1000">
              {/* Central Light Bulb */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotateY: -180 }}
                animate={isActive ? { 
                  scale: 1, 
                  rotateY: 0,
                  y: [0, -10, 0]
                } : {}}
                transition={{ 
                  scale: { duration: 1.5, delay: 1.5 },
                  rotateY: { duration: 1.5, delay: 1.5 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="relative">
                  <Lightbulb className="w-24 h-24 text-accent-red drop-shadow-2xl" />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={isActive ? {
                      boxShadow: [
                        "0 0 0 rgba(220, 38, 38, 0)",
                        "0 0 30px rgba(220, 38, 38, 0.5)",
                        "0 0 0 rgba(220, 38, 38, 0)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Floating Struggle Elements */}
              {struggles.map((struggle, index) => {
                const angle = (index * 360) / struggles.length;
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={struggle.title}
                    className="absolute dark-glass p-4 rounded-lg interactive-3d"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0,
                      rotateX: -90
                    }}
                    animate={isActive ? { 
                      scale: 1, 
                      opacity: 1,
                      rotateX: 0,
                      y: [0, -5, 0]
                    } : {}}
                    transition={{ 
                      scale: { duration: 0.8, delay: 2 + index * 0.2 },
                      opacity: { duration: 0.8, delay: 2 + index * 0.2 },
                      rotateX: { duration: 0.8, delay: 2 + index * 0.2 },
                      y: { 
                        duration: 2 + index * 0.3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2.5 + index * 0.1
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 5,
                      boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)"
                    }}
                  >
                    <struggle.icon className="w-6 h-6 text-accent-red mb-2 mx-auto" />
                    <h3 className="text-sm font-semibold text-white text-center mb-1">
                      {struggle.title}
                    </h3>
                    <p className="text-xs text-dark-gray-400 text-center">
                      {struggle.desc}
                    </p>
                  </motion.div>
                );
              })}

              {/* Connecting Lines */}
              {isActive && struggles.map((_, index) => {
                const angle = (index * 360) / struggles.length;
                
                return (
                  <motion.div
                    key={`line-${index}`}
                    className="absolute w-0.5 bg-gradient-to-r from-transparent via-accent-red to-transparent opacity-30"
                    style={{
                      left: '50%',
                      top: '50%',
                      height: '120px',
                      transformOrigin: 'top center',
                      transform: `translate(-50%, 0) rotate(${angle}deg)`
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: 2.5 + index * 0.1 }}
                  />
                );
              })}
            </div>

            {/* Bottom Text */}
            <motion.div
              className="text-center mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 3 }}
            >
              <p className="responsive-text-lg text-dark-gray-300 font-semibold mb-4">
                Struggles → Learning → Innovation → Growth
              </p>
            </motion.div>

            {/* Interactive Struggle Cards Section */}
            <motion.div
              className="mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <motion.div
                className="dark-glass p-6 rounded-xl cursor-pointer select-none"
                onClick={handleStruggleClick}
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(220, 38, 38, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center mb-4">
                  <p className="text-sm text-dark-gray-400 mb-2">
                    {deviceInfo.isTouchDevice ? 'Tap to cycle through:' : 'Click to cycle through:'}
                  </p>
                  <div className="flex justify-center gap-2">
                    {struggles.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === selectedStruggleIndex ? 'bg-accent-red' : 'bg-dark-gray-600'
                        }`}
                        animate={index === selectedStruggleIndex ? { scale: 1.3 } : { scale: 1 }}
                      />
                    ))}
                  </div>
                </div>

                <motion.div
                  key={selectedStruggleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <motion.div
                    className="mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {React.createElement(struggles[selectedStruggleIndex].icon, { className: "w-12 h-12 text-accent-red mx-auto" })}
                  </motion.div>
                  <h3 className="responsive-text-2xl font-bold text-white mb-3">
                    {struggles[selectedStruggleIndex].title}
                  </h3>
                  <p className="responsive-text-base text-dark-gray-300 leading-relaxed">
                    {struggles[selectedStruggleIndex].desc}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Animation Elements */}
      {isActive && Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent-red rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}