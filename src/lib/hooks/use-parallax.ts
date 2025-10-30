"use client";

import { type MutableRefObject, useEffect } from "react";
import gsap from "gsap";

type ParallaxOptions = {
  from?: number;
  to?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
};

export function useParallax(
  ref: MutableRefObject<HTMLElement | null>,
  options?: ParallaxOptions,
) {
  const {
    from = 0,
    to = -80,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
  } = options ?? {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tween = gsap.fromTo(
      element,
      { y: from },
      {
        y: to,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, from, to, start, end, scrub]);
}
