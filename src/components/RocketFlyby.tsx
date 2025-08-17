"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Rocket } from "lucide-react";

interface RocketFlybyProps {
  triggerKey: number;
}

export function RocketFlyby({ triggerKey }: RocketFlybyProps) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setViewport({ width: window.innerWidth, height: window.innerHeight });
  }, [triggerKey]);

  const path = useMemo(() => {
    const startYOffset = viewport.height * (0.65 + Math.random() * 0.25);
    const endYOffset = -120;
    const rotate = 35 + Math.random() * 20;
    const duration = 1.6 + Math.random() * 0.6;
    return { startYOffset, endYOffset, rotate, duration };
  }, [triggerKey, viewport.height]);

  return (
    <AnimatePresence>
      {viewport.width > 0 && (
        <motion.div
          key={triggerKey}
          className="pointer-events-none fixed z-40"
          initial={{ x: -160, y: path.startYOffset, opacity: 0 }}
          animate={{ x: viewport.width + 200, y: path.endYOffset, opacity: [0, 1, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: path.duration, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 12px rgba(220, 38, 38, 0.6))" }}
        >
          {/* Trail */}
          <motion.div
            className="absolute left-[-140px] top-1/2 -translate-y-1/2 h-[4px] rounded-r-full"
            style={{
              width: 140,
              background:
                "linear-gradient(90deg, rgba(220,38,38,0.9), rgba(220,38,38,0.3), rgba(220,38,38,0))",
            }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-[-90px] top-1/2 -translate-y-1/2 h-[2px] rounded-r-full"
            style={{
              width: 90,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2), rgba(255,255,255,0))",
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />

          {/* Rocket */}
          <motion.div
            style={{ rotate: path.rotate }}
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-10 h-10 text-accent-red" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}