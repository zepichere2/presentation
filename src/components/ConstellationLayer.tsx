"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

export function ConstellationLayer() {
  const points = useMemo(() =>
    Array.from({ length: 36 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    })), []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {points.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white/70 rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity }}
        />
      ))}
      {/* Constellation lines (sample few) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline points="10,20 20,35 35,25 50,40 65,30 80,45" stroke="white" strokeWidth="0.3" fill="none" />
        <polyline points="15,70 30,60 45,75 60,65 75,80" stroke="white" strokeWidth="0.3" fill="none" />
      </svg>
    </div>
  );
}