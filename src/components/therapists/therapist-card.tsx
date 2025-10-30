"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hoverCard } from "@/animations/variants";
import Link from "next/link";

type TherapistCardProps = {
  name: string;
  experience: string;
  focus: string;
  portrait: string;
};

export function TherapistCard({
  name,
  experience,
  focus,
  portrait,
}: TherapistCardProps) {
  return (
    <motion.article
      variants={hoverCard}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/70"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={portrait}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bloom-plum/35 via-transparent to-transparent mix-blend-multiply opacity-60 group-hover:opacity-40" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-bloom-plum">{name}</h3>
          <p className="mt-1 text-sm text-bloom-lavender">{experience}</p>
        </div>
        <p className="text-sm leading-6 text-bloom-dusk">{focus}</p>
        <div className="mt-auto">
          <Link
            href="#book"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bloom-orchid transition hover:text-bloom-plum"
          >
            Book consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
