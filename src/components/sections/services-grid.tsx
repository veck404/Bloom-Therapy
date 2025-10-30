"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { services } from "@/lib/data";
import { hoverCard, staggerParent } from "@/animations/variants";
import { useParallax } from "@/lib/hooks/use-parallax";
import { ParallaxBlob } from "@/components/ui/parallax-blob";

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".service-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  useParallax(parallaxRef, {
    from: 60,
    to: -100,
    start: "top bottom",
    end: "bottom top",
  });

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-bloom-sand/50 py-24"
      aria-labelledby="services-title"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bloom-sage/50 to-transparent" />
      <ParallaxBlob
        className="absolute left-[-160px] top-20 hidden h-[320px] w-[320px] rounded-full bg-bloom-lavender/25 blur-3xl md:block"
        from={{ y: -60 }}
        to={{ y: 120 }}
        start="top bottom"
      />
      <ParallaxBlob
        className="absolute right-[-140px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-bloom-terracotta/20 blur-3xl"
        from={{ y: 100 }}
        to={{ y: -160 }}
      />
      <div className="container">
        <motion.div
          className="grid gap-10 lg:grid-cols-12"
          variants={staggerParent(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="lg:col-span-4">
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.38em] text-bloom-orchid"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              Services
            </motion.p>
            <motion.h2
              id="services-title"
              className="mt-4 max-w-sm font-display text-display-2 text-bloom-plum"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              Tailored therapeutic journeys for every season of growth.
            </motion.h2>
            <motion.p
              className="mt-4 text-base leading-7 text-bloom-dusk"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              Choose a starting point or let us co-create a care plan that mixes
              talk therapy, somatic practices, and mindful rituals curated to
              your nervous system.
            </motion.p>
          </div>

          <div className="lg:col-span-8" ref={parallaxRef}>
            <div ref={containerRef}>
              <div className="grid gap-6 sm:grid-cols-2">
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    className="service-card group relative h-full rounded-3xl border border-white/40 bg-white/80 p-8 shadow-soft backdrop-blur transition supports-[backdrop-filter]:bg-white/70"
                  variants={hoverCard}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-bloom-orchid/15 text-2xl"
                    layout
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-bloom-plum">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-bloom-dusk">
                    {service.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bloom-orchid">
                    Discover more
                    <span aria-hidden className="text-base">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
