import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

export const staggerParent = (stagger = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const hoverCard: Variants = {
  rest: { y: 0, scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 20px 45px rgba(76, 31, 57, 0.12)",
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};
