"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

export function SpaceBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 150 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 0.6 + Math.random() * 1.2,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 10% 20%, rgba(30,58,138,0.25), transparent 60%), " +
            "radial-gradient(800px 600px at 80% 30%, rgba(99,102,241,0.2), transparent 60%), " +
            "radial-gradient(1000px 1000px at 50% 80%, rgba(2,6,23,1), rgba(0,0,0,0.9))",
        }}
      />

      {/* Nebula clouds */}
      <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full blur-3xl opacity-20"
        style={{ background: "conic-gradient(from 90deg, #0ea5e9, transparent 60%)" }}
      />
      <div className="absolute -bottom-60 -right-60 w-[70rem] h-[70rem] rounded-full blur-3xl opacity-15"
        style={{ background: "conic-gradient(from 45deg, #8b5cf6, transparent 60%)" }}
      />

      {/* Starfield */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 6px rgba(255,255,255,0.5)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4, 1] }}
            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-32 opacity-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0))",
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))",
          }}
          initial={{ x: -200, y: 100 + i * 120, opacity: 0 }}
          animate={{ x: [ -200, 1200 ], y: [ 100 + i * 120, -200 ], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
        />
      ))}
    </div>
  );
}