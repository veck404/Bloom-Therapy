"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-bloom-plum text-white">
      <div className="container py-20">
        <motion.div
          className="grid gap-12 lg:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="lg:col-span-6"
            variants={fadeInUp}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-white/70">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-lg font-display text-display-2">
              Begin your Bloom journey with a complimentary consultation.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/80">
              Share a few notes and we&apos;ll match you with the therapist who
              fits your goals, timezone, and personality.
            </p>
            <div id="book" className="mt-8 flex flex-wrap gap-4">
              <Link
                href="mailto:hello@bloomclinic.com"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-bloom-plum transition hover:bg-bloom-blush"
              >
                hello@bloomclinic.xyz
              </Link>
              <Link
                href="tel:+2347066733522"
                className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                (+234) 7066733522
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-10 text-sm text-white/70 lg:col-span-6 lg:grid-cols-2"
            variants={fadeInUp}
          >
            <div>
              <p className="font-semibold text-white">Studios</p>
              <ul className="mt-3 space-y-2">
                <li>Chicago · River North</li>
                <li>Seattle · Capitol Hill</li>
                <li>Remote across 18 states</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Hours</p>
              <ul className="mt-3 space-y-2">
                <li>Mon–Fri · 8am–8pm</li>
                <li>Sat · 9am–3pm</li>
                <li>Sun · Closed · Community circles monthly</li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <p className="font-semibold text-white">Follow</p>
              <div className="mt-3 flex gap-3">
                <Link
                  href="https://www.instagram.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white"
                >
                  IG
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white"
                >
                  IN
                </Link>
                <Link
                  href="https://www.youtube.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white"
                >
                  YT
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 text-sm text-white/50 lg:flex-row">
          <p>© {new Date().getFullYear()} Bloom Mental Health Clinic.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Client Portal</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
