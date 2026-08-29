import type { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface PageTransitionProps extends PropsWithChildren {
  className?: string;
} 

/**
 * Route-aware entrance transition.
 * Resets the page scroll position whenever the route changes
 * and replays the entrance animation.
 */
export default function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return (
    <div
      key={location.pathname}
      className={`page-transition ${className}`.trim()}
      data-route={location.pathname}
    >
      <div className="page-transition__sheen" aria-hidden="true" />
      {children}
    </div>
  );
}