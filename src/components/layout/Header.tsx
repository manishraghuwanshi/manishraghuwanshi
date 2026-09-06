import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import horizontalLogo from "../../assets/logos/horizontal_logo.png";
import mobileLogo from "../../assets/logos/mobile_logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Education", path: "/education" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(!isHomePage || window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full",
        "border-b",
        "transition-all duration-500 ease-out",
        isScrolled
          ? "border-[#1E3E62]/50 bg-[#000000]/95 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none",
      ].join(" ")}
    >
      {/* Subtle top accent */}
      <div
        className={[
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          "bg-linear-to-r from-transparent via-[#1E3E62]/70 to-transparent",
          "transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-60",
        ].join(" ")}
      />

      <nav
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
        aria-label="Main navigation"
      >
        {/* =====================================================
            Logo
           ===================================================== */}

        <Link
          to="/"
          onClick={closeMenu}
          className="
            group
            relative
            flex
            shrink-0
            items-center
            rounded-xl
            outline-none
            transition-all
            duration-300
            hover:-translate-y-0.5
            focus-visible:ring-2
            focus-visible:ring-[#1E3E62]/70
            focus-visible:ring-offset-2
            focus-visible:ring-offset-black
          "
          aria-label="Manish Raghuwanshi - Home"
        >
          {/* Desktop logo */}
          <div className="relative hidden sm:block">
            <img
              src={horizontalLogo}
              alt="Manish Raghuwanshi"
              className="
                relative
                z-10
                h-25
                w-auto
                object-contain
                transition-all
                duration-500
                group-hover:brightness-110
              "
            />

            {/* Logo glow */}
            <span
              className="
                pointer-events-none
                absolute
                inset-1
                -z-0
                rounded-xl
                bg-[#1E3E62]/20
                opacity-0
                blur-xl
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Logo shine */}
            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-[120%]
                z-20
                w-1/3
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                transition-all
                duration-700
                group-hover:left-[140%]
              "
            />
          </div>

          {/* Mobile logo */}
          <div className="relative block sm:hidden">
            <img
              src={mobileLogo}
              alt="Manish Raghuwanshi"
              className="
                relative
                z-10
                h-20
                w-10
                object-contain
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:brightness-110
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                bg-[#1E3E62]/25
                opacity-0
                blur-lg
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />
          </div>
        </Link>

        {/* =====================================================
            Desktop Navigation
           ===================================================== */}

        <div className="relative hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  `
                  
                  px-4 py-2.5
                  text-sm font-semibold
                  outline-none
                  transition-all duration-300
                `,
                  isActive
                    ? "font-bold text-white"
                    : `
                      text-[#a1a1aa]
                      hover:-translate-y-0.5
                      hover:text-white
                    `,
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <span className="relative inline-flex flex-col items-center">
                  <span className="leading-none">{item.label}</span>

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-0
                        right-0
                        -bottom-2
                        h-0.5
                        rounded-full
                        bg-[#1E3E62]
                        shadow-[0_0_10px_rgba(30,62,98,0.65)]
                      "
                    >
                      <span
                        className="
                          absolute inset-0
                          rounded-full
                          bg-[#1E3E62]
                          blur-[3px]
                          opacity-60
                        "
                      />
                    </span>
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* =====================================================
            Mobile Menu Button
           ===================================================== */}

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="
            group
            relative
            inline-flex
            h-10
            w-10
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            border
            border-[#1E3E62]/50
            bg-[#0B192C]
            text-white
            transition-all
            duration-300
            hover:border-[#1E3E62]
            hover:bg-[#1E3E62]/20
            hover:shadow-[0_0_20px_rgba(30,62,98,0.20)]
            focus:outline-none
            focus:ring-2
            focus:ring-[#1E3E62]/60
            md:hidden
          "
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/5
              via-transparent
              to-[#1E3E62]/10
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="relative z-10 h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="relative z-10 h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* =======================================================
          Mobile Navigation
         ======================================================= */}

      <div
        className={[
          "grid overflow-hidden md:hidden",
          "border-t border-[#1E3E62]/30",
          "bg-[#000000]",
          "transition-[grid-template-rows,opacity] duration-300 ease-out",
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      `
                        group relative overflow-hidden
                        rounded-xl px-4 py-3
                        text-sm font-semibold
                        transition-all duration-300
                      `,
                      isActive
                        ? `
                          translate-x-1
                          bg-[#1E3E62]/20
                          text-white
                          shadow-[inset_3px_0_0_#1E3E62]
                        `
                        : `
                          text-[#a1a1aa]
                          hover:translate-x-1
                          hover:bg-[#0B192C]
                          hover:text-white
                        `,
                    ].join(" ")
                  }
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 35}ms` : "0ms",
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>

                      {/* Mobile hover sweep */}
                      <span
                        className={[
                          "absolute inset-y-0 left-0 w-0",
                          "bg-[#1E3E62]/10",
                          "transition-all duration-300",
                          !isActive ? "group-hover:w-full" : "",
                        ].join(" ")}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          Header Animation
         ======================================================= */}

      <style>{`
        @keyframes navbarIndicator {
          0% {
            transform: translateX(-50%) scaleX(0.45);
            opacity: 0;
          }

          35% {
            transform: translateX(-50%) scaleX(1.35);
            opacity: 1;
          }

          65% {
            transform: translateX(-50%) scaleX(1.05);
            opacity: 1;
          }

          82% {
            transform: translateX(-50%) scaleX(1.12);
          }

          100% {
            transform: translateX(-50%) scaleX(1);
            opacity: 1;
          }
        }

        .animate-navbar-indicator {
          animation:
            navbarIndicator
            650ms
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-navbar-indicator {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
