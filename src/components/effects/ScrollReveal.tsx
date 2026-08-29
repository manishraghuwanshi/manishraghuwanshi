import {
  type CSSProperties,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

interface ScrollRevealProps extends PropsWithChildren {
  className?: string;
  /** How far the element starts below its final position. */
  offset?: number;
  /** Optional delay before the reveal animation begins. */
  delay?: number;
  /** Animation duration in milliseconds. */
  duration?: number;
  /** Reveal only once, or reset when it leaves the viewport. */
  once?: boolean;
  /** Reveal direction. */
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Small intersection-observer wrapper for section/card reveal animations.
 * It avoids scroll listeners and respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className = "",
  offset = 28,
  delay = 0,
  duration = 700,
  once = true,
  direction = "up",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal--${direction} ${
        visible ? "is-visible" : ""
      } ${className}`.trim()}
      style={
        {
          "--reveal-offset": `${offset}px`,
          "--reveal-delay": `${delay}ms`,
          "--reveal-duration": `${duration}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
