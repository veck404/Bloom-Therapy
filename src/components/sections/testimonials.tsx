"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { testimonials } from "@/lib/data";
import { fadeInUp } from "@/animations/variants";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
            delay: index * 0.12,
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-bloom-blush/80 py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,74,63,0.15),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(112,58,132,0.2),transparent_40%)]" />
      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-bloom-orchid">
              Testimonials
            </p>
            <h2
              id="testimonials-title"
              className="mt-4 max-w-2xl font-display text-display-2 text-bloom-plum"
            >
              Stories of healing from our community.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="max-w-md text-base leading-7 text-bloom-dusk/90"
          >
            “Bloom felt like the first space designed to celebrate my pace.”
            — Every testimonial is verified and gathered with consent from our
            clients.
          </motion.p>
        </motion.div>

        <div
          ref={containerRef}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.name}
              className="testimonial-card flex h-full flex-col justify-between rounded-3xl border border-white/50 bg-white/90 p-8 text-bloom-plum shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80"
              initial={{ opacity: 0, y: 60 }}
            >
              <p className="text-lg leading-8 text-bloom-dusk">
                “{testimonial.quote}”
              </p>
              <footer className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-bloom-orchid">
                {testimonial.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
