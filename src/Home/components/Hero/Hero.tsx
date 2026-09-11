import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";

import { heroImage, heroMobileImage, RESUME_PATH } from "../../../data/home.data";

function Hero() {
  const scrollToWebsites = () => {
    document.getElementById("websites")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-svh overflow-hidden">
      <picture className="absolute inset-0">
        <source media="(max-width: 839px)" srcSet={heroMobileImage} />

        <img
          src={heroImage}
          alt="manish raghuwanshi"
          aria-hidden="true"
          className="h-full w-full object-center "
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-300 items-center px-5 py-32 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1e3e62] bg-[#0b192c]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#a8c7df] text-white" />
            Available for opportunities
          </span>

          <p className="mb-3 text-lg text-white/60">Hi, I'm</p>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            MANISH
            <br />
            <span className="text-[#a8c7df]">RAGHUWANSHI</span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-white sm:text-2xl">
            Frontend Developer (React/Next.js)
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            I build modern, responsive and user-focused web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={scrollToWebsites}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
            >
              Explore Websites
              <FiArrowDown />
            </button>

            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/40 px-5 py-3 text-sm font-bold text-white transition hover:border-[#1e3e62]"
            >
              Resume
              <FiDownload />
            </a>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/40 px-5 py-3 text-sm font-bold text-white transition hover:border-[#1e3e62]"
            >
              View Resume
              <FiArrowUpRight />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-m text-white">
            <span>Next.js</span>
            <span>React</span>
            <span>Typescript</span>
            <span>React Native</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/40">
        Scroll
      </div>
    </section>
  );
}

export default Hero;
