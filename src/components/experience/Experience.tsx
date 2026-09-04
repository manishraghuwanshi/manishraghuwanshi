import {
  FaArrowRight,
  FaBriefcase,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import ExperienceSection from "./ExperienceSection";
import ExperienceTech from "./ExperienceTech";
import { FiExternalLink } from "react-icons/fi";
import {experienceItems, experienceTechnologies } from "../../data/experience";


export default function Experience() {
  return (
    <div className="w-full">
      <section className="mx-auto w-full max-w-(--container-width) px-4 py-12 sm:px-6 lg:px-8">
        {/* =====================================================
            Hero
        ====================================================== */}

        <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
          <FaBriefcase className="text-xl text-blue-400" />

          <span className="py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Experience
          </span>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My professional journey
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            My professional journey began as a Junior Web Developer, with
            hands-on exposure to React.js, React Native, WordPress, PHP and SEO.
            Over time, React.js became the primary focus of my project work.
          </p>
        </div>

        {/* =====================================================
            Main Experience
        ====================================================== */}
        <section
          aria-labelledby="professional-experience-heading"
          className="mt-16"
        >
          <div className="overflow-hidden rounded-2xl border border-[#1e3e62] bg-[#0b192c]/70">
            <div className="border-b border-white/10 p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#1e3e62] bg-[#1e3e62]/20">
                    <FaBriefcase
                      aria-hidden="true"
                      className="text-[#a8c7df]"
                    />
                  </div>

                  <p className="mb-2 text-sm font-medium text-zinc-500">
                    Professional Experience
                  </p>

                  <h2
                    id="professional-experience-heading"
                    className="font-display text-2xl font-bold text-white sm:text-3xl"
                  >
                    Junior Web Developer
                  </h2>
                  <div>
                    <a
                      href="https://smartinfosys.net/"
                      target="_blank"
                      className="flex  items-center gap-2.5 py-2"
                    >
                      <FiExternalLink />

                      <p className=" text-base font-semibold text-[#a8c7df]">
                        SmartInfosys / WebConnect Private Limited
                      </p>
                    </a>
                  </div>
                </div>

                <div className="shrink-0 sm:text-right">
                  <p className="text-sm font-semibold text-white">
                    May 2023 — September 2024
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Full-time employment
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-0 sm:grid-cols-3">
              <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Primary Focus
                </p>

                <p className="mt-2 font-display text-lg font-bold text-white">
                  React.js
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Majority of professional project work
                </p>
              </div>

              <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Mobile
                </p>

                <p className="mt-2 font-display text-lg font-bold text-white">
                  React Native
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Android Studio & Xcode
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Additional
                </p>

                <p className="mt-2 font-display text-lg font-bold text-white">
                  WordPress, PHP & SEO
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Project and support responsibilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            Career Timeline
        ====================================================== */}
        <div className="mt-24">
          <ExperienceSection items={experienceItems} />
        </div>

        {/* =====================================================
            Projects CTA
        ====================================================== */}
        <section
          aria-labelledby="projects-experience-heading"
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#1e3e62] bg-[#0b192c]/70 p-6 sm:p-8">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#1e3e62]/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a8c7df]">
                  Projects
                </p>

                <h2
                  id="projects-experience-heading"
                  className="font-display text-2xl font-bold text-white sm:text-3xl"
                >
                  See the projects separately
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                  Explore the projects I have worked on, including personal and
                  professional work, on the dedicated Projects page.
                </p>
              </div>

              <Link
                to="/projects"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#1e3e62] bg-[#1e3e62] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b192c]"
              >
                View Projects
                <FaArrowRight
                  aria-hidden="true"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            Technology Exposure
        ====================================================== */}
        <div className="mt-24">
          <ExperienceTech technologies={experienceTechnologies} />
        </div>

        {/* =====================================================
            Closing statement
        ====================================================== */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-display text-lg font-bold text-white">
                Built through practical experience
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-500">
                My experience gave me exposure to different areas of web and
                mobile development while helping me identify frontend
                development, particularly React.js, as my primary direction.
              </p>
            </div>

            {/* <FaArrowUpRightFromSquare
              aria-hidden="true"
              className="shrink-0 text-zinc-600"
            /> */}
            <a href="#" className="contents" aria-label="Open website">
              <FaArrowUpRightFromSquare
                aria-hidden="true"
                className="shrink-0 text-zinc-600"
              />
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
