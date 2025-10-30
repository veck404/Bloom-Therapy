"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="container">
        <div className="flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/70 px-6 py-4 shadow-soft backdrop-blur-lg saturate-[1.2] supports-[backdrop-filter]:bg-white/65">
          <Link href="#hero" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bloom-orchid/10 text-lg font-semibold text-bloom-orchid">
              B
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg text-bloom-plum">Bloom</span>
              <span className="text-xs uppercase tracking-[0.35em] text-bloom-lavender">
                Clinic
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-bloom-dusk transition hover:text-bloom-plum"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#therapists"
              className="rounded-full border border-bloom-lavender/30 px-5 py-2 text-sm font-medium text-bloom-plum transition hover:border-bloom-orchid/50 hover:text-bloom-orchid"
            >
              Meet our team
            </Link>
            <Link
              href="#book"
              className="rounded-full bg-bloom-plum px-5 py-2 text-sm font-semibold text-white transition hover:bg-bloom-orchid"
            >
              Book a session
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bloom-lavender/40 text-bloom-plum lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <motion.span
              animate={open ? "open" : "closed"}
              className="relative h-5 w-5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: -6 },
                  open: { rotate: 45, y: 0 },
                }}
                className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-bloom-plum"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1, y: 0 },
                  open: { opacity: 0, y: 6 },
                }}
                className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-bloom-plum"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 6 },
                  open: { rotate: -45, y: 0 },
                }}
                className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-bloom-plum"
              />
            </motion.span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 overflow-hidden rounded-3xl border border-white/20 bg-white/80 px-6 py-6 shadow-soft lg:hidden"
            >
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-bloom-plum"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="#therapists"
                  className={cn(
                    "w-full rounded-full border border-bloom-lavender/30 px-5 py-3 text-center text-sm font-semibold text-bloom-plum transition",
                    "hover:border-bloom-orchid/50 hover:text-bloom-orchid",
                  )}
                  onClick={() => setOpen(false)}
                >
                  Meet our team
                </Link>
                <Link
                  href="#book"
                  className="w-full rounded-full bg-bloom-plum px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-bloom-orchid"
                  onClick={() => setOpen(false)}
                >
                  Book a session
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
