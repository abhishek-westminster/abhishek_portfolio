"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const BURST_DURATION_MS = 820;
const BURST_BATS = [
  { x: -28, y: -11, rotate: -18, scale: 0.72, delay: 0.00 },
  { x: -20, y: -23, rotate: -11, scale: 0.76, delay: 0.04 },
  { x: -6, y: -30, rotate: -5, scale: 0.82, delay: 0.08 },
  { x: 10, y: -28, rotate: 4, scale: 0.9, delay: 0.12 },
  { x: 23, y: -19, rotate: 10, scale: 0.84, delay: 0.16 },
  { x: 29, y: -3, rotate: 15, scale: 0.78, delay: 0.20 },
  { x: 18, y: 16, rotate: 8, scale: 0.74, delay: 0.24 },
] as const;

type BatIconProps = {
  reduceMotion: boolean;
  className?: string;
  idle?: boolean;
};

function BatIcon({
  reduceMotion,
  className = "h-[18px] w-[18px] overflow-visible text-[#1F1A12] dark:text-[#F4E9CF]",
  idle = true,
}: BatIconProps) {
  if (!idle) {
    return (
      <svg viewBox="0 0 32 20" className={className} aria-hidden="true">
        <g>
          <path
            d="M12.2 11.3c-2-1.8-4.4-2.1-7-.6.7-2.9 2.4-5 4.9-5.8 1.7-.6 3.3-.4 4.7.6l-2.6 5.8Z"
            fill="currentColor"
          />
          <path
            d="M19.8 11.3c2-1.8 4.4-2.1 7-.6-.7-2.9-2.4-5-4.9-5.8-1.7-.6-3.3-.4-4.7.6l2.6 5.8Z"
            fill="currentColor"
          />
          <path
            d="M13.1 11.1c0 3 1.3 5.6 2.9 5.6s2.9-2.6 2.9-5.6c0-1.6-.5-3-1.4-4h-3c-.9 1-1.4 2.4-1.4 4Z"
            fill="currentColor"
          />
          <path
            d="m12.7 8.4 1.5-3 1.8 1.4 1.8-1.4 1.5 3a3.7 3.7 0 0 1-3.3 2.2 3.7 3.7 0 0 1-3.3-2.2Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  }

  const idleTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 2.8,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "mirror" as const,
      };

  const wingTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 3.4,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "mirror" as const,
      };

  const headTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 4.2,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "mirror" as const,
      };

  return (
    <svg
      viewBox="0 0 32 20"
      className={className}
      aria-hidden="true"
    >
      <motion.g
        animate={reduceMotion ? { y: 0 } : { y: [-1, 1] }}
        transition={idleTransition}
      >
        <motion.g
          animate={reduceMotion ? { scaleX: 1 } : { scaleX: [0.96, 1.02] }}
          transition={wingTransition}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <path
            d="M12.2 11.3c-2-1.8-4.4-2.1-7-.6.7-2.9 2.4-5 4.9-5.8 1.7-.6 3.3-.4 4.7.6l-2.6 5.8Z"
            fill="currentColor"
          />
          <path
            d="M19.8 11.3c2-1.8 4.4-2.1 7-.6-.7-2.9-2.4-5-4.9-5.8-1.7-.6-3.3-.4-4.7.6l2.6 5.8Z"
            fill="currentColor"
          />
        </motion.g>

        <path
          d="M13.1 11.1c0 3 1.3 5.6 2.9 5.6s2.9-2.6 2.9-5.6c0-1.6-.5-3-1.4-4h-3c-.9 1-1.4 2.4-1.4 4Z"
          fill="currentColor"
        />

        <motion.g
          animate={reduceMotion ? { rotate: 0 } : { rotate: [-3, 3] }}
          transition={headTransition}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <path
            d="m12.7 8.4 1.5-3 1.8 1.4 1.8-1.4 1.5 3a3.7 3.7 0 0 1-3.3 2.2 3.7 3.7 0 0 1-3.3-2.2Z"
            fill="currentColor"
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export default function Themes() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [burstMode, setBurstMode] = useState<"out" | "in" | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const reduceMotion = useReducedMotion() === true;
  const burstTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (burstTimeoutRef.current !== null) {
        window.clearTimeout(burstTimeoutRef.current);
      }
    };
  }, []);

  const rootIsDark =
    typeof document === "undefined"
      ? true
      : document.documentElement.classList.contains("dark");
  const currentTheme =
    (theme === "system" ? resolvedTheme : theme) ?? (rootIsDark ? "dark" : "light");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  const iconTransitionClass = reduceMotion
    ? "transition-none"
    : "transition-all duration-300";
  const batPerch =
    currentTheme === "dark"
      ? { x: -5, y: -11, rotate: -3, scale: 1 }
      : { x: 5, y: -9, rotate: 2, scale: 0.98 };
  const batPerchTransition =
    hasInteracted && !reduceMotion
      ? {
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1] as const,
        }
      : { duration: 0 };
  const burstVisible = burstMode !== null && hasInteracted && !reduceMotion;

  return (
    <button
      type="button"
      onClick={() => {
        setHasInteracted(true);
        if (burstTimeoutRef.current !== null) {
          window.clearTimeout(burstTimeoutRef.current);
          burstTimeoutRef.current = null;
        }
        if (!reduceMotion) {
          setBurstMode(nextTheme === "dark" ? "out" : "in");
          setBurstKey((current) => current + 1);
          burstTimeoutRef.current = window.setTimeout(() => {
            setBurstMode(null);
            burstTimeoutRef.current = null;
          }, BURST_DURATION_MS);
        }
        setTheme(nextTheme);
      }}
      className="relative flex h-10 w-10 items-center justify-center overflow-visible rounded-full transition-colors hover:bg-[#292929]"
      aria-label="Toggle theme"
    >
      {burstVisible ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          {BURST_BATS.map((bat, index) => (
            <motion.span
              key={`${burstKey}-${index}`}
              className="absolute left-0 top-0 block"
              initial={
                burstMode === "out"
                  ? {
                      x: 0,
                      y: -8,
                      rotate: 0,
                      scale: 0.52,
                      opacity: 0,
                    }
                  : {
                      x: bat.x,
                      y: bat.y,
                      rotate: bat.rotate,
                      scale: bat.scale,
                      opacity: 0.88,
                    }
              }
              animate={
                burstMode === "out"
                  ? {
                      x: [0, bat.x * 0.55, bat.x],
                      y: [-8, bat.y - 7, bat.y],
                      rotate: [0, bat.rotate * 0.6, bat.rotate],
                      scale: [0.52, bat.scale + 0.1, bat.scale],
                      opacity: [0, 1, 0.15],
                    }
                  : {
                      x: [bat.x, bat.x * 0.4, 0],
                      y: [bat.y, bat.y - 6, -8],
                      rotate: [bat.rotate, bat.rotate * 0.35, 0],
                      scale: [bat.scale, bat.scale + 0.08, 0.52],
                      opacity: [0.9, 0.72, 0],
                    }
              }
              transition={{
                duration: 0.56,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.52, 1],
                delay: bat.delay,
              }}
            >
              <BatIcon
                reduceMotion
                idle={false}
                className="h-[14px] w-[14px] overflow-visible text-[#1F1A12] dark:text-[#F4E9CF]"
              />
            </motion.span>
          ))}
        </span>
      ) : null}

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        initial={false}
        animate={{ ...batPerch, opacity: burstVisible ? 0 : 1 }}
        transition={batPerchTransition}
      >
        <span className="block">
          <BatIcon reduceMotion={reduceMotion} />
        </span>
      </motion.span>

      <FaSun
        className={`h-5 w-5 rotate-0 scale-100 text-yellow-400 dark:rotate-90 dark:scale-0 ${iconTransitionClass}`}
      />
      <FaMoon
        className={`absolute h-5 w-5 -rotate-90 scale-0 text-white dark:rotate-0 dark:scale-100 ${iconTransitionClass}`}
      />
    </button>
  );
}
