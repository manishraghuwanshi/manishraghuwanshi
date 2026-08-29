import { Navigate, Link, useLocation } from "react-router-dom";

export default function ContactSuccess() {
  const location = useLocation();

  if (!location.state?.submitted) {
    return <Navigate to="/*" replace />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#000000] px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#1E3E62]/40
            bg-[#0B192C]
            p-8
            text-center
            shadow-2xl
            sm:p-12
          "
        >
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-48
              w-48
              rounded-full
              bg-[#1E3E62]/20
              blur-3xl
            "
          />

          {/* Success icon */}
          <div
            className="
              relative
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#1E3E62]
              bg-[#000000]/40
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 text-[#A8C7DF]"
              aria-hidden="true"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Eyebrow */}
          <p
            className="
              mt-8
              bg-[linear-gradient(110deg,var(--color-primary)_30%,#4F7FA8_45%,var(--color-shimmer)_50%,#4F7FA8_55%,var(--color-primary)_70%)]
              bg-size-[300%_100%]
              bg-clip-text
              text-sm
              font-semibold
              text-transparent
              animate-shimmer
            "
          >
            Message received
          </p>

          {/* Heading */}
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Thanks for reaching out!
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#a1a1aa]">
            Your message has been sent successfully. I appreciate you taking the
            time to get in touch and I'll get back to you as soon as I can.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#1E3E62]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                hover:bg-[#284F78]
                focus:outline-none
                focus:ring-2
                focus:ring-[#1E3E62]/60
                focus:ring-offset-2
                focus:ring-offset-[#0B192C]
                sm:w-auto
              "
            >
              Back to Portfolio
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-[#1E3E62]/60
                bg-[#000000]/40
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#A8C7DF]
                transition-all
                hover:border-[#1E3E62]
                hover:bg-[#1E3E62]/20
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-[#1E3E62]/60
                focus:ring-offset-2
                focus:ring-offset-[#0B192C]
                sm:w-auto
              "
            >
              Send Another Message
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
