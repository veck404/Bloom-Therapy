"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { therapists } from "@/lib/data";
import { TherapistCard } from "@/components/therapists/therapist-card";
import { fadeInUp, staggerParent } from "@/animations/variants";

export function TherapistsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".therapist-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: index * 0.08,
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="therapists"
      className="relative overflow-hidden bg-white py-24"
      aria-labelledby="therapists-title"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bloom-lavender/30 to-transparent" />
      <div className="container">
        <motion.div
          className="grid gap-12 lg:grid-cols-12"
          variants={staggerParent(0.16)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div className="lg:col-span-4" variants={fadeInUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-bloom-orchid">
              Our therapists
            </p>
            <h2
              id="therapists-title"
              className="mt-4 max-w-sm font-display text-display-2 text-bloom-plum"
            >
              A compassionate team guiding every step with care.
            </h2>
            <p className="mt-4 text-base leading-7 text-bloom-dusk">
              We draw from psychology, somatic expertise, and community care to
              make sure you never walk alone. Filter by specialities, lived
              experience, or approach to find your perfect fit.
            </p>
          </motion.div>

          <div
            ref={sectionRef}
            className="lg:col-span-8 lg:pl-6 xl:pl-12"
          >
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {therapists.map((therapist) => (
                <div
                  key={therapist.name}
                  className="therapist-card"
                >
                  <TherapistCard {...therapist} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
