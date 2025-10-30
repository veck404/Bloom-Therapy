"use client";

import { type MutableRefObject, useEffect, useMemo } from "react";
import gsap from "gsap";

export type ValueConfig = {
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
};

export type EaseOption = string | ((value: number) => number);

export type ParallaxOptions = {
  from?: number | ValueConfig;
  to?: number | ValueConfig;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  ease?: EaseOption;
};

const ensureObject = (value: number | ValueConfig | undefined, fallback: ValueConfig) => {
  if (typeof value === "number") {
    return { y: value };
  }
  if (value && Object.keys(value).length > 0) {
    return value;
  }
  return fallback;
};

export function useParallax(
  ref: MutableRefObject<HTMLElement | null>,
  options?: ParallaxOptions,
) {
  const {
    from = { y: 0 },
    to = { y: -80 },
    start = "top bottom",
    end = "bottom top",
    scrub = true,
    ease = "none",
  } = options ?? {};

  const fromTarget = useMemo(() => ensureObject(from, { y: 0 }), [from]);
  const toTarget = useMemo(() => ensureObject(to, { y: -80 }), [to]);
  const signature = useMemo(() => JSON.stringify({ from: fromTarget, to: toTarget }), [fromTarget, toTarget]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tween = gsap.fromTo(
      element,
      fromTarget,
      {
        ...toTarget,
        ease,
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
  }, [ref, start, end, scrub, ease, signature, fromTarget, toTarget]);
}
