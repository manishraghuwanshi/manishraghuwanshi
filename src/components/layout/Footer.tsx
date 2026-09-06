import { Link } from "react-router-dom";
import { socialLinks, footerLinks } from "../../data/socialLinks";

import horizontalLogo from "../../assets/logos/horizontal_logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#1E3E62]/30 bg-[#000000]">
      {/* =========================================================
          Background glow
         ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-64 w-[32rem]
          -translate-x-1/2
          rounded-full
          bg-[#1E3E62]/10
          blur-[100px]
        "
      />

      {/* =========================================================
          Animated top accent
         ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-0
          h-px w-32
          -translate-x-1/2
          bg-[#1E3E62]
          shadow-[0_0_18px_rgba(30,62,98,0.8)]
          footer-accent
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =======================================================
            Main Footer
           ======================================================= */}

        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
          {/* =====================================================
              Brand
             ===================================================== */}

          <div className="footer-reveal">
            <Link
              to="/"
              className="
                group inline-flex
                rounded-xl
                outline-none
                transition-transform duration-300
                hover:-translate-y-0.5
                focus-visible:ring-2
                focus-visible:ring-[#1E3E62]/60
              "
            >
              <div className="relative">
                <img
                  src={horizontalLogo}
                  alt="Manish Raghuwanshi"
                  className="
                    h-25 w-auto
                    object-contain
                    transition-all duration-500
                    group-hover:brightness-110
                  "
                />

                {/* Logo glow */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    inset-1
                    rounded-xl
                    bg-[#1E3E62]/20
                    opacity-0
                    blur-xl
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#a1a1aa]">
              Building clean, responsive, and engaging digital experiences with
              modern frontend technologies.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={
                    social.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  className="
                    group relative
                    flex h-10 w-10
                    items-center justify-center
                    overflow-hidden
                    rounded-xl
                    border border-[#1E3E62]/40
                    bg-[#0B192C]/70
                    text-[#a1a1aa]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#1E3E62]
                    hover:bg-[#1E3E62]/20
                    hover:text-white
                    hover:shadow-[0_8px_25px_rgba(30,62,98,0.20)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#1E3E62]/60
                  "
                >
                  {/* Hover sweep */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-0
                      translate-y-full
                      rounded-xl
                      bg-[#1E3E62]/15
                      transition-transform duration-300
                      group-hover:translate-y-0
                    "
                  />

                  <span className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110">
                    <social.icon aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              Navigation
             ===================================================== */}

          <div className="footer-reveal footer-delay-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col items-start gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="
                    group relative
                    text-sm text-[#a1a1aa]
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  <span>{item.label}</span>

                  {/* Tiny animated arrow */}
                  <span
                    className="
                      ml-1 inline-block
                      -translate-x-2
                      opacity-0
                      text-[#1E3E62]
                      transition-all duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================================
              Availability / Contact
             ===================================================== */}

          <div className="footer-reveal footer-delay-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Let's Connect
            </h3>

            <p className="mt-6 text-sm leading-7 text-[#a1a1aa]">
              Have a project, opportunity, or just want to say hello?
            </p>

            <Link
              to="/contact"
              className="
                group mt-6 inline-flex
                items-center gap-2
                rounded-xl
                border border-[#1E3E62]/60
                bg-[#0B192C]
                px-5 py-3
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#1E3E62]
                hover:bg-[#1E3E62]/20
                hover:shadow-[0_10px_30px_rgba(30,62,98,0.20)]
              "
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Get in touch
              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =======================================================
            Divider
           ======================================================= */}

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#1E3E62]/30 to-transparent" />

        {/* =======================================================
            Bottom Bar
           ======================================================= */}

        <div
          className="
            flex flex-col
            gap-4
            py-6
            text-xs
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[#71717a]">
            © {currentYear}{" "}
            <span className="text-[#a1a1aa]">Manish Raghuwanshi</span>. All
            rights reserved.
          </p>

          <p className="flex items-center gap-2 text-[#71717a]">
            Built with
            <a
              href="https://react/dev/learn"
              target="_blank"
              className="text-[#fefeff]"
            >
              React
            </a>
            <span className="text-[#fefeff]">•</span>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="text-[#a1a1aa]"
            >
              TypeScript
            </a>
          </p>
        </div>
      </div>

      {/* =========================================================
          Footer Animation
         ========================================================= */}

      <style>{`
        @keyframes footerAccent {
          0% {
            width: 32px;
            opacity: 0.3;
          }

          50% {
            width: 128px;
            opacity: 1;
          }

          100% {
            width: 64px;
            opacity: 0.55;
          }
        }

        .footer-accent {
          animation:
            footerAccent
            4s
            cubic-bezier(0.45, 0, 0.55, 1)
            infinite;
        }

        @keyframes footerReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-reveal {
          animation:
            footerReveal
            700ms
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }

        .footer-delay-1 {
          animation-delay: 100ms;
        }

        .footer-delay-2 {
          animation-delay: 180ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-accent,
          .footer-reveal {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}
