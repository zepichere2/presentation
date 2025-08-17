import { motion } from 'motion/react';
import { SlideProps } from '../types';
import { Computer, Code, DollarSign, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function EducationSlide({ isActive, deviceInfo }: SlideProps) {
  const timeline = [
    { 
      year: "1983", 
      age: "12", 
      event: "First Video Game", 
      desc: "Created and sold Blastar for $500",
      icon: Computer 
    },
    { 
      year: "1995", 
      age: "24", 
      event: "Zip2 Founded", 
      desc: "Online city guide for newspapers",
      icon: MapPin 
    },
    { 
      year: "1999", 
      age: "28", 
      event: "X.com (PayPal)", 
      desc: "Revolutionary online payments",
      icon: DollarSign 
    },
    { 
      year: "2002", 
      age: "31", 
      event: "PayPal Sold", 
      desc: "$1.5B to eBay - The foundation",
      icon: Calendar 
    }
  ];

  return (
    <div className="relative w-full min-h-full flex items-center justify-center overflow-hidden py-8">
      {/* Gradient Background with Tech Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #171717 50%, #262626 100%)",
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
        animate={isActive ? {
          backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"]
        } : {}}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
            Education & <span className="text-gradient-red">First Ventures</span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-dark-gray-300"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The Genesis of Innovation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Timeline */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <motion.div
                className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-accent-red to-transparent"
                initial={{ height: 0 }}
                animate={isActive ? { height: "100%" } : {}}
                transition={{ duration: 2, delay: 1 }}
              />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start gap-6"
                    initial={{ x: -50, opacity: 0 }}
                    animate={isActive ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="relative z-10 w-16 h-16 dark-glass rounded-full flex items-center justify-center interactive-3d"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)"
                      }}
                      animate={isActive ? {
                        boxShadow: [
                          "0 0 0 rgba(220, 38, 38, 0)",
                          "0 0 20px rgba(220, 38, 38, 0.3)",
                          "0 0 0 rgba(220, 38, 38, 0)"
                        ]
                      } : {}}
                      transition={{ 
                        boxShadow: { 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: 2 + index * 0.5 
                        }
                      }}
                    >
                      <item.icon className="w-8 h-8 text-accent-red" />
                    </motion.div>

                    {/* Timeline Content */}
                    <motion.div
                      className="flex-1 dark-card p-6 rounded-lg"
                      initial={{ rotateY: -10, opacity: 0 }}
                      animate={isActive ? { rotateY: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: 2,
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)"
                      }}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="responsive-text-2xl font-bold text-accent-red">
                          {item.year}
                        </span>
                        <span className="responsive-text-sm text-dark-gray-400 bg-dark-gray-800 px-3 py-1 rounded-full">
                          Age {item.age}
                        </span>
                      </div>
                      <h3 className="responsive-text-xl font-semibold text-white mb-2">
                        {item.event}
                      </h3>
                      <p className="responsive-text-base text-dark-gray-300">
                        {item.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Visual Content */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Retro Computer Animation */}
            <div className="relative h-96 flex items-center justify-center">
              {/* Computer Monitor */}
              <motion.div
                className="relative perspective-1000"
                initial={{ scale: 0.8, rotateY: -20 }}
                animate={isActive ? { 
                  scale: 1, 
                  rotateY: 0,
                  rotateX: [0, 2, -2, 0]
                } : {}}
                transition={{ 
                  scale: { duration: 1.5, delay: 1 },
                  rotateY: { duration: 1.5, delay: 1 },
                  rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="relative w-80 h-60 dark-glass rounded-lg overflow-hidden">
                  {/* Screen */}
                  <div className="absolute inset-4 bg-dark-gray-950 rounded border border-dark-gray-700">
                    {/* Code Animation */}
                    <motion.div
                      className="p-4 h-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 2 }}
                    >
                      {/* Terminal Header */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      
                      {/* Code Lines */}
                      {[
                        "10 PRINT \"HELLO WORLD\"",
                        "20 FOR I = 1 TO 100",
                        "30 PRINT \"BLASTAR GAME\"",
                        "40 NEXT I",
                        "50 END"
                      ].map((line, index) => (
                        <motion.div
                          key={index}
                          className="text-green-400 font-mono text-sm mb-1"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isActive ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 2.5 + index * 0.3 }}
                        >
                          {line}
                        </motion.div>
                      ))}
                      
                      {/* Blinking Cursor */}
                      <motion.span
                        className="inline-block w-2 h-4 bg-green-400 ml-1"
                        animate={isActive ? { opacity: [1, 0, 1] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Computer Base */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-8 dark-glass rounded-b-lg" />
                </div>
              </motion.div>

              {/* Floating Code Symbols */}
              {isActive && [
                { symbol: "</>" , position: { top: "10%", left: "10%" } },
                { symbol: "{ }", position: { top: "20%", right: "10%" } },
                { symbol: "( )", position: { bottom: "20%", left: "15%" } },
                { symbol: "[ ]", position: { bottom: "10%", right: "15%" } },
                { symbol: "$", position: { top: "30%", left: "5%" } },
                { symbol: "∞", position: { top: "40%", right: "5%" } }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-accent-red text-2xl font-bold opacity-60"
                  style={item.position}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    scale: { duration: 0.8, delay: 3 + index * 0.2 },
                    rotate: { duration: 0.8, delay: 3 + index * 0.2 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {item.symbol}
                </motion.div>
              ))}
            </div>

            {/* Bottom Stats */}
            <motion.div
              className="text-center mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 4 }}
            >
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="responsive-text-3xl font-bold text-accent-red">12</div>
                  <div className="responsive-text-sm text-dark-gray-400">Years Old</div>
                </div>
                <div className="text-center">
                  <div className="responsive-text-3xl font-bold text-accent-red">$500</div>
                  <div className="responsive-text-sm text-dark-gray-400">First Sale</div>
                </div>
                <div className="text-center">
                  <div className="responsive-text-3xl font-bold text-accent-red">$1.5B</div>
                  <div className="responsive-text-sm text-dark-gray-400">PayPal Exit</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      {isActive && Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-red rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.5, 1, 0.5],
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