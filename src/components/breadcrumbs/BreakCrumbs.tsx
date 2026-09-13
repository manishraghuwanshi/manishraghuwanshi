import { Link, useLocation } from "react-router-dom";

const routeNames: Record<string, string> = {
  projects: "Projects",
  experience: "Experience",
  education: "Education",
  contact: "Contact",
};

const Breadcrumbs = () => {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);

  // Don't show breadcrumbs on the Home page
  if (segments.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-300 px-5 pt-6 sm:px-6 lg:px-8"
    >
      <ol className="flex items-center gap-2 text-sm">
        {/* Home */}
        <li>
          <Link to="/" className="transition-colors hover:text-[#1e3e62]">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const path = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;

          const label =
            routeNames[segment] ??
            segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={path} className="flex items-center gap-2">
              <span aria-hidden="true">›</span>

              {isLast ? (
                <span aria-current="page" className="font-medium">
                  {label}
                </span>
              ) : (
                <Link
                  to={path}
                  className="transition-colors hover:text-[#1e3e62]"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
