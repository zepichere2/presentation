import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Brain, Lightbulb, Target, Award } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function WhoIsElonSlide({ isActive, deviceInfo }: SlideProps) {
  const qualities = [
    { icon: Brain, label: "Visionary", desc: "Sees beyond the possible" },
    { icon: Target, label: "Engineer", desc: "Builds the impossible" },
    { icon: Lightbulb, label: "Innovator", desc: "Creates the future" },
    { icon: Award, label: "Leader", desc: "Inspires humanity" }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Galaxy Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-dark-gray-950 to-dark-gray-900"
        animate={isActive ? {
          background: [
            "radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.2) 0%, #0A0A0A 50%)",
            "radial-gradient(circle at 70% 50%, rgba(220, 38, 38, 0.2) 0%, #0A0A0A 50%)",
            "radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.2) 0%, #0A0A0A 50%)"
          ]
        } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isActive ? {
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            } : {}}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Title */}
          <motion.h2
            className="responsive-text-5xl font-bold mb-6 title-3d"
            initial={{ rotateY: -20, opacity: 0 }}
            animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Who is <span className="text-gradient-red">Elon Musk</span>?
          </motion.h2>

          {/* Main Description */}
          <motion.p
            className="responsive-text-xl text-dark-gray-300 mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Visionary entrepreneur, engineer, and innovator shaping the future of humanity 
            through revolutionary technology and boundless ambition.
          </motion.p>

          {/* Qualities Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.label}
                className="dark-glass p-4 rounded-lg interactive-3d group"
                initial={{ rotateX: -30, opacity: 0 }}
                animate={isActive ? { rotateX: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 15px 35px rgba(220, 38, 38, 0.3)"
                }}
              >
                <quality.icon className="w-8 h-8 text-accent-red mb-2 group-hover:animate-pulse" />
                <h3 className="responsive-text-lg font-semibold text-white mb-1">
                  {quality.label}
                </h3>
                <p className="responsive-text-sm text-dark-gray-400">
                  {quality.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            className="italic text-dark-gray-400 border-l-4 border-accent-red pl-4"
            initial={{ x: -30, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
          >
            "The future of humanity is going to bifurcate in two directions: 
            Either it's going to become multiplanetary, or it's going to remain 
            confined to one planet and eventually there's going to be some extinction event."
          </motion.blockquote>
        </motion.div>

        {/* Right Content - Portrait */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ x: 100, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* 3D Portrait Container */}
          <motion.div
            className="relative perspective-1000"
            animate={isActive ? { rotateY: [0, 5, -5, 0] } : {}}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glowing Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #DC2626, #8B5CF6, #06B6D4, #DC2626)",
                padding: "4px",
              }}
              animate={isActive ? { rotate: 360 } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-dark-gray-900" />
            </motion.div>

            {/* Portrait Image */}
            <motion.div
              className="relative z-10 w-80 h-80 rounded-full overflow-hidden dark-glow-strong"
              whileHover={{ 
                scale: 1.05,
                rotateZ: 2,
                boxShadow: "0 25px 50px rgba(220, 38, 38, 0.4)"
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692659819033-683e4bdf096c?w=400&h=400&fit=crop"
                alt="Elon Musk Portrait"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray-900/50 to-transparent" />
            </motion.div>

            {/* Floating Icons */}
            {isActive && [
              { icon: Brain, angle: 0, delay: 0 },
              { icon: Lightbulb, angle: 90, delay: 0.5 },
              { icon: Target, angle: 180, delay: 1 },
              { icon: Award, angle: 270, delay: 1.5 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute w-12 h-12 dark-glass rounded-full flex items-center justify-center"
                style={{
                  left: `${50 + 45 * Math.cos(item.angle * Math.PI / 180)}%`,
                  top: `${50 + 45 * Math.sin(item.angle * Math.PI / 180)}%`,
                  transform: "translate(-50%, -50%)"
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -10, 0],
                  rotateZ: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  delay: 2 + item.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <item.icon className="w-6 h-6 text-accent-red" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Particles */}
      {isActive && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-red rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}