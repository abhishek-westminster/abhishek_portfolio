"use client";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";

const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
];

const MARQUEE_DURATION = 20;
const HOVER_RADIUS = 150;
const MAX_SCALE_BOOST = 0.45;
const MAX_Y = -18;

type BadgeAnim = { scale: number; y: number; z: number };

const defaultAnim = (): BadgeAnim => ({ scale: 1, y: 0, z: 1 });

export default function SkillsMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);
  const isHoveredRef = useRef(false);
  const mouseXRef = useRef(0);
  const isTouchRef = useRef(false);

  const totalItems = skills.length * 2;
  const [badgeAnims, setBadgeAnims] = useState<BadgeAnim[]>(
    Array.from({ length: totalItems }, defaultAnim)
  );

  // Detect touch device once
  useEffect(() => {
    isTouchRef.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  // Measure one set width + resize observer
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setWidthRef.current = trackRef.current.scrollWidth / 2;
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  // Animation loop — drives marquee x + resets badges when not hovered
  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) return;
    const speed =
      setWidthRef.current > 0
        ? setWidthRef.current / MARQUEE_DURATION
        : 50;

    if (!isHoveredRef.current || isTouchRef.current) {
      let currentX = x.get() - speed * (delta / 1000);
      if (setWidthRef.current > 0 && currentX <= -setWidthRef.current) {
        currentX += setWidthRef.current;
      }
      x.set(currentX);
    }
  });

  // Compute dock effect on mouse move
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchRef.current || shouldReduceMotion) return;
      mouseXRef.current = e.clientX;

      const track = trackRef.current;
      if (!track) return;
      const children = track.children;

      const newAnims: BadgeAnim[] = [];
      let maxZ = 0;
      let maxI = -1;

      for (let i = 0; i < totalItems; i++) {
        const badge = children[i] as HTMLElement | undefined;
        if (!badge) {
          newAnims.push(defaultAnim());
          continue;
        }
        const rect = badge.getBoundingClientRect();
        const badgeCenter = rect.left + rect.width / 2;
        const distance = Math.abs(e.clientX - badgeCenter);

        if (distance >= HOVER_RADIUS) {
          newAnims.push(defaultAnim());
        } else {
          const raw = 1 - distance / HOVER_RADIUS;
          const smooth = raw * raw * (3 - 2 * raw); // smoothstep
          const s = 1 + smooth * MAX_SCALE_BOOST;
          newAnims.push({ scale: s, y: smooth * MAX_Y, z: 1 });
          if (s > maxZ) {
            maxZ = s;
            maxI = i;
          }
        }
      }

      // Elevate z-index for the closest badge
      if (maxI >= 0) {
        newAnims[maxI] = { ...newAnims[maxI], z: 10 };
      }

      setBadgeAnims(newAnims);
    },
    [totalItems, shouldReduceMotion]
  );

  const handleMouseEnter = useCallback(() => {
    if (isTouchRef.current || shouldReduceMotion) return;
    isHoveredRef.current = true;
  }, [shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    setBadgeAnims(Array.from({ length: totalItems }, defaultAnim));
  }, [totalItems]);

  // Reduced motion: fully static row
  if (shouldReduceMotion) {
    return (
      <section className="w-full bg-background py-10 sm:py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-sm font-semibold text-[#F2B75F]">
              SKILLS & TECHNOLOGIES
            </h2>
            <p className="mt-2 text-2xl font-bold text-foreground md:text-4xl">
              Tools I use daily
            </p>
          </div>
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="flex gap-3 md:gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex shrink-0 items-center rounded-2xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-sm sm:px-5 sm:py-3 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background py-10 sm:py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-sm font-semibold text-[#F2B75F]">
            SKILLS & TECHNOLOGIES
          </h2>
          <p className="mt-2 text-2xl font-bold text-foreground md:text-4xl">
            Tools I use daily
          </p>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-3 md:gap-4"
          style={{ x }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {[...skills, ...skills].map((skill, index) => {
            const anim = badgeAnims[index] ?? defaultAnim();
            return (
              <motion.span
                key={`${skill}-${index}`}
                className="flex shrink-0 items-center rounded-2xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-sm sm:px-5 sm:py-3 sm:text-sm"
                style={{
                  transformOrigin: "center bottom",
                  zIndex: anim.z,
                }}
                animate={{ scale: anim.scale, y: anim.y }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 0.5,
                }}
              >
                {skill}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
