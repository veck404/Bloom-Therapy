"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  type ParallaxOptions,
  type ValueConfig,
  useParallax,
} from "@/lib/hooks/use-parallax";

type ParallaxBlobProps = {
  className?: string;
  from?: number | ValueConfig;
  to?: number | ValueConfig;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  ease?: ParallaxOptions["ease"];
};

export function ParallaxBlob({
  className,
  from,
  to,
  start,
  end,
  scrub,
  ease,
}: ParallaxBlobProps) {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useParallax(blobRef, {
    from,
    to,
    start,
    end,
    scrub,
    ease,
  });

  return <div ref={blobRef} className={cn("pointer-events-none", className)} aria-hidden />;
}
