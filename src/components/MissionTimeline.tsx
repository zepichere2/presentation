"use client";

import { motion } from "motion/react";

interface MissionTimelineProps {
  currentIndex: number;
  total: number;
}

const PHASES = [
  "T− Launch Prep",
  "Liftoff",
  "Max‑Q",
  "MECO",
  "Stage Sep",
  "SECO",
  "Orbit",
  "Trans‑Mars",
  "Approach",
  "Landing"
];

export function MissionTimeline({ currentIndex, total }: MissionTimelineProps) {
  const progressPct = ((currentIndex + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
      <div className="relative dark-glass rounded-xl px-4 py-2 backdrop-blur-md">
        {/* Progress bar */}
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-dark-gray-800 rounded-b-xl overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-red to-accent-red"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
        {/* Labels */}
        <div className="flex items-center justify-between gap-3">
          <div className="text-dark-gray-400 text-xs">
            {currentIndex === 0 ? "T− 00:00" : `T+ ${String(currentIndex).padStart(2, "0")}:00`}
          </div>
          <div className="flex-1 text-center text-sm text-dark-gray-300">
            {PHASES[currentIndex] ?? "Coast"}
          </div>
          <div className="text-dark-gray-400 text-xs">
            {`T+ ${String(total - 1).padStart(2, "0")}:00`}
          </div>
        </div>
      </div>
    </div>
  );
}