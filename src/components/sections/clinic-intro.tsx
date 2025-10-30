"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/animations/variants";

export function ClinicIntro() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24"
      aria-labelledby="clinic-intro-title"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bloom-lavender/30 to-transparent" />
      <div className="container">
        <motion.div
          className="grid gap-12 rounded-[3rem] bg-bloom-blush/70 p-10 backdrop-blur-lg lg:grid-cols-12 lg:p-16"
          variants={staggerParent(0.18)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
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
      </div>
    </section>
  );
}
