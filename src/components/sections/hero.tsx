"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/animations/variants";
import { heroStats } from "@/lib/data";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-bloom-blush via-white to-bloom-blush pb-24 pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-bloom-orchid/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-bloom-terracotta/10 blur-3xl" />
        <div className="absolute left-1/2 top-32 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-bloom-lavender/10 blur-3xl" />
      </div>
      <div className="container">
        <motion.div
          className="grid gap-16 lg:grid-cols-12 lg:items-center"
          variants={staggerParent(0.18)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="lg:col-span-6 xl:col-span-5" variants={fadeInUp}>
            <span className="rounded-full border border-bloom-lavender/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-bloom-lavender">
              Compassion first
            </span>
            <h1 className="mt-6 font-display text-display-1 text-bloom-plum">
              Bloom into the fullest version of yourself.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-bloom-dusk">
              Gentle, evidence-backed therapy that meets you exactly where you
              are. Our therapists combine science, heart, and design to craft
              spaces that feel safe, warm, and deeply human.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              variants={staggerParent(0.16)}
            >
              <motion.div variants={fadeInUp}>
                <Link
                  href="#book"
                  className="inline-flex items-center justify-center rounded-full bg-bloom-plum px-8 py-3 text-base font-semibold text-white transition hover:bg-bloom-orchid"
                >
                  Book a session
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-bloom-lavender/40 px-8 py-3 text-base font-semibold text-bloom-plum transition hover:border-bloom-orchid/60 hover:text-bloom-orchid"
                >
                  Explore services
                </Link>
              </motion.div>
            </motion.div>

            <motion.ul
              className="mt-12 grid w-full gap-6 rounded-3xl border border-white/50 bg-white/70 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:grid-cols-3"
              variants={staggerParent(0.1)}
            >
              {heroStats.map((stat) => (
                <motion.li key={stat.label} variants={fadeInUp}>
                  <p className="text-2xl font-semibold text-bloom-plum">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-bloom-lavender">
                    {stat.label}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative lg:col-span-6 xl:col-span-7"
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 shadow-[0_40px_80px_rgba(76,31,57,0.12)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-bloom-plum/5 to-bloom-orchid/20" />
              <Image
                src="/images/hero-session.jpg"
                alt="Therapist supporting a patient in a serene Bloom session"
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute -left-14 bottom-10 hidden max-w-[220px] rounded-3xl border border-white/70 bg-white/80 p-5 text-bloom-plum shadow-soft backdrop-blur md:block"
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-bloom-lavender">
                Wellness Plan
              </p>
              <p className="mt-3 text-sm leading-relaxed text-bloom-dusk">
                Custom plans blending talk therapy, mindfulness, and somatic
                practices that evolve with you each month.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
