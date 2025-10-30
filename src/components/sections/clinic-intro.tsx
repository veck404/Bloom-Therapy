"use client";

import { useRef } from "react";
import {
  motion,
  type Variants,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { fadeInUp, staggerParent } from "@/animations/variants";
import { useParallax } from "@/lib/hooks/use-parallax";

const introVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -160 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
  },
  exitRight: {
    opacity: 0,
    x: 180,
    transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
  },
};

export function ClinicIntro() {
  const controls = useAnimationControls();
  const hasEnteredRef = useRef(false);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<"up" | "down">("down");
  const { scrollY } = useScroll();
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useParallax(parallaxRef, {
    from: 80,
    to: -110,
    start: "top bottom",
    end: "bottom top",
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY.current) {
      scrollDirection.current = "down";
    } else if (latest < lastScrollY.current) {
      scrollDirection.current = "up";
    }
    lastScrollY.current = latest;
  });

  const handleEnter = () => {
    controls.start("center");
    hasEnteredRef.current = true;
  };

  const handleLeave = (entry: IntersectionObserverEntry | null) => {
    if (
      hasEnteredRef.current &&
      entry &&
      scrollDirection.current === "down" &&
      entry.boundingClientRect.bottom <= 0
    ) {
      controls.start("exitRight");
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24"
      aria-labelledby="clinic-intro-title"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bloom-lavender/30 to-transparent" />
      <div ref={parallaxRef} className="container">
        <motion.div
          variants={introVariants}
          initial="hiddenLeft"
          animate={controls}
          viewport={{ once: false, amount: 0.45 }}
          onViewportEnter={handleEnter}
          onViewportLeave={handleLeave}
        >
          <motion.div
            className="grid gap-12 rounded-[3rem] bg-bloom-blush/70 p-10 backdrop-blur-lg lg:grid-cols-12 lg:p-16"
            variants={staggerParent(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.div className="lg:col-span-4" variants={fadeInUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.38em] text-bloom-orchid/80">
                Our philosophy
              </p>
              <h2
                id="clinic-intro-title"
                className="mt-4 max-w-xs font-display text-display-2 text-bloom-plum"
              >
                Design-led therapy spaces that feel like a warm exhale.
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6 text-lg leading-8 text-bloom-dusk lg:col-span-8"
              variants={fadeInUp}
            >
              <p>
                Bloom is a collective of clinicians, designers, and researchers
                reimagining what mental healthcare can be. We blend evidence-based
                modalities with sensory design to calm the nervous system the
                moment you enter our care.
              </p>
              <p>
                From your first consultation, we listen for the story beneath the
                symptoms. Together, we craft a pacing plan that honours your
                rhythm—inviting steadiness, clarity, and growth. Every touchpoint
                is intentional: gentle lighting, tactile materials, curated sound,
                and guided reflections that evolve with you.
              </p>
              <p className="text-base font-semibold text-bloom-plum">
                Therapy isn&apos;t a checkbox. It&apos;s a relationship. We&apos;re
                with you for every chapter you choose to write next.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
