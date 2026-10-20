
"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const BackgroundGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -200,
    y: -200,
  });
  const [isClient, setIsClient] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const canAnimate = isClient && !shouldReduceMotion;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Top Ambient Glow */}
      <div className="radial-glow-top" />

      {/* Indigo Orb */}
      <motion.div
        animate={
          canAnimate
            ? {
                x: [0, 40, -30, 0],
                y: [0, -50, 30, 0],
                scale: [1, 1.1, 0.95, 1],
              }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{
          duration: 22,
          repeat: canAnimate ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/6 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]"
      />

      {/* Purple Orb */}
      <motion.div
        animate={
          canAnimate
            ? {
                x: [0, -50, 40, 0],
                y: [0, 60, -40, 0],
                scale: [1, 1.15, 0.9, 1],
              }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{
          duration: 26,
          repeat: canAnimate ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 right-1/6 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      {/* Cyan Orb */}
      <motion.div
        animate={
          canAnimate
            ? {
                x: [0, 30, -20, 0],
                y: [0, 40, -50, 0],
              }
            : { x: 0, y: 0 }
        }
        transition={{
          duration: 18,
          repeat: canAnimate ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Interactive Cursor Glow */}
      {isClient && !shouldReduceMotion && (
        <div
          className="absolute hidden h-[400px] w-[400px] rounded-full bg-indigo-500/7 blur-[90px] transition-transform duration-300 ease-out md:block"
          style={{
            transform: `translate3d(${mousePosition.x - 200}px, ${
              mousePosition.y - 200
            }px, 0)`,
          }}
        />
      )}

      {/* Bottom Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,9,13,0.7)_80%,#08090d_100%)]" />
    </div>
  );
};
