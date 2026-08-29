import { useEffect, useRef } from "react";

interface BackgroundEffectProps {
  /** Controls the visual density. */
  intensity?: "subtle" | "normal" | "strong";
  /** Adds an optional mouse-following glow. */
  interactive?: boolean;
  /** Prevents the effect from rendering on smaller screens when desired. */
  disableOnMobile?: boolean;
  className?: string;
}

/**
 * Full-page decorative background for the portfolio.
 *
 * It intentionally contains no content and is hidden from assistive technology.
 * The visual is built from lightweight CSS layers + one mouse-following radial glow.
 */
export default function BackgroundEffect({
  intensity = "normal",
  interactive = true,
  disableOnMobile = false,
  className = "",
}: BackgroundEffectProps) {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!interactive) return;

    const media = window.matchMedia("(pointer: fine)");
    const glow = glowRef.current;
    if (!media.matches || !glow) return;

    let frame = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.28;

    const render = () => {
      frame = 0;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frame) frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [interactive]);

  return (
    <div
      className={`site-background site-background--${intensity} ${
        disableOnMobile ? "site-background--disable-mobile" : ""
      } ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="site-background__wash" />
      <div className="site-background__grid" />
      <div className="site-background__glow site-background__glow--one" />
      <div className="site-background__glow site-background__glow--two" />
      <div ref={glowRef} className="site-background__cursor-glow" />
      <div className="site-background__noise" />
      <div className="site-background__vignette" />
    </div>
  );
}
